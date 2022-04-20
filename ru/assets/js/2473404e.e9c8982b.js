"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[5955],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4172:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2,title:"Auth",slug:"/views/auth"},u="\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",l={unversionedId:"documentation/client/root/auth",id:"documentation/client/root/auth",isDocsHomePage:!1,title:"Auth",description:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ui/root/authflow/index.js",source:"@site/docs/documentation/client/root/auth.md",sourceDirName:"documentation/client/root",slug:"/views/auth",permalink:"/wellness_doc/ru/docs/views/auth",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/documentation/client/root/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Auth",slug:"/views/auth"},sidebar:"documentation",previous:{title:"Description",permalink:"/wellness_doc/ru/docs/views/intro"},next:{title:"Calendar",permalink:"/wellness_doc/ru/docs/views/todo"}},p=[{value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f-1",children:[],level:2},{value:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:[],level:2},{value:"\u041f\u0438\u043d-\u043a\u043e\u0434",id:"\u043f\u0438\u043d-\u043a\u043e\u0434",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",(0,i.kt)("inlineCode",{parentName:"p"},"ui/root/authflow/index.js"),"  ")),(0,i.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u043e\u043a\u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043f\u0438\u043d-\u043a\u043e\u0434\u0430")),(0,i.kt)("h2",{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f-1"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",(0,i.kt)("inlineCode",{parentName:"p"},"ui/root/authflow/loginPage.js"),"  ")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"..//img/presentation/auth/login.png"})),(0,i.kt)("h2",{id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",(0,i.kt)("inlineCode",{parentName:"p"},"ui/root/authflow/signUpPage.js"),"  ")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"..//img/presentation/auth/signup.png"})),(0,i.kt)("h2",{id:"\u043f\u0438\u043d-\u043a\u043e\u0434"},"\u041f\u0438\u043d-\u043a\u043e\u0434"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",(0,i.kt)("inlineCode",{parentName:"p"},"ui/root/authflow/PinScreen"),"  ")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{type:"imgscreen",src:"..//img/presentation/auth/pin.png"})))}d.isMDXComponent=!0}}]);