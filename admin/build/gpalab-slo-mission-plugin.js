!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e,n){var o=n(6),r=n(7),i=n(8),l=n(9);t.exports=function(t){return o(t)||r(t)||i(t)||l()}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.data}()},,function(t,e,n){var o=n(1);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,n){var o=n(1);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(t,e){!function(){t.exports=this.wp.plugins}()},function(t,e){!function(){t.exports=this.wp.editPost}()},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){!function(){t.exports=this.wp.components}()},,function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(2),i=n(3),l=n(12),u=n(4),a=n(13),c=n.n(a),s=n(0),f=n.n(s),p=n(14),b=n(15),m=Object(p.compose)(Object(u.withSelect)((function(t,e){var n=e.label,o=e.metaKey,r=e.missions,l=[{value:"",label:Object(i.__)("All Posts","gpalab-slo")}];return{label:n,options:[].concat(l,f()(r)),selected:t("core/editor").getEditedPostAttribute("meta")[o]}})),Object(u.withDispatch)((function(t,e){var n=e.metaKey;return{setMissionValue:function(e){t("core/editor").editPost({meta:c()({},n,e)})}}})))((function(t){var e=t.label,n=t.options,o=t.selected,i=t.setMissionValue;return Object(r.createElement)(b.SelectControl,{label:e,options:n,value:o,onBlur:function(t){return i(t.target.value)},onChange:i})})),d=function(){var t=window.gpalabSloPlugin.missions.map((function(t){return{value:t.id,label:t.title}}));return"archive-gpalab-social-link.php"!==Object(u.useSelect)((function(t){return t("core/editor").getEditedPostAttribute("template")}))?null:Object(r.createElement)(l.PluginDocumentSettingPanel,{className:"gpalab-slo-mission-select",name:"gpalab-slo-mission-select",title:Object(i.__)("Connect a Mission","gpalab-slo")},Object(r.createElement)(m,{label:Object(i.__)("Select from Available Missions:","gpalab-slo"),metaKey:"_gpalab_slo_mission_select",missions:t}))};Object(o.registerPlugin)("gpalab-slo-mission-select",{icon:null,render:d})}]);