/*! For license information please see component---src-templates-post-template-tsx-c37de47b01aceca2b579.js.LICENSE.txt */
"use strict";(self.webpackChunkydblog=self.webpackChunkydblog||[]).push([[133],{6363:function(t,n,e){e.r(n),e.d(n,{default:function(){return yn}});var r=e(7196),a=e(7462),i=e(1008),o=e(3723);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){c(t,n,e[n])}))}return t}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(){},d={},m={},h={mark:p,measure:p};try{"undefined"!=typeof window&&(d=window),"undefined"!=typeof document&&(m=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(h=performance)}catch(vn){}var g=(d.navigator||{}).userAgent,b=void 0===g?"":g,y=d,v=m,w=h,x=(y.document,!!v.documentElement&&!!v.head&&"function"==typeof v.addEventListener&&"function"==typeof v.createElement),k=(~b.indexOf("MSIE")||b.indexOf("Trident/"),"___FONT_AWESOME___"),O="fa",z="svg-inline--fa",j="data-fa-i2svg",P=(function(){try{return!0}catch(vn){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),I=P.concat([11,12,13,14,15,16,17,18,19,20]),A={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},C=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",A.GROUP,A.SWAP_OPACITY,A.PRIMARY,A.SECONDARY].concat(P.map((function(t){return"".concat(t,"x")}))).concat(I.map((function(t){return"w-".concat(t)}))),y.FontAwesomeConfig||{});if(v&&"function"==typeof v.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var n=u(t,2),e=n[0],r=n[1],a=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var n=v.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}(e));null!=a&&(C[r]=a)}))}var M=f({},{familyPrefix:O,replacementClass:z,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},C);M.autoReplaceSvg||(M.observeMutations=!1);var E=f({},M);y.FontAwesomeConfig=E;var S=y||{};S[k]||(S[k]={}),S[k].styles||(S[k].styles={}),S[k].hooks||(S[k].hooks={}),S[k].shims||(S[k].shims=[]);var _=S[k],N=[];x&&((v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState)||v.addEventListener("DOMContentLoaded",(function t(){v.removeEventListener("DOMContentLoaded",t),1,N.map((function(t){return t()}))})));var T,Z="pending",L="settled",R="fulfilled",D="rejected",Y=function(){},W=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,U="undefined"==typeof setImmediate?setTimeout:setImmediate,X=[];function F(){for(var t=0;t<X.length;t++)X[t][0](X[t][1]);X=[],T=!1}function B(t,n){X.push([t,n]),T||(T=!0,U(F,0))}function H(t){var n=t.owner,e=n._state,r=n._data,a=t[e],i=t.then;if("function"==typeof a){e=R;try{r=a(r)}catch(vn){K(i,vn)}}q(i,r)||(e===R&&G(i,r),e===D&&K(i,r))}function q(t,n){var e;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===s(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(r){e||(e=!0,n===r?V(t,r):G(t,r))}),(function(n){e||(e=!0,K(t,n))})),!0}}catch(vn){return e||K(t,vn),!0}return!1}function G(t,n){t!==n&&q(t,n)||V(t,n)}function V(t,n){t._state===Z&&(t._state=L,t._data=n,B(Q,t))}function K(t,n){t._state===Z&&(t._state=L,t._data=n,B($,t))}function J(t){t._then=t._then.forEach(H)}function Q(t){t._state=R,J(t)}function $(t){t._state=D,J(t),!t._handled&&W&&e.g.process.emit("unhandledRejection",t._data,t)}function tt(t){e.g.process.emit("rejectionHandled",t)}function nt(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof nt==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,n){function e(t){K(n,t)}try{t((function(t){G(n,t)}),e)}catch(vn){e(vn)}}(t,this)}nt.prototype={constructor:nt,_state:Z,_then:null,_data:void 0,_handled:!1,then:function(t,n){var e={owner:this,then:new this.constructor(Y),fulfilled:t,rejected:n};return!n&&!t||this._handled||(this._handled=!0,this._state===D&&W&&B(tt,this)),this._state===R||this._state===D?B(H,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}},nt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new nt((function(n,e){var r=[],a=0;function i(t){return a++,function(e){r[t]=e,--a||n(r)}}for(var o,s=0;s<t.length;s++)(o=t[s])&&"function"==typeof o.then?o.then(i(s),e):r[s]=o;a||n(r)}))},nt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new nt((function(n,e){for(var r,a=0;a<t.length;a++)(r=t[a])&&"function"==typeof r.then?r.then(n,e):n(r)}))},nt.resolve=function(t){return t&&"object"===s(t)&&t.constructor===nt?t:new nt((function(n){n(t)}))},nt.reject=function(t){return new nt((function(n,e){e(t)}))};var et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rt(t){if(t&&x){var n=v.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=v.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return v.head.insertBefore(n,r),t}}var at="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function it(){for(var t=12,n="";t-- >0;)n+=at[62*Math.random()|0];return n}function ot(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function st(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,": ").concat(t[e],";")}),"")}function lt(t){return t.size!==et.size||t.x!==et.x||t.y!==et.y||t.rotate!==et.rotate||t.flipX||t.flipY}function ct(t){var n=t.transform,e=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var ft={x:0,y:0,width:"100%",height:"100%"};function ut(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function pt(t){var n=t.icons,e=n.main,r=n.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,p=t.extra,d=t.watchable,m=void 0!==d&&d,h=r.found?r:e,g=h.width,b=h.height,y="fak"===a,v=y?"":"fa-w-".concat(Math.ceil(g/b*16)),w=[E.replacementClass,i?"".concat(E.familyPrefix,"-").concat(i):"",v].filter((function(t){return-1===p.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(p.classes).join(" "),x={children:[],attributes:f({},p.attributes,{"data-prefix":a,"data-icon":i,class:w,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})},k=y&&!~p.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};m&&(x.attributes[j]=""),l&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||it())},children:[l]});var O=f({},x,{prefix:a,iconName:i,main:e,mask:r,maskId:c,transform:o,symbol:s,styles:f({},k,p.styles)}),z=r.found&&e.found?function(t){var n,e=t.children,r=t.attributes,a=t.main,i=t.mask,o=t.maskId,s=t.transform,l=a.width,c=a.icon,u=i.width,p=i.icon,d=ct({transform:s,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:f({},ft,{fill:"white"})},h=c.children?{children:c.children.map(ut)}:{},g={tag:"g",attributes:f({},d.inner),children:[ut(f({tag:c.tag,attributes:f({},c.attributes,d.path)},h))]},b={tag:"g",attributes:f({},d.outer),children:[g]},y="mask-".concat(o||it()),v="clip-".concat(o||it()),w={tag:"mask",attributes:f({},ft,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,b]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(n=p,"g"===n.tag?n.children:[n])},w]};return e.push(x,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},ft)}),{children:e,attributes:r}}(O):function(t){var n=t.children,e=t.attributes,r=t.main,a=t.transform,i=st(t.styles);if(i.length>0&&(e.style=i),lt(a)){var o=ct({transform:a,containerWidth:r.width,iconWidth:r.width});n.push({tag:"g",attributes:f({},o.outer),children:[{tag:"g",attributes:f({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f({},r.icon.attributes,o.path)}]}]})}else n.push(r.icon);return{children:n,attributes:e}}(O),P=z.children,I=z.attributes;return O.children=P,O.attributes=I,s?function(t){var n=t.prefix,e=t.iconName,r=t.children,a=t.attributes,i=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f({},a,{id:!0===i?"".concat(n,"-").concat(E.familyPrefix,"-").concat(e):i}),children:r}]}]}(O):function(t){var n=t.children,e=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(lt(o)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};a.style=st(f({},i,{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}(O)}var dt=function(){},mt=(E.measurePerformance&&w&&w.mark&&w.measure,function(t,n,e,r){var a,i,o,s=Object.keys(t),l=s.length,c=void 0!==r?function(t,n){return function(e,r,a,i){return t.call(n,e,r,a,i)}}(n,r):n;for(void 0===e?(a=1,o=t[s[0]]):(a=0,o=e);a<l;a++)o=c(o,t[i=s[a]],i,t);return o});function ht(t,n){var e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==e&&e,a=Object.keys(n).reduce((function(t,e){var r=n[e];return!!r.icon?t[r.iconName]=r.icon:t[e]=r,t}),{});"function"!=typeof _.hooks.addPack||r?_.styles[t]=f({},_.styles[t]||{},a):_.hooks.addPack(t,a),"fas"===t&&ht("fa",n)}var gt=_.styles,bt=_.shims,yt=function(){var t=function(t){return mt(gt,(function(n,e,r){return n[r]=mt(e,t,{}),n}),{})};t((function(t,n,e){return n[3]&&(t[n[3]]=e),t})),t((function(t,n,e){var r=n[2];return t[e]=e,r.forEach((function(n){t[n]=e})),t}));var n="far"in gt;mt(bt,(function(t,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||n||(a="fas"),t[r]={prefix:a,iconName:i},t}),{})};yt();_.styles;function vt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}function wt(t){var n=t.tag,e=t.attributes,r=void 0===e?{}:e,a=t.children,i=void 0===a?[]:a;return"string"==typeof t?ot(t):"<".concat(n," ").concat(function(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,'="').concat(ot(t[e]),'" ')}),"").trim()}(r),">").concat(i.map(wt).join(""),"</").concat(n,">")}var xt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,n){var e=n.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return t.flipX=!0,t;if(r&&"v"===a)return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(r){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a}return t}),n):n};function kt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}kt.prototype=Object.create(Error.prototype),kt.prototype.constructor=kt;var Ot={fill:"currentColor"},zt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},jt={tag:"path",attributes:f({},Ot,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Pt=f({},zt,{attributeName:"opacity"});f({},Ot,{cx:"256",cy:"364",r:"28"}),f({},zt,{attributeName:"r",values:"28;14;28;28;14;28;"}),f({},Pt,{values:"1;0;1;1;0;1;"}),f({},Ot,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),f({},Pt,{values:"1;0;0;0;0;1;"}),f({},Ot,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),f({},Pt,{values:"0;0;1;1;0;0;"}),_.styles;function It(t){var n=t[0],e=t[1],r=u(t.slice(4),1)[0];return{found:!0,width:n,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(E.familyPrefix,"-").concat(A.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.familyPrefix,"-").concat(A.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(E.familyPrefix,"-").concat(A.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}_.styles;var At='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Ct(){var t=O,n=z,e=E.familyPrefix,r=E.replacementClass,a=At;if(e!==t||r!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(r))}return a}var Mt=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var n,e,r;return n=t,e=[{key:"add",value:function(){for(var t=this,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(n){t.definitions[n]=f({},t.definitions[n]||{},a[n]),ht(n,a[n]),yt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var e=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(e).map((function(n){var r=e[n],a=r.prefix,i=r.iconName,o=r.icon;t[a]||(t[a]={}),t[a][i]=o})),t}}],e&&l(n.prototype,e),r&&l(n,r),t}();function Et(){E.autoAddCss&&!Zt&&(rt(Ct()),Zt=!0)}function St(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return wt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(x){var n=v.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function _t(t){var n=t.prefix,e=void 0===n?"fa":n,r=t.iconName;if(r)return vt(Tt.definitions,e,r)||vt(_.styles,e,r)}var Nt,Tt=new Mt,Zt=!1,Lt={transform:function(t){return xt(t)}},Rt=(Nt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.transform,r=void 0===e?et:e,a=n.symbol,i=void 0!==a&&a,o=n.mask,s=void 0===o?null:o,l=n.maskId,c=void 0===l?null:l,u=n.title,p=void 0===u?null:u,d=n.titleId,m=void 0===d?null:d,h=n.classes,g=void 0===h?[]:h,b=n.attributes,y=void 0===b?{}:b,v=n.styles,w=void 0===v?{}:v;if(t){var x=t.prefix,k=t.iconName,O=t.icon;return St(f({type:"icon"},t),(function(){return Et(),E.autoA11y&&(p?y["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(m||it()):(y["aria-hidden"]="true",y.focusable="false")),pt({icons:{main:It(O),mask:s?It(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:f({},et,r),symbol:i,title:p,maskId:c,titleId:m,extra:{attributes:y,styles:w,classes:g}})}))}},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(t||{}).icon?t:_t(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:_t(r||{})),Nt(e,f({},n,{mask:r}))}),Dt=e(5697),Yt=e.n(Dt),Wt=e(7294);function Ut(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Xt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Ut(Object(e),!0).forEach((function(n){Bt(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ut(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function Ft(t){return Ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ft(t)}function Bt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ht(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function qt(t){return function(t){if(Array.isArray(t))return Gt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return Gt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Gt(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Vt(t){return n=t,(n-=0)==n?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,n){return n?n.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var n}var Kt=["style"];var Jt=!1;try{Jt=!0}catch(vn){}function Qt(t){return t&&"object"===Ft(t)&&t.prefix&&t.iconName&&t.icon?t:Lt.icon?Lt.icon(t):null===t?null:t&&"object"===Ft(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function $t(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Bt({},t,n):{}}var tn=["forwardedRef"];function nn(t){var n=t.forwardedRef,e=Ht(t,tn),r=e.icon,a=e.mask,i=e.symbol,o=e.className,s=e.title,l=e.titleId,c=e.maskId,f=Qt(r),u=$t("classes",[].concat(qt(function(t){var n,e=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,u=t.pulse,p=t.fixedWidth,d=t.inverse,m=t.border,h=t.listItem,g=t.flip,b=t.size,y=t.rotation,v=t.pull,w=(Bt(n={"fa-beat":e,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":d,"fa-border":m,"fa-li":h,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(b),null!=b),Bt(n,"fa-rotate-".concat(y),null!=y&&0!==y),Bt(n,"fa-pull-".concat(v),null!=v),Bt(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(e)),qt(o.split(" ")))),p=$t("transform","string"==typeof e.transform?Lt.transform(e.transform):e.transform),d=$t("mask",Qt(a)),m=Rt(f,Xt(Xt(Xt(Xt({},u),p),d),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!m)return function(){var t;!Jt&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",f),null;var h=m.abstract,g={ref:n};return Object.keys(e).forEach((function(t){nn.defaultProps.hasOwnProperty(t)||(g[t]=e[t])})),en(h[0],g)}nn.displayName="FontAwesomeIcon",nn.propTypes={beat:Yt().bool,border:Yt().bool,beatFade:Yt().bool,bounce:Yt().bool,className:Yt().string,fade:Yt().bool,flash:Yt().bool,mask:Yt().oneOfType([Yt().object,Yt().array,Yt().string]),maskId:Yt().string,fixedWidth:Yt().bool,inverse:Yt().bool,flip:Yt().oneOf([!0,!1,"horizontal","vertical","both"]),icon:Yt().oneOfType([Yt().object,Yt().array,Yt().string]),listItem:Yt().bool,pull:Yt().oneOf(["right","left"]),pulse:Yt().bool,rotation:Yt().oneOf([0,90,180,270]),shake:Yt().bool,size:Yt().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Yt().bool,spinPulse:Yt().bool,spinReverse:Yt().bool,symbol:Yt().oneOfType([Yt().bool,Yt().string]),title:Yt().string,titleId:Yt().string,transform:Yt().oneOfType([Yt().string,Yt().object]),swapOpacity:Yt().bool},nn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var en=function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return t(n,e)})),i=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t.attrs.className=r,delete e.attributes.class;break;case"style":t.attrs.style=r.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,n){var e,r=n.indexOf(":"),a=Vt(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:t[a]=i,t}),{});break;default:0===n.indexOf("aria-")||0===n.indexOf("data-")?t.attrs[n.toLowerCase()]=r:t.attrs[Vt(n)]=r}return t}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,l=Ht(r,Kt);return i.attrs.style=Xt(Xt({},i.attrs.style),s),n.apply(void 0,[e.tag,Xt(Xt({},i.attrs),l)].concat(qt(a)))}.bind(null,Wt.createElement),rn=e(8014),an=e(3431);const on=(0,i.Z)("div",{target:"e1hgx18e3"})({name:"m1156n",styles:"display:flex;flex-direction:column;width:768px;height:100%;margin:0 auto;padding:60px 0;color:#ffffff;@media (max-width: 768px){width:100%;padding:40px 20px;}"}),sn=(0,i.Z)("div",{target:"e1hgx18e2"})({name:"gywgo7",styles:"display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:#ffffff;color:#000000;font-size:22px;cursor:pointer;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);@media (max-width: 768px){width:30px;height:30px;font-size:18px;}"}),ln=(0,i.Z)("div",{target:"e1hgx18e1"})({name:"gn4qtp",styles:"display:-webkit-box;overflow:hidden;overflow-wrap:break-word;margin-top:auto;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:45px;font-weight:800;@media (max-width: 768px){font-size:30px;}"}),cn=(0,i.Z)("div",{target:"e1hgx18e0"})({name:"3gcnt2",styles:"display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-size:18px;font-weight:700;@media (max-width: 768px){flex-direction:column;align-items:flex-start;font-size:15px;font-weight:400;}"});var fn=function(t){let{title:n,date:e,categories:r}=t;return(0,an.tZ)(on,null,(0,an.tZ)(sn,{onClick:()=>window.history.back()},(0,an.tZ)(nn,{icon:rn.acZ})),(0,an.tZ)(ln,null,n),(0,an.tZ)(cn,null,(0,an.tZ)("div",null,r.join(" / ")),(0,an.tZ)("div",null,e)))};const un=(0,i.Z)("div",{target:"ek190do1"})({name:"16cz9yp",styles:"position:relative;width:100%;height:400px;@media (max-width: 768px){height:300px;}"}),pn=(0,i.Z)((t=>(0,an.tZ)(o.G,(0,a.Z)({},t,{style:{position:"absolute"}}))),{target:"ek190do0"})({name:"1bjn9yo",styles:"z-index:-1;width:100%;height:400px;object-fit:cover;filter:brightness(0.25);@media (max-width: 768px){height:300px;}"});var dn=function(t){let{title:n,date:e,categories:r,thumbnail:a}=t;return(0,an.tZ)(un,null,(0,an.tZ)(pn,{image:a,alt:"thumbnail"}),(0,an.tZ)(fn,{title:n,date:e,categories:r}))};const mn=(0,i.Z)("div",{target:"e1rfwbgj0"})({name:"uo146q",styles:"display:flex;flex-direction:column;width:768px;margin:0 auto;padding:100px 0;word-break:break-all;line-height:1.8;font-size:16px;font-weight:400;p{padding:3px 0;}h1,h2,h3{font-weight:800;margin-bottom:30px;}*+h1,*+h2,*+h3{margin-top:80px;}hr+h1,hr+h2,hr+h3{margin-top:0;}h1{font-size:30px;}h2{font-size:25px;}h3{font-size:20px;}blockquote{margin:30px 0;padding:5px 15px;border-left:2px solid #000000;font-weight:800;}ol,ul{margin-left:20px;padding:30px 0;}hr{border:1px solid #000000;margin:100px 0;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{margin:30px 0;padding:15px;font-size:15px;::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.5);border-radius:3px;}}code[class*='language-'],pre[class*='language-']{tab-size:2;}@media (max-width: 768px){width:100%;padding:80px 20px;line-height:1.6;font-size:14px;h1{font-size:23px;}h2{font-size:20px;}h3{font-size:17px;}img{width:100%;}hr{margin:50px 0;}}"});var hn=function(t){let{html:n}=t;return(0,an.tZ)(mn,{dangerouslySetInnerHTML:{__html:n}})};const gn=(0,i.Z)("div",{target:"e16eukfd0"})({name:"hx9xpc",styles:"@media (max-width: 768px){padding:0 20px;}"});var bn=function(){const t=(0,Wt.createRef)();return(0,Wt.useEffect)((()=>{if(null===t.current)return;const n=document.createElement("script"),e={src:"https://utteranc.es/client.js",repo:"[username]/[username].github.io","issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"};Object.entries(e).forEach((t=>{let[e,r]=t;n.setAttribute(e,r)})),t.current.appendChild(n)}),[]),(0,an.tZ)(gn,{ref:t})};var yn=function(t){let{data:{allMarkdownRemark:{edges:n}},location:{href:e}}=t;const{node:{html:a,frontmatter:{title:i,summary:o,date:s,categories:l,thumbnail:{childImageSharp:{gatsbyImageData:c},publicURL:f}}}}=n[0];return(0,an.tZ)(r.Z,{title:i,description:o,url:e,image:f},(0,an.tZ)(dn,{title:i,date:s,categories:l,thumbnail:c}),(0,an.tZ)(hn,{html:a}),(0,an.tZ)(bn,null))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-c37de47b01aceca2b579.js.map