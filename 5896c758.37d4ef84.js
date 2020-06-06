(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(9),i=(n(0),n(191)),l={id:"setting-up",title:"Setting up a New Machine"},b={id:"linux/setting-up",title:"Setting up a New Machine",description:"Some things I like to do when setting up a new Linux machine.",source:"@site/docs/linux/setting-up.md",permalink:"/notes/docs/linux/setting-up",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/docs/linux/setting-up.md",sidebar:"someSidebar",previous:{title:"Suckless",permalink:"/notes/docs/linux/suckless"},next:{title:"Vim / Neovim",permalink:"/notes/docs/linux/vim"}},c=[{value:"Some things I like to do when setting up a new Linux machine.",id:"some-things-i-like-to-do-when-setting-up-a-new-linux-machine",children:[]}],p={rightToc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"some-things-i-like-to-do-when-setting-up-a-new-linux-machine"},"Some things I like to do when setting up a new Linux machine."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Map ",Object(i.b)("inlineCode",{parentName:"p"},"CAPSLOCK")," to ",Object(i.b)("inlineCode",{parentName:"p"},"CTRL")," and vice versa."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"On Debian, "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vim /etc/default/keyboard")),Object(i.b)("li",{parentName:"ul"},"Change the line that reads ",Object(i.b)("inlineCode",{parentName:"li"},'XKBOPTIONS=""')," to ",Object(i.b)("inlineCode",{parentName:"li"},'XKBOPTIONS="ctrl:swapcaps"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$ sudo dpkg-reconfigure -phigh console-setup")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"EmacsWiki Page: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.emacswiki.org/emacs/MovingTheCtrlKey"}),"https://www.emacswiki.org/emacs/MovingTheCtrlKey"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WikiWikiWeb: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://wiki.c2.com/?RemapCapsLock"}),"http://wiki.c2.com/?RemapCapsLock"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pull up my ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rsapkf/dotfiles/"}),"dotfiles")," and install necessary prgrams: (run the install script(@TODO))"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install Programming Environments:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Python (Latest)"),Object(i.b)("li",{parentName:"ul"},"Rust"),Object(i.b)("li",{parentName:"ul"},"Haskell"),Object(i.b)("li",{parentName:"ul"},"Java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install Programs:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Text Editors:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Vim/Neovim, Emacs(Orgmode, Evil), VSCode, Gedit, Sublime Text")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"IDEs:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Pycharm, IntellijIDEA, Android Studio")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Web Browsers:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Firefox Developer Edition, Brave, Chromium, qutebrowser, surf, w3m, lynx")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Terminal Emulators:\n",Object(i.b)("inlineCode",{parentName:"p"},"Alacritty, rxvt-unicode, st"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Window Managers:\n",Object(i.b)("inlineCode",{parentName:"p"},"i3, dwm, dwmstatus"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Misc:\n",Object(i.b)("inlineCode",{parentName:"p"},"sent, zsh, ranger, mutt, Irssi, dmenu, broot, nitrogen, fzf "))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install Fonts:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Mononoki Nerd Font, Source Code Pro")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install Themes"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vim-airline, powerline tmux")),Object(i.b)("li",{parentName:"ul"},"Dracula on zsh, mutt, qutebrowser, i3, dmenu, rxvt-unicode(.Xresources), Alacritty, VSCode, Sublime Text, Emacs, Jetbrains IDEs, Firefox, Chromium, Neovim, Gedit"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enable ",Object(i.b)("em",{parentName:"p"},"Italics")," in Vim and tmux (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tmux/tmux/blob/2.1/FAQ#L355-L383"}),"add terminfo")," if needed).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Configure ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/muttmua/muttt"}),"Mutt")," / ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/neomutt/neomutt"}),"NeoMutt")," (",Object(i.b)("inlineCode",{parentName:"p"},"vim ~/.mutt/muttrc")," / ",Object(i.b)("inlineCode",{parentName:"p"},"~/.neomutt/neomuttrc"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enable 'Single Click to Open Files' in the default Graphical File Manager."))))}o.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(n),s=a,O=m["".concat(l,".").concat(s)]||m[s]||u[s]||i;return n?r.a.createElement(O,b(b({ref:t},p),{},{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);