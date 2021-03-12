import React, { useState, useEffect } from 'react';
import upgrades from './upgrades.json';

function App() {
  const [ready, setReady] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [loadingData, setLoadingData] = useState(false);
  const [blackHoles, setBlackHoles] = useState(0);
  const [runners, setRunners] = useState(0);
  const [dogs, setDogs] = useState(0);
  const [seeds, setSeeds] = useState(0);
  const [wetzels, setWetzels] = useState(0);
  const [slushies, setSlushies] = useState(0);
  const [pickles, setPickles] = useState(0);
  const [cash, setCash] = useState(0);
  const [players, setPlayers] = useState({});
  const [data, setData] = useState({});
  const [output, setOutput] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  const upgradeMap = {
    'dogs': 'idolHomersTiers',
    'seeds': 'idolHitsTiers',
    'pickles': 'idolStealTiers',
    'wetzels': 'blackHoleTiers',
    'slushies': 'floodClearTiers',
    'popcorn': 'teamWinCoinTiers',
    'stalecorn': 'teamLossCoinTiers',
    'snoil': 'maxBetTiers',
    'chips': 'idolStrikeoutsTiers',
    'burgers': 'idolShutoutsTiers',
  };

  const loadData = async () => {
    setReady(false);
    setLoadingData(true);
    setLoadingText("Loading, this'll take a bit");

    const bhResp = await fetch("https://cors-proxy.blaseball-reference.com/database/feed/global?type=157");
    const bhJson = await bhResp.json();
    const thisSeason = Math.max.apply(0, bhJson.map(x => x.season));
    setBlackHoles(bhJson.filter(x => x.season === thisSeason).length)

    const playerResp = await fetch('https://api.blaseball-reference.com/v2/players?season=current');
    const playerJson = await playerResp.json()
    const playerMap = playerJson.reduce((map, player) => map[player.player_id] = player);
    setPlayers(playerMap);

    const dataResp = await fetch('https://api.blaseball-reference.com/v2/stats?type=season&group=hitting&fields=hits,home_runs,stolen_bases&season=current');
    const dataJson = await dataResp.json()
    setData(dataJson);

    setReady(true);
    setLoadingData(false);
    setLoadingText("");
  };

  const getTiers = itemName => upgrades[upgradeMap[itemName]];
  const getPayout = (itemName, owned) => !owned ? 0 : getTiers(itemName)[owned - 1].amount;
  const getCost = (itemName, owned) => getTiers(itemName)[owned].price;
  const upgradesLeft = (itemName, owned) => getTiers(itemName).length - owned;
  const payoutModifier = player => {
    const mods = player.modifications || [];
    if ('CREDIT_TO_THE_TEAM' in mods)
      return 5;
    if ('DOUBLE_PAYOUTS' in mods)
      return 2;
    return 1;
  };
  const calculatePayouts = (stats, player, seeds, dogs, pickles) => {
    const hitPayout = getPayout('seeds', seeds);
    const hrPayout = getPayout('dogs', dogs);
    const sbPayout = getPayout('pickles', pickles);
    const modifier = payoutModifier(player);
    const payout = {
      'hits': modifier * hitPayout * stats.hits,
      'home_runs': modifier * hrPayout * stats.home_runs,
      'stolen_bases': modifier * sbPayout * stats.stolen_bases,
    };
    payout.total = Object.values(payout).reduce((a, b) => a + b, 0);
    return payout;
  };
  const mksnax = (snaxfolio, maximum) => {
    let snaxfolioCopy = snaxfolio ? { ...snaxfolio } : {};
    for (const [itemName, tierName] of Object.entries(upgradeMap)) {
      if (!(itemName in snaxfolioCopy)) {
        snaxfolioCopy[itemName] = maximum ? upgrades[tierName].length : 0;
      }
    }
    return snaxfolioCopy
  }
  const getLucrativeBatters = snaxfolio => {
    snaxfolio = mksnax(snaxfolio, true);
    const batters = [];
    data[0].splits.forEach(split => {
      const stats = split.stat;
      const player = players[split.player.id] || {};
      const payout = calculatePayouts(stats, player, snaxfolio.seeds, snaxfolio.dogs, snaxfolio.pickles);
      batters.push([payout, split, player]);
    });
    batters.sort((a, b) => b[0].total - a[0].total);
    return batters;
  };
  const lucrativeBatters = snaxfolio => {
    snaxfolio = mksnax(snaxfolio, true);
    const batters = getLucrativeBatters(snaxfolio);
    setOutput(batters.splice(0, 10).map(batter => `${batter[0].total} (${batter[1].stat.hits}H, ${batter[1].stat.home_runs}HR, ${batter[1].stat.stolen_bases}SB) ${batter[1].player.fullName}`));
  };
  const whatIf = (reference, snaxfolio, which) => {
    snaxfolio = mksnax(snaxfolio);
    if (upgradesLeft(which, snaxfolio[which]) <= 0) {
      return null;
    }
    const newSnaxfolio = { ...snaxfolio };
    newSnaxfolio[which] += 1;
    let currentValue, newValue, dx, idol;
    if (which === 'wetzels') {
      currentValue = blackHoles * getPayout('wetzels', snaxfolio[which]);
      newValue = blackHoles * getPayout('wetzels', newSnaxfolio[which]);
      dx = newValue - currentValue;
      idol = null;
    } else if (which === 'slushies') {
      currentValue = runners * getPayout('slushies', snaxfolio[which])
      newValue = runners * getPayout('slushies', newSnaxfolio[which])
      dx = newValue - currentValue;
      idol = null;
    } else {
      const best = getLucrativeBatters(newSnaxfolio)[0];
      dx = best[0].total - reference[0].total;
      idol = best[1].player.fullName;
    }
    const cost = getCost(which, snaxfolio[which]);
    const ratio = dx / cost;

    return {
      'which': which,
      'dx': dx,
      'cost': cost,
      'ratio': ratio,
      'snaxfolio': newSnaxfolio,
      'idol': idol,
    }
  };
  const calcUpgradeCosts = snaxfolio => {
    snaxfolio = mksnax(snaxfolio);
    const best = getLucrativeBatters(snaxfolio)[0];
    const choices = [
      whatIf(best, snaxfolio, 'pickles'),
      whatIf(best, snaxfolio, 'seeds'),
      whatIf(best, snaxfolio, 'dogs'),
      whatIf(best, snaxfolio, 'wetzels'),
      whatIf(best, snaxfolio, 'slushies'),
    ].filter(x => x !== null);
    choices.sort((a, b) => b.ratio - a.ratio);
    return choices;
  };
  const proposeUpgrade = snaxfolio => {
    snaxfolio = mksnax(snaxfolio);
    const choices = calcUpgradeCosts(snaxfolio);
    setOutput(choices.map(choice => `${choice.which}: cost ${choice.cost}; dx: ${choice.dx}; ratio: ${choice.ratio.toFixed(3)}`));
  };
  const proposeUpgrades = (cash, snaxfolio) => {
    snaxfolio = mksnax(snaxfolio);
    let idol = null;
    let i = 0;
    let spent = 0;
    const newOutput = [];
    while (true) {
      i += 1;
      const proposals = calcUpgradeCosts(snaxfolio);
      if (!proposals.length) {
        newOutput.push("--- No further upgrades available ---");
        break;
      }
      const proposal = proposals[0];
      spent += proposal.cost;
      if (spent > cash) {
        break;
      }
      if (proposal.idol !== null && idol !== proposal.idol) {
        newOutput.push(`--- Switch idol to ${proposal.idol}`);
        idol = proposal.idol;
      }
      snaxfolio = proposal.snaxfolio;
      newOutput.push(`${i}: Buy ${proposal.which} for ${proposal.cost} (dx: ${proposal.dx}; ratio: ${proposal.ratio.toFixed(3)})`);
    }
    setOutput(newOutput);
    return snaxfolio;
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => setShowInstructions(!showInstructions)}>{showInstructions ? "Hide" : "Show"} Instructions</button>
        {showInstructions && 
        <div>
          <ul>
          <li>Click Load Data.</li>
          <li>While you're waiting for it to finish loading, get the current Runners value from the linked SIBR sheet and fill it in.</li>
          <li>Then fill in your current inventory and either 
            <ul>
              <li>Fill in how much cash you want to spend on upgrades and click Propose Upgrades or </li>
              <li>Click Lucrative Batters for idol recommendations based on your current inventory.</li>
            </ul>
            </li>
          </ul>
        </div>}
      </div>
      <br />
      <div className="options">
      <div>
          <label>Swallowed Wins</label>
          <input type="number" value={blackHoles} onChange={event => setBlackHoles(parseInt(event.target.value))} />
        </div>
        <div>
          <label>Flooded Runners</label>
          <input type="number" value={runners} onChange={event => setRunners(parseInt(event.target.value))} />
          <a target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/15H7A6oug4vTKOtKRaDXQpxS9NzNyCbkYcOWiCt9gi5o/edit#gid=1036308084">Grab from Snack Income sheet</a>
        </div>
        <div>
          <label>Dogs</label>
          <input type="number" value={dogs} onChange={event => setDogs(parseInt(event.target.value))} />
        </div>
        <div>
          <label>Seeds</label>
          <input type="number" value={seeds} onChange={event => setSeeds(parseInt(event.target.value))} />
        </div>
        <div>
          <label>Wetzels</label>
          <input type="number" value={wetzels} onChange={event => setWetzels(parseInt(event.target.value))} />
        </div>
        <div>
          <label>Slushies</label>
          <input type="number" value={slushies} onChange={event => setSlushies(parseInt(event.target.value))} />
        </div>
        <div>
          <label>Pickles</label>
          <input type="number" value={pickles} onChange={event => setPickles(parseInt(event.target.value))} />
        </div>
        <div>
          <label>Cash</label>
          <input type="number" value={cash} onChange={event => setCash(parseInt(event.target.value))} />
        </div>
        <br />
        <button disabled={loadingData} onClick={loadData}>Load Data</button>
        <button disabled={!ready} onClick={() => proposeUpgrades(cash, {seeds, dogs, wetzels, slushies, pickles})}>Propose Upgrades</button>
        <button disabled={!ready} onClick={() => lucrativeBatters({seeds, dogs, wetzels, slushies, pickles})}>Lucrative Batters</button>
        <br />
        <div>{loadingText}</div>
      </div>
      <br />
      <br />
      <div className="output">
        {output.map(outputLine => <div>{outputLine}</div>)}
      </div>
      <div className="credits">
        Original version by @nago<br />Adapted to Javascript by @TransatlanticFoe
      </div>
    </div>
  );
}

export default App;
