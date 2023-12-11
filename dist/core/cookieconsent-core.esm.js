/*!
* CookieConsent 3.0.0-rc.17
* https://github.com/orestbida/cookieconsent/tree/v3
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='data-category';class n{constructor(){this.t={mode:e,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],C:!1,v:null,S:null,h:null,D:'',T:!0,N:!1,j:!0,k:[],O:!1,A:'',I:!1,R:[],F:[],M:[],P:[],J:!1,L:{},U:{},B:{},G:{},H:{},q:[]},this.K={},this.V={W:'cc:onFirstConsent',X:'cc:onConsent',Y:'cc:onChange'}}}const s=new n,c=(e,t)=>e.indexOf(t),r=(e,t)=>-1!==c(e,t),a=e=>Array.isArray(e),i=e=>'string'==typeof e,l=e=>!!e&&'object'==typeof e&&!a(e),f=e=>'function'==typeof e,d=e=>Object.keys(e),_=e=>Array.from(new Set(e)),u=e=>{const t=document.createElement(e);return'button'===e&&(t.type=e),t},p=(e,t,o)=>e.setAttribute(t,o),m=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},C=(e,t,o)=>e.getAttribute(o?'data-'+t:t),g=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=g(n)}return t},v=()=>{const e={},{R:t,L:o,U:n}=s.o;for(const s of t)e[s]=S(n[s],d(o[s]));return e},y=()=>{const e=s.t.cookie.expiresAfterDays;return f(e)?e(s.o.A):e},S=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!r(n,e))).concat(n.filter((e=>!r(o,e))))},h=e=>{s.o.F=_(e),s.o.A=(()=>{let e='custom';const{F:t,R:o,M:n}=s.o,c=t.length;return c===o.length?e='all':c===n.length&&(e='necessary'),e})()},w=(e,t,o)=>{const{Y:n,X:c,W:r,Z:a,$:i,ee:l}=s.K,d=s.V,_={cookie:s.o.p};e===d.W?f(r)&&r(g(_)):e===d.X?f(c)&&c(g(_)):(_.changedCategories=s.o.k,_.changedServices=s.o.G,f(n)&&n(g(_))),((e,t)=>{dispatchEvent(new CustomEvent(e,{detail:t}))})(e,g(_))},D=e=>{const{U:t,G:n,R:c,L:a,q:i,p:l,k:d}=s.o;for(const e of c){const o=n[e]||t[e]||[];for(const n of o){const o=a[e][n];if(!o)continue;const{onAccept:s,onReject:c}=o;!o.te&&r(t[e],n)&&f(s)?(o.te=!0,s()):o.te&&!r(t[e],n)&&f(c)&&(o.te=!1,c())}}if(!s.t.manageScriptTags)return;const _=i,g=e||l.categories||[],v=(e,s)=>{if(s>=e.length)return;const c=i[s];if(c.oe)return v(e,s+1);const a=c.ne,l=c.se,f=c.ce,_=r(g,l),y=!!f&&r(t[l],f);if(!f&&!c.re&&_||!f&&c.re&&!_&&r(d,l)||f&&!c.re&&y||f&&c.re&&!y&&r(n[l]||[],f)){c.oe=!0;const t=C(a,'type',!0);m(a,'type',!!t),m(a,o);let n=C(a,'src',!0);n&&m(a,'src',!0);const r=u('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)p(r,e,a[e]||C(a,e));t&&(r.type=t),n?r.src=n:n=a.src;const i=!!n&&(!t||['text/javascript','module'].includes(t));if(i&&(r.onload=r.onerror=()=>{v(e,++s)}),a.replaceWith(r),i)return}v(e,++s)};v(_,0)},b=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=c(e,t);return o>-1?[e[o]]:[]}},T=e=>{const{hostname:t,protocol:o}=location,{name:n,path:c,domain:a,sameSite:i}=s.t.cookie,l=encodeURIComponent(JSON.stringify(s.o.p)),f=e?(()=>{const e=s.o.h,t=e?new Date-e:0;return 864e5*y()-t})():864e5*y(),d=new Date;d.setTime(d.getTime()+f);let _=n+'='+l+(0!==f?'; expires='+d.toUTCString():'')+'; Path='+c+'; SameSite='+i;r(t,'.')&&(_+='; Domain='+a),'https:'===o&&(_+='; Secure'),document.cookie=_,s.o.p},N=(e,t,o)=>{if(0===e.length)return;const n=o||s.t.cookie.domain,c=t||s.t.cookie.path,r='www.'===n.slice(0,4),a=r&&n.substring(4),i=(e,t)=>{document.cookie=e+'=; path='+c+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)i(t),i(t,n),r&&i(t,a)},j=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(k(e||s.t.cookie.name,!0)),k=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},x=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},E=(o,n=[])=>{((e,t)=>{const{R:o,F:n,M:c,ae:l,B:f,L:_}=s.o;let u=[];if(e){a(e)?u.push(...e):i(e)&&(u='all'===e?o:[e]);for(const e of o)f[e]=r(u,e)?d(_[e]):[]}else u=n;u=u.filter((e=>!r(o,e)||!r(t,e))),u.push(...c),h(u)})(o,n),(e=>{const t=s.o,{B:o,M:n,U:c,L:a,R:i}=t,l=i;t.H=g(c);for(const e of l){const t=a[e],s=d(t),i=o[e]&&o[e].length>0,l=r(n,e);if(0!==s.length){if(c[e]=[],l)c[e].push(...s);else if(i){const t=o[e];c[e].push(...t)}else c[e]=[];c[e]=_(c[e])}}})(),(()=>{const o=s.o;o.k=s.t.mode===t&&o.T?S(o.P,o.F):S(o.F,o.p.categories);let n=o.k.length>0,c=!1;for(const e of o.R)o.G[e]=S(o.U[e],o.H[e]),o.G[e].length>0&&(c=!0);o.S||(o.S=new Date),o.D||(o.D=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:g(o.F),revision:s.t.revision,data:o.v,consentTimestamp:o.S.toISOString(),consentId:o.D,services:g(o.U)};let a=!1;const i=n||c;(o.T||i)&&(o.T&&(o.T=!1,a=!0),o.h=o.h?new Date:o.S,o.p.lastConsentTimestamp=o.h.toISOString(),T(),s.t.autoClearCookies&&(a||i)&&(e=>{const t=s.o,o=x(),n=(e=>{const t=s.o;return(e?t.R:t.k).filter((e=>{const o=t.I[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.G)for(const n of t.G[e]){const s=t.L[e][n].cookies;if(!r(t.U[e],n)&&s)for(const e of s){const t=b(o,e.name);N(t,e.path,e.domain)}}for(const s of n){const n=t.I[s].autoClear,c=n&&n.cookies||[],a=r(t.k,s),i=!r(t.F,s),l=a&&i;if(e?i:l){n.reloadPage&&l&&(t.O=!0);for(const e of c){const t=b(o,e.name);N(t,e.path,e.domain)}}}})(a),D()),a&&(w(s.V.W),w(s.V.X),s.t.mode===e)||(i&&w(s.V.Y),o.O&&(o.O=!1,location.reload()))})()},O=e=>{const t=s.o.T?[]:s.o.F;return r(t,e)},A=(e,t)=>{const{R:o,L:n}=s.o;if(!(e&&t&&i(t)&&r(o,t)&&0!==d(n[t]).length))return!1;E()},I=(e,t)=>{const o=s.o.T?[]:s.o.U[t];return r(o,e)},R=e=>''!==k(e,!0),F=(e,t,o)=>{let n=[];const s=e=>{if(i(e)){let t=k(e);''!==t&&n.push(t)}else n.push(...x(e))};if(a(e))for(let t of e)s(t);else s(e);N(n,t,o)},M=()=>{const{A:e,U:t}=s.o,{accepted:o,rejected:n}=(()=>{const{T:e,F:t,R:o}=s.o;return{accepted:t,rejected:e?[]:o.filter((e=>!r(t,e)))}})();return g({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:v()})},P=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=u('script'),l(t))for(const e in t)p(o,e,t[e]);var s,c;o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,s=document.head,c=o,s.appendChild(c)}))},J=e=>{let t,o=e.value,n=e.mode,c=!1;const r=s.o;if('update'===n){r.v=t=L('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],c=!0)}else!e&&t||t===o||(t=o,c=!0)}else t=o,c=!0;return c&&(r.v=t,r.p.data=t,T(!0)),c},L=(e,t)=>{const o=j(t);return e?o[e]:o},U=e=>{const t=s.t,o=s.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},B=()=>!s.o.T,G=async e=>{const{o:n,t:c,V:f}=s,_=window;if(!_._ccRun){if(_._ccRun=!0,(e=>{const{ie:n,t:c,o:a}=s,i=c,f=a,{cookie:_}=i,u=s.K,p=e.cookie,m=e.categories,g=d(m)||[],v=navigator,y=document;n.le=y,_.domain=location.hostname,f.i=e,f.I=m,f.R=g,u.W=e.onFirstConsent,u.X=e.onConsent,u.Y=e.onChange;const{mode:S,autoClearCookies:h,revision:w,manageScriptTags:D,hideFromBots:b}=e;S===t&&(i.mode=S),'boolean'==typeof h&&(i.autoClearCookies=h),'boolean'==typeof D&&(i.manageScriptTags=D),'number'==typeof w&&w>=0&&(i.revision=w,f.N=!0),!1===b&&(i.hideFromBots=!1),!0===i.hideFromBots&&v&&(f.J=v.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(v.userAgent)||v.webdriver),l(p)&&(i.cookie={..._,...p}),i.autoClearCookies,f.N,i.manageScriptTags,(e=>{const{I:t,L:o,U:n,B:c,M:r}=s.o;for(let a of e){const e=t[a],i=e.services||{},f=l(i)&&d(i)||[];o[a]={},n[a]=[],c[a]=[],e.readOnly&&(r.push(a),n[a]=f),s.ie.fe[a]={};for(let e of f){const t=i[e];t.te=!1,o[a][e]=t}}})(g),(()=>{if(!s.t.manageScriptTags)return;const e=s.o,t=(n=document,c='script['+o+']',n.querySelectorAll(c));var n,c;for(const n of t){let t=C(n,o),s=n.dataset.service||'',c=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),c=!0),'!'===s.charAt(0)&&(s=s.slice(1),c=!0),r(e.R,t)&&(e.q.push({ne:n,oe:!1,re:c,se:t,ce:s}),s)){const o=e.L[t];o[s]||(o[s]={te:!1})}}})()})(e),n.J)return;if((()=>{const e=s.o,o=s.t,n=j(),{categories:c,services:r,consentId:l,consentTimestamp:f,lastConsentTimestamp:d,data:_,revision:u}=n,p=a(c);e.p=n,e.D=l;const m=!!l&&i(l);e.S=f,e.S&&(e.S=new Date(f)),e.h=d,e.h&&(e.h=new Date(d)),e.v=void 0!==_?_:null,e.N&&m&&u!==o.revision&&(e.j=!1),e.T=!(m&&e.j&&e.S&&e.h&&p),e.T,(()=>{const e=s.o;for(const o of e.R){const n=e.I[o];if(n.readOnly||n.enabled&&e.i.mode===t){e.P.push(o);const t=e.L[o]||{};for(let n in t)e.U[o].push(n)}}})(),e.T?o.mode===t&&(e.F=[...e.P]):(e.U={...e.U,...r},h([...e.M,...c])),e.B={...e.U}})(),B())return D(),w(f.X);c.mode===t&&D(n.P)}},H=e=>{const{name:t,path:o,domain:c}=s.t.cookie;e&&F(t,o,c);for(const{de:e,_e:t,ue:o}of s.o.m)e.removeEventListener(t,o);const r=new n;for(const e in s)s[e]=r[e];window._ccRun=!1};export{E as acceptCategory,A as acceptService,O as acceptedCategory,I as acceptedService,F as eraseCookies,U as getConfig,L as getCookie,M as getUserPreferences,P as loadScript,H as reset,G as run,J as setCookieData,B as validConsent,R as validCookie};
