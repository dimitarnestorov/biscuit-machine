(this["webpackJsonpbiscuit-machine"]=this["webpackJsonpbiscuit-machine"]||[]).push([[0],{22:function(e,t,a){e.exports={underExtruder:"0",underStamper:"1",afterStamper:"2",inOven1:"3",inOven2:"4",afterOven:"5",slide:"6"}},27:function(e,t,a){e.exports={tickMilliseconds:"100",movingMilliseconds:"2000",pausedMilliseconds:"2000"}},64:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(19),o=a.n(r),s=a(10),l=a(14),c=a(35),u=a.n(c),m=a(81),h=a(83),d=a(27),p=a.n(d),f=(a(64),Number(p.a.cookieTransformTransitionDuration)),b=["m 305.26371,113.80958 c 0.38403,-2.34869 0.67803,-4.72546 0.88202,-7.13032 0.21314,-2.53258 2.03793,-5.09292 2.03989,-7.68102 0.0185,-51.050675 -43.69263,-92.4450081 -95.50115,-92.4450081 -51.80853,0 -93.23004,40.2495071 -93.21151,91.3001821 0,2.375096 -0.48162,5.872696 -0.30003,8.203166 0.20223,2.61609 0.51301,5.20042 0.93235,7.753 z","m 305.26371,113.80958 c 18.31106,-0.1074 43.5971,-0.53988 64.52546,-0.36563 22.34474,-0.57631 51.2027,4.4202 50.74169,-12.46629 0.0202,-20.994599 -92.26315,-14.98101 -207.25545,-14.98101 -114.992291,0 -209.0834923,-4.80881 -208.5979772,13.160987 0,17.496923 51.8022192,14.002373 77.7997292,14.960893 3.70639,0.14531 34.539638,-0.44669 37.628118,-0.30895 z"];function v(e){var t=e.isStamped,a=e.location,r=e.baked,o=Object(n.useRef)(null),l=Object(m.useSpring)({config:{duration:800},x:t?1:0}),c=Object(n.useState)(!1),d=Object(s.a)(c,2),p=d[0],v=d[1];Object(n.useEffect)((function(){v(!0)}),[]);var k=Object(n.useMemo)((function(){return u()("#faa21b").darken(r/100).hex()}),[r]);return i.a.createElement(h.a,{in:p,timeout:f,classNames:"cookie",nodeRef:o},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 425.24487 118.77472",fill:k,stroke:"#979797",strokeWidth:"10","data-location":a,className:"cookie",ref:o},i.a.createElement(m.animated.path,{d:l.x.to({range:[0,1],output:b})})))}a(68);var k,g=[160,6],E=[160,6].join(),O=16*(g[0]+g[1]);function y(){return i.a.createElement("svg",{className:"conveyor-belt",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1307 422",fill:"none"},i.a.createElement("defs",null,i.a.createElement("circle",{id:"tail-pulley-path",cx:"1250",cy:"125",r:"39"}),i.a.createElement("circle",{id:"secondary-pulley-path",cx:"104.5",cy:"125.5",r:"84.5"}),i.a.createElement("circle",{id:"primary-pulley-path",cx:"292",cy:"341",r:"35"}),i.a.createElement("mask",{id:"tail-pulley-mask",width:"78",height:"78",x:"0",y:"0",fill:"#fff",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox"},i.a.createElement("use",{xlinkHref:"#tail-pulley-path"})),i.a.createElement("mask",{id:"secondary-pulley-mask",width:"169",height:"169",x:"0",y:"0",fill:"#fff",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox"},i.a.createElement("use",{xlinkHref:"#secondary-pulley-path"})),i.a.createElement("mask",{id:"primary-pulley-mask",width:"70",height:"70",x:"0",y:"0",fill:"#fff",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox"},i.a.createElement("use",{xlinkHref:"#primary-pulley-path"}))),i.a.createElement("path",{className:"conveyor-belt-path",stroke:"#000",strokeDasharray:E,pathLength:O,strokeDashoffset:"-2",strokeWidth:"4",d:"M91 72h1161c29.271 0 53 23.729 53 53s-23.729 53-53 53H91c-29.271 0-53-23.729-53-53s23.729-53 53-53z"}),i.a.createElement("use",{className:"tail-pulley",fill:"#D8D8D8",stroke:"#979797",strokeDasharray:"26,9",strokeWidth:"14",mask:"url(#tail-pulley-mask)",xlinkHref:"#tail-pulley-path"}),i.a.createElement("use",{className:"secondary-pulley",fill:"#D8D8D8",stroke:"#979797",strokeDasharray:"100,6",strokeWidth:"26",mask:"url(#secondary-pulley-mask)",xlinkHref:"#secondary-pulley-path"}),i.a.createElement("g",{className:"motor",fill:"#48AEDF",stroke:"#335475"},i.a.createElement("circle",{cx:"292",cy:"341",r:"77.5",strokeWidth:"6"}),i.a.createElement("use",{className:"primary-pulley",strokeDasharray:"70,3",strokeWidth:"12",mask:"url(#primary-pulley-mask)",xlinkHref:"#primary-pulley-path"})),i.a.createElement("path",{className:"vee-belt",stroke:"#000",strokeDasharray:"137,4",strokeWidth:"10",d:"M322.185 367.717s0 0 0 0c-14.003 16.036-38.181 18.123-54.724 4.723L47.195 194.028C12.442 165.878 4.33 116.14 28.337 78.407c5.613-8.822 11.763-16.02 18.448-21.591 0 0 0 0 0 0 37.917-31.6 94.272-26.48 125.873 11.438a89.372 89.372 0 017.84 11.004l145.805 241.346c9.019 14.929 7.354 33.975-4.118 47.113 0 0 0 0 0 0z"}))}!function(e){e.On="on",e.Paused="paused",e.Off="off"}(k||(k={}));var x,w,j=k,T=a(29),S=a(13),M=a(6),C=a(8),N=a(9),z=(a(69),a(4)),H=a(84),D=a(22),U=a.n(D);(w=x||(x={}))[w.UnderExtruder=Number(U.a.underExtruder)]="UnderExtruder",w[w.UnderStamper=Number(U.a.underStamper)]="UnderStamper",w[w.AfterStamper=Number(U.a.afterStamper)]="AfterStamper",w[w.InOven1=Number(U.a.inOven1)]="InOven1",w[w.InOven2=Number(U.a.inOven2)]="InOven2",w[w.AfterOven=Number(U.a.afterOven)]="AfterOven",w[w.Slide=Number(U.a.slide)]="Slide";var F,I,B,A,W,L,R,P,q,X,J,G,K,Q,V,Y,Z,$=x,_=Number(p.a.tickMilliseconds),ee=Number(p.a.movingMilliseconds),te=Number(p.a.pausedMilliseconds),ae=Number("100"),ne=Number("100"),ie=Number("5"),re=Number("5"),oe=Number("220"),se=Number("240"),le=Number("1.2"),ce=Number("5"),ue=Number("1"),me=Number("45"),he=Number("50");var de=(F=function(){function e(){Object(M.a)(this,e),this.id=Object(H.a)(),Object(S.a)(this,"location",I,this),Object(S.a)(this,"isStamped",B,this),Object(S.a)(this,"baked",A,this)}return Object(C.a)(e,[{key:"stamp",value:function(){this.isStamped=!0}},{key:"bake",value:function(e){this.baked+=le*(1+Math.max(e-se,0)/ce)}},{key:"move",value:function(){if(this.location>=$.Slide)throw new Error("`move` called after `location` is already set to maximum");this.location++}}]),e}(),I=Object(N.a)(F.prototype,"location",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return $.UnderExtruder}}),B=Object(N.a)(F.prototype,"isStamped",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),A=Object(N.a)(F.prototype,"baked",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),F);function pe(e){return e.location===$.UnderExtruder}var fe=(W=z.e.shallow,L=z.b.bound,R=function(){function e(){var t=this;Object(M.a)(this,e),Object(S.a)(this,"state",P,this),Object(S.a)(this,"dough",q,this),Object(S.a)(this,"cookies",X,this),Object(S.a)(this,"ovenTemperature",J,this),Object(S.a)(this,"badCookies",G,this),Object(S.a)(this,"goodCookies",K,this),Object(S.a)(this,"isTimeToMove",Q,this),this.intervalId=void 0,this.nextTickTimestamp=void 0,this.nextMotorStateChangeTimestamp=void 0,Object(S.a)(this,"isStamperStamping",V,this),Object(S.a)(this,"isMotorMoving",Y,this),Object(S.a)(this,"isHeatingElementOn",Z,this),Object(z.f)((function(){t.reset()}))}return Object(C.a)(e,[{key:"reset",value:function(){clearInterval(this.intervalId),this.isTimeToMove=!1,this.intervalId=0,this.nextTickTimestamp=1/0,this.nextMotorStateChangeTimestamp=1/0,this.isStamperStamping=!1,this.isMotorMoving=!1,this.isHeatingElementOn=!1}},{key:"startInterval",value:function(){var e=this;this.intervalId||(Object(z.f)((function(){e.createCookie();var t=Date.now();e.updateNextTickTimestamp(t),e.updateNextMotorStateChangeTimestamp(t)})),this.intervalId=setInterval(this.handleTick,_))}},{key:"handleTick",value:function(){for(var e=Date.now();this.nextTickTimestamp<=e;)!this.isTimeToMove&&!this.areThereUnprocessedCookies&&"off"===this.state&&this.ovenTemperature<=re?this.reset():(this.isTimeToMove||this.bakeCookies(),this.updateOven(),this.nextMotorStateChangeTimestamp<=this.nextTickTimestamp&&(this.isTimeToMove=!this.isTimeToMove,this.isTimeToMove?(this.isStamperStamping=!1,this.moveConveyor()):(this.createCookie(),this.stampCookie(),this.isMotorMoving=!1),this.updateNextMotorStateChangeTimestamp(this.nextMotorStateChangeTimestamp)),this.updateNextTickTimestamp(this.nextTickTimestamp))}},{key:"updateNextMotorStateChangeTimestamp",value:function(e){this.nextMotorStateChangeTimestamp=e+(this.isTimeToMove?ee:te)}},{key:"updateNextTickTimestamp",value:function(e){this.nextTickTimestamp=e+_}},{key:"createCookie",value:function(){"on"===this.state&&(this.dough<ie||this.cookies.find(pe)||(this.dough=Math.max(this.dough-ie,0),this.cookies.push(new de)))}},{key:"moveConveyor",value:function(){if("paused"!==this.state&&this.areThereUnprocessedCookies&&this.shouldMoveIntoOven){for(var e=0,t=this.cookies.length-1;t>=0;t--){var a=this.cookies[t],n=a.location;n>=$.Slide?this.cookies.splice(t,1):(n===$.AfterOven&&(a.baked>=me&&a.baked<=he?this.goodCookies++:this.badCookies++),a.move(),e++)}this.isMotorMoving=Boolean(e)}}},{key:"stampCookie",value:function(){var e=this.cookies.find((function(e){return 1===e.location}));e&&!e.isStamped&&(e.stamp(),this.isStamperStamping=!0)}},{key:"updateOven",value:function(){this.ovenTemperature=Math.max(this.ovenTemperature+ue*(this.isHeatingElementOn?1:-1),5),this.isHeatingElementOn&&(this.ovenTemperature>=se||!this.areThereUnprocessedCookies&&"off"===this.state)?this.isHeatingElementOn=!1:!this.isHeatingElementOn&&this.ovenTemperature<=oe&&(this.areThereUnprocessedCookies||"off"!==this.state)&&(this.isHeatingElementOn=!0)}},{key:"bakeCookies",value:function(){var e,t=Object(T.a)(this.cookies);try{for(t.s();!(e=t.n()).done;){var a=e.value,n=a.location;n!==$.InOven1&&n!==$.InOven2||a.bake(this.ovenTemperature)}}catch(i){t.e(i)}finally{t.f()}}},{key:"changeState",value:function(e){this.state=e,this.startInterval()}},{key:"refillExtruder",value:function(){this.dough=ae}},{key:"destroy",value:function(){clearInterval(this.intervalId)}},{key:"areThereUnprocessedCookies",get:function(){return Boolean(this.cookies.find((function(e){return e.location<=$.Slide})))}},{key:"shouldMoveIntoOven",get:function(){return!this.cookies.find((function(e){return e.location===$.AfterStamper}))||this.ovenTemperature>=oe}}]),e}(),P=Object(N.a)(R.prototype,"state",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return j.Off}}),q=Object(N.a)(R.prototype,"dough",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return ne}}),X=Object(N.a)(R.prototype,"cookies",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),J=Object(N.a)(R.prototype,"ovenTemperature",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return re}}),G=Object(N.a)(R.prototype,"badCookies",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),K=Object(N.a)(R.prototype,"goodCookies",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Q=Object(N.a)(R.prototype,"isTimeToMove",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=Object(N.a)(R.prototype,"isStamperStamping",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=Object(N.a)(R.prototype,"isMotorMoving",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=Object(N.a)(R.prototype,"isHeatingElementOn",[z.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(N.a)(R.prototype,"handleTick",[L],Object.getOwnPropertyDescriptor(R.prototype,"handleTick"),R.prototype),Object(N.a)(R.prototype,"changeState",[z.b],Object.getOwnPropertyDescriptor(R.prototype,"changeState"),R.prototype),Object(N.a)(R.prototype,"refillExtruder",[z.b],Object.getOwnPropertyDescriptor(R.prototype,"refillExtruder"),R.prototype),R),be=Object(n.createContext)(null);function ve(){var e=Object(n.useContext)(be);if(!e)throw new Error("Machine store not provided");return e}var ke=be.Provider;a(70);function ge(e){var t=e.value,a=ve(),r=Object(l.a)((function(){return a.state})),o=Object(n.useCallback)((function(e){return a.changeState(e.target.value)}),[a]);return i.a.createElement("input",{type:"radio",name:"machine-state",value:t,onChange:o,checked:r===t})}function Ee(){var e=ve(),t=Object(l.a)((function(){return e.goodCookies})),a=Object(l.a)((function(){return e.badCookies}));return i.a.createElement("div",{className:"controls"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("label",null,i.a.createElement(ge,{value:j.On})," On")),i.a.createElement("li",null,i.a.createElement("label",null,i.a.createElement(ge,{value:j.Paused})," Paused")),i.a.createElement("li",null,i.a.createElement("label",null,i.a.createElement(ge,{value:j.Off})," Off"))),i.a.createElement("div",{className:"splitter"}),i.a.createElement("ul",null,i.a.createElement("li",null,"Good Cookies: ",t),i.a.createElement("li",null,"Bad Cookies: ",a)))}var Oe=a(82);a(71);function ye(){var e=ve(),t=Object(l.a)((function(){return 1-e.dough/100})),a=Object(m.useSpring)({y:12+95*Object(Oe.a)(t)}).y,r=Object(n.useRef)(null);return Object(n.useEffect)((function(){t<=0||requestAnimationFrame((function(){r.current.classList.add("extruder-extruding")}))}),[t]),i.a.createElement("div",{className:"extruder",ref:r},i.a.createElement("svg",{viewBox:"0 0 161 139",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",className:"extruder-svg"},i.a.createElement(m.animated.mask,{id:"extruder-contents-mask",y:a,maskUnits:"userSpaceOnUse"},i.a.createElement("rect",{width:"129",x:"16",y:"12",height:95,fill:"#FFFFFF"})),i.a.createElement("path",{stroke:"#979797",strokeWidth:"5",d:"M102.95 116.5l-10.03 20H69.08l-10.03-20h43.9z"}),i.a.createElement("path",{stroke:"#979797",strokeWidth:"6",d:"M156.866 3l-36.86 113H40.994L4.135 3h152.73z"}),i.a.createElement("path",{fill:"#FFA300",d:"M16 12h129l-31.103 95H47.103z",mask:"url(#extruder-contents-mask)"})),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:0===t?"extruder-refill extruder-refill-hide":"extruder-refill",onClick:function(){return e.refillExtruder()},role:"button","aria-label":"Refill Extruder"},i.a.createElement("path",{d:"M50 25c0 4.533-1.117 8.717-3.35 12.55s-5.267 6.867-9.1 9.1C33.717 48.883 29.533 50 25 50c-4.533 0-8.717-1.117-12.55-3.35s-6.867-5.267-9.1-9.1C1.117 33.717 0 29.533 0 25c0-4.533 1.117-8.717 3.35-12.55s5.267-6.867 9.1-9.1C16.283 1.117 20.467 0 25 0c4.533 0 8.717 1.117 12.55 3.35s6.867 5.267 9.1 9.1C48.883 16.283 50 20.467 50 25zm-13 4l9-9h-6c-1-3.067-2.967-5.617-5.9-7.65-2.933-2.033-6.05-3.033-9.35-3-4.367 0-8.1 1.533-11.2 4.6-3.1 3.067-4.65 6.8-4.65 11.2 0 4.4 1.55 8.117 4.65 11.15 3.1 3.033 6.833 4.583 11.2 4.65 4.367.067 8.083-1.467 11.15-4.6l-3.1-3.55C30.6 34.933 28 36 25 36c-3.033 0-5.617-1.083-7.75-3.25S14.033 28 14 25c-.033-3 1.05-5.6 3.25-7.8S22.033 13.933 25 14c3.167 0 5.767 1.067 7.8 3.2.267.267.467.533.6.8.133.267.233.617.3 1.05.067.433.167.75.3.95h-6l9 9z"})),i.a.createElement("div",{className:"extruder-dough",onAnimationEnd:function(){return requestAnimationFrame((function(){return r.current.classList.remove("extruder-extruding")}))}}))}a(72);function xe(){var e=ve(),t=Object(l.a)((function(){return{temperature:e.ovenTemperature,heatingElementState:e.isHeatingElementOn?"on":"off"}})),a=t.temperature,r=t.heatingElementState,o=Object(n.useState)(!0),c=Object(s.a)(o,2),m=c[0],h=c[1],d=Object(n.useMemo)((function(){return u()("#910000").darken(1-a/240).hex()}),[a]);return i.a.createElement("div",{className:"oven"},i.a.createElement("svg",{viewBox:"0 0 349 375",xmlns:"http://www.w3.org/2000/svg",fontFamily:"monospace",fontSize:"20",fontWeight:"normal",letterSpacing:".188"},i.a.createElement("path",{stroke:"#979797",strokeWidth:"4",fill:"none",d:"M2 2h345v371H2z"}),i.a.createElement("rect",{fill:d,x:"19",y:"88",width:"310",height:"31",rx:"8"}),i.a.createElement("path",{stroke:"#979797",strokeWidth:"4",fill:"#D8D8D8",opacity:m?.6:1,d:"M2 2h345v371H2z"}),i.a.createElement("path",{stroke:"#979797",fill:"#979797",d:"M.5.5h348v74H.5z"}),i.a.createElement("text",{fill:"#000",x:"174.5",y:"25"},i.a.createElement("tspan",{dominantBaseline:"middle",textAnchor:"middle"},"Heating element: ",r)),i.a.createElement("text",{fill:"#000",x:"174.5",y:"55"},i.a.createElement("tspan",{dominantBaseline:"middle",textAnchor:"middle"},"Current temperature: ",a.toFixed(0),"\xb0C"))),i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",onChange:function(){return h(!m)},checked:m}),"X-ray"))}a(73);function we(){var e=Object(n.useRef)(null),t=ve(),a=Object(l.a)((function(){return t.isStamperStamping}));return Object(n.useEffect)((function(){if(a){var t=requestAnimationFrame((function(){e.current.classList.add("stamper-stamp")}));return function(){return cancelAnimationFrame(t)}}}),[a]),i.a.createElement("svg",{viewBox:"0 0 161 217",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",stroke:"#979797",fill:"#D8D8D8",className:"stamper",onTransitionEnd:function(){return requestAnimationFrame((function(){return e.current.classList.remove("stamper-stamp")}))},ref:e},i.a.createElement("g",{className:"stamper-arm"},i.a.createElement("path",{strokeWidth:"4",d:"M76 126h10v85H76z"}),i.a.createElement("path",{strokeWidth:"4",d:"M54 205h54v10H54z"})),i.a.createElement("path",{strokeWidth:"5",d:"M102.95 116.5l-10.03 20H69.08l-10.03-20h43.9z"}),i.a.createElement("path",{strokeWidth:"6",d:"M156.866 3l-36.86 113H40.994L4.135 3h152.73z"}))}a(74);function je(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268 79",className:"slide"},i.a.createElement("path",{stroke:"#000",strokeWidth:"12",strokeLinecap:"square",d:"M7.5 7.5 L260 71"})),i.a.createElement("div",{className:"slide-gradient"}))}a(75);function Te(){var e=ve();return Object(l.a)((function(){return e.cookies.map((function(e){return i.a.createElement(v,{key:e.id,isStamped:e.isStamped,location:e.location,baked:e.baked})}))}))}function Se(){var e=Object(n.useState)((function(){return new fe})),t=Object(s.a)(e,1)[0];Object(n.useEffect)((function(){return function(){return t.destroy()}}),[t]);var a=Object(l.a)((function(){return t.isMotorMoving}));return i.a.createElement(ke,{value:t},i.a.createElement("div",{className:a?"biscuit-machine motor-on":"biscuit-machine"},i.a.createElement(y,null),i.a.createElement(Ee,null),i.a.createElement(ye,null),i.a.createElement(we,null),i.a.createElement(Te,null),i.a.createElement(je,null),i.a.createElement(xe,null)))}var Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};Object(z.c)({computedRequiresReaction:!0,observableRequiresReaction:!0,reactionRequiresObservable:!0,enforceActions:"always"});a(76);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Se,null)),document.getElementById("root")),Me()}},[[77,1,2]]]);
//# sourceMappingURL=main.72e71c06.chunk.js.map