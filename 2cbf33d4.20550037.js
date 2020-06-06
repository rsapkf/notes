(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(9),a=(r(0),r(191)),o={id:"text-editors-and-ides",title:"Text Editors and IDEs"},c={id:"linux/text-editors-and-ides",title:"Text Editors and IDEs",description:"VSCode",source:"@site/docs/linux/text-editors-and-ides.md",permalink:"/notes/docs/linux/text-editors-and-ides",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/docs/linux/text-editors-and-ides.md",sidebar:"someSidebar",previous:{title:"grep / ripgrep",permalink:"/notes/docs/linux/pattern-searching"},next:{title:"Browser",permalink:"/notes/docs/linux/browser"}},l=[{value:"VSCode",id:"vscode",children:[]},{value:"Sublime Text",id:"sublime-text",children:[]},{value:"Gedit",id:"gedit",children:[]},{value:"Pycharm",id:"pycharm",children:[]},{value:"IntelliJIDEA",id:"intellijidea",children:[]}],d={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"vscode"},"VSCode"),Object(a.b)("h2",{id:"sublime-text"},"Sublime Text"),Object(a.b)("h2",{id:"gedit"},"Gedit"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"<C-:>")," to open emoji window.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Install Dracula Theme(",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://draculatheme.com/gedit"}),"https://draculatheme.com/gedit"),")"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download the raw file:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"$ wget https://raw.githubusercontent.com/dracula/gedit/master/dracula.xml"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Move the file to gedit styles folder:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"$ mv dracula.xml $HOME/.local/share/gedit/styles/"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Activate in gedit's preferences dialog."))))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"pycharm"},"Pycharm"),Object(a.b)("h2",{id:"intellijidea"},"IntelliJIDEA"))}p.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,m=u["".concat(o,".").concat(s)]||u[s]||b[s]||a;return r?i.a.createElement(m,c(c({ref:t},d),{},{components:r})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);