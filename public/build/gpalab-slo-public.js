!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=window.regeneratorRuntime},function(e,t){function n(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,c,"next",e)}function c(e){n(a,o,i,u,c,"throw",e)}u(void 0)}))}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new-item",n=/<[lL][iI]>/g;return e.replace(n,'<li class="'.concat(t,'">'))},c=function(){var e=a()(o.a.mark((function e(t){var n,r,i,a,c,l,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=document.querySelector(".gpalab-slo-content-list"),i=(null===(n=window)||void 0===n?void 0:n.gpalabSloLoadMore)||{},a={action:"gpalab_slo_load_more",mission:i.mission,page:i.current_page,query:i.social_links,security:i.nonce},c={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(a)},e.prev=5,e.next=8,fetch(i.ajaxUrl,c);case 8:return l=e.sent,e.next=11,l.text();case 11:s=e.sent,o=u(s),d=document.createRange().createContextualFragment(o),r.appendChild(d),i.current_page++,i.current_page===+i.max_num_pages&&this.parentNode.removeChild(this),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),console.error(e.t0);case 22:case"end":return e.stop()}var o}),e,this,[[5,19]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=document.querySelector(".back-to-top");null!=e&&e[0]&&t&&(e[0].isIntersecting?t.classList.remove("is-visible"):t.classList.add("is-visible"))};!function(e){if("loading"!==document.readyState)return e();document.addEventListener("DOMContentLoaded",e)}((function(){var e;null==(e=document.getElementById("load-more"))||e.addEventListener("click",c),function(){var e;if(null!==(e=window)&&void 0!==e&&e.IntersectionObserver){var t=document.getElementById("instructions");new IntersectionObserver(l,{root:null,rootMargin:"100px 0px 0px 0px",threshold:0}).observe(t)}else{var n=document.querySelector(".back-to-top");null==n||n.classList.add("is-visible")}}()}))}]);