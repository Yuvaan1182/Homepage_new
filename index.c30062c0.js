!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){"use strict";n.r(t);n(3),n(4);var o=document.querySelector(".js-hamburger"),r=(document.documentElement.clientWidth,document.querySelector(".navigation"));o&&o.addEventListener("click",(function(){r.classList.toggle("navigation__open")})),window&&window.addEventListener("resize",(function(){window.innerWidth>=520&&r.classList.contains("navigation__open")&&r.classList.toggle("navigation__open")}))},function(e,t,n){},function(e,t){var n=localStorage.getItem("isDark"),o=window.getComputedStyle(document.querySelector(".dupa")).getPropertyValue("background-image"),r=window.getComputedStyle(document.querySelector("body")).getPropertyValue("background-image"),u=document.documentElement.style,i=document.documentElement.style,c=document.querySelector(".switchInput");function a(){u.setProperty("--background-img",o),i.setProperty("--nav-color","#d86c46"),c.value=!1,localStorage.setItem("isDark",!0)}function l(){u.setProperty("--background-img",r),i.setProperty("--nav-color","black"),c.value=!0,localStorage.setItem("isDark",!1)}null==n?localStorage.setItem("isDark",!1):"true"==n?a():"false"==n&&l(),c&&c.addEventListener("input",(function(){"true"==c.value?a():l()}))}]);