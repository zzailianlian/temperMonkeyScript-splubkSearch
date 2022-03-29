// ==UserScript==
// @name         splunk快速搜索
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  通过键入 `option + r` 来实现splunk快速搜索!
// @author       You
// @match        http://splunk.ali.plt.babytree-inc.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=babytree-inc.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  document.onkeydown = function (event) {
      var e = event || window.event;
      console.log(e, e.keyCode);
       if (e && e.altKey && e.keyCode == 82) { // 按 Mac 的 option + r
         // 重新搜索splunk
         document.querySelector("body > div.shared-page > div.main-section-body > div > div.section-padded.section-header > div.search-bar-wrapper.shared-searchbar > form > table > tbody > tr > td.search-button > a").click()
       }
      if (e && e.keyCode == 27) { // 按 Esc
          //要做的事情
      }
      if (e && e.keyCode == 113) { // 按 F2
          //要做的事情
      }
      if (e && e.keyCode == 13) { // enter 键
          //要做的事情
      }
  };

  // Your code here...
})();