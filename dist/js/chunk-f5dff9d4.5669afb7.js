(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5dff9d4"],{"0e17":function(t,e,s){},"7a3b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pg-tasks"},[s("DashboardHeader",{attrs:{title:"任务"}}),s("PageWrap",t._l(t.scripts,(function(e,a){return s("div",{key:a,staticClass:"item",class:{active:a===t.activeName},on:{click:function(e){return t.execHandler(a)}}},[s("img",{attrs:{src:"https://gw.alipayobjects.com/zos/basement_prod/fb3b6fab-253e-41fc-981a-8bfc5dc4fede.svg"}}),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(a))]),s("div",{staticClass:"detail"},[t._v(t._s(e))])])])})),0)],1)},c=[],i=s("365c"),n=s("3a43"),r={name:"Tasks",data:function(){return{scripts:{},activeName:"",currentScript:null}},methods:{execHandler:function(t){this.$store.commit("setLogShow",!0),setTimeout((function(){n["a"].emit("exec task",t)}),1e3)}},mounted:function(){var t=this;i["a"].get("/pkg/scripts").then((function(e){t.scripts=e}))}},o=r,u=(s("9053"),s("2877")),f=Object(u["a"])(o,a,c,!1,null,"42ee4874",null);e["default"]=f.exports},9053:function(t,e,s){"use strict";var a=s("0e17"),c=s.n(a);c.a}}]);
//# sourceMappingURL=chunk-f5dff9d4.5669afb7.js.map