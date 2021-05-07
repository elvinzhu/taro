(window.webpackJsonp=window.webpackJsonp||[]).push([[1183],{1248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(1772),c=r(1773),a=(r(0),r(1774)),i={title:"Taro.readBLECharacteristicValue(option)",sidebar_label:"readBLECharacteristicValue"},l={unversionedId:"apis/device/ble/readBLECharacteristicValue",id:"version-2.x/apis/device/ble/readBLECharacteristicValue",isDocsHomePage:!1,title:"Taro.readBLECharacteristicValue(option)",description:"\u8bfb\u53d6\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 read \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/readBLECharacteristicValue.md",slug:"/apis/device/ble/readBLECharacteristicValue",permalink:"/taro/docs/2.x/apis/device/ble/readBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/ble/readBLECharacteristicValue.md",version:"2.x",sidebar_label:"readBLECharacteristicValue",sidebar:"version-2.x/API",previous:{title:"Taro.writeBLECharacteristicValue(option)",permalink:"/taro/docs/2.x/apis/device/ble/writeBLECharacteristicValue"},next:{title:"Taro.onBLEConnectionStateChange(callback)",permalink:"/taro/docs/2.x/apis/device/ble/onBLEConnectionStateChange"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:b};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u8bfb\u53d6\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 read \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5e76\u884c\u8c03\u7528\u591a\u6b21\u4f1a\u5b58\u5728\u8bfb\u5931\u8d25\u7684\u53ef\u80fd\u6027\u3002"),Object(a.b)("li",{parentName:"ul"},"\u63a5\u53e3\u8bfb\u53d6\u5230\u7684\u4fe1\u606f\u9700\u8981\u5728 ",Object(a.b)("inlineCode",{parentName:"li"},"onBLECharacteristicValueChange")," \u65b9\u6cd5\u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u83b7\u53d6\u3002")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<BluetoothError>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"characteristicId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),Object(a.b)("tr",null,Object(a.b)("td",null,"deviceId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(a.b)("tr",null,Object(a.b)("td",null,"serviceId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: BluetoothError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: BluetoothError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: BluetoothError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"// \u5fc5\u987b\u5728\u8fd9\u91cc\u7684\u56de\u8c03\u624d\u80fd\u83b7\u53d6\nTaro.onBLECharacteristicValueChange(function(characteristic) {\n  console.log('characteristic value comed:', characteristic)\n})\nTaro.readBLECharacteristicValue({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  success: function (res) {\n    console.log('readBLECharacteristicValue:', res.errCode)\n  }\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.readBLECharacteristicValue"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1772:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1773:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return n}))},1774:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=u(r),O=n,p=d["".concat(i,".").concat(O)]||d[O]||s[O]||a;return r?c.a.createElement(p,l(l({ref:t},o),{},{components:r})):c.a.createElement(p,l({ref:t},o))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<a;o++)i[o]=r[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);