(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a28e79"],{"33b1":function(e,t,n){},"36ad":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),e._t("default")],2)},r=[],c={name:"PageHeader",props:{title:String}},i=c,s=(n("51b2"),n("2877")),o=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=o.exports},"3afc":function(e,t,n){"use strict";var a=n("d4db"),r=n.n(a);r.a},"51b2":function(e,t,n){"use strict";var a=n("33b1"),r=n.n(a);r.a},5232:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrapper"},[e._t("default")],2)},r=[],c=(n("3afc"),n("2877")),i={},s=Object(c["a"])(i,a,r,!1,null,null,null);t["a"]=s.exports},"7cff":function(e,t,n){},"96f0":function(e,t,n){"use strict";var a=n("7cff"),r=n.n(a);r.a},aba4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageHeader",{attrs:{title:"如何添加物料？"}}),n("MainWrapper",{staticClass:"help"},[n("help")],1)],1)},r=[],c=n("36ad"),i=n("5232"),s=n("f34c"),o=n.n(s),u={name:"Help",data:function(){return{vue:"https://git.souche-inc.com/loan/magic-park/vue-materials",react:"https://git.souche-inc.com/loan/magic-park/react-materials"}},components:{MainWrapper:i["a"],PageHeader:c["a"],help:o.a.vue.component}},l=u,p=(n("96f0"),n("2877")),v=Object(p["a"])(l,a,r,!1,null,null,null);t["default"]=v.exports},d4db:function(e,t,n){},f34c:function(e,t){const n=()=>{var e=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},t=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h3",[e._v("官方物料仓库")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://git.souche-inc.com/loan/magic-park/vue-materials"}},[e._v("vue物料")]),e._v(" "),n("a",{attrs:{href:"https://git.souche-inc.com/loan/magic-park/vue-materials"}},[e._v("React物料")])]),e._v(" "),n("p",[e._v("通过向官方仓库拉分支开发，开发完成后提mr或者pr给管理员，codeReview后合到主分支，就完成了上架官方物料市场。")]),e._v(" "),n("p",[e._v("下面会介绍各种物料的开发方式")]),e._v(" "),n("h3",[e._v("区块开发")]),e._v(" "),n("p",[e._v("下面以vue区块开发为例 UserInfo")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("git clone git@git.souche-inc.com:loan/magic-park/vue-materials.git\n\ngit checkout -b block/UserInfo\n")])]),e._v(" "),n("p",[e._v("克隆对应的官方仓库到本地")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("mp add\n")])]),e._v(" "),n("p",[e._v("选择你想开发的物料类型并填写相关信息，完成后在blocks下会生成包含基础代码的文件夹")]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("-UserInfo\n    --src  // 编写代码的地方\n        --index.vue\n        ...\n    --README.md // 说明文件\n    --package.json // 版本信息，名称，维护人等信息\n")])]),e._v(" "),n("p",[e._v("注意👹：区块代码中不能依赖除node_modules和区块文件夹src以外的文件，因为区块被下载时，只会下载区块的src目录，可以把区块想象成一个未打包的组件。")])])}];return{render:e,staticRenderFns:t}},a=n();e.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=a.render,this.$options.staticRenderFns=a.staticRenderFns}}}}}}]);
//# sourceMappingURL=chunk-33a28e79.32457a5b.js.map