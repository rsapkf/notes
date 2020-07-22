(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(9),a=(n(0),n(197)),o={id:"git",title:"git"},l={id:"linux/git",title:"git",description:"Useful Flags",source:"@site/docs/linux/git.md",permalink:"/notes/docs/linux/git",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/linux/git.md",sidebar:"notes",previous:{title:"tmux",permalink:"/notes/docs/linux/tmux"},next:{title:"Window Managers",permalink:"/notes/docs/linux/window-managers"}},c=[{value:"Useful Flags",id:"useful-flags",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"useful-flags"},"Useful Flags"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git log --oneline")," - displays single commit information per line."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git rev-list HEAD --count")," - total number of commits.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git shortlog")," - Summarize 'git log' output.")))),Object(a.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Remove a file from history"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ git filter-branch --force --index-filter \\\n  "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \\\n  --prune-empty --tag-name-filter cat -- --all\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Get a list of the deleted files in git history"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"git log --diff-filter=D --summary | grep delete")," - without commit hashes.\n",Object(a.b)("inlineCode",{parentName:"p"},"git log --diff-filter=D --summary | grep -E 'delete|^commit\\s+\\S+'")," - with commit hashes.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Print a leaderboard of authors based on number of commits in a git repo"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"git log --format='%an' | sort | uniq -c | sort -nr")))))}p.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||m[b]||a;return n?i.a.createElement(f,l(l({ref:t},u),{},{components:n})):i.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);