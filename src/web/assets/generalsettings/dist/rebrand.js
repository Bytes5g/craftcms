!function(){var e={92:function(e,t,r){var n=r(30);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,r(673).Z)("d4070728",n,!0,{})},673:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.d(t,{Z:function(){return m}});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,d=!1,c=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,o){d=r,l=o||{};var i=n(e,t);return v(i),function(t){for(var r=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,r.push(u)}for(t?v(i=n(e,t)):i=[],o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete a[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(h(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(h(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:i}}}}function g(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(d)return c;n.parentNode.removeChild(n)}if(p){var o=u++;n=s||(s=g()),t=C.bind(null,n,o,!1),r=C.bind(null,n,o,!0)}else n=g(),t=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function C(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function x(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),l.ssrId&&e.setAttribute(f,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},30:function(){}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e,t,n,o;r(92),t={uploadAction:"rebrand/upload-site-image",deleteAction:"rebrand/delete-site-image",uploadButtonSelector:".btn.upload",deleteButtonSelector:".btn.delete",fileInputSelector:"input[name=image]",uploadParamName:"image"},n=(e=jQuery).extend({},t,{postParameters:{type:"logo"},containerSelector:".cp-image-logo"}),o=e.extend({},t,{postParameters:{type:"icon"},containerSelector:".cp-image-icon",onAfterRefreshImage:function(t){void 0!==t.html&&e("#site-icon").find("> img").attr("src",e(".cp-image-icon .cp-current-image").data("url"))}}),new Craft.ImageUpload(o),new Craft.ImageUpload(n)}()}();
//# sourceMappingURL=rebrand.js.map