!function(){var t={133:function(t,e,s){var r=s(231);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals),(0,s(673).Z)("ef0e672c",r,!0,{})},673:function(t,e,s){"use strict";function r(t,e){for(var s=[],r={},i=0;i<e.length;i++){var n=e[i],o=n[0],h={id:t+":"+i,css:n[1],media:n[2],sourceMap:n[3]};r[o]?r[o].parts.push(h):s.push(r[o]={id:o,parts:[h]})}return s}s.d(e,{Z:function(){return f}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=i&&(document.head||document.getElementsByTagName("head")[0]),h=null,a=0,c=!1,u=function(){},l=null,p="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,s,i){c=s,l=i||{};var o=r(t,e);return m(o),function(e){for(var s=[],i=0;i<o.length;i++){var h=o[i];(a=n[h.id]).refs--,s.push(a)}for(e?m(o=r(t,e)):o=[],i=0;i<s.length;i++){var a;if(0===(a=s[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete n[a.id]}}}}function m(t){for(var e=0;e<t.length;e++){var s=t[e],r=n[s.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](s.parts[i]);for(;i<s.parts.length;i++)r.parts.push(S(s.parts[i]));r.parts.length>s.parts.length&&(r.parts.length=s.parts.length)}else{var o=[];for(i=0;i<s.parts.length;i++)o.push(S(s.parts[i]));n[s.id]={id:s.id,refs:1,parts:o}}}}function g(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function S(t){var e,s,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(d){var i=a++;r=h||(h=g()),e=y.bind(null,r,i,!1),s=y.bind(null,r,i,!0)}else r=g(),e=C.bind(null,r),s=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else s()}}var $,v=($=[],function(t,e){return $[t]=e,$.filter(Boolean).join("\n")});function y(t,e,s,r){var i=s?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var n=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}function C(t,e){var s=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(p,e.id),i&&(s+="\n/*# sourceURL="+i.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}},231:function(){}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={id:r,exports:{}};return t[r](n,n.exports,s),n.exports}s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,{a:e}),e},s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";s(133),function(t){Craft.CraftSupportWidget=Garnish.Base.extend({widgetId:0,envInfo:null,loading:!1,$widget:null,$pane:null,$screens:null,$currentScreen:null,$nextScreen:null,screens:null,currentScreen:null,$helpBody:null,$feedbackBody:null,init:function(e,s){this.widgetId=e,this.envInfo=s,Craft.CraftSupportWidget.widgets[this.widgetId]=this,this.$widget=t("#widget"+e),this.$pane=this.$widget.find("> .front > .pane"),this.$screens=this.$pane.find("> .body > .cs-screen"),this.screens={},this.$currentScreen=this.initScreen(Craft.CraftSupportWidget.SCREEN_HOME).$screen},getScreen:function(t){return this.$screens.filter(".cs-screen-"+t+":first")},initScreen:function(t){return void 0===this.screens[t]?this.screens[t]=this.loadScreen(t):this.screens[t].reinit(),this.screens[t]},loadScreen:function(t){var e=this.getScreen(t);switch(t){case Craft.CraftSupportWidget.SCREEN_HOME:return new s(this,t,e);case Craft.CraftSupportWidget.SCREEN_HELP:return new i(this,t,e);case Craft.CraftSupportWidget.SCREEN_FEEDBACK:return new n(this,t,e);default:throw"Invalid screen: "+t}},gotoScreen:function(t){this.$nextScreen&&(this.$currentScreen.velocity("stop").css({opacity:0,display:"none"}),this.$nextScreen.velocity("stop").css({opacity:1}),this.$pane.velocity("stop"),this.handleScreenAnimationComplete()),this.$nextScreen=this.getScreen(t).css({display:"block",position:"absolute",left:"0px",top:"0px",width:this.$pane.width()+"px"}),this.$pane.height(this.$pane.height()),this.$currentScreen.velocity({opacity:0},{display:"none"}),this.$nextScreen.velocity({opacity:1}),this.$pane.velocity({height:this.$nextScreen.outerHeight()},{complete:this.handleScreenAnimationComplete.bind(this)}),this.currentScreen=this.initScreen(t)},handleScreenAnimationComplete:function(){this.$pane.height("auto"),this.$nextScreen.css({position:"relative",width:"auto"}),this.$currentScreen=this.$nextScreen,this.$nextScreen=null}},{widgets:{},SCREEN_HOME:"home",SCREEN_HELP:"help",SCREEN_FEEDBACK:"feedback"});var e=Garnish.Base.extend({widget:null,screen:null,$screen:null,init:function(t,e,s){this.widget=t,this.screen=e,this.$screen=s,this.afterInit()},afterInit:t.noop,reinit:t.noop}),s=e.extend({afterInit:function(){var t=this.$screen.children(".cs-opt");this.addListener(t,"click","handleOptionClick")},handleOptionClick:function(e){var s=t.attr(e.currentTarget,"data-screen");this.widget.gotoScreen(s)}}),r=e.extend({$body:null,$formContainer:null,mode:null,bodyStartHeight:null,$searchResultsContainer:null,$searchResults:null,$searchForm:null,$searchParams:null,$searchSubmit:null,searchTimeout:null,showingResults:!1,$supportForm:null,$supportMessage:null,$supportAttachment:null,$supportSubmit:null,$supportSpinner:null,$supportErrorList:null,$supportIframe:null,sendingSupportTicket:!1,afterInit:function(){this.$body=this.$screen.find(".cs-body-text:first").trigger("focus"),this.$formContainer=this.$screen.children(".cs-forms"),this.$searchResultsContainer=this.$screen.children(".cs-search-results-container:first"),this.$searchResults=this.$searchResultsContainer.find(".cs-search-results:first"),this.$searchForm=this.$formContainer.children(".cs-search-form:first"),this.$searchParams=this.$searchForm.children(".cs-search-params:first"),this.$searchSubmit=this.$searchForm.children(".submit:first"),this.addListener(this.$searchForm,"submit","handleSearchFormSubmit"),this.addListener(this.$searchForm.find("> p > a"),"click","handleSupportLinkClick"),this.$supportForm=this.$formContainer.children(".cs-support-form:first"),this.$supportMessage=this.$supportForm.children("input.cs-support-message");var t=this.$supportForm.children(".cs-support-more");this.$supportAttachment=t.find(".cs-support-attachment:first"),this.$supportSubmit=this.$supportForm.children(".submit:first"),this.$supportSpinner=this.$supportForm.children(".spinner:first"),this.$supportIframe=this.$screen.children("iframe"),this.addListener(this.$supportForm,"submit","handleSupportFormSubmit"),this.bodyStartHeight=this.$body.height(),this.addListener(this.$body,"input","handleBodyTextChange"),this.addListener(this.$body,"keydown","handleBodyKeydown"),this.prepForSearch(!1)},handleSearchFormSubmit:function(t){this.$body.val()||t.preventDefault()},handleBodyTextChange:function(){var e=this.$body.val();if(this.mode===r.MODE_SEARCH)if(this.clearSearchTimeout(),this.searchTimeout=setTimeout(this.search.bind(this),500),e){this.$searchParams.html("");var s=this.getFormParams(e);for(var i in s)s.hasOwnProperty(i)&&t("<input/>",{type:"hidden",name:i,value:s[i]}).appendTo(this.$searchParams);this.$searchSubmit.removeClass("disabled")}else this.$searchSubmit.addClass("disabled");else e?(this.$supportMessage.val(e),this.$supportSubmit.removeClass("disabled")):this.$supportSubmit.addClass("disabled")},handleBodyKeydown:function(t){switch(t.keyCode){case Garnish.ESC_KEY:this.mode===r.MODE_SEARCH?this.widget.gotoScreen(Craft.CraftSupportWidget.SCREEN_HOME):this.sendingSupportTicket||this.prepForSearch(!0);break;case Garnish.RETURN_KEY:Garnish.isCtrlKeyPressed(t)&&(this.mode===r.MODE_SEARCH?this.$searchForm.trigger("submit"):this.$supportForm.trigger("submit"))}},handleSupportLinkClick:function(){this.prepForSupport(!0)},clearSearchTimeout:function(){this.searchTimeout&&(clearTimeout(this.searchTimeout),this.searchTimeout=null)},search:function(){if(this.clearSearchTimeout(),this.$body.val()){var e=this.getSearchUrl(this.$body.val());t.ajax({url:e,dataType:"json",success:this.handleSearchSuccess.bind(this),error:this.hideSearchResults.bind(this)})}else this.hideSearchResults()},handleSearchSuccess:function(e){var s=this;if(this.mode===r.MODE_SEARCH){var i=this.getSearchResults(e);if(i.length){var n;this.showingResults?n=this.$searchResultsContainer.height():(this.$searchResultsContainer.removeClass("hidden"),n=0,this.showingResults=!0,this.$screen.addClass("with-results")),this.$searchResults.html("");for(var o=Math.min(i.length,20),h=0;h<o;h++)this.$searchResults.append(t("<li>").append(t("<a>",{href:this.getSearchResultUrl(i[h]),target:"_blank",html:'<span class="status '+this.getSearchResultStatus(i[h])+'"></span>'+this.getSearchResultText(i[h])})));var a=this.$searchResultsContainer.height("auto").height();this.$searchResultsContainer.velocity("stop").height(n).velocity({height:a},{complete:function(){s.$searchResultsContainer.height("auto")}})}else this.hideSearchResults()}},hideSearchResults:function(){var t=this;this.mode===r.MODE_SEARCH&&this.showingResults&&(this.$searchResultsContainer.velocity("stop").height(this.$searchResultsContainer.height()).velocity({height:0},{complete:function(){t.$searchResultsContainer.addClass("hidden")}}),this.showingResults=!1,this.$screen.removeClass("with-results"))},handleSupportFormSubmit:function(t){this.$body.val()&&!this.sendingSupportTicket?(this.sendingSupportTicket=!0,this.$supportSubmit.addClass("active"),this.$supportSpinner.removeClass("hidden")):t.preventDefault()},reinit:function(){this.$body.trigger("focus")},prepForSearch:function(t){this.mode=r.MODE_SEARCH,this.$body.velocity("stop").trigger("focus"),this.$supportErrorList&&(this.$supportErrorList.remove(),this.$supportErrorList=null),t?this.$body.velocity({height:this.bodyStartHeight}):this.$body.height(this.bodyStartHeight),this.swapForms(this.$supportForm,this.$searchForm,t),this.handleBodyTextChange(),this.search()},prepForSupport:function(t){this.clearSearchTimeout(),this.hideSearchResults(),this.mode=r.MODE_SUPPORT,this.$body.velocity("stop").trigger("focus"),t?this.$body.velocity({height:2*this.bodyStartHeight}):this.$body.height(2*this.bodyStartHeight),this.swapForms(this.$searchForm,this.$supportForm,t),this.handleBodyTextChange()},swapForms:function(t,e,s){var r=this;if(s){this.$formContainer.height(this.$formContainer.height());var i=this.$formContainer.width();t.velocity("stop").css({position:"absolute",top:0,left:0,width:i}).velocity({opacity:0},{complete:function(){t.addClass("hidden").css({position:"relative",width:"auto"})}}),e.velocity("stop").removeClass("hidden").css({position:"absolute",top:0,left:0,width:i}).velocity({opacity:1},{complete:function(){e.css({position:"relative",width:"auto"})}}),this.$formContainer.velocity("stop").velocity({height:e.height()},{complete:function(){r.$formContainer.css({height:"auto"})}})}else t.addClass("hidden"),e.removeClass("hidden")},parseSupportResponse:function(e){if(this.sendingSupportTicket=!1,this.$supportSubmit.removeClass("active"),this.$supportSpinner.addClass("hidden"),this.$supportErrorList&&this.$supportErrorList.children().remove(),e.errors)for(var s in this.$supportErrorList||(this.$supportErrorList=t('<ul class="errors"/>').insertAfter(this.$supportForm)),e.errors)if(e.errors.hasOwnProperty(s))for(var r=0;r<e.errors[s].length;r++){var i=e.errors[s][r];t("<li>"+i+"</li>").appendTo(this.$supportErrorList)}e.success&&(Craft.cp.displayNotice(Craft.t("app","Message sent successfully.")),this.$body.val(""),this.$supportMessage.val(""),this.$supportAttachment.val("")),this.$supportIframe.html("")},getFormParams:function(){throw"getFormParams() must be implemented"},getSearchUrl:function(){throw"getSearchUrl() must be implemented"},getSearchResults:function(){throw"getSearchResults() must be implemented"},getSearchResultUrl:function(){throw"getSearchResultUrl() must be implemented"},getSearchResultStatus:function(){throw"getSearchResultStatus() must be implemented"},getSearchResultText:function(){throw"getSearchResultUrl() must be implemented"}},{MODE_SEARCH:"search",MODE_SUPPORT:"support"}),i=r.extend({getFormParams:function(t){return{title:t}},getSearchUrl:function(t){return"https://api.stackexchange.com/2.2/similar?site=craftcms&sort=relevance&order=desc&title="+encodeURIComponent(t)},getSearchResults:function(t){return t.items||[]},getSearchResultUrl:function(t){return t.link},getSearchResultStatus:function(t){return t.is_answered?"green":""},getSearchResultText:function(t){return t.title}}),n=r.extend({getFormParams:function(t){var e="### Description\n\n\n\n### Steps to reproduce\n\n1.\n2.\n\n### Additional info\n";for(var s in this.widget.envInfo)this.widget.envInfo.hasOwnProperty(s)&&(e+="\n- "+s+": "+this.widget.envInfo[s]);return{title:t,body:e}},getSearchUrl:function(t){return"https://api.github.com/search/issues?q=type:issue+repo:craftcms/cms+"+encodeURIComponent(t)},getSearchResults:function(t){return t.items||[]},getSearchResultUrl:function(t){return t.html_url},getSearchResultStatus:function(t){return"open"===t.state?"green":"red"},getSearchResultText:function(t){return t.title}})}(jQuery)}()}();
//# sourceMappingURL=CraftSupportWidget.js.map