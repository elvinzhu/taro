(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{1772:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1773:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},1774:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,O=d["".concat(c,".").concat(p)]||d[p]||s[p]||b;return r?a.a.createElement(O,l(l({ref:t},o),{},{components:r})):a.a.createElement(O,l({ref:t},o))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,c=new Array(b);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},549:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(1772),a=r(1773),b=(r(0),r(1774)),c={title:"Taro.setTabBarBadge(option)",sidebar_label:"setTabBarBadge"},l={unversionedId:"apis/ui/tab-bar/setTabBarBadge",id:"version-3.x/apis/ui/tab-bar/setTabBarBadge",isDocsHomePage:!1,title:"Taro.setTabBarBadge(option)",description:"\u4e3a tabBar \u67d0\u4e00\u9879\u7684\u53f3\u4e0a\u89d2\u6dfb\u52a0\u6587\u672c",source:"@site/versioned_docs/version-3.x/apis/ui/tab-bar/setTabBarBadge.md",slug:"/apis/ui/tab-bar/setTabBarBadge",permalink:"/taro/docs/apis/ui/tab-bar/setTabBarBadge",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/tab-bar/setTabBarBadge.md",version:"3.x",sidebar_label:"setTabBarBadge",sidebar:"version-3.x/API",previous:{title:"Taro.setTabBarItem(option)",permalink:"/taro/docs/apis/ui/tab-bar/setTabBarItem"},next:{title:"Taro.removeTabBarBadge(option)",permalink:"/taro/docs/apis/ui/tab-bar/removeTabBarBadge"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u4e3a tabBar \u67d0\u4e00\u9879\u7684\u53f3\u4e0a\u89d2\u6dfb\u52a0\u6587\u672c"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"index"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"tabBar \u7684\u54ea\u4e00\u9879\uff0c\u4ece\u5de6\u8fb9\u7b97\u8d77")),Object(b.b)("tr",null,Object(b.b)("td",null,"text"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u663e\u793a\u7684\u6587\u672c\uff0c\u8d85\u8fc7 4 \u4e2a\u5b57\u7b26\u5219\u663e\u793a\u6210 ...")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.setTabBarBadge({\n  index: 0,\n  text: '1'\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.setTabBarBadge"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);