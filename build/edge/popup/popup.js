/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Microsoft Edge",slug:"edge",version:"0.1.3"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",COLOR_GAB_GREEN="#21cf7b",isObject=function(e){return!isArray(e)&&!isDate(e)&&(null!==e&&"object"==typeof e)},isString=function(e){return"string"==typeof e||e instanceof String},isDate=function(e){return!isString(e)&&!isArray(e)&&null!=e&&null!=e&&(e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e))},isArray=function(e){return Array.isArray(e)};function ready(e){var n=document;"loading"==n.readyState?n.addEventListener("DOMContentLoaded",e):e()}function getQueryStringValue(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var Popup=function(){var t=this,i=document.getElementById("popup-iframe"),o="";t.onPopupOpen=function(e){if(!isObject(e))return!1;var n=e.url||"";if(o===n)return!1;o=n;var t=encodeURIComponent(n),r=BASE_URI+t;setTimeout(function(){i.setAttribute("src",r),i.classList.remove("hidden")},250)},t.init=function(e){if(e&&isString(e))t.onPopupOpen({url:e});else if(BROWSER_CONFIG.slug===BROWSER_SAFARI_SLUG){var n=safari.application.activeBrowserWindow.activeTab;t.onPopupOpen(n),safari.application.addEventListener("popover",function(e){o!==n.url&&safari.extension.popovers[0].contentWindow.location.reload()},!0)}else browser.tabs.query({active:!0,currentWindow:!0},function(e){if(!e||!isArray(e))return!1;var n=e[0];t.onPopupOpen(n)})}};if(BROWSER_CONFIG.slug===BROWSER_SAFARI_SLUG){var popup=new Popup;popup.init()}else document.addEventListener("DOMContentLoaded",function(){var e=getQueryStringValue("url");(new Popup).init(e)});