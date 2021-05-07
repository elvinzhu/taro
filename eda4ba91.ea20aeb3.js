(window.webpackJsonp=window.webpackJsonp||[]).push([[1581],{1646:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1772),o=t(1773),i=(t(0),t(1774)),c={title:"\u7f16\u8bd1\u914d\u7f6e"},a={unversionedId:"config",id:"version-2.x/config",isDocsHomePage:!1,title:"\u7f16\u8bd1\u914d\u7f6e",description:"\u7f16\u8bd1\u914d\u7f6e\u5b58\u653e\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u4e0b config \u76ee\u5f55\u4e2d\uff0c\u5305\u542b\u4e09\u4e2a\u6587\u4ef6",source:"@site/versioned_docs/version-2.x/config.md",slug:"/config",permalink:"/taro/docs/2.x/config",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/config.md",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"Debug \u6307\u5357",permalink:"/taro/docs/2.x/debug"},next:{title:"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5",permalink:"/taro/docs/2.x/config-detail"}},s=[{value:"index.js \u2014\u2014 \u901a\u7528\u914d\u7f6e",id:"indexjs--\u901a\u7528\u914d\u7f6e",children:[]}],u={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7f16\u8bd1\u914d\u7f6e\u5b58\u653e\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(i.b)("inlineCode",{parentName:"p"},"config")," \u76ee\u5f55\u4e2d\uff0c\u5305\u542b\u4e09\u4e2a\u6587\u4ef6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.js")," \u662f\u901a\u7528\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dev.js")," \u662f\u9879\u76ee\u9884\u89c8\u65f6\u7684\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prod.js")," \u662f\u9879\u76ee\u6253\u5305\u65f6\u7684\u914d\u7f6e")),Object(i.b)("h2",{id:"indexjs--\u901a\u7528\u914d\u7f6e"},"index.js \u2014\u2014 \u901a\u7528\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  // \u9879\u76ee\u540d\u79f0\n  projectName: 'kj',\n  // \u9879\u76ee\u521b\u5efa\u65e5\u671f\n  date: '2018-6-8',\n  // \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\n  designWidth: 750,\n  // \u9879\u76ee\u6e90\u7801\u76ee\u5f55\n  sourceRoot: 'src',\n  // \u9879\u76ee\u4ea7\u51fa\u76ee\u5f55\n  outputRoot: 'dist',\n  // babel \u7f16\u8bd1\u914d\u7f6e\n  babel: {\n    sourceMap: true,\n    presets: ['env'],\n    plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']\n  },\n  // \u7f16\u8bd1\u63d2\u4ef6\u914d\u7f6e\n  plugins: [],\n  // \u5168\u5c40\u53d8\u91cf\u8bbe\u7f6e\n  defineConstants: {},\n  // \u6587\u4ef6 copy \u914d\u7f6e\n  copy: {\n    patterns: [\n    ],\n    options: {\n    }\n  },\n  // \u5c0f\u7a0b\u5e8f\u7aef\u4e13\u7528\u914d\u7f6e\n  mini: {\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      // \u5c0f\u7a0b\u5e8f\u7aef\u6837\u5f0f\u5f15\u7528\u672c\u5730\u8d44\u6e90\u5185\u8054\u914d\u7f6e\n      url: {\n        enable: true,\n        config: {\n          limit: 10240\n        }\n      }\n    },\n    // \u66ff\u6362 JSX \u4e2d\u7684\u5c5e\u6027\u540d\uff0c\u53c2\u8003\uff1a\n    // https://github.com/NervJS/taro/issues/2077\n    jsxAttributeNameReplace: {}\n  },\n  // H5 \u7aef\u4e13\u7528\u914d\u7f6e\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    postcss: {\n      autoprefixer: {\n        enable: true\n      }\n    },\n    // \u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\n    webpackChain: {},\n    devServer: {}\n  }\n};\n\nmodule.exports = function(merge) {\n  if (process.env.NODE_ENV === 'development') {\n    return merge({}, config, require('./dev'));\n  }\n  return merge({}, config, require('./prod'));\n};\n")))}p.isMDXComponent=!0},1772:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},1773:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},1774:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,d=l["".concat(c,".").concat(b)]||l[b]||f[b]||i;return t?o.a.createElement(d,a(a({ref:n},u),{},{components:t})):o.a.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);