!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){"use strict";n.r(t);n(3),n(4);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.querySelector(".js-hamburger"),i=(document.documentElement.clientWidth,document.querySelector(".navigation"));o&&o.addEventListener("click",(function(){i.classList.toggle("navigation__open")})),window&&window.addEventListener("resize",(function(){window.innerWidth>=520&&i.classList.contains("navigation__open")&&i.classList.toggle("navigation__open")})),fetch("https://api.github.com/users/galinowsky/repos?sort=created").then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("Projects",JSON.stringify(e))})).catch(console.log((function(e){return console.log("error")})));var u,a=JSON.parse(localStorage.getItem("Projects")),c=document.querySelector(".repo-list"),l=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw u}}}}(a);try{for(l.s();!(u=l.n()).done;){var s=u.value,f=s.name,d=s.html_url,g="\n  <li><strong>".concat(f,'</strong> - <a href="').concat(d,'" class="github-ext-link"\n  title ="link do repozytorium na github.com"\n  target="_blank">Link do github</a></li>');c.innerHTML+=g}}catch(e){l.e(e)}finally{l.f()}},function(e,t,n){},function(e,t){var n=localStorage.getItem("isDark"),r=window.getComputedStyle(document.querySelector(".dupa")).getPropertyValue("background-image"),o=window.getComputedStyle(document.querySelector("body")).getPropertyValue("background-image"),i=document.documentElement.style,u=document.documentElement.style,a=document.querySelector(".switchInput");function c(){i.setProperty("--background-img",r),u.setProperty("--nav-color","#d86c46"),a.value=!1,localStorage.setItem("isDark",!0)}function l(){i.setProperty("--background-img",o),u.setProperty("--nav-color","black"),a.value=!0,localStorage.setItem("isDark",!1)}null==n?localStorage.setItem("isDark",!1):"true"==n?c():"false"==n&&l(),a&&a.addEventListener("input",(function(){"true"==a.value?c():l()}))}]);