(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),c=(r(0),r(192)),a={id:"misc",title:"Miscellaneous"},i={id:"miscellaneous/misc",title:"Miscellaneous",description:"Publish Docusaurus(v1) site:",source:"@site/docs/miscellaneous/misc.md",permalink:"/notes/docs/miscellaneous/misc",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/miscellaneous/misc.md",sidebar:"someSidebar",previous:{title:"Poems",permalink:"/notes/docs/miscellaneous/poems"}},u=[{value:"Publish Docusaurus(v1) site:",id:"publish-docusaurusv1-site",children:[]},{value:"Publish Docusaurus(v2) site:",id:"publish-docusaurusv2-site",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"publish-docusaurusv1-site"},"Publish Docusaurus(v1) site:"),Object(c.b)("p",null,"From ",Object(c.b)("inlineCode",{parentName:"p"},"website/")," directory:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"GIT_USER=USERNAME CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages # SSH\n# or\nGIT_USER=USERNAME CURRENT_BRANCH=master npm run publish-gh-pages # HTTPS\n")),Object(c.b)("h2",{id:"publish-docusaurusv2-site"},"Publish Docusaurus(v2) site:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"GIT_USER=USERNAME CURRENT_BRANCH=master USE_SSH=true yarn deploy # SSH\n# or\nGIT_USER=USERNAME CURRENT_BRANCH=master yarn deploy # HTTPS\n")),Object(c.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"pCloud WebDAV: ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://webdav.pcloud.com"}),"https://webdav.pcloud.com"))))}l.isMDXComponent=!0},192:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||c;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);