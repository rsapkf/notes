(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(191)),o={id:"browser",title:"Browser"},b={id:"linux/browser",title:"Browser",description:"Firefox",source:"@site/docs/linux/browser.md",permalink:"/notes/docs/linux/browser",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/docs/linux/browser.md",sidebar:"someSidebar",previous:{title:"Text Editors and IDEs",permalink:"/notes/docs/linux/text-editors-and-ides"},next:{title:"Hacks",permalink:"/notes/docs/linux/hacks"}},l=[{value:"Firefox",id:"firefox",children:[]},{value:"Useful Shortcuts",id:"useful-shortcuts",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"firefox"},"Firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To set Firefox Developer Edition as ",Object(i.b)("inlineCode",{parentName:"p"},"sensible-browser")," on Linux:"),Object(i.b)("p",{parentName:"li"},"  First, add Firefox Developer Edition to ",Object(i.b)("inlineCode",{parentName:"p"},"update-alternatives"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo update-alternatives --install /usr/bin/x-www-browser x-www-browser /opt/firefox_dev/firefox/firefox 200\n")),Object(i.b)("p",{parentName:"li"},"  (assuming the given executable path: ",Object(i.b)("inlineCode",{parentName:"p"},"/opt/firefox_dev/firefox/firefox"),")"),Object(i.b)("p",{parentName:"li"},"  Then, set it as ",Object(i.b)("inlineCode",{parentName:"p"},"sensible-browser"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo update-alternatives --config x-www-browser\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(n.a)({parentName:"li"},{id:"aboutconfig-settings"}),Object(i.b)("inlineCode",{parentName:"h3"},"about:config")," settings"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.bookmarks.openInTabClosesMenu")," - true -> false")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.bookmarks.showMobileBookmarks")," - true -> false")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.tabs.loadBookmarksInTabs")," - false -> true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.bookmarks.autoExportHTML")," - false -> true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.tabs.tabMinWidth")," - 76 -> 100")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.tabs.closeTabByDblclick")," - false -> true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.tabs.closeWindowWithLastTab")," - true -> false")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"browser.privatebrowsing.autostart")," - false -> true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"geo.enabled")," - true -> false")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Other interesting settings:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"browser.urlbar.openintab"))))))),Object(i.b)("h2",{id:"useful-shortcuts"},"Useful Shortcuts"),Object(i.b)("p",null,"Shortcuts:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly"}),"https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<C-l>")," - highlight the url bar."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<C-Shift-o>")," - oen bookmark manager."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<C-Shift-r")," / ",Object(i.b)("inlineCode",{parentName:"li"},"<C-F5")," - reload the tab and clear the cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<Shift-t>")," - get a dropdown menu of all open tabs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<C-Shift-t")," - undo close tab.")),Object(i.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium and Firefox DevTools allow you to take a fullsize screenshot of any webpage!")))}p.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,O=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return r?a.a.createElement(O,b(b({ref:t},c),{},{components:r})):a.a.createElement(O,b({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);