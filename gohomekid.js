// ==UserScript==
// @name         不沉迷抖音！！！！！！
// @version      0.1
// @description  尝试在页面加载时跳转到另一个页面
// @author       sunweiyan
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==
// ==UserScript==
// @name         多网址页面跳转脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  尝试在页面加载时跳转到另一个页面，对多个网址生效
// @author       Kimi
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义一个数组，包含所有你想要跳转的源网页
    var sourceUrls = [
       'https://www.douyin.com/',
       'https://cn.bing.com/search?q=%E6%8A%96%E9%9F%B3&PC=U316&FORM=CHROMN'

    ];

    // 定义一个数组，包含所有你想要跳转到的目标网页
    var targetUrls = [
         'https://kimi.moonshot.cn/'
    ];

    // 检查当前页面是否在源网址数组中
    var currentUrl = window.location.href;
    for (var i = 0; i < sourceUrls.length; i++) {
        if (currentUrl === sourceUrls[i]) {
            // 如果匹配，则跳转到对应的目标网页
            window.location.href = targetUrls[i];
            break; // 匹配后跳出循环
        }
    }
})();
