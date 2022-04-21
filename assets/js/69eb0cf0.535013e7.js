"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[7684],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5225:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:1,id:"introduction",title:"Introduction",slug:"/presentation/history/intro"},l=void 0,c={unversionedId:"presentation/history/introduction",id:"presentation/history/introduction",title:"Introduction",description:"This section describes journaling and covers the following topics:",source:"@site/docs/presentation/history/intro.md",sourceDirName:"presentation/history",slug:"/presentation/history/intro",permalink:"/wellness_doc/docs/presentation/history/intro",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/presentation/history/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"introduction",title:"Introduction",slug:"/presentation/history/intro"},sidebar:"presentation",previous:{title:"Intro",permalink:"/wellness_doc/docs/presentation/security/intro"},next:{title:"Viewing the diary",permalink:"/wellness_doc/docs/presentation/history/show"}},p={},d=[{value:"Diaries",id:"diaries",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes journaling and covers the following topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/presentation/history/intro"},"General description"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Purpose of diaries"),(0,a.kt)("li",{parentName:"ul"},"Diary functionality"),(0,a.kt)("li",{parentName:"ul"},"Editing diaries"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/presentation/history/constructor_diary"},"Diary creating")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/presentation/history/show"},"View")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/presentation/history/edit_history"},"Editing history")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/presentation/history/edit_diary"},"Diary settings"))),(0,a.kt)("h2",{id:"diaries"},"Diaries"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Diaries are designed to monitor")," changes in the totality of any indicators, called ",(0,a.kt)("inlineCode",{parentName:"p"},"variables"),".\nA diary chart can depend on several expressions, each reflecting the relationship of a set of variables."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, fluid balance = the difference between filled and poured liquid.\nThese parameters can be displayed as two lines or as one line, reflecting their difference.\nWhen adding a new value to the widget, the data is written to the profile in the database (history) and the graph is redrawn.")),(0,a.kt)("p",null,"When a user registers, a set of ",(0,a.kt)("strong",{parentName:"p"},"standard")," diaries is created in his profile:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Heart rate"),(0,a.kt)("li",{parentName:"ol"},"Saturation (blood oxygen saturation)"),(0,a.kt)("li",{parentName:"ol"},"Pressure"),(0,a.kt)("li",{parentName:"ol"},"Steps"),(0,a.kt)("li",{parentName:"ol"},"Temperature"),(0,a.kt)("li",{parentName:"ol"},"Sugar"),(0,a.kt)("li",{parentName:"ol"},"Weight"),(0,a.kt)("li",{parentName:"ol"},"Growth"),(0,a.kt)("li",{parentName:"ol"},"BMI (Body Mass Index)")),(0,a.kt)("p",null,"The user can also add new widgets or remove existing ones."),(0,a.kt)("p",null,"To add diaries to your profile, there are 2 ways:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","diary constructor"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Search in template database")),(0,a.kt)("p",null,"Widget ",(0,a.kt)("strong",{parentName:"p"},"settings")," are described in the corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs/presentation/history/edit_diary"},"section")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The device of the diary widget is described in more detail in its ",(0,a.kt)("a",{parentName:"p",href:"/docs/presentation/history/constructor_diary"},"constructor"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the diary panel, graphs display the last 10 measurements without aggregation by time.")),(0,a.kt)("p",null,"Editing added diaries is available through the context menu of the diary tile (long press | right mouse click):"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Resize 0.5 | one"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Period change"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Delete"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Other settings:",(0,a.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diary color"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diary Icon"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Serial number"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data set colors"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diary type")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{type:"imgscreen",src:"/wellness_doc/img/presentation/diary/diaryLayout.png"})))}m.isMDXComponent=!0}}]);