(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-226d041a"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"277c":function(e,t,n){"use strict";var r=n("b110"),i=n.n(r);i.a},"33a3":function(e,t,n){"use strict";var r=n("cc36"),i=n.n(r);i.a},"440b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageHeader",{attrs:{title:"项目依赖"}},[n("div",[n("SearchInput",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("el-button",{staticClass:"install-btn",attrs:{type:"primary",round:"",size:"mini"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("安装依赖")])],1)]),n("div",{staticClass:"content"},[n("h2",[e._v("运行依赖")]),e._l(e.dependence.dependencies,(function(e){return n("list-item",{key:e.name,attrs:{item:e}})})),n("h2",[e._v("开发依赖")]),e._l(e.dependence.devDependencies,(function(e){return n("list-item",{key:e.name,attrs:{item:e}})}))],2),n("el-dialog",{attrs:{title:"安装依赖",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"类型"}},[n("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-radio",{attrs:{label:"S"}},[e._v("运行依赖")]),n("el-radio",{attrs:{label:"D"}},[e._v("开发依赖")])],1)],1),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入npm包名及版本号，例如lodash@latest,多个包名之间用空格分隔"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.installDependence}},[e._v("确 定")])],1)],1)],1)},i=[],a=(n("4de4"),n("c975"),n("b0c0"),n("ac1f"),n("841c"),n("36ad")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-input"},[n("input",{attrs:{type:"text"},domProps:{value:e.currentValue},on:{input:e.inputHandler,change:e.inputHandler,blur:e.blurHandler,focus:e.focusHandler}}),n("i",{staticClass:"iconfont iconsearch"})])},o=[],s={name:"SearchInput",data:function(){return{currentValue:""}},props:{value:String},watch:{value:function(e){this.currentValue=e}},methods:{inputHandler:function(e){this.$emit("input",e.target.value)},changeHandler:function(e){this.$emit("change",e.target.value)},blurHandler:function(e){this.$emit("blur",e)},focusHandler:function(e){this.$emit("focus",e)}},created:function(){this.currentValue=this.value}},l=s,u=(n("a900"),n("2877")),d=Object(u["a"])(l,c,o,!1,null,null,null),f=d.exports,p=(n("365c"),n("3a43")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item"},[n("span",{staticClass:"name"},[e._v(e._s(e.item.name))]),n("span",{staticClass:"version"},[e._v("版本 "+e._s(e.item.version))]),n("i",{staticClass:"iconfont iconshanchu",on:{click:function(t){return e.remove(e.item.name)}}})])},v=[],h={name:"ListItem",props:{item:{type:Object,default:function(){return{}}}},methods:{remove:function(e){p["a"].emit("install dependence",e),this.$store.commit("setLogShow",!0)}}},x=h,b=(n("33a3"),Object(u["a"])(x,m,v,!1,null,null,null)),g=b.exports,y={name:"Dependence",data:function(){return{search:"",dialogFormVisible:!1,form:{name:"",type:"S"}}},computed:{_dependence:function(){return this.$store.state.dependence},dependence:function(){var e=this,t=Object.assign({},this._dependence),n=t.dependencies.filter((function(t){return t.name.indexOf(e.search)>-1})),r=t.devDependencies.filter((function(t){return t.name.indexOf(e.search)>-1}));return{dependencies:n,devDependencies:r}}},methods:{installDependence:function(){p["a"].emit("install dependence",this.form),this.dialogFormVisible=!1,this.$store.commit("setLogShow",!0)}},components:{PageHeader:a["a"],ListItem:g,SearchInput:f},created:function(){this.$store.dispatch("getDependence")}},_=y,$=(n("277c"),Object(u["a"])(_,r,i,!1,null,"634bf546",null));t["default"]=$.exports},"578c":function(e,t,n){},"841c":function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),a=n("1d80"),c=n("129f"),o=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=i(e),s=String(this),l=a.lastIndex;c(l,0)||(a.lastIndex=0);var u=o(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=void 0!==/()??/.exec("")[1],l=o||s;l&&(c=function(e){var t,n,c,l,u=this;return s&&(n=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),o&&(t=u.lastIndex),c=i.call(u,e),o&&c&&(u.lastIndex=u.global?c.index+c[0].length:t),s&&c&&c.length>1&&a.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),e.exports=c},a900:function(e,t,n){"use strict";var r=n("578c"),i=n.n(r);i.a},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,c=a.toString,o=/^\s*function ([^ (]*)/,s="name";!r||s in a||i(a,s,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(e){return""}}})},b110:function(e,t,n){},c975:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,a=n("b301"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,s=a("indexOf");r({target:"Array",proto:!0,forced:o||s},{indexOf:function(e){return o?c.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},cc36:function(e,t,n){},d784:function(e,t,n){"use strict";var r=n("9112"),i=n("6eeb"),a=n("d039"),c=n("b622"),o=n("9263"),s=c("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var f=c(e),p=!a((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),m=p&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!m||"replace"===e&&!l||"split"===e&&!u){var v=/./[f],h=n(f,""[e],(function(e,t,n,r,i){return t.exec===o?p&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),x=h[0],b=h[1];i(String.prototype,e,x),i(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)}),d&&r(RegExp.prototype[f],"sham",!0)}}}}]);
//# sourceMappingURL=chunk-226d041a.3e5c3949.js.map