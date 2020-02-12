!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueCombobox",[],e):"object"==typeof exports?exports.VueCombobox=e():t.VueCombobox=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"combobox",data:function(){return{tags:""}},props:{className:{type:Object|String,default:""},style:{type:Object|String,default:""},value:{type:Array|Object|String,default:""},separator:{type:String,default:","}},formatValue:function(){},mounted:function(){"string"!=typeof this.value?this.tags=this.value.join(this.separator):this.tags=this.value},methods:{tagTypeIsString:function(){return"string"==typeof this.tags},addContext:function(){if(this.tagTypeIsString()&&" "!==this.separator){var t=this.tags.split(" ");this.tags=t.join(",")}},focusfns:function(){this.tagTypeIsString()?this.oldContext=this.tags:this.oldContext=this.tags.join(this.separator)},del:function(t){var e=this.tags.length,n=this.getPosition(t.target);if(n===e){var r=this.tags.split(this.separator);r.pop(),this.tags=r.join(this.separator)}var o=this.delContent(n);if(this.delContent(n+1)===this.separator&&(o=this.separator,n+=1),o===this.separator){for(var s=0,i=n-1;i>=0;i--)if(this.oldContext[i]===this.separator){s=i;break}var a=null;if(0===s)a=this.oldContext.split(this.separator),a.shift(),this.$emit("source",a);else{var u=this.oldContext.slice(0,s)+this.oldContext.slice(n,this.oldContext.length);u=u.replace(this.separator+this.separator,this.separator),a=u.split(this.separator),this.$emit("source",a)}this.tags=a.join(this.separator)}this.focusfns()},delContent:function(t){return this.oldContext[t]},add:function(){this.tagTypeIsString()&&(this.tags=this.tags.split(this.separator)),this.tags.push("@testtest")},getPosition:function(t){var e=0;if(document.selection){var n=document.selection.createRange();n.moveStart("character",-t.value.length),e=n.text.length}else(t.selectionStart||"0"==t.selectionStart)&&(e=t.selectionStart);return e}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o={install:function(t){t.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&(window.Combobox=o,Vue.use(o)),e.default=o},function(t,e,n){"use strict";function r(t){n(3)}var o=n(0),s=n(9),i=n(8),a=r,u=i(o.a,s.a,!1,a,"data-v-6e155072",null);e.a=u.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("65ad75be",r,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var s=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function s(t){var e,n,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(y){var s=p++;r=d||(d=o()),e=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),v.ssrId&&t.setAttribute(m,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){h=n,v=o||{};var s=c(t,e);return r(s),function(e){for(var n=[],o=0;o<s.length;o++){var i=s[o],a=f[i.id];a.refs--,n.push(a)}e?(s=c(t,e),r(s)):s=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete f[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],i=s[0],a=s[1],u=s[2],c=s[3],f={id:t+":"+o,css:a,media:u,sourceMap:c};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,s){var i,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(s?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,d=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,e){return f.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:i,exports:a,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],style:t.style,attrs:{type:"text",className:t.className},domProps:{value:t.tags},on:{focus:t.focusfns,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.del(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addContext(e)}],input:function(e){e.target.composing||(t.tags=e.target.value)}}})])},o=[],s={render:r,staticRenderFns:o};e.a=s}])});
//# sourceMappingURL=vue-combobox.js.map