/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Microsoft Edge",slug:"edge",version:"0.1.3"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",COLOR_GAB_GREEN="#21cf7b",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var e=document;"loading"==e.readyState?e.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var GDAll=function(){var t=function(){function t(){var t=document.getElementById("disqus_thread");if(!t)return!1;var e=function(){var t=document.createElement("div");t.style.setProperty("display","block","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","80px","important"),t.style.setProperty("padding","20px 0","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("box-sizing","border-box","important");var e=document.createElement("a");return e.textContent="View Comments on Dissenter",e.style.setProperty("display","block","important"),e.style.setProperty("width","100%","important"),e.style.setProperty("height","40px","important"),e.style.setProperty("background-color",COLOR_GAB_GREEN,"important"),e.style.setProperty("color","#fff","important"),e.style.setProperty("border-radius","4px","important"),e.style.setProperty("text-align","center","important"),e.style.setProperty("margin","0 auto","important"),e.style.setProperty("line-height","40px","important"),e.style.setProperty("font-size","14px","important"),e.style.setProperty("box-sizing","border-box","important"),e.style.setProperty("cursor","pointer","important"),t.appendChild(e),t}();return t.parentElement.insertBefore(e,t),e.onclick=r,!0}function r(){var t=window.location.href,e=window.innerHeight;browser.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}this.init=function(){t()}};this.init=function(){(new t).init()}};ready(function(){setTimeout(function(){(new GDAll).init()},5e3)});