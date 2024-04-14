var Re=Object.defineProperty;var ze=(l,e,t)=>e in l?Re(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var de=(l,e,t)=>(ze(l,typeof e!="symbol"?e+"":e,t),t),We=(l,e,t)=>{if(!e.has(l))throw TypeError("Cannot "+t)};var oe=(l,e,t)=>{if(e.has(l))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(l):e.set(l,t)};var Z=(l,e,t)=>(We(l,e,"access private method"),t);import{s as Ce,p as Ve,e as B,c as I,d as R,f as C,h as _,i as L,u as Ne,r as Ue,v as je,y as p,z as le,A as fe,C as Fe,a as P,b as q,D as De,l as X,q as V,w as Pe,E as Be,F as x,B as te,G as H,g as Q,j as Ke,H as Ie,t as qe,k as Ae}from"../chunks/scheduler.DmCqDPsL.js";import{S as Ee,i as Te,t as ne,a as ie,b as me,d as be,m as ge,e as _e,f as Oe}from"../chunks/index.CqgRTE9c.js";import{e as Xe}from"../chunks/each.D6YF6ztN.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BzAa2y3k.js";import{g as Je}from"../chunks/spread.CN4WR7uZ.js";function Qe(l){let e,t,n;const u=l[15].default,r=Ve(u,l,l[14],null);return{c(){e=B("div"),r&&r.c(),this.h()},l(i){e=I(i,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0});var b=R(e);r&&r.l(b),b.forEach(C),this.h()},h(){_(e,"class",t="radio-group "+l[1]),_(e,"data-testid","radio-group"),_(e,"role","radiogroup"),_(e,"aria-labelledby",l[0])},m(i,b){L(i,e,b),r&&r.m(e,null),n=!0},p(i,[b]){r&&r.p&&(!n||b&16384)&&Ne(r,u,i,i[14],n?je(u,i[14],b,null):Ue(i[14]),null),(!n||b&2&&t!==(t="radio-group "+i[1]))&&_(e,"class",t),(!n||b&1)&&_(e,"aria-labelledby",i[0])},i(i){n||(ne(r,i),n=!0)},o(i){ie(r,i),n=!1},d(i){i&&C(e),r&&r.d(i)}}}const Ye="p-1";function Ze(l,e,t){let n,{$$slots:u={},$$scope:r}=e,{display:i="inline-flex"}=e,{flexDirection:b="flex-row"}=e,{gap:d="gap-1"}=e,{background:a="bg-surface-200-700-token"}=e,{border:T="border-token border-surface-400-500-token"}=e,{rounded:h="rounded-token"}=e,{padding:m="px-4 py-1"}=e,{active:E="variant-filled"}=e,{hover:k="hover:variant-soft"}=e,{color:y=""}=e,{fill:f=""}=e,{regionLabel:v=""}=e,{labelledby:O=""}=e;return p("rounded",h),p("padding",m),p("active",E),p("hover",k),p("color",y),p("fill",f),p("regionLabel",v),l.$$set=c=>{t(16,e=le(le({},e),fe(c))),"display"in c&&t(2,i=c.display),"flexDirection"in c&&t(3,b=c.flexDirection),"gap"in c&&t(4,d=c.gap),"background"in c&&t(5,a=c.background),"border"in c&&t(6,T=c.border),"rounded"in c&&t(7,h=c.rounded),"padding"in c&&t(8,m=c.padding),"active"in c&&t(9,E=c.active),"hover"in c&&t(10,k=c.hover),"color"in c&&t(11,y=c.color),"fill"in c&&t(12,f=c.fill),"regionLabel"in c&&t(13,v=c.regionLabel),"labelledby"in c&&t(0,O=c.labelledby),"$$scope"in c&&t(14,r=c.$$scope)},l.$$.update=()=>{t(1,n=`${Ye} ${i} ${b} ${d} ${a} ${T} ${h} ${e.class??""}`)},e=fe(e),[O,n,i,b,d,a,T,h,m,E,k,y,f,v,r,u]}class pe extends Ee{constructor(e){super(),Te(this,e,Ze,Qe,Ce,{display:2,flexDirection:3,gap:4,background:5,border:6,rounded:7,padding:8,active:9,hover:10,color:11,fill:12,regionLabel:13,labelledby:0})}}function xe(l){let e,t,n,u,r,i,b,d,a,T,h,m=[{type:"radio"},{name:l[1]},{__value:l[2]},l[11](),{tabindex:"-1"}],E={};for(let f=0;f<m.length;f+=1)E=le(E,m[f]);const k=l[21].default,y=Ve(k,l,l[20],null);return a=Fe(l[29][0]),{c(){e=B("label"),t=B("div"),n=B("div"),u=B("input"),r=P(),y&&y.c(),this.h()},l(f){e=I(f,"LABEL",{class:!0});var v=R(e);t=I(v,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-checked":!0,"aria-label":!0,tabindex:!0,title:!0});var O=R(t);n=I(O,"DIV",{class:!0});var c=R(n);u=I(c,"INPUT",{type:!0,name:!0,tabindex:!0}),c.forEach(C),r=q(O),y&&y.l(O),O.forEach(C),v.forEach(C),this.h()},h(){De(u,E),_(n,"class","h-0 w-0 overflow-hidden"),_(t,"class",i="radio-item "+l[8]),_(t,"data-testid","radio-item"),_(t,"role","radio"),_(t,"aria-checked",l[6]),_(t,"aria-label",l[4]),_(t,"tabindex","0"),_(t,"title",l[3]),_(e,"class",b="radio-label "+l[9]+" "+l[5]),a.p(u)},m(f,v){L(f,e,v),X(e,t),X(t,n),X(n,u),u.autofocus&&u.focus(),l[27](u),u.checked=u.__value===l[0],X(t,r),y&&y.m(t,null),d=!0,T||(h=[V(u,"change",l[28]),V(u,"click",l[25]),V(u,"change",l[26]),V(t,"keydown",l[10]),V(t,"keydown",l[22]),V(t,"keyup",l[23]),V(t,"keypress",l[24])],T=!0)},p(f,v){De(u,E=Je(m,[{type:"radio"},(!d||v[0]&2)&&{name:f[1]},(!d||v[0]&4)&&{__value:f[2]},f[11](),{tabindex:"-1"}])),v[0]&1&&(u.checked=u.__value===f[0]),y&&y.p&&(!d||v[0]&1048576)&&Ne(y,k,f,f[20],d?je(k,f[20],v,null):Ue(f[20]),null),(!d||v[0]&256&&i!==(i="radio-item "+f[8]))&&_(t,"class",i),(!d||v[0]&64)&&_(t,"aria-checked",f[6]),(!d||v[0]&16)&&_(t,"aria-label",f[4]),(!d||v[0]&8)&&_(t,"title",f[3]),(!d||v[0]&544&&b!==(b="radio-label "+f[9]+" "+f[5]))&&_(e,"class",b)},i(f){d||(ne(y,f),d=!0)},o(f){ie(y,f),d=!1},d(f){f&&C(e),l[27](null),y&&y.d(f),a.r(),T=!1,Pe(h)}}}const we="flex-auto",$e="text-base text-center cursor-pointer",et="opacity-50 cursor-not-allowed";function tt(l,e,t){let n,u,r,i,b;const d=["group","name","value","title","label","rounded","padding","active","hover","color","fill","regionLabel"];let a=Be(e,d),{$$slots:T={},$$scope:h}=e,{group:m}=e,{name:E}=e,{value:k}=e,{title:y=""}=e,{label:f=""}=e,{rounded:v=x("rounded")}=e,{padding:O=x("padding")}=e,{active:c=x("active")}=e,{hover:W=x("hover")}=e,{color:z=x("color")}=e,{fill:S=x("fill")}=e,{regionLabel:Y=x("regionLabel")}=e,j;function G(s){["Enter","Space"].includes(s.code)&&(s.preventDefault(),j.click())}function F(){return delete a.class,a}const A=[[]];function K(s){te.call(this,l,s)}function o(s){te.call(this,l,s)}function N(s){te.call(this,l,s)}function w(s){te.call(this,l,s)}function $(s){te.call(this,l,s)}function re(s){H[s?"unshift":"push"](()=>{j=s,t(7,j)})}function J(){m=this.__value,t(0,m)}return l.$$set=s=>{t(31,e=le(le({},e),fe(s))),t(30,a=Be(e,d)),"group"in s&&t(0,m=s.group),"name"in s&&t(1,E=s.name),"value"in s&&t(2,k=s.value),"title"in s&&t(3,y=s.title),"label"in s&&t(4,f=s.label),"rounded"in s&&t(12,v=s.rounded),"padding"in s&&t(13,O=s.padding),"active"in s&&t(14,c=s.active),"hover"in s&&t(15,W=s.hover),"color"in s&&t(16,z=s.color),"fill"in s&&t(17,S=s.fill),"regionLabel"in s&&t(5,Y=s.regionLabel),"$$scope"in s&&t(20,h=s.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&5&&t(6,n=k===m),l.$$.dirty[0]&245824&&t(19,u=n?`${c} ${z} ${S}`:W),t(18,r=e.disabled?et:""),t(8,b=`${$e} ${O} ${v} ${u} ${r} ${e.class??""}`)},t(9,i=`${we}`),e=fe(e),[m,E,k,y,f,Y,n,j,b,i,G,F,v,O,c,W,z,S,r,u,h,T,K,o,N,w,$,re,J,A]}class Le extends Ee{constructor(e){super(),Te(this,e,tt,xe,Ce,{group:0,name:1,value:2,title:3,label:4,rounded:12,padding:13,active:14,hover:15,color:16,fill:17,regionLabel:5},null,[-1,-1])}}function He(l){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const t of e)if(t.every(n=>l[n]==="X")||t.every(n=>l[n]==="O"))return!0;return!1}function he(l){return l.map(e=>e.textContent||"")}var ae,ve,ue,ke,se,ye;class lt{constructor(e,t){oe(this,ae);oe(this,ue);oe(this,se);de(this,"difficulty");de(this,"sign");this.difficulty=e,this.sign=t}nextMove(e){switch(this.difficulty){case"easy":return Z(this,ae,ve).call(this,e);case"medium":return Math.random()>.5?Z(this,se,ye).call(this,e):Z(this,ae,ve).call(this,e);case"hard":return Z(this,se,ye).call(this,e);default:return-1}}}ae=new WeakSet,ve=function(e){const t=e.reduce((n,u,r)=>(u==""&&n.push(r),n),[]);return t[Math.floor(Math.random()*t.length)]},ue=new WeakSet,ke=function(e,t,n){const u=n==="X"?"O":"X";if(He(e))return this.sign===n?-10+t:10-t;if(e.every(b=>b!==""))return 0;let r,i;this.sign===n?(r=Math.max,i=-1/0):(r=Math.min,i=1/0);for(let b=0;b<9;b++){if(e[b]!=="")continue;e[b]=n;const d=Z(this,ue,ke).call(this,e,t+1,u);e[b]="",i=r(i,d)}return i},se=new WeakSet,ye=function(e){const t=this.sign==="X"?"O":"X";let n=-1/0,u;for(let r=0;r<9;r++)if(e[r]===""){e[r]=this.sign;const i=Z(this,ue,ke).call(this,e,0,t);e[r]="",i>n&&(n=i,u=r)}return u??-1};function Se(l,e,t){const n=l.slice();return n[26]=e[t],n[27]=e,n[28]=t,n}function nt(l){let e;return{c(){e=qe("X")},l(t){e=Ae(t,"X")},m(t,n){L(t,e,n)},d(t){t&&C(e)}}}function it(l){let e;return{c(){e=qe("O")},l(t){e=Ae(t,"O")},m(t,n){L(t,e,n)},d(t){t&&C(e)}}}function at(l){let e,t,n,u,r,i;function b(h){l[9](h)}let d={name:"justify",value:"X",$$slots:{default:[nt]},$$scope:{ctx:l}};l[0]!==void 0&&(d.group=l[0]),e=new Le({props:d}),H.push(()=>Oe(e,"group",b));function a(h){l[10](h)}let T={name:"justify",value:"O",$$slots:{default:[it]},$$scope:{ctx:l}};return l[0]!==void 0&&(T.group=l[0]),u=new Le({props:T}),H.push(()=>Oe(u,"group",a)),{c(){me(e.$$.fragment),n=P(),me(u.$$.fragment)},l(h){be(e.$$.fragment,h),n=q(h),be(u.$$.fragment,h)},m(h,m){ge(e,h,m),L(h,n,m),ge(u,h,m),i=!0},p(h,m){const E={};m&536870912&&(E.$$scope={dirty:m,ctx:h}),!t&&m&1&&(t=!0,E.group=h[0],Ie(()=>t=!1)),e.$set(E);const k={};m&536870912&&(k.$$scope={dirty:m,ctx:h}),!r&&m&1&&(r=!0,k.group=h[0],Ie(()=>r=!1)),u.$set(k)},i(h){i||(ne(e.$$.fragment,h),ne(u.$$.fragment,h),i=!0)},o(h){ie(e.$$.fragment,h),ie(u.$$.fragment,h),i=!1},d(h){h&&C(n),_e(e,h),_e(u,h)}}}function Ge(l){let e,t="",n=l[28],u,r;const i=()=>l[16](e,n),b=()=>l[16](null,n);function d(){return l[17](l[28])}return{c(){e=B("button"),e.innerHTML=t,this.h()},l(a){e=I(a,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1od6q1x"&&(e.innerHTML=t),this.h()},h(){_(e,"class","btn variant-filled svelte-vuke6f"),e.disabled=!0},m(a,T){L(a,e,T),i(),u||(r=V(e,"click",d),u=!0)},p(a,T){l=a,n!==l[28]&&(b(),n=l[28],i())},d(a){a&&C(e),b(),u=!1,r()}}}function ut(l){let e,t="Tic Tac Toe",n,u,r,i,b="PvP",d,a,T="vs Computer",h,m,E,k,y,f,v="Easy",O,c,W="Medium",z,S,Y="Hard",j,G,F,A,K,o,N="Play again",w,$,re;k=new pe({props:{$$slots:{default:[at]},$$scope:{ctx:l}}});let J=Xe(Array(9)),s=[];for(let g=0;g<J.length;g+=1)s[g]=Ge(Se(l,J,g));return{c(){e=B("h1"),e.textContent=t,n=P(),u=B("div"),r=B("div"),i=B("button"),i.textContent=b,d=P(),a=B("button"),a.textContent=T,h=P(),m=B("div"),E=B("div"),me(k.$$.fragment),y=P(),f=B("button"),f.textContent=v,O=P(),c=B("button"),c.textContent=W,z=P(),S=B("button"),S.textContent=Y,j=P(),G=B("div");for(let g=0;g<s.length;g+=1)s[g].c();F=P(),A=B("div"),K=P(),o=B("button"),o.textContent=N,this.h()},l(g){e=I(g,"H1",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-15q8bjq"&&(e.textContent=t),n=q(g),u=I(g,"DIV",{class:!0});var D=R(u);r=I(D,"DIV",{});var U=R(r);i=I(U,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-102uu6a"&&(i.textContent=b),d=q(U),a=I(U,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-16gnofz"&&(a.textContent=T),U.forEach(C),h=q(D),m=I(D,"DIV",{});var M=R(m);E=I(M,"DIV",{class:!0});var ee=R(E);be(k.$$.fragment,ee),ee.forEach(C),y=q(M),f=I(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-1087hju"&&(f.textContent=v),O=q(M),c=I(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(c)!=="svelte-c4bmxj"&&(c.textContent=W),z=q(M),S=I(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(S)!=="svelte-zcpjs7"&&(S.textContent=Y),M.forEach(C),D.forEach(C),j=q(g),G=I(g,"DIV",{id:!0,class:!0});var Me=R(G);for(let ce=0;ce<s.length;ce+=1)s[ce].l(Me);Me.forEach(C),F=q(g),A=I(g,"DIV",{}),R(A).forEach(C),K=q(g),o=I(g,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(o)!=="svelte-s9qhwn"&&(o.textContent=N),this.h()},h(){_(e,"class","h1"),_(i,"class","btn variant-filled"),_(a,"class","btn variant-filled"),_(E,"class","my-2"),_(f,"class","btn variant-filled"),_(c,"class","btn variant-filled"),_(S,"class","btn variant-filled"),m.hidden=!0,_(u,"class","my-2"),_(G,"id","board"),_(G,"class","svelte-vuke6f"),_(o,"class","btn variant-filled my-2 hidden")},m(g,D){L(g,e,D),L(g,n,D),L(g,u,D),X(u,r),X(r,i),X(r,d),X(r,a),l[8](r),X(u,h),X(u,m),X(m,E),ge(k,E,null),X(m,y),X(m,f),X(m,O),X(m,c),X(m,z),X(m,S),l[14](m),l[15](u),L(g,j,D),L(g,G,D);for(let U=0;U<s.length;U+=1)s[U]&&s[U].m(G,null);l[18](G),L(g,F,D),L(g,A,D),l[19](A),L(g,K,D),L(g,o,D),l[20](o),w=!0,$||(re=[V(i,"click",l[6]),V(a,"click",l[7]),V(f,"click",l[11]),V(c,"click",l[12]),V(S,"click",l[13]),V(o,"click",l[5])],$=!0)},p(g,[D]){const U={};if(D&536870913&&(U.$$scope={dirty:D,ctx:g}),k.$set(U),D&10){J=Xe(Array(9));let M;for(M=0;M<J.length;M+=1){const ee=Se(g,J,M);s[M]?s[M].p(ee,D):(s[M]=Ge(ee),s[M].c(),s[M].m(G,null))}for(;M<s.length;M+=1)s[M].d(1);s.length=J.length}},i(g){w||(ne(k.$$.fragment,g),w=!0)},o(g){ie(k.$$.fragment,g),w=!1},d(g){g&&(C(e),C(n),C(u),C(j),C(G),C(F),C(A),C(K),C(o)),l[8](null),_e(k),l[14](null),l[15](null),Ke(s,g),l[18](null),l[19](null),l[20](null),$=!1,Pe(re)}}}function st(l,e,t){let n="X",u=0,r=null,i="X",b;const d=Array(9).fill(document.createElement("button"));let a={menu:document.createElement("div"),initialGamemodeSelect:document.createElement("div"),botMenu:document.createElement("div"),board:document.createElement("div"),winText:document.createElement("div"),restart:document.createElement("button")};function T(o){if(u+=1,t(1,d[o].textContent=n,d),He(he(d))){h(`${n} won`);return}if(u==9){h("Draw");return}n=n==="X"?"O":"X",t(1,d[o].disabled=!0,d),r!="pvp"&&i!=n&&T(b.nextMove(he(d)))}function h(o){d.forEach(N=>{N&&(N.disabled=!0)}),t(2,a.winText.textContent=o,a),t(2,a.restart.style.display="block",a)}function m(o){r=o,document.getElementById("menu"),d.forEach(N=>{N&&(N.disabled=!1)}),t(2,a.menu.hidden=!0,a),r!="pvp"&&(b=new lt(r,i==="X"?"O":"X"),i=="O"&&T(b.nextMove(he(d))))}function E(){d.forEach(o=>{o.textContent="",o.disabled=!0}),t(2,a.winText.textContent="",a),t(2,a.menu.hidden=!1,a),t(2,a.initialGamemodeSelect.hidden=!1,a),t(2,a.botMenu.hidden=!0,a),t(2,a.restart.style.display="none",a),n="X",u=0,r=null,t(0,i="X")}const k=()=>{m("pvp")},y=()=>{t(2,a.botMenu.hidden=!1,a),t(2,a.initialGamemodeSelect.hidden=!0,a)};function f(o){H[o?"unshift":"push"](()=>{a.initialGamemodeSelect=o,t(2,a)})}function v(o){i=o,t(0,i)}function O(o){i=o,t(0,i)}const c=()=>{m("easy")},W=()=>{m("medium")},z=()=>{m("hard")};function S(o){H[o?"unshift":"push"](()=>{a.botMenu=o,t(2,a)})}function Y(o){H[o?"unshift":"push"](()=>{a.menu=o,t(2,a)})}function j(o,N){H[o?"unshift":"push"](()=>{d[N]=o,t(1,d)})}const G=o=>{T(o)};function F(o){H[o?"unshift":"push"](()=>{a.board=o,t(2,a)})}function A(o){H[o?"unshift":"push"](()=>{a.winText=o,t(2,a)})}function K(o){H[o?"unshift":"push"](()=>{a.restart=o,t(2,a)})}return[i,d,a,T,m,E,k,y,f,v,O,c,W,z,S,Y,j,G,F,A,K]}class mt extends Ee{constructor(e){super(),Te(this,e,st,ut,Ce,{})}}export{mt as component};
