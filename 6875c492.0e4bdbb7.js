(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{158:function(e,a,t){"use strict";t.r(a);t(223);var n=t(0),r=t.n(n),l=t(198),c=t(208),o=t(195);a.default=function(e){var a=e.metadata,t=e.items,n=a.allTagsPath,s=a.name,i=a.count;return r.a.createElement(l.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',s,'"'),r.a.createElement(o.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}},199:function(e,a,t){"use strict";t(50),t(23),t(18),t(17),t(70);var n=t(0),r=t.n(n),l=t(194),c=t.n(l),o=t(193),s=t(196),i=t(197),m=t(126),u=t.n(m);a.a=function(e){var a,l,m=e.handleSearchBarToggle,d=e.isSearchBarExpanded,h=Object(n.useState)(!1),p=h[0],g=h[1],v=Object(n.useRef)(null),b=Object(o.a)().siteConfig,f=(void 0===b?{}:b).themeConfig.algolia,E=Object(s.b)(),_=Object(i.a)().navigateToSearchPage;var N=function(e){void 0===e&&(e=!0),p||Promise.all([Promise.all([t.e(4),t.e(58)]).then(t.t.bind(null,200,7)),t.e(39).then(t.t.bind(null,202,7))]).then((function(a){var t=a[0].default;g(!0),window.docsearch=t,function(e){window.docsearch({appId:f.appId,apiKey:f.apiKey,indexName:f.indexName,inputSelector:"#search_input_react",algoliaOptions:f.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:function(e,a,t){a.stopPropagation();var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;E.push(r)}}),e&&v.current.focus()}(e)}))},k=Object(n.useCallback)((function(){N(),p&&v.current.focus(),m(!d)}),[d]),w=Object(n.useCallback)((function(){m(!d)}),[d]),y=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;N(a)})),O=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||_(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:u.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()(u.a.searchIconButton,(a={},a[u.a.searchIconButtonHidden]=d,a)),onClick:k,onKeyDown:k,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",u.a.searchInput,(l={},l[u.a.searchInputExpanded]=d,l)),onMouseOver:y,onFocus:y,onBlur:w,onKeyDown:O,ref:v})))}},208:function(e,a,t){"use strict";t(72);var n=t(0),r=t.n(n),l=t(194),c=t.n(l),o=t(192),s=t(195),i=t(217),m=t(127),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,m,h=e.children,p=e.frontMatter,g=e.metadata,v=e.truncated,b=e.isBlogPostPage,f=void 0!==b&&b,E=g.date,_=g.permalink,N=g.tags,k=g.readingTime,w=p.author,y=p.title,O=p.author_url||p.authorURL,P=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL;return r.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=E.substring(0,10).split("-"),n=t[0],l=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},f?y:r.a.createElement(s.a,{to:_},y)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:u.a.blogPostDate},l," ",m,", ",n," ",k&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:x,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},w)),r.a.createElement("small",{className:"avatar__subtitle"},P)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},h)),(N.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:g.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More")))))}},223:function(e,a,t){var n=t(24).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);