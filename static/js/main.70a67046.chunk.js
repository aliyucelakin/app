(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(45),u=a(184),m=a(188),o=a(189),s=a(190),E=a(191),p=a(192),h=a(193),f=a(20),g=a.n(f),b=a(35),d=a.n(b),v=a(72),x=a.n(v),y=a(44),S=a.n(y),C=a(73);a.n(C)()(g.a);var k=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],l=r.a.useState(!1),c=Object(i.a)(l,2),f=c[0],b=c[1],v=function(){return a.map((function(e,t){return(t+1-.5)/a.length}))},y=function(){return a.map((function(e,t){return Math.log(e)}))},C=function(){var e=v();return a.map((function(t,a){return Math.log(Math.log(1/(1-e[a])))}))};return console.log(S()(a),a),r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(o.a,{variant:"h6"},"Strength Analysis for Advanced Ceramics"))),r.a.createElement(s.a,null,r.a.createElement(E.a,{container:!0,spacing:12},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(p.a,{onChange:function(e){n(e.target.value.split(" ").sort())},placeholder:"Strength numbers"})),r.a.createElement(E.a,null,r.a.createElement(h.a,{onClick:function(){return b(!f)}}," ","Show Datas"," "),r.a.createElement(h.a,{onClick:function(){return b(!f)}}," ","Upload file"," "))),f&&r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement("h3",null,"Strength [MPa]"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement("h3",null,"F Values"),r.a.createElement("ul",null,v().map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement("h3",null,"X Values"),r.a.createElement("ul",null,y().map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement("h3",null,"Y Values"),r.a.createElement("ul",null,C().map((function(e){return r.a.createElement("li",null,e)}))))),r.a.createElement(d.a,{highcharts:g.a,options:{chart:{type:"scatter",zoomType:"xy"},title:{text:"Weibull Distrubition Chart"},series:[{data:y().map((function(e,t){return[e,C()[t]]}))}]}}),r.a.createElement(d.a,{highcharts:g.a,options:{title:{text:"Cumulative Distribution Function"},series:[{data:x()(a).ps()}]}}),r.a.createElement(d.a,{highcharts:g.a,options:{title:{text:"Probability Density Function"},series:[{type:"bellcurve",baseSeries:1},{type:"scatter",data:S()(a.map(Number)),marker:{radius:5}}]}})))},M=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),M)},84:function(e,t,a){e.exports=a(155)}},[[84,1,2]]]);
//# sourceMappingURL=main.70a67046.chunk.js.map