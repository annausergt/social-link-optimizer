!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){var o=n(6),r=n(7),i=n(8),l=n(9);e.exports=function(e){return o(e)||r(e)||i(e)||l()}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.data},,function(e,t,n){var o=n(1);e.exports=function(e){if(Array.isArray(e))return o(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var o=n(1);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t){e.exports=window.wp.plugins},function(e,t){e.exports=window.wp.editPost},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.wp.components},,function(e,t,n){"use strict";n.r(t);var o=n(11),r=n(2),i=n(3),l=n(12),a=n(4),u=n(13),c=n.n(u),s=n(0),f=n.n(s),p=n(14),b=n(15),d=Object(p.compose)(Object(a.withSelect)((function(e,t){var n=t.label,o=t.metaKey,r=t.missions,l=[{value:"",label:Object(i.__)("All Posts","gpalab-slo")}];return{label:n,options:[].concat(l,f()(r)),selected:e("core/editor").getEditedPostAttribute("meta")[o]}})),Object(a.withDispatch)((function(e,t){var n=t.metaKey;return{setMissionValue:function(t){e("core/editor").editPost({meta:c()({},n,t)})}}})))((function(e){var t=e.label,n=e.options,o=e.selected,i=e.setMissionValue;return Object(r.createElement)(b.SelectControl,{label:t,options:n,value:o,onBlur:function(e){return i(e.target.value)},onChange:i})}));Object(o.registerPlugin)("gpalab-slo-mission-select",{icon:null,render:function(){var e=window.gpalabSloPlugin.missions.map((function(e){return{value:e.id,label:e.title}}));return"archive-gpalab-social-link.php"!==Object(a.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("template")}))?null:Object(r.createElement)(l.PluginDocumentSettingPanel,{className:"gpalab-slo-mission-select",name:"gpalab-slo-mission-select",title:Object(i.__)("Connect a Mission","gpalab-slo")},Object(r.createElement)(d,{label:Object(i.__)("Select from Available Missions:","gpalab-slo"),metaKey:"_gpalab_slo_mission_select",missions:e}))}})}]);