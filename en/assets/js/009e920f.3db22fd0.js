"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[2755],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"auth"},l="\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",u={unversionedId:"documentation/server/Routes/auth",id:"documentation/server/Routes/auth",title:"auth",description:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u043e\u0443\u0442\u0435\u0440 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",source:"@site/docs/documentation/server/Routes/auth.md",sourceDirName:"documentation/server/Routes",slug:"/documentation/server/Routes/auth",permalink:"/wellness_doc/en/docs/documentation/server/Routes/auth",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/documentation/server/Routes/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"auth"},sidebar:"documentation",previous:{title:"Intro",permalink:"/wellness_doc/en/docs/documentation/server/Routes/intro"},next:{title:"files",permalink:"/wellness_doc/en/docs/documentation/server/Routes/files"}},p={},c=[{value:"Login",id:"login",level:2},{value:"Logout",id:"logout",level:2},{value:"Signup",id:"signup",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f-\u0438-\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u043e\u0443\u0442\u0435\u0440 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")," \u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")),(0,a.kt)("h2",{id:"login"},"Login"),(0,a.kt)("p",null,"URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/auth/login")),(0,a.kt)("p",null,"\u041c\u0430\u0448\u0440\u0443\u0442 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0432\u0445\u043e\u0434\u0430 \u0432 \u0443\u0447\u0451\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] request body"',title:'"[POST]',request:!0,'body"':!0},'{\n  "email": "<string>", // email || username\n  "password": "<string>" // raw string\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SUCCESS:")," \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u043e\u0442\u0432\u0435\u0442 \u0441 \u043a\u043e\u0434\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] response body"',title:'"[POST]',response:!0,'body"':!0},'200 {\n  "token": "<JWT token string>",\n  "email": "<sring || null>",\n  "username": "<sring || null>",\n  "personal": "<dict || null>",\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ERROR:")," \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u043e\u0442\u0432\u0435\u0442 \u0441 \u043a\u043e\u0434\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"401"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] response body"',title:'"[POST]',response:!0,'body"':!0},'401 { "token": "\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!" }\n')),(0,a.kt)("h2",{id:"logout"},"Logout"),(0,a.kt)("p",null,"URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/auth/logout")),(0,a.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043b\u044f \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0445 \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438. \u041d\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0435\u043b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] request body"',title:'"[POST]',request:!0,'body"':!0},'200 {"msg":"logout succesfull"}\n')),(0,a.kt)("h2",{id:"signup"},"Signup"),(0,a.kt)("p",null,"URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/auth/signup")),(0,a.kt)("p",null,"\u041c\u0430\u0448\u0440\u0443\u0442 \u0434\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] request body "',title:'"[POST]',request:!0,body:!0,'"':!0},'{\n  "username": "<string>", // \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u041e\n  "email": "<string>", // \u0423\u041d\u0418\u041a\u0410\u041b\u042c\u041d\u041e. \u041f\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0443 \u043f\u043e\u0447\u0442\u044b *@*.*\n  "password": "<string>" // \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SUCCESS:")," \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u043e\u0442\u0432\u0435\u0442 \u0441 \u043a\u043e\u0434\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] response body"',title:'"[POST]',response:!0,'body"':!0},'200\n{\n    "token": "<JWT token string>",\n    "email": "<sring>",\n    "username": "<sring>",\n    "personal": "<null>",\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ERROR:")," \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u043e\u0442\u0432\u0435\u0442 \u0441 \u043a\u043e\u0434\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"400"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] response body"',title:'"[POST]',response:!0,'body"':!0},'400 { "token": "<error message>" }\n')))}d.isMDXComponent=!0}}]);