!function(){var e={776:function(e,t,n){var r=n(643);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(673).Z)("4118dda0",r,!0,{})},673:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],l=s[0],o={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};r[l]?r[l].parts.push(o):n.push(r[l]={id:l,parts:[o]})}return n}n.d(t,{Z:function(){return h}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},l=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,a=0,c=!1,u=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,i){c=n,d=i||{};var l=r(e,t);return g(l),function(t){for(var n=[],i=0;i<l.length;i++){var o=l[i];(a=s[o.id]).refs--,n.push(a)}for(t?g(l=r(e,t)):l=[],i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var l=[];for(i=0;i<n.parts.length;i++)l.push(m(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:l}}}}function v(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(f){var i=a++;r=o||(o=v()),t=C.bind(null,r,i,!1),n=C.bind(null,r,i,!0)}else r=v(),t=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function C(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var s=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(s,l[t]):e.appendChild(s)}}function y(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(p,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},643:function(){}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(776),function(e){Craft.UserPermissions=Garnish.Base.extend({$wrapper:null,$selectAllBtn:null,$allCheckboxes:null,init:function(t){this.$wrapper=t,this.$selectAllBtn=e(".select-all",this.$wrapper),this.$allCheckboxes=e("input[type=checkbox]:not(.group-permission)",this.$wrapper),this.addListener(this.$selectAllBtn,"click","toggleSelectAll"),this.addListener(this.$allCheckboxes,"click","toggleCheckbox"),this.updateSelectAllBtn()},toggleSelectAll:function(e){this.canSelectAll()?this.$allCheckboxes.filter(":not(:checked)").trigger("click"):this.$allCheckboxes.filter(":checked").trigger("click"),e.preventDefault()},toggleCheckbox:function(t){var n=e(t.currentTarget);if(n.prop("disabled"))t.preventDefault();else{n.parent("li").find("> ul");var r=n.parent("li").find("> ul > li > input[type=checkbox]:not(.group-permission)");n.prop("checked")?r.prop("disabled",!1):(r.filter(":checked").trigger("click"),r.prop("disabled",!0)),this.updateSelectAllBtn()}},updateSelectAllBtn:function(){this.canSelectAll()?this.$selectAllBtn.text(Craft.t("app","Select All")):this.$selectAllBtn.text(Craft.t("app","Deselect All"))},canSelectAll:function(){return!!this.$allCheckboxes.filter(":not(:checked)").length}});var t=e(".user-permissions");e.each(t,(function(){new Craft.UserPermissions(this)}))}(jQuery)}()}();
//# sourceMappingURL=UserPermissions.js.map