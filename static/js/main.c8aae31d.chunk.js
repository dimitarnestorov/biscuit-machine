(this["webpackJsonpbiscuit-machine"]=this["webpackJsonpbiscuit-machine"]||[]).push([[0],{24:function(e,t,a){e.exports={underExtruder:"0",underStamper:"1",afterStamper:"2",inOven1:"3",inOven2:"4",afterOven:"5",slide:"6"}},30:function(e,t,a){e.exports={tickMilliseconds:"100",movingMilliseconds:"2000",pausedMilliseconds:"2000"}},54:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),o=a.n(i),s=a(15),l=a(20),c=a(36),u=a(70),m=a(72),h=a(30),d=a.n(h),p=(a(54),Number(d.a.cookieTransformTransitionDuration)),f=["m 305.26371,113.80958 c 0.38403,-2.34869 0.67803,-4.72546 0.88202,-7.13032 0.21314,-2.53258 2.03793,-5.09292 2.03989,-7.68102 0.0185,-51.050675 -43.69263,-92.4450081 -95.50115,-92.4450081 -51.80853,0 -93.23004,40.2495071 -93.21151,91.3001821 0,2.375096 -0.48162,5.872696 -0.30003,8.203166 0.20223,2.61609 0.51301,5.20042 0.93235,7.753 z","m 305.26371,113.80958 c 18.31106,-0.1074 43.5971,-0.53988 64.52546,-0.36563 22.34474,-0.57631 51.2027,4.4202 50.74169,-12.46629 0.0202,-20.994599 -92.26315,-14.98101 -207.25545,-14.98101 -114.992291,0 -209.0834923,-4.80881 -208.5979772,13.160987 0,17.496923 51.8022192,14.002373 77.7997292,14.960893 3.70639,0.14531 34.539638,-0.44669 37.628118,-0.30895 z"];function v(e){var t=e.isStamped,a=e.location,i=Object(n.useRef)(null),o=Object(c.useSpring)({config:{duration:800},x:t?1:0}),l=Object(n.useState)(!1),h=Object(s.a)(l,2),d=h[0],v=h[1];return Object(n.useEffect)((function(){v(!0)}),[]),r.a.createElement(m.a,{in:d,timeout:p,classNames:"cookie",nodeRef:i},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 425.24487 118.77472",fill:"#faa21b",stroke:"#979797",strokeWidth:"10","data-location":a,className:"cookie",ref:i},r.a.createElement(u.animated.path,{d:o.x.to({range:[0,1],output:f})})))}a(58);var k,b=[160,6],g=[160,6].join(),y=16*(b[0]+b[1]);function E(){return r.a.createElement("svg",{className:"conveyor-belt",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1307 422",fill:"none"},r.a.createElement("defs",null,r.a.createElement("circle",{id:"tail-pulley-path",cx:"1250",cy:"125",r:"39"}),r.a.createElement("circle",{id:"secondary-pulley-path",cx:"104.5",cy:"125.5",r:"84.5"}),r.a.createElement("circle",{id:"primary-pulley-path",cx:"292",cy:"341",r:"35"}),r.a.createElement("mask",{id:"tail-pulley-mask",width:"78",height:"78",x:"0",y:"0",fill:"#fff",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox"},r.a.createElement("use",{xlinkHref:"#tail-pulley-path"})),r.a.createElement("mask",{id:"secondary-pulley-mask",width:"169",height:"169",x:"0",y:"0",fill:"#fff",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox"},r.a.createElement("use",{xlinkHref:"#secondary-pulley-path"})),r.a.createElement("mask",{id:"primary-pulley-mask",width:"70",height:"70",x:"0",y:"0",fill:"#fff",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox"},r.a.createElement("use",{xlinkHref:"#primary-pulley-path"}))),r.a.createElement("path",{className:"conveyor-belt-path",stroke:"#000",strokeDasharray:g,pathLength:y,strokeDashoffset:"-2",strokeWidth:"4",d:"M91 72h1161c29.271 0 53 23.729 53 53s-23.729 53-53 53H91c-29.271 0-53-23.729-53-53s23.729-53 53-53z"}),r.a.createElement("use",{className:"tail-pulley",fill:"#D8D8D8",stroke:"#979797",strokeDasharray:"26,9",strokeWidth:"14",mask:"url(#tail-pulley-mask)",xlinkHref:"#tail-pulley-path"}),r.a.createElement("use",{className:"secondary-pulley",fill:"#D8D8D8",stroke:"#979797",strokeDasharray:"100,6",strokeWidth:"26",mask:"url(#secondary-pulley-mask)",xlinkHref:"#secondary-pulley-path"}),r.a.createElement("g",{className:"motor",fill:"#48AEDF",stroke:"#335475"},r.a.createElement("circle",{cx:"292",cy:"341",r:"77.5",strokeWidth:"6"}),r.a.createElement("use",{className:"primary-pulley",strokeDasharray:"70,3",strokeWidth:"12",mask:"url(#primary-pulley-mask)",xlinkHref:"#primary-pulley-path"})),r.a.createElement("path",{className:"vee-belt",stroke:"#000",strokeDasharray:"137,4",strokeWidth:"10",d:"M322.185 367.717s0 0 0 0c-14.003 16.036-38.181 18.123-54.724 4.723L47.195 194.028C12.442 165.878 4.33 116.14 28.337 78.407c5.613-8.822 11.763-16.02 18.448-21.591 0 0 0 0 0 0 37.917-31.6 94.272-26.48 125.873 11.438a89.372 89.372 0 017.84 11.004l145.805 241.346c9.019 14.929 7.354 33.975-4.118 47.113 0 0 0 0 0 0z"}))}!function(e){e.On="on",e.Paused="paused",e.Off="off"}(k||(k={}));var x,O,w=k,S=a(26),j=a(19),M=(a(59),a(7)),N=a(9),T=a(4),C=a(73),I=a(24),D=a.n(I);(O=x||(x={}))[O.UnderExtruder=Number(D.a.underExtruder)]="UnderExtruder",O[O.UnderStamper=Number(D.a.underStamper)]="UnderStamper",O[O.AfterStamper=Number(D.a.afterStamper)]="AfterStamper",O[O.InOven1=Number(D.a.inOven1)]="InOven1",O[O.InOven2=Number(D.a.inOven2)]="InOven2",O[O.AfterOven=Number(D.a.afterOven)]="AfterOven",O[O.Slide=Number(D.a.slide)]="Slide";var z,F,P,U,B,H,W,A,L=x,R=Number(d.a.tickMilliseconds),q=Number(d.a.movingMilliseconds),X=Number(d.a.pausedMilliseconds),J=Number("100"),G=Number("100"),K=Number("5");var Q=function(){function e(){Object(M.a)(this,e),this.id=Object(C.a)(),this.location=L.UnderExtruder,this.isStamped=!1}return Object(N.a)(e,[{key:"stamp",value:function(){this.isStamped=!0}},{key:"move",value:function(){if(this.location>=L.Slide)throw new Error("`move` called after `location` is already set to maximum");this.location++}}]),e}();function V(e){return e.location===L.UnderExtruder}var Y=(z=T.b.bound,F=function(){function e(){var t=this;Object(M.a)(this,e),Object(S.a)(this,"state",P,this),Object(S.a)(this,"dough",U,this),Object(S.a)(this,"cookies",B,this),Object(S.a)(this,"shouldMoveIfNotPaused",H,this),this.intervalId=void 0,this.nextTickTimestamp=void 0,this.nextMotorStateChangeTimestamp=void 0,Object(S.a)(this,"isStamperStamping",W,this),Object(S.a)(this,"isMotorMoving",A,this),Object(T.f)((function(){t.reset()}))}return Object(N.a)(e,[{key:"reset",value:function(){clearInterval(this.intervalId),this.shouldMoveIfNotPaused=!1,this.intervalId=0,this.nextTickTimestamp=1/0,this.nextMotorStateChangeTimestamp=1/0,this.isStamperStamping=!1,this.isMotorMoving=!1}},{key:"startInterval",value:function(){var e=this;this.intervalId||(Object(T.f)((function(){e.createCookie();var t=Date.now();e.updateNextTickTimestamp(t),e.updateNextMotorStateChangeTimestamp(t)})),this.intervalId=setInterval(this.handleTick,R))}},{key:"handleTick",value:function(){for(var e=Date.now();this.nextTickTimestamp<=e;)this.shouldMoveIfNotPaused||this.shouldMove||"off"!==this.state?(this.nextMotorStateChangeTimestamp<=this.nextTickTimestamp&&(this.shouldMoveIfNotPaused=!this.shouldMoveIfNotPaused,this.shouldMoveIfNotPaused?(this.isStamperStamping=!1,this.moveConveyor()):(this.createCookie(),this.stampCookie(),this.isMotorMoving=!1),this.updateNextMotorStateChangeTimestamp(this.nextMotorStateChangeTimestamp)),this.updateNextTickTimestamp(this.nextTickTimestamp)):this.reset()}},{key:"updateNextMotorStateChangeTimestamp",value:function(e){this.nextMotorStateChangeTimestamp=e+(this.shouldMoveIfNotPaused?q:X)}},{key:"updateNextTickTimestamp",value:function(e){this.nextTickTimestamp=e+R}},{key:"createCookie",value:function(){"on"===this.state&&(this.dough<K||this.cookies.find(V)||(this.dough=Math.max(this.dough-K,0),this.cookies.push(new Q)))}},{key:"moveConveyor",value:function(){if("paused"!==this.state&&this.shouldMove){for(var e=0,t=this.cookies.length-1;t>=0;t--){var a=this.cookies[t];a.location>=L.Slide?this.cookies.splice(t,1):(a.move(),e++)}this.isMotorMoving=Boolean(e)}}},{key:"stampCookie",value:function(){var e=this.cookies.find((function(e){return 1===e.location}));e&&!e.isStamped&&(e.stamp(),this.isStamperStamping=!0)}},{key:"changeState",value:function(e){this.state=e,this.startInterval()}},{key:"refillExtruder",value:function(){this.dough=J}},{key:"destroy",value:function(){clearInterval(this.intervalId)}},{key:"shouldMove",get:function(){return Boolean(this.cookies.find((function(e){return e.location<=L.Slide})))}}]),e}(),P=Object(j.a)(F.prototype,"state",[T.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return w.Off}}),U=Object(j.a)(F.prototype,"dough",[T.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return G}}),B=Object(j.a)(F.prototype,"cookies",[T.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),H=Object(j.a)(F.prototype,"shouldMoveIfNotPaused",[T.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=Object(j.a)(F.prototype,"isStamperStamping",[T.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=Object(j.a)(F.prototype,"isMotorMoving",[T.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(j.a)(F.prototype,"handleTick",[z],Object.getOwnPropertyDescriptor(F.prototype,"handleTick"),F.prototype),Object(j.a)(F.prototype,"changeState",[T.b],Object.getOwnPropertyDescriptor(F.prototype,"changeState"),F.prototype),Object(j.a)(F.prototype,"refillExtruder",[T.b],Object.getOwnPropertyDescriptor(F.prototype,"refillExtruder"),F.prototype),F),Z=Object(n.createContext)(null);function $(){var e=Object(n.useContext)(Z);if(!e)throw new Error("Machine store not provided");return e}var _=Z.Provider;a(60);function ee(e){var t=e.value,a=$(),i=Object(l.a)((function(){return a.state})),o=Object(n.useCallback)((function(e){return a.changeState(e.target.value)}),[a]);return r.a.createElement("input",{type:"radio",name:"machine-state",value:t,onChange:o,checked:i===t})}function te(){return r.a.createElement("ul",{className:"controls"},r.a.createElement("li",null,r.a.createElement("label",null,r.a.createElement(ee,{value:w.On})," On")),r.a.createElement("li",null,r.a.createElement("label",null,r.a.createElement(ee,{value:w.Paused})," Paused")),r.a.createElement("li",null,r.a.createElement("label",null,r.a.createElement(ee,{value:w.Off})," Off")))}var ae=a(71);a(61);function ne(){var e=$(),t=Object(l.a)((function(){return 1-e.dough/100})),a=Object(c.useSpring)({y:12+95*Object(ae.a)(t)}).y,i=Object(n.useRef)(null);return Object(n.useEffect)((function(){t<=0||requestAnimationFrame((function(){i.current.classList.add("extruder-extruding")}))}),[t]),r.a.createElement("div",{className:"extruder",ref:i},r.a.createElement("svg",{viewBox:"0 0 161 139",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",className:"extruder-svg"},r.a.createElement(u.animated.mask,{id:"extruder-contents-mask",y:a,maskUnits:"userSpaceOnUse"},r.a.createElement("rect",{width:"129",x:"16",y:"12",height:95,fill:"#FFFFFF"})),r.a.createElement("path",{stroke:"#979797",strokeWidth:"5",d:"M102.95 116.5l-10.03 20H69.08l-10.03-20h43.9z"}),r.a.createElement("path",{stroke:"#979797",strokeWidth:"6",d:"M156.866 3l-36.86 113H40.994L4.135 3h152.73z"}),r.a.createElement("path",{fill:"#FFA300",d:"M16 12h129l-31.103 95H47.103z",mask:"url(#extruder-contents-mask)"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:0===t?"extruder-refill extruder-refill-hide":"extruder-refill",onClick:function(){return e.refillExtruder()},role:"button","aria-label":"Refill Extruder"},r.a.createElement("path",{d:"M50 25c0 4.533-1.117 8.717-3.35 12.55s-5.267 6.867-9.1 9.1C33.717 48.883 29.533 50 25 50c-4.533 0-8.717-1.117-12.55-3.35s-6.867-5.267-9.1-9.1C1.117 33.717 0 29.533 0 25c0-4.533 1.117-8.717 3.35-12.55s5.267-6.867 9.1-9.1C16.283 1.117 20.467 0 25 0c4.533 0 8.717 1.117 12.55 3.35s6.867 5.267 9.1 9.1C48.883 16.283 50 20.467 50 25zm-13 4l9-9h-6c-1-3.067-2.967-5.617-5.9-7.65-2.933-2.033-6.05-3.033-9.35-3-4.367 0-8.1 1.533-11.2 4.6-3.1 3.067-4.65 6.8-4.65 11.2 0 4.4 1.55 8.117 4.65 11.15 3.1 3.033 6.833 4.583 11.2 4.65 4.367.067 8.083-1.467 11.15-4.6l-3.1-3.55C30.6 34.933 28 36 25 36c-3.033 0-5.617-1.083-7.75-3.25S14.033 28 14 25c-.033-3 1.05-5.6 3.25-7.8S22.033 13.933 25 14c3.167 0 5.767 1.067 7.8 3.2.267.267.467.533.6.8.133.267.233.617.3 1.05.067.433.167.75.3.95h-6l9 9z"})),r.a.createElement("div",{className:"extruder-dough",onAnimationEnd:function(){return requestAnimationFrame((function(){return i.current.classList.remove("extruder-extruding")}))}}))}a(62);function re(){var e=Object(n.useRef)(null),t=$(),a=Object(l.a)((function(){return t.isStamperStamping}));return Object(n.useEffect)((function(){if(a){var t=requestAnimationFrame((function(){e.current.classList.add("stamper-stamp")}));return function(){return cancelAnimationFrame(t)}}}),[a]),r.a.createElement("svg",{viewBox:"0 0 161 217",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",stroke:"#979797",fill:"#D8D8D8",className:"stamper",onTransitionEnd:function(){return requestAnimationFrame((function(){return e.current.classList.remove("stamper-stamp")}))},ref:e},r.a.createElement("g",{className:"stamper-arm"},r.a.createElement("path",{strokeWidth:"4",d:"M76 126h10v85H76z"}),r.a.createElement("path",{strokeWidth:"4",d:"M54 205h54v10H54z"})),r.a.createElement("path",{strokeWidth:"5",d:"M102.95 116.5l-10.03 20H69.08l-10.03-20h43.9z"}),r.a.createElement("path",{strokeWidth:"6",d:"M156.866 3l-36.86 113H40.994L4.135 3h152.73z"}))}a(63);function ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268 79",className:"slide"},r.a.createElement("path",{stroke:"#000",strokeWidth:"12",strokeLinecap:"square",d:"M7.5 7.5 L260 71"})),r.a.createElement("div",{className:"slide-gradient"}))}a(64);function oe(){var e=$();return Object(l.a)((function(){return e.cookies.map((function(e){return r.a.createElement(v,{key:e.id,isStamped:e.isStamped,location:e.location})}))}))}function se(){var e=Object(n.useState)((function(){return new Y})),t=Object(s.a)(e,1)[0];Object(n.useEffect)((function(){return function(){return t.destroy()}}),[t]);var a=Object(l.a)((function(){return t.isMotorMoving}));return r.a.createElement(_,{value:t},r.a.createElement("div",{className:a?"biscuit-machine motor-on":"biscuit-machine"},r.a.createElement(E,null),r.a.createElement(te,null),r.a.createElement(ne,null),r.a.createElement(re,null),r.a.createElement(oe,null),r.a.createElement(ie,null)))}var le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))};Object(T.c)({computedRequiresReaction:!0,observableRequiresReaction:!0,reactionRequiresObservable:!0,enforceActions:"always"});a(65);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),le()}},[[66,1,2]]]);
//# sourceMappingURL=main.c8aae31d.chunk.js.map