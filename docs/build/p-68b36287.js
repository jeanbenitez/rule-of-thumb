let e,t,n,l=!1,o=!1,s=!1,r=null,i=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,f=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},p=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),d=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),$={},w="http://www.w3.org/1999/xlink",h=new WeakMap,b=e=>"sc-"+e,y={},v=e=>"object"==(e=typeof e)||"function"===e,_=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!v(l))&&(l+=""),r&&i?c[c.length-1].o+=l:c.push(r?k(null,l):l),i=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,g);const f=k(e,null);return f.s=t,c.length>0&&(f.u=c),f.p=o,f.$=s,f},k=(e,t)=>({t:0,h:e,o:t,v:null,u:null,s:null,p:null,$:null}),j={},g={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(U)},R=e=>({vattrs:e.s,vchildren:e.u,vkey:e.p,vname:e.$,vtag:e.h,vtext:e.o}),U=e=>{const t=k(e.vtag,e.vtext);return t.s=e.vattrs,t.u=e.vchildren,t.p=e.vkey,t.$=e.vname,t},M=(e,t,n,l,o,s)=>{if(n!==l){let i=pe(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=L(n),s=L(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=v(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?f?e.removeAttributeNS(w,t):e.removeAttribute(t):(!i||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(w,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):pe(c,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},S=/\s/,L=e=>e?e.split(S):[],C=(e,t,n,l)=>{const o=11===t.v.nodeType&&t.v.host?t.v.host:t.v,s=e&&e.s||y,r=t.s||y;for(l in s)l in r||M(o,l,s[l],void 0,n,t.t);for(l in r)M(o,l,s[l],r[l],n,t.t)},P=(o,r,i,c)=>{let a,u,p,d=r.u[i],m=0;if(l||(s=!0,"slot"===d.h&&(e&&c.classList.add(e+"-s"),d.t|=d.u?2:1)),null!==d.o)a=d.v=f.createTextNode(d.o);else if(1&d.t)a=d.v=f.createTextNode("");else if(a=d.v=f.createElement(2&d.t?"slot-fb":d.h),C(null,d,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),d.u)for(m=0;m<d.u.length;++m)u=P(o,d,m,a),u&&a.appendChild(u);return a["s-hn"]=n,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=d.$||"",p=o&&o.u&&o.u[i],p&&p.h===d.h&&o.v&&x(o.v,!1)),a},x=(e,t)=>{u.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(D(e).insertBefore(e,A(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&x(e,t)}u.t&=-2},O=(e,t,l,o,s,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=P(null,l,s,e),i&&(o[s].v=i,c.insertBefore(i,A(t))))},T=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.v,B(l),o=!0,s["s-ol"]?s["s-ol"].remove():x(s,!0),s.remove())},E=(e,t)=>e.h===t.h&&("slot"===e.h?e.$===t.$:e.p===t.p),A=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,F=(e,t)=>{const n=t.v=e.v,l=e.u,o=t.u,s=t.o;let r;null===s?("slot"===t.h||C(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],p=t[f],d=l.length-1,m=l[0],$=l[d];for(;r<=f&&i<=d;)if(null==u)u=t[++r];else if(null==p)p=t[--f];else if(null==m)m=l[++i];else if(null==$)$=l[--d];else if(E(u,m))F(u,m),u=t[++r],m=l[++i];else if(E(p,$))F(p,$),p=t[--f],$=l[--d];else if(E(u,$))"slot"!==u.h&&"slot"!==$.h||x(u.v.parentNode,!1),F(u,$),e.insertBefore(u.v,p.v.nextSibling),u=t[++r],$=l[--d];else if(E(p,m))"slot"!==u.h&&"slot"!==$.h||x(p.v.parentNode,!1),F(p,m),e.insertBefore(p.v,u.v),p=t[--f],m=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].p&&t[a].p===m.p){c=a;break}c>=0?(s=t[c],s.h!==m.h?o=P(t&&t[i],n,c,e):(F(s,m),t[c]=void 0,o=s.v),m=l[++i]):(o=P(t&&t[i],n,i,e),m=l[++i]),o&&D(u.v).insertBefore(o,A(u.v))}r>f?O(e,null==l[d+1]?null:l[d+1].v,n,l,i,d):i>d&&T(t,r,f)})(n,l,t,o):null!==o?(null!==e.o&&(n.textContent=""),O(n,null,t,o,0,o.length-1)):null!==l&&T(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.o!==s&&(n.data=s)},W=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}W(t)}},q=[],H=e=>{let t,n,l,s,r,i,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(N(n,s)?(r=q.find(e=>e._===n),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.k=t:q.push({k:t,_:n}),n["s-sr"]&&q.map(e=>{N(e._,n["s-sn"])&&(r=q.find(e=>e._===n),r&&!e.k&&(e.k=r.k))})):q.some(e=>e._===n)||q.push({_:n}));1===t.nodeType&&H(t)}},N=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,B=e=>{e.s&&e.s.ref&&e.s.ref(null),e.u&&e.u.map(B)},V=e=>ae(e).j,z=(e,t,n)=>{const l=V(e);return{emit:e=>G(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},G=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},I=(e,t)=>{t&&!e.g&&t["s-p"].push(new Promise(t=>e.g=t))},J=(e,t)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const n=e.R,l=()=>K(e,n,t);let o;return I(e,e.U),t&&(o=te(n,"componentWillLoad")),ne(o,()=>ge(l))},K=(r,i,c)=>{const a=r.j,d=a["s-rc"];c&&(e=>{const t=e.M,n=e.j,l=t.t,o=((e,t)=>{let n=b(t.S),l=we.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=h.get(e=e.head||e);o||h.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(r),((r,i)=>{const c=r.j,a=r.M,d=r.L||k(null,null),m=(e=>e&&e.h===j)(i)?i:_(null,null,i);if(n=c.tagName,a.C&&(m.s=m.s||{},a.C.map(([e,t])=>m.s[t]=c[e])),m.h=null,m.t|=4,r.L=m,m.v=d.v=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=p&&0!=(1&a.t),o=!1,F(d,m),u.t|=1,s){let e,t,n,l,o,s;H(m.v);let r=0;for(;r<q.length;r++)e=q[r],t=e._,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<q.length;r++)if(e=q[r],t=e._,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&W(m.v),u.t&=-2,q.length=0})(r,Q(i)),r.t&=-17,r.t|=2,d&&(d.map(e=>e()),a["s-rc"]=void 0);{const e=a["s-p"],t=()=>Y(r);0===e.length?t():(Promise.all(e).then(t),r.t|=4,e.length=0)}},Q=e=>{try{r=e,e=e.render&&e.render()}catch(t){de(t)}return r=null,e},X=()=>r,Y=e=>{const t=e.j,n=e.R,l=e.U;64&e.t?te(n,"componentDidUpdate"):(e.t|=64,le(t),te(n,"componentDidLoad"),e.P(t),l||ee()),e.g&&(e.g(),e.g=void 0),512&e.t&&ke(()=>J(e,!1)),e.t&=-517},Z=e=>{{const t=ae(e),n=t.j.isConnected;return n&&2==(18&t.t)&&J(t,!1),n}},ee=()=>{le(f.documentElement),ke(()=>G(c,"appload",{detail:{namespace:"app"}}))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){de(l)}},ne=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.classList.add("hydrated"),oe=(e,t,n)=>{if(t.O){e.watchers&&(t.T=e.watchers);const l=Object.entries(t.O),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>ae(this).A.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ae(this),s=o.A.get(t),r=o.t,i=o.R;if(n=((e,t)=>null==e||v(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.O[t][0]),!(8&r&&void 0!==s||n===s)&&(o.A.set(t,n),i)){if(l.T&&128&r){const e=l.T[t];e&&e.map(e=>{try{i[e](n,s,t)}catch(l){de(l)}})}2==(18&r)&&J(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.C.push([e,o]),o})}}return e},se=e=>{te(e,"connectedCallback")},re=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=f.head,r=s.querySelector("meta[charset]"),i=f.createElement("style"),a=[];let d,$=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],S:t[1],O:t[2],D:t[3]};s.O=t[2],s.C=[],s.T={},!p&&1&s.t&&(s.t|=8);const r=s.S,i=class extends HTMLElement{constructor(e){super(e),ue(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){d&&(clearTimeout(d),d=null),$?a.push(this):u.jmp(()=>(e=>{if(0==(1&u.t)){const t=ae(e),n=t.M,l=()=>{};if(1&t.t)se(t.R);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){I(t,t.U=n);break}}n.O&&Object.entries(n.O).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=$e(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.T=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(i){de(i)}t.t&=-9,t.t|=128,e(),se(t.R)}const e=b(n.S);if(!we.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_app("./p-f5bab17b.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=we.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,we.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.U,r=()=>J(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=ae(this).R;te(e,"disconnectedCallback"),te(e,"componentDidUnload")}})())}forceUpdate(){Z(this)}componentOnReady(){return ae(this).F}};s.W=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,oe(i,s,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),$=!1,a.length?a.map(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(ee,30))},ie=(e,t)=>t in $?$[t]:"window"===t?c:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",u.l);return e.origin!==c.location.origin?e.href:e.pathname})():"queue"===t?{write:ge,read:je,tick:{then:e=>ke(e)}}:void 0)),ce=new WeakMap,ae=e=>ce.get(e),fe=(e,t)=>ce.set(t.R=e,t),ue=(e,t)=>{const n={t:0,j:e,M:t,A:new Map};return n.F=new Promise(e=>n.P=e),e["s-p"]=[],e["s-rc"]=[],ce.set(e,n)},pe=(e,t)=>t in e,de=e=>console.error(e),me=new Map,$e=e=>{const t=e.S.replace(/-/g,"_"),n=e.W,l=me.get(n);return l?l[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(me.set(n,e),e[t]),de)},we=new Map,he=[],be=[],ye=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&u.t?ke(_e):u.raf(_e))},ve=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){de(t)}e.length=0},_e=()=>{ve(he),ve(be),(i=he.length>0)&&u.raf(_e)},ke=e=>d().then(e),je=ye(he,!1),ge=ye(be,!0),Re=()=>a&&a.supports&&a.supports("color","var(--c)")?d():__sc_import_app("./p-69b85284.js").then(()=>(u.q=c.__cssshim)?(!1).i():0),Ue=()=>{u.q=c.__cssshim;const e=Array.from(f.querySelectorAll("script")).find(e=>/\/app(\.esm)?\.js($|\?|#)/.test(e.src)||"app"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href,Me(t.resourcesUrl,e),c.customElements?d(t):__sc_import_app("./p-2347dcb6.js").then(()=>t))},Me=(e,t)=>{try{c.__sc_import_app=Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;c.__sc_import_app=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=f.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_app.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(c.__sc_import_app.m),e.remove()}}),l.set(o,s),f.head.appendChild(e)}return s}}};export{j as H,Re as a,re as b,ie as c,X as d,z as e,Z as f,V as g,_ as h,Ue as p,fe as r}