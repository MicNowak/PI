(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{76233:function(e,n,t){Promise.resolve().then(t.bind(t,69314))},69314:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var i=t(57437),r=t(80711),o=t(8780);function a(e){for(let n of[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])if(n.every(n=>"X"===e[n])||n.every(n=>"O"===e[n]))return!0;return!1}class l{generateRandomMove(e){let n=e.reduce((e,n,t)=>(""==n&&e.push(t),e),[]);return n[Math.floor(Math.random()*n.length)]}minimax(e,n,t){let i,r;let o="X"===t?"O":"X";if(a(e))return this.sign===t?-10+n:10-n;if(e.every(e=>""!==e))return 0;this.sign===t?(i=Math.max,r=-1/0):(i=Math.min,r=1/0);for(let a=0;a<9;a++){if(""!==e[a])continue;e[a]=t;let l=this.minimax(e,n+1,o);e[a]="",r=i(r,l)}return r}generateOptimalMove(e){let n="X"===this.sign?"O":"X",t=-1/0,i=-1;for(let r=0;r<9;r++)if(""===e[r]){e[r]=this.sign;let o=this.minimax(e,0,n);e[r]="",o>t&&(t=o,i=r)}return i}nextMove(e){switch(this.difficulty){case"easy":default:return this.generateRandomMove(e);case"medium":if(Math.random()>.5)return this.generateOptimalMove(e);return this.generateRandomMove(e);case"hard":return this.generateOptimalMove(e)}}constructor(e,n){this.difficulty=e,this.sign=n}}var s=t(2265);function u(e,n,t){return e(n),new l(n,"X"===t?"O":"X")}function c(e){let{board:n,onClick:t}=e;return(0,i.jsx)("div",{children:n.map((e,o)=>(0,i.jsx)(r.Button,{onClick:()=>t(o),children:n[o]},o))})}function h(){let e;let[n,t]=(0,s.useState)(null),[l,h]=(0,s.useState)("X"),[d,f]=(0,s.useState)(Array(9).fill("")),m="X",v=0,x="";function g(e){console.log(e),x=e,t("end")}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:null===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Button,{onClick:()=>t("pvp"),children:"PvP"}),(0,i.jsx)(r.Button,{onClick:()=>t("ai"),children:"vs Computer"})]}):"ai"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Radio,{value:"X",label:"X",checked:"X"===l,onChange:()=>h("X")}),(0,i.jsx)(o.Radio,{value:"O",label:"O",checked:"O"===l,onChange:()=>h("O")}),(0,i.jsx)(r.Button,{onClick:()=>{e=u(t,"easy",l)},children:"Easy"}),(0,i.jsx)(r.Button,{onClick:()=>{e=u(t,"medium",l)},children:"Medium"}),(0,i.jsx)(r.Button,{onClick:()=>{e=u(t,"hard",l)},children:"Hard"})]}):"end"===n?(0,i.jsx)("p",{children:x}):(0,i.jsx)(c,{board:d,onClick:function t(i){if(v+=1,f(e=>(e[i]=m,e)),a(d)){g("".concat(m," won"));return}if(9==v){g("Draw");return}m="X"===m?"O":"X","pvp"!==n&&l!==m&&t(e.nextMove(d)),console.log(d)}})})})}}},function(e){e.O(0,[648,262,971,69,744],function(){return e(e.s=76233)}),_N_E=e.O()}]);