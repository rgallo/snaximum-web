(this["webpackJsonpsnaximum-web"]=this["webpackJsonpsnaximum-web"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(7),a=n.n(i),o=(n(13),n(6)),u=n(4),p=n.n(u),m=n(8),s=n(2),l=n(5),b=n(0);var j=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),a=Object(s.a)(i,2),u=a[0],j=a[1],d=Object(r.useState)(!1),h=Object(s.a)(d,2),O=h[0],f=h[1],x=Object(r.useState)(0),v=Object(s.a)(x,2),g=v[0],S=v[1],T=Object(r.useState)(0),y=Object(s.a)(T,2),k=y[0],C=y[1],w=Object(r.useState)(0),I=Object(s.a)(w,2),_=I[0],H=I[1],B=Object(r.useState)(0),L=Object(s.a)(B,2),N=L[0],z=L[1],F=Object(r.useState)(0),D=Object(s.a)(F,2),E=D[0],P=D[1],R=Object(r.useState)(0),W=Object(s.a)(R,2),A=W[0],J=W[1],U=Object(r.useState)(0),M=Object(s.a)(U,2),K=M[0],Y=M[1],G=Object(r.useState)(0),Q=Object(s.a)(G,2),X=Q[0],q=Q[1],V=Object(r.useState)({}),Z=Object(s.a)(V,2),$=Z[0],ee=Z[1],te=Object(r.useState)({}),ne=Object(s.a)(te,2),re=ne[0],ce=ne[1],ie=Object(r.useState)([]),ae=Object(s.a)(ie,2),oe=ae[0],ue=ae[1],pe=Object(r.useState)(!1),me=Object(s.a)(pe,2),se=me[0],le=me[1],be={dogs:"idolHomersTiers",seeds:"idolHitsTiers",pickles:"idolStealTiers",wetzels:"blackHoleTiers",slushies:"floodClearTiers",popcorn:"teamWinCoinTiers",stalecorn:"teamLossCoinTiers",snoil:"maxBetTiers",chips:"idolStrikeoutsTiers",burgers:"idolShutoutsTiers"},je=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,r,i,a,o,u,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!1),f(!0),j("Loading, this'll take a bit"),e.next=5,fetch("https://cors-proxy.blaseball-reference.com/database/feed/global?type=157");case 5:return t=e.sent,e.next=8,t.json();case 8:return n=e.sent,r=Math.max.apply(0,n.map((function(e){return e.season}))),S(n.filter((function(e){return e.season===r})).length),e.next=13,fetch("https://api.blaseball-reference.com/v2/players?season=current");case 13:return i=e.sent,e.next=16,i.json();case 16:return a=e.sent,o=a.reduce((function(e,t){return e[t.player_id]=t})),ee(o),e.next=21,fetch("https://api.blaseball-reference.com/v2/stats?type=season&group=hitting&fields=hits,home_runs,stolen_bases&season=current");case 21:return u=e.sent,e.next=24,u.json();case 24:m=e.sent,ce(m),c(!0),f(!1),j("");case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(e){return l[be[e]]},he=function(e,t){return t?de(e)[t-1].amount:0},Oe=function(e,t){for(var n=e?Object(o.a)({},e):{},r=0,c=Object.entries(be);r<c.length;r++){var i=Object(s.a)(c[r],2),a=i[0],u=i[1];a in n||(n[a]=t?l[u].length:0)}return n},fe=function(e){e=Oe(e,!0);var t=[];return re[0].splits.forEach((function(n){var r=n.stat,c=$[n.player.id]||{},i=function(e,t,n,r,c){var i=he("seeds",n),a=he("dogs",r),o=he("pickles",c),u=function(e){var t=e.modifications||[];return"CREDIT_TO_THE_TEAM"in t?5:"DOUBLE_PAYOUTS"in t?2:1}(t),p={hits:u*i*e.hits,home_runs:u*a*e.home_runs,stolen_bases:u*o*e.stolen_bases};return p.total=Object.values(p).reduce((function(e,t){return e+t}),0),p}(r,c,e.seeds,e.dogs,e.pickles);t.push([i,n,c])})),t.sort((function(e,t){return t[0].total-e[0].total})),t},xe=function(e,t,n){if(t=Oe(t),r=n,c=t[n],de(r).length-c<=0)return null;var r,c,i,a,u,p=Object(o.a)({},t);if(p[n]+=1,"wetzels"===n)i=g*he("wetzels",t[n]),a=g*he("wetzels",p[n])-i,u=null;else if("slushies"===n)i=k*he("slushies",t[n]),a=k*he("slushies",p[n])-i,u=null;else{var m=fe(p)[0];a=m[0].total-e[0].total,u=m[1].player.fullName}var s=function(e,t){return de(e)[t].price}(n,t[n]);return{which:n,dx:a,cost:s,ratio:a/s,snaxfolio:p,idol:u}},ve=function(e){e=Oe(e);var t=fe(e)[0],n=[xe(t,e,"pickles"),xe(t,e,"seeds"),xe(t,e,"dogs"),xe(t,e,"wetzels"),xe(t,e,"slushies")].filter((function(e){return null!==e}));return n.sort((function(e,t){return t.ratio-e.ratio})),n};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{onClick:function(){return le(!se)},children:[se?"Hide":"Show"," Instructions"]}),se&&Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Click Load Data."}),Object(b.jsx)("li",{children:"While you're waiting for it to finish loading, get the current Runners value from the linked SIBR sheet and fill it in."}),Object(b.jsxs)("li",{children:["Then fill in your current inventory and either",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Fill in how much cash you want to spend on upgrades and click Propose Upgrades or "}),Object(b.jsx)("li",{children:"Click Lucrative Batters for idol recommendations based on your current inventory."})]})]})]})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"options",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Swallowed Wins"}),Object(b.jsx)("input",{type:"number",value:g,onChange:function(e){return S(parseInt(e.target.value))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Flooded Runners"}),Object(b.jsx)("input",{type:"number",value:k,onChange:function(e){return C(parseInt(e.target.value))}}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://docs.google.com/spreadsheets/d/15H7A6oug4vTKOtKRaDXQpxS9NzNyCbkYcOWiCt9gi5o/edit#gid=1036308084",children:"Grab from Snack Income sheet"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Dogs"}),Object(b.jsx)("input",{type:"number",value:_,onChange:function(e){return H(parseInt(e.target.value))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Seeds"}),Object(b.jsx)("input",{type:"number",value:N,onChange:function(e){return z(parseInt(e.target.value))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Wetzels"}),Object(b.jsx)("input",{type:"number",value:E,onChange:function(e){return P(parseInt(e.target.value))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Slushies"}),Object(b.jsx)("input",{type:"number",value:A,onChange:function(e){return J(parseInt(e.target.value))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Pickles"}),Object(b.jsx)("input",{type:"number",value:K,onChange:function(e){return Y(parseInt(e.target.value))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Cash"}),Object(b.jsx)("input",{type:"number",value:X,onChange:function(e){return q(parseInt(e.target.value))}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{disabled:O,onClick:je,children:"Load Data"}),Object(b.jsx)("button",{disabled:!n,onClick:function(){return function(e,t){t=Oe(t);for(var n=null,r=0,c=0,i=[];;){r+=1;var a=ve(t);if(!a.length){i.push("--- No further upgrades available ---");break}var o=a[0];if((c+=o.cost)>e)break;null!==o.idol&&n!==o.idol&&(i.push("--- Switch idol to ".concat(o.idol)),n=o.idol),t=o.snaxfolio,i.push("".concat(r,": Buy ").concat(o.which," for ").concat(o.cost," (dx: ").concat(o.dx,"; ratio: ").concat(o.ratio.toFixed(3),")"))}return ue(i),t}(X,{seeds:N,dogs:_,wetzels:E,slushies:A,pickles:K})},children:"Propose Upgrades"}),Object(b.jsx)("button",{disabled:!n,onClick:function(){return function(e){e=Oe(e,!0);var t=fe(e);ue(t.splice(0,10).map((function(e){return"".concat(e[0].total," (").concat(e[1].stat.hits,"H, ").concat(e[1].stat.home_runs,"HR, ").concat(e[1].stat.stolen_bases,"SB) ").concat(e[1].player.fullName)})))}({seeds:N,dogs:_,wetzels:E,slushies:A,pickles:K})},children:"Lucrative Batters"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:u})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"output",children:oe.map((function(e){return Object(b.jsx)("div",{children:e})}))}),Object(b.jsxs)("div",{className:"credits",children:["Original version by @nago",Object(b.jsx)("br",{}),"Adapted to Javascript by @TransatlanticFoe"]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),d()},5:function(e){e.exports=JSON.parse('{"maxBetTiers":[{"price":0,"amount":20},{"price":20,"amount":40},{"price":40,"amount":60},{"price":65,"amount":80},{"price":90,"amount":100},{"price":125,"amount":120},{"price":160,"amount":140},{"price":200,"amount":160},{"price":245,"amount":180},{"price":290,"amount":200},{"price":335,"amount":220},{"price":385,"amount":240},{"price":440,"amount":260},{"price":495,"amount":280},{"price":550,"amount":300},{"price":610,"amount":320},{"price":670,"amount":340},{"price":730,"amount":360},{"price":795,"amount":380},{"price":865,"amount":400},{"price":930,"amount":420},{"price":1000,"amount":440},{"price":1075,"amount":460},{"price":1145,"amount":480},{"price":1220,"amount":500},{"price":1295,"amount":520},{"price":1375,"amount":540},{"price":1455,"amount":560},{"price":1535,"amount":580},{"price":1620,"amount":600},{"price":1700,"amount":620},{"price":1785,"amount":640},{"price":1875,"amount":660},{"price":1960,"amount":680},{"price":2050,"amount":700},{"price":2140,"amount":720},{"price":2235,"amount":740},{"price":2330,"amount":760},{"price":2420,"amount":780},{"price":2520,"amount":800},{"price":2615,"amount":820},{"price":2715,"amount":840},{"price":2815,"amount":860},{"price":2915,"amount":880},{"price":3015,"amount":900},{"price":3120,"amount":920},{"price":3225,"amount":940},{"price":3330,"amount":960},{"price":3435,"amount":980},{"price":3540,"amount":1020},{"price":3650,"amount":1040},{"price":3760,"amount":1060},{"price":3870,"amount":1080},{"price":3985,"amount":1100},{"price":4095,"amount":1120},{"price":4210,"amount":1140},{"price":4325,"amount":1160},{"price":4440,"amount":1180},{"price":4560,"amount":1200},{"price":4675,"amount":1220},{"price":4795,"amount":1240},{"price":4915,"amount":1260},{"price":5035,"amount":1280},{"price":5160,"amount":1300},{"price":5280,"amount":1320},{"price":5405,"amount":1340},{"price":5530,"amount":1360},{"price":5655,"amount":1380},{"price":5785,"amount":1400},{"price":5910,"amount":1420},{"price":6040,"amount":1440},{"price":6170,"amount":1460},{"price":6300,"amount":1480},{"price":6435,"amount":1500},{"price":6565,"amount":1520},{"price":6700,"amount":1540},{"price":6835,"amount":1560},{"price":6970,"amount":1580},{"price":7105,"amount":1600},{"price":7240,"amount":1620},{"price":7380,"amount":1640},{"price":7515,"amount":1660},{"price":7655,"amount":1680},{"price":7795,"amount":1700},{"price":7940,"amount":1720},{"price":8080,"amount":1740},{"price":8220,"amount":1760},{"price":8365,"amount":1780},{"price":8510,"amount":1800},{"price":8655,"amount":1820},{"price":8800,"amount":1840},{"price":8950,"amount":1860},{"price":9095,"amount":1880},{"price":9245,"amount":1900},{"price":9395,"amount":1920},{"price":9545,"amount":1940},{"price":9695,"amount":1960},{"price":9845,"amount":1980},{"price":10000,"amount":2000}],"teamWinCoinTiers":[{"price":10,"amount":10},{"price":10,"amount":12},{"price":10,"amount":16},{"price":10,"amount":18},{"price":10,"amount":22},{"price":15,"amount":24},{"price":15,"amount":28},{"price":15,"amount":30},{"price":15,"amount":34},{"price":20,"amount":36},{"price":20,"amount":40},{"price":20,"amount":42},{"price":25,"amount":46},{"price":25,"amount":48},{"price":30,"amount":52},{"price":35,"amount":54},{"price":35,"amount":58},{"price":40,"amount":60},{"price":45,"amount":64},{"price":45,"amount":66},{"price":50,"amount":70},{"price":55,"amount":72},{"price":60,"amount":76},{"price":65,"amount":78},{"price":70,"amount":82},{"price":75,"amount":84},{"price":80,"amount":86},{"price":85,"amount":90},{"price":90,"amount":92},{"price":95,"amount":96},{"price":105,"amount":98},{"price":110,"amount":102},{"price":115,"amount":104},{"price":120,"amount":108},{"price":130,"amount":110},{"price":135,"amount":114},{"price":145,"amount":116},{"price":150,"amount":120},{"price":160,"amount":122},{"price":165,"amount":126},{"price":175,"amount":128},{"price":185,"amount":132},{"price":190,"amount":134},{"price":200,"amount":138},{"price":210,"amount":140},{"price":220,"amount":144},{"price":230,"amount":146},{"price":240,"amount":150},{"price":250,"amount":152},{"price":260,"amount":156},{"price":270,"amount":158},{"price":280,"amount":160},{"price":290,"amount":164},{"price":300,"amount":166},{"price":310,"amount":170},{"price":320,"amount":172},{"price":335,"amount":176},{"price":345,"amount":178},{"price":355,"amount":182},{"price":370,"amount":184},{"price":380,"amount":188},{"price":395,"amount":190},{"price":405,"amount":194},{"price":420,"amount":196},{"price":430,"amount":200},{"price":445,"amount":202},{"price":460,"amount":206},{"price":475,"amount":208},{"price":485,"amount":212},{"price":500,"amount":214},{"price":515,"amount":218},{"price":530,"amount":220},{"price":545,"amount":224},{"price":560,"amount":226},{"price":575,"amount":228},{"price":590,"amount":232},{"price":605,"amount":234},{"price":620,"amount":238},{"price":635,"amount":240},{"price":655,"amount":244},{"price":670,"amount":246},{"price":685,"amount":250},{"price":705,"amount":252},{"price":720,"amount":256},{"price":735,"amount":258},{"price":755,"amount":262},{"price":770,"amount":264},{"price":790,"amount":268},{"price":810,"amount":270},{"price":825,"amount":274},{"price":845,"amount":276},{"price":865,"amount":280},{"price":880,"amount":282},{"price":900,"amount":286},{"price":920,"amount":288},{"price":940,"amount":292},{"price":960,"amount":294},{"price":980,"amount":298},{"price":1000,"amount":300}],"idolHitsTiers":[{"price":25,"amount":5},{"price":35,"amount":11},{"price":55,"amount":19},{"price":80,"amount":28},{"price":105,"amount":37},{"price":140,"amount":47},{"price":175,"amount":57},{"price":215,"amount":68},{"price":260,"amount":79},{"price":305,"amount":90},{"price":350,"amount":102},{"price":400,"amount":113},{"price":450,"amount":125},{"price":505,"amount":137},{"price":565,"amount":150},{"price":620,"amount":162},{"price":685,"amount":175},{"price":745,"amount":188},{"price":810,"amount":201},{"price":875,"amount":214},{"price":945,"amount":227},{"price":1015,"amount":240},{"price":1085,"amount":254},{"price":1160,"amount":268},{"price":1235,"amount":281},{"price":1310,"amount":295},{"price":1390,"amount":309},{"price":1470,"amount":323},{"price":1550,"amount":337},{"price":1630,"amount":352},{"price":1715,"amount":366},{"price":1800,"amount":381},{"price":1885,"amount":395},{"price":1975,"amount":410},{"price":2065,"amount":425},{"price":2155,"amount":440},{"price":2245,"amount":455},{"price":2340,"amount":470},{"price":2435,"amount":485},{"price":2530,"amount":500},{"price":2625,"amount":515},{"price":2725,"amount":530},{"price":2825,"amount":546},{"price":2925,"amount":561},{"price":3025,"amount":577},{"price":3130,"amount":593},{"price":3235,"amount":608},{"price":3340,"amount":624},{"price":3445,"amount":640},{"price":3550,"amount":656},{"price":3660,"amount":672},{"price":3770,"amount":688},{"price":3880,"amount":704},{"price":3990,"amount":720},{"price":4105,"amount":736},{"price":4220,"amount":752},{"price":4335,"amount":769},{"price":4450,"amount":785},{"price":4565,"amount":802},{"price":4685,"amount":818},{"price":4805,"amount":835},{"price":4925,"amount":851},{"price":5045,"amount":868},{"price":5165,"amount":885},{"price":5290,"amount":902},{"price":5415,"amount":918},{"price":5540,"amount":935},{"price":5665,"amount":952},{"price":5790,"amount":969},{"price":5920,"amount":986},{"price":6045,"amount":1003},{"price":6175,"amount":1020},{"price":6305,"amount":1038},{"price":6440,"amount":1055},{"price":6570,"amount":1072},{"price":6705,"amount":1090},{"price":6835,"amount":1107},{"price":6970,"amount":1124},{"price":7110,"amount":1142},{"price":7245,"amount":1159},{"price":7380,"amount":1177},{"price":7520,"amount":1194},{"price":7660,"amount":1212},{"price":7800,"amount":1230},{"price":7940,"amount":1248},{"price":8085,"amount":1265},{"price":8225,"amount":1283},{"price":8370,"amount":1301},{"price":8515,"amount":1319},{"price":8660,"amount":1337},{"price":8805,"amount":1355},{"price":8950,"amount":1373},{"price":9100,"amount":1391},{"price":9245,"amount":1409},{"price":9395,"amount":1427},{"price":9545,"amount":1445},{"price":9695,"amount":1463},{"price":9850,"amount":1482},{"price":10000,"amount":1500}],"idolHomersTiers":[{"price":20,"amount":20},{"price":35,"amount":60},{"price":65,"amount":100},{"price":95,"amount":140},{"price":135,"amount":180},{"price":175,"amount":225},{"price":220,"amount":265},{"price":270,"amount":305},{"price":320,"amount":345},{"price":375,"amount":385},{"price":430,"amount":425},{"price":485,"amount":465},{"price":550,"amount":505},{"price":610,"amount":550},{"price":675,"amount":590},{"price":740,"amount":630},{"price":810,"amount":670},{"price":880,"amount":710},{"price":950,"amount":750},{"price":1025,"amount":790},{"price":1100,"amount":830},{"price":1175,"amount":875},{"price":1255,"amount":915},{"price":1330,"amount":955},{"price":1410,"amount":995},{"price":1495,"amount":1035},{"price":1575,"amount":1075},{"price":1660,"amount":1115},{"price":1750,"amount":1155},{"price":1835,"amount":1200},{"price":1925,"amount":1240},{"price":2010,"amount":1280},{"price":2105,"amount":1320},{"price":2195,"amount":1360},{"price":2285,"amount":1400},{"price":2380,"amount":1440},{"price":2475,"amount":1480},{"price":2570,"amount":1525},{"price":2670,"amount":1565},{"price":2765,"amount":1605},{"price":2865,"amount":1645},{"price":2965,"amount":1685},{"price":3070,"amount":1725},{"price":3170,"amount":1765},{"price":3275,"amount":1805},{"price":3375,"amount":1850},{"price":3480,"amount":1890},{"price":3585,"amount":1930},{"price":3695,"amount":1970},{"price":3800,"amount":2010},{"price":3910,"amount":2050},{"price":4020,"amount":2090},{"price":4130,"amount":2130},{"price":4240,"amount":2170},{"price":4355,"amount":2215},{"price":4465,"amount":2255},{"price":4580,"amount":2295},{"price":4695,"amount":2335},{"price":4810,"amount":2375},{"price":4925,"amount":2415},{"price":5040,"amount":2455},{"price":5160,"amount":2495},{"price":5275,"amount":2540},{"price":5395,"amount":2580},{"price":5515,"amount":2620},{"price":5635,"amount":2660},{"price":5760,"amount":2700},{"price":5880,"amount":2740},{"price":6005,"amount":2780},{"price":6125,"amount":2820},{"price":6250,"amount":2865},{"price":6375,"amount":2905},{"price":6500,"amount":2945},{"price":6630,"amount":2985},{"price":6755,"amount":3025},{"price":6885,"amount":3065},{"price":7010,"amount":3105},{"price":7140,"amount":3145},{"price":7270,"amount":3190},{"price":7400,"amount":3230},{"price":7530,"amount":3270},{"price":7665,"amount":3310},{"price":7795,"amount":3350},{"price":7930,"amount":3390},{"price":8065,"amount":3430},{"price":8195,"amount":3470},{"price":8330,"amount":3515},{"price":8470,"amount":3555},{"price":8605,"amount":3595},{"price":8740,"amount":3635},{"price":8880,"amount":3675},{"price":9015,"amount":3715},{"price":9155,"amount":3755},{"price":9295,"amount":3795},{"price":9435,"amount":3840},{"price":9575,"amount":3880},{"price":9715,"amount":3920},{"price":9860,"amount":3960},{"price":10000,"amount":4000}],"idolStrikeoutsTiers":[{"price":25,"amount":3},{"price":35,"amount":5},{"price":55,"amount":7},{"price":80,"amount":9},{"price":105,"amount":11},{"price":135,"amount":13},{"price":165,"amount":15},{"price":195,"amount":17},{"price":230,"amount":19},{"price":265,"amount":21},{"price":300,"amount":23},{"price":335,"amount":25},{"price":375,"amount":27},{"price":415,"amount":29},{"price":455,"amount":31},{"price":500,"amount":33},{"price":540,"amount":35},{"price":585,"amount":37},{"price":630,"amount":39},{"price":675,"amount":41},{"price":725,"amount":43},{"price":770,"amount":45},{"price":820,"amount":47},{"price":870,"amount":49},{"price":920,"amount":51},{"price":970,"amount":53},{"price":1020,"amount":55},{"price":1075,"amount":57},{"price":1125,"amount":59},{"price":1180,"amount":61},{"price":1235,"amount":63},{"price":1290,"amount":65},{"price":1345,"amount":67},{"price":1400,"amount":69},{"price":1455,"amount":71},{"price":1515,"amount":73},{"price":1570,"amount":75},{"price":1630,"amount":77},{"price":1690,"amount":79},{"price":1745,"amount":81},{"price":1805,"amount":83},{"price":1870,"amount":85},{"price":1930,"amount":87},{"price":1990,"amount":89},{"price":2050,"amount":91},{"price":2115,"amount":93},{"price":2175,"amount":95},{"price":2240,"amount":97},{"price":2305,"amount":99},{"price":2370,"amount":102},{"price":2435,"amount":104},{"price":2500,"amount":106},{"price":2565,"amount":108},{"price":2630,"amount":110},{"price":2695,"amount":112},{"price":2765,"amount":114},{"price":2830,"amount":116},{"price":2900,"amount":118},{"price":2970,"amount":120},{"price":3035,"amount":122},{"price":3105,"amount":124},{"price":3175,"amount":126},{"price":3245,"amount":128},{"price":3315,"amount":130},{"price":3385,"amount":132},{"price":3460,"amount":134},{"price":3530,"amount":136},{"price":3600,"amount":138},{"price":3675,"amount":140},{"price":3745,"amount":142},{"price":3820,"amount":144},{"price":3890,"amount":146},{"price":3965,"amount":148},{"price":4040,"amount":150},{"price":4115,"amount":152},{"price":4190,"amount":154},{"price":4265,"amount":156},{"price":4340,"amount":158},{"price":4415,"amount":160},{"price":4490,"amount":162},{"price":4570,"amount":164},{"price":4645,"amount":166},{"price":4720,"amount":168},{"price":4800,"amount":170},{"price":4875,"amount":172},{"price":4955,"amount":174},{"price":5035,"amount":176},{"price":5115,"amount":178},{"price":5190,"amount":180},{"price":5270,"amount":182},{"price":5350,"amount":184},{"price":5430,"amount":186},{"price":5510,"amount":188},{"price":5590,"amount":190},{"price":5675,"amount":192},{"price":5755,"amount":194},{"price":5835,"amount":196},{"price":5920,"amount":198},{"price":6000,"amount":200}],"idolShutoutsTiers":[{"price":100,"amount":250},{"price":120,"amount":380},{"price":140,"amount":500},{"price":180,"amount":630},{"price":220,"amount":750},{"price":270,"amount":880},{"price":330,"amount":1000},{"price":380,"amount":1130},{"price":450,"amount":1250},{"price":510,"amount":1380},{"price":590,"amount":1500},{"price":660,"amount":1630},{"price":740,"amount":1750},{"price":820,"amount":1880},{"price":900,"amount":2000},{"price":990,"amount":2130},{"price":1080,"amount":2250},{"price":1180,"amount":2380},{"price":1270,"amount":2500},{"price":1370,"amount":2630},{"price":1470,"amount":2750},{"price":1580,"amount":2880},{"price":1680,"amount":3000},{"price":1790,"amount":3130},{"price":1910,"amount":3250},{"price":2020,"amount":3380},{"price":2140,"amount":3500},{"price":2250,"amount":3620},{"price":2380,"amount":3750},{"price":2500,"amount":3880},{"price":2620,"amount":4000},{"price":2750,"amount":4130},{"price":2880,"amount":4250},{"price":3010,"amount":4380},{"price":3140,"amount":4500},{"price":3280,"amount":4630},{"price":3420,"amount":4750},{"price":3560,"amount":4880},{"price":3700,"amount":5000},{"price":3840,"amount":5130},{"price":3990,"amount":5250},{"price":4130,"amount":5380},{"price":4280,"amount":5500},{"price":4430,"amount":5630},{"price":4580,"amount":5750},{"price":4740,"amount":5880},{"price":4890,"amount":6000},{"price":5050,"amount":6130},{"price":5210,"amount":6250},{"price":5370,"amount":6380},{"price":5530,"amount":6500},{"price":5690,"amount":6630},{"price":5860,"amount":6750},{"price":6030,"amount":6880},{"price":6190,"amount":7000},{"price":6360,"amount":7120},{"price":6540,"amount":7250},{"price":6710,"amount":7380},{"price":6880,"amount":7500},{"price":7060,"amount":7630},{"price":7240,"amount":7750},{"price":7420,"amount":7880},{"price":7600,"amount":8000},{"price":7780,"amount":8130},{"price":7960,"amount":8250},{"price":8150,"amount":8380},{"price":8330,"amount":8500},{"price":8520,"amount":8630},{"price":8710,"amount":8750},{"price":8900,"amount":8880},{"price":9090,"amount":9000},{"price":9290,"amount":9130},{"price":9480,"amount":9250},{"price":9680,"amount":9380},{"price":9880,"amount":9500},{"price":10080,"amount":9630},{"price":10280,"amount":9750},{"price":10480,"amount":9880},{"price":10680,"amount":10000},{"price":10880,"amount":10130},{"price":11090,"amount":10250},{"price":11300,"amount":10380},{"price":11500,"amount":10500},{"price":11710,"amount":10630},{"price":11920,"amount":10750},{"price":12140,"amount":10880},{"price":12350,"amount":11000},{"price":12560,"amount":11130},{"price":12780,"amount":11250},{"price":13000,"amount":11380},{"price":13210,"amount":11500},{"price":13430,"amount":11630},{"price":13650,"amount":11750},{"price":13870,"amount":11880},{"price":14100,"amount":12000},{"price":14320,"amount":12130},{"price":14550,"amount":12250},{"price":14770,"amount":12380},{"price":15000,"amount":12500}],"teamLossCoinTiers":[{"price":10,"amount":10},{"price":10,"amount":20},{"price":10,"amount":25},{"price":10,"amount":35},{"price":15,"amount":40},{"price":15,"amount":50},{"price":15,"amount":60},{"price":20,"amount":65},{"price":25,"amount":75},{"price":25,"amount":85},{"price":30,"amount":90},{"price":35,"amount":100},{"price":40,"amount":105},{"price":45,"amount":115},{"price":50,"amount":125},{"price":55,"amount":130},{"price":65,"amount":140},{"price":70,"amount":145},{"price":75,"amount":155},{"price":85,"amount":165},{"price":95,"amount":170},{"price":100,"amount":180},{"price":110,"amount":185},{"price":120,"amount":195},{"price":130,"amount":205},{"price":140,"amount":210},{"price":150,"amount":220},{"price":160,"amount":230},{"price":170,"amount":235},{"price":185,"amount":245},{"price":195,"amount":250},{"price":210,"amount":260},{"price":220,"amount":270},{"price":235,"amount":275},{"price":250,"amount":285},{"price":265,"amount":290},{"price":280,"amount":300},{"price":295,"amount":310},{"price":310,"amount":315},{"price":325,"amount":325},{"price":340,"amount":330},{"price":360,"amount":340},{"price":375,"amount":350},{"price":395,"amount":355},{"price":410,"amount":365},{"price":430,"amount":375},{"price":450,"amount":380},{"price":470,"amount":390},{"price":485,"amount":395},{"price":510,"amount":405},{"price":530,"amount":415},{"price":550,"amount":420},{"price":570,"amount":430},{"price":590,"amount":435},{"price":615,"amount":445},{"price":635,"amount":455},{"price":660,"amount":460},{"price":685,"amount":470},{"price":705,"amount":480},{"price":730,"amount":485},{"price":755,"amount":495},{"price":780,"amount":500},{"price":805,"amount":510},{"price":830,"amount":520},{"price":860,"amount":525},{"price":885,"amount":535},{"price":915,"amount":540},{"price":940,"amount":550},{"price":970,"amount":560},{"price":995,"amount":565},{"price":1025,"amount":575},{"price":1055,"amount":580},{"price":1085,"amount":590},{"price":1115,"amount":600},{"price":1145,"amount":605},{"price":1175,"amount":615},{"price":1205,"amount":625},{"price":1240,"amount":630},{"price":1270,"amount":640},{"price":1305,"amount":645},{"price":1335,"amount":655},{"price":1370,"amount":665},{"price":1405,"amount":670},{"price":1435,"amount":680},{"price":1470,"amount":685},{"price":1505,"amount":695},{"price":1540,"amount":705},{"price":1580,"amount":710},{"price":1615,"amount":720},{"price":1650,"amount":725},{"price":1690,"amount":735},{"price":1725,"amount":745},{"price":1765,"amount":750},{"price":1800,"amount":760},{"price":1840,"amount":770},{"price":1880,"amount":775},{"price":1920,"amount":785},{"price":1960,"amount":790},{"price":2000,"amount":800}],"idolStealTiers":[{"price":10,"amount":50},{"price":20,"amount":80},{"price":35,"amount":110},{"price":60,"amount":140},{"price":85,"amount":170},{"price":115,"amount":200},{"price":145,"amount":230},{"price":180,"amount":260},{"price":220,"amount":290},{"price":260,"amount":320},{"price":305,"amount":350},{"price":350,"amount":380},{"price":395,"amount":410},{"price":445,"amount":440},{"price":495,"amount":470},{"price":550,"amount":500},{"price":605,"amount":530},{"price":660,"amount":560},{"price":720,"amount":590},{"price":775,"amount":620},{"price":840,"amount":650},{"price":900,"amount":680},{"price":965,"amount":710},{"price":1030,"amount":740},{"price":1100,"amount":770},{"price":1170,"amount":805},{"price":1240,"amount":835},{"price":1310,"amount":865},{"price":1385,"amount":895},{"price":1455,"amount":925},{"price":1535,"amount":955},{"price":1610,"amount":985},{"price":1685,"amount":1015},{"price":1765,"amount":1045},{"price":1845,"amount":1075},{"price":1930,"amount":1105},{"price":2010,"amount":1135},{"price":2095,"amount":1165},{"price":2180,"amount":1195},{"price":2265,"amount":1225},{"price":2355,"amount":1255},{"price":2445,"amount":1285},{"price":2530,"amount":1315},{"price":2625,"amount":1345},{"price":2715,"amount":1375},{"price":2805,"amount":1405},{"price":2900,"amount":1435},{"price":2995,"amount":1465},{"price":3090,"amount":1495},{"price":3190,"amount":1525},{"price":3285,"amount":1555},{"price":3385,"amount":1585},{"price":3485,"amount":1615},{"price":3585,"amount":1645},{"price":3685,"amount":1675},{"price":3790,"amount":1705},{"price":3895,"amount":1735},{"price":4000,"amount":1765},{"price":4105,"amount":1795},{"price":4210,"amount":1825},{"price":4315,"amount":1855},{"price":4425,"amount":1885},{"price":4535,"amount":1915},{"price":4645,"amount":1945},{"price":4755,"amount":1975},{"price":4865,"amount":2005},{"price":4980,"amount":2035},{"price":5090,"amount":2065},{"price":5205,"amount":2095},{"price":5320,"amount":2125},{"price":5435,"amount":2155},{"price":5555,"amount":2185},{"price":5670,"amount":2215},{"price":5790,"amount":2245},{"price":5910,"amount":2280},{"price":6030,"amount":2310},{"price":6150,"amount":2340},{"price":6270,"amount":2370},{"price":6395,"amount":2400},{"price":6515,"amount":2430},{"price":6640,"amount":2460},{"price":6765,"amount":2490},{"price":6890,"amount":2520},{"price":7015,"amount":2550},{"price":7145,"amount":2580},{"price":7270,"amount":2610},{"price":7400,"amount":2640},{"price":7530,"amount":2670},{"price":7660,"amount":2700},{"price":7790,"amount":2730},{"price":7920,"amount":2760},{"price":8055,"amount":2790},{"price":8185,"amount":2820},{"price":8320,"amount":2850},{"price":8455,"amount":2880},{"price":8590,"amount":2910},{"price":8725,"amount":2940},{"price":8865,"amount":2970},{"price":9000,"amount":3000}],"blackHoleTiers":[{"price":100,"amount":100},{"price":265,"amount":250},{"price":475,"amount":405},{"price":710,"amount":555},{"price":960,"amount":710},{"price":1225,"amount":860},{"price":1495,"amount":1010},{"price":1780,"amount":1165},{"price":2075,"amount":1315},{"price":2375,"amount":1470},{"price":2680,"amount":1620},{"price":2990,"amount":1770},{"price":3310,"amount":1925},{"price":3635,"amount":2075},{"price":3960,"amount":2230},{"price":4295,"amount":2380},{"price":4635,"amount":2535},{"price":4975,"amount":2685},{"price":5320,"amount":2835},{"price":5670,"amount":2990},{"price":6025,"amount":3140},{"price":6385,"amount":3295},{"price":6745,"amount":3445},{"price":7110,"amount":3595},{"price":7475,"amount":3750},{"price":7845,"amount":3900},{"price":8220,"amount":4055},{"price":8595,"amount":4205},{"price":8975,"amount":4355},{"price":9355,"amount":4510},{"price":9740,"amount":4660},{"price":10125,"amount":4815},{"price":10515,"amount":4965},{"price":10905,"amount":5115},{"price":11300,"amount":5270},{"price":11700,"amount":5420},{"price":12095,"amount":5575},{"price":12500,"amount":5725},{"price":12900,"amount":5880},{"price":13305,"amount":6030},{"price":13715,"amount":6180},{"price":14125,"amount":6335},{"price":14535,"amount":6485},{"price":14950,"amount":6640},{"price":15365,"amount":6790},{"price":15780,"amount":6940},{"price":16200,"amount":7095},{"price":16620,"amount":7245},{"price":17045,"amount":7400},{"price":17465,"amount":7550},{"price":17895,"amount":7700},{"price":18320,"amount":7855},{"price":18750,"amount":8005},{"price":19180,"amount":8160},{"price":19615,"amount":8310},{"price":20050,"amount":8460},{"price":20485,"amount":8615},{"price":20925,"amount":8765},{"price":21365,"amount":8920},{"price":21805,"amount":9070},{"price":22245,"amount":9220},{"price":22690,"amount":9375},{"price":23135,"amount":9525},{"price":23580,"amount":9680},{"price":24030,"amount":9830},{"price":24480,"amount":9985},{"price":24930,"amount":10135},{"price":25380,"amount":10285},{"price":25835,"amount":10440},{"price":26290,"amount":10590},{"price":26745,"amount":10745},{"price":27205,"amount":10895},{"price":27660,"amount":11045},{"price":28120,"amount":11200},{"price":28585,"amount":11350},{"price":29045,"amount":11505},{"price":29510,"amount":11655},{"price":29975,"amount":11805},{"price":30440,"amount":11960},{"price":30905,"amount":12110},{"price":31375,"amount":12265},{"price":31845,"amount":12415},{"price":32315,"amount":12565},{"price":32790,"amount":12720},{"price":33260,"amount":12870},{"price":33735,"amount":13025},{"price":34210,"amount":13175},{"price":34690,"amount":13330},{"price":35165,"amount":13480},{"price":35645,"amount":13630},{"price":36125,"amount":13785},{"price":36605,"amount":13935},{"price":37085,"amount":14090},{"price":37570,"amount":14240},{"price":38055,"amount":14390},{"price":38540,"amount":14545},{"price":39025,"amount":14695},{"price":39510,"amount":14850},{"price":40000,"amount":15000}],"floodClearTiers":[{"price":10,"amount":10},{"price":10,"amount":15},{"price":15,"amount":20},{"price":20,"amount":25},{"price":30,"amount":30},{"price":35,"amount":35},{"price":45,"amount":40},{"price":55,"amount":45},{"price":65,"amount":50},{"price":75,"amount":55},{"price":90,"amount":60},{"price":100,"amount":65},{"price":115,"amount":70},{"price":130,"amount":75},{"price":145,"amount":80},{"price":160,"amount":85},{"price":175,"amount":90},{"price":190,"amount":95},{"price":210,"amount":100},{"price":225,"amount":105},{"price":245,"amount":110},{"price":265,"amount":115},{"price":285,"amount":120},{"price":305,"amount":125},{"price":325,"amount":130},{"price":345,"amount":135},{"price":370,"amount":140},{"price":390,"amount":145},{"price":415,"amount":150},{"price":435,"amount":155},{"price":460,"amount":160},{"price":485,"amount":165},{"price":510,"amount":170},{"price":535,"amount":175},{"price":560,"amount":180},{"price":585,"amount":185},{"price":610,"amount":190},{"price":640,"amount":195},{"price":665,"amount":200},{"price":695,"amount":205},{"price":725,"amount":210},{"price":750,"amount":215},{"price":780,"amount":220},{"price":810,"amount":225},{"price":840,"amount":230},{"price":870,"amount":235},{"price":900,"amount":240},{"price":935,"amount":245},{"price":965,"amount":250},{"price":995,"amount":255},{"price":1030,"amount":260},{"price":1060,"amount":265},{"price":1095,"amount":270},{"price":1130,"amount":275},{"price":1160,"amount":280},{"price":1195,"amount":285},{"price":1230,"amount":290},{"price":1265,"amount":295},{"price":1300,"amount":300},{"price":1340,"amount":305},{"price":1375,"amount":310},{"price":1410,"amount":315},{"price":1445,"amount":320},{"price":1485,"amount":325},{"price":1520,"amount":330},{"price":1560,"amount":335},{"price":1600,"amount":340},{"price":1635,"amount":345},{"price":1675,"amount":350},{"price":1715,"amount":355},{"price":1755,"amount":360},{"price":1795,"amount":365},{"price":1835,"amount":370},{"price":1875,"amount":375},{"price":1920,"amount":380},{"price":1960,"amount":385},{"price":2000,"amount":390},{"price":2045,"amount":395},{"price":2085,"amount":400},{"price":2130,"amount":405},{"price":2170,"amount":410},{"price":2215,"amount":415},{"price":2260,"amount":420},{"price":2300,"amount":425},{"price":2345,"amount":430},{"price":2390,"amount":435},{"price":2435,"amount":440},{"price":2480,"amount":445},{"price":2525,"amount":450},{"price":2575,"amount":455},{"price":2620,"amount":460},{"price":2665,"amount":465},{"price":2715,"amount":470},{"price":2760,"amount":475},{"price":2805,"amount":480},{"price":2855,"amount":485},{"price":2905,"amount":490},{"price":2950,"amount":495},{"price":3000,"amount":500}]}')}},[[16,1,2]]]);