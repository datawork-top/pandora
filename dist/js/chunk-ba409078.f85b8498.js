(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba409078"],{1276:function(t,e,r){"use strict";var n=r("d784"),i=r("44e7"),a=r("825a"),o=r("1d80"),s=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),h=r("9263"),f=r("d039"),p=[].push,d=Math.min,v=4294967295,m=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(o(this)),a=void 0===r?v:r>>>0;if(0===a)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,a);var s,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=new RegExp(t.source,f+"g");while(s=h.call(m,n)){if(c=m.lastIndex,c>d&&(u.push(n.slice(d,s.index)),s.length>1&&s.index<n.length&&p.apply(u,s.slice(1)),l=s[0].length,d=c,u.length>=a))break;m.lastIndex===s.index&&m.lastIndex++}return d===n.length?!l&&m.test("")||u.push(""):u.push(n.slice(d)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,r):n.call(String(i),e,r)},function(t,i){var o=r(n,t,this,i,n!==e);if(o.done)return o.value;var h=a(t),f=String(this),p=s(h,RegExp),g=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(m?"y":"g"),y=new p(m?h:"^(?:"+h.source+")",b),w=void 0===i?v:i>>>0;if(0===w)return[];if(0===f.length)return null===u(y,f)?[f]:[];var x=0,L=0,k=[];while(L<f.length){y.lastIndex=m?L:0;var E,j=u(y,m?f:f.slice(L));if(null===j||(E=d(l(y.lastIndex+(m?0:L)),f.length))===x)L=c(f,L,g);else{if(k.push(f.slice(x,L)),k.length===w)return k;for(var P=1;P<=j.length-1;P++)if(k.push(j[P]),k.length===w)return k;L=x=E}}return k.push(f.slice(x)),k}]}),!m)},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"2a02":function(t,e,r){"use strict";var n=r("c11e"),i=r.n(n);i.a},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),a=r("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4fb6":function(t,e,r){},"520d":function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5fe2":function(t,e,r){"use strict";var n=r("4fb6"),i=r.n(n);i.a},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),a=function(t){return function(e,r){var a,o,s=String(i(e)),c=n(r),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(t,o),t}},8478:function(t,e,r){"use strict";var n=r("8bb5"),i=r.n(n);i.a},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8bb5":function(t,e,r){},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=void 0!==/()??/.exec("")[1],l=s||c;l&&(o=function(t){var e,r,o,l,u=this;return c&&(r=new RegExp("^"+u.source+"$(?!\\s)",n.call(u))),s&&(e=u.lastIndex),o=i.call(u,t),s&&o&&(u.lastIndex=u.global?o.index+o[0].length:e),c&&o&&o.length>1&&a.call(o[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new F(n||[]);return a._invoke=E(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function v(){}function m(){}function g(){}var b={};b[a]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(N([])));w&&w!==r&&n.call(w,a)&&(b=w);var x=g.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){function e(r,i,a,o){var s=l(t[r],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var r;function i(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=u;return function(i,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return $()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=j(o,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:$}}function $(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,i){var a=new k(c(e,r,n,i));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),o=r("861d"),s=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),h=r("1dde"),f=r("b622"),p=r("60ae"),d=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=p>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),b=h("concat"),y=function(t){if(!o(t))return!1;var e=t[d];return void 0!==e?!!e:a(t)},w=!g||!b;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,i,a,o=s(this),h=u(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?o:arguments[e],y(a)){if(i=c(a.length),f+i>v)throw TypeError(m);for(r=0;r<i;r++,f++)r in a&&l(h,f,a[r])}else{if(f>=v)throw TypeError(m);l(h,f++,a)}return h.length=f,h}})},a15b:function(t,e,r){"use strict";var n=r("23e7"),i=r("44ad"),a=r("fc6a"),o=r("b301"),s=[].join,c=i!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:c||l},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),a=r("94ca"),o=r("6eeb"),s=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),h=r("d039"),f=r("7c73"),p=r("241c").f,d=r("06cf").f,v=r("9bf2").f,m=r("58a8").trim,g="Number",b=i[g],y=b.prototype,w=c(f(y))==g,x=function(t){var e,r,n,i,a,o,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(a=l.slice(2),o=a.length,s=0;s<o;s++)if(c=a.charCodeAt(s),c<48||c>i)return NaN;return parseInt(a,n)}return+l};if(a(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var L,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(w?h((function(){y.valueOf.call(r)})):c(r)!=g)?l(new b(x(e)),r,k):x(e)},E=n?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;E.length>j;j++)s(b,L=E[j])&&!s(k,L)&&v(k,L,d(b,L));k.prototype=y,y.constructor=k,o(i,g,k)}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,c="name";!n||c in a||i(a,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},c11e:function(t,e,r){},cf90:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create"},[r("PageHeader",{attrs:{title:"项目管理器"}}),r("div",{staticClass:"tab"},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{name:"project"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("i",{staticClass:"el-icon-s-order"}),t._v("项目")]),r("div",{staticClass:"tab-content"},[t.favorriteProjectList.length>0?r("h3",[t._v("收藏的项目")]):t._e(),r("ProjectList",{attrs:{projectList:t.favorriteProjectList},on:{favorite:t.favorite,deleteItem:t.deleteItem,editItem:t.editItem,openEditor:t.openEditor}}),t.notFavorriteProjectList.length>0?r("h3",[t._v("更多项目")]):t._e(),r("ProjectList",{attrs:{projectList:t.notFavorriteProjectList},on:{favorite:t.favorite,deleteItem:t.deleteItem,editItem:t.editItem,openEditor:t.openEditor}})],1)]),r("el-tab-pane",{attrs:{name:"import"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("i",{staticClass:"el-icon-upload2"}),t._v("导入")]),r("div",{staticClass:"tab-content"},[r("Import",{attrs:{isSwitchTab:t.isSwitchTab}})],1)])],1),r("el-dialog",{attrs:{title:"重命名",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{attrs:{"status-icon":"","label-width":"40px"}},[r("el-form-item",{attrs:{label:"名称",prop:"pass"}},[r("el-input",{attrs:{type:"text"},model:{value:t.floderName,callback:function(e){t.floderName=e},expression:"floderName"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)],1)},i=[],a=(r("4de4"),r("b0c0"),r("d3b7"),r("96cf"),r("36ad")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list"},t._l(t.projectList,(function(e){return r("div",{key:e.id,staticClass:"list-item"},[r("div",{staticClass:"left-part"},[r("div",{staticClass:"favorite",on:{click:function(r){return t.favorite(e)}}},[r("i",{class:e.favorite?"el-icon-star-on":"el-icon-star-off"})]),r("div",{staticClass:"file"},[r("span",{staticClass:"file-name"},[t._v(t._s(e.name))]),r("span",{staticClass:"file-path"},[t._v(t._s(e.path))])])]),r("div",{staticClass:"right-part"},[r("el-row",[r("el-button",{attrs:{size:"medium"},on:{click:function(r){return t.openEditor(e)}}},[r("i",{staticClass:"el-icon-upload2",staticStyle:{"margin-right":"5px"}}),t._v("在编辑器中打开")]),r("el-button",{attrs:{size:"medium"},on:{click:function(r){return t.editItem(e)}}},[r("i",{staticClass:"el-icon-edit"})]),r("el-button",{attrs:{size:"medium"},on:{click:function(r){return t.deleteItem(e.id)}}},[r("i",{staticClass:"el-icon-close"})])],1)],1)])})),0)},s=[],c={name:"list",components:{},props:{projectList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{favorite:function(t){this.$emit("favorite",t)},deleteItem:function(t){this.$emit("deleteItem",t)},editItem:function(t){this.$emit("editItem",t)},openEditor:function(t){this.$emit("openEditor",t)}}},l=c,u=(r("8478"),r("2877")),h=Object(u["a"])(l,o,s,!1,null,"02a414fb",null),f=h.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"import"},[r("Floder",{attrs:{fileList:t.fileList,path:t.path,favoritePathList:t.favoritePathList,isSwitchTab:t.isSwitchTab},on:{backUpperLevel:t.backUpperLevel,editItem:t.editItem,operateFavorite:t.operateFavorite,rootDir:t.rootDir,refresh:t.refresh,importProject:t.importProject,favoritePath:t.favoritePath,removeFavoritePath:t.removeFavoritePath,goThisPath:t.goThisPath,mkdir:t.mkdir,viewhide:t.viewhide}}),r("div",{staticClass:"table-of-contents"},t._l(t.fileList,(function(e,n){return r("section",{key:n,staticClass:"wrap"},[r("div",{on:{click:function(r){return t.getThisFileList(e)}}},[r("span",[r("i",{class:"dir"===e.type?"el-icon-folder":"el-icon-tickets"})]),r("span",[t._v(t._s(e.name))])]),r("span",{staticClass:"el-icon-close",on:{click:function(r){return t.deleteThis(e)}}})])})),0),r("el-dialog",{attrs:{title:"新建文件夹",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{attrs:{"status-icon":"","label-width":"40px"}},[r("el-form-item",{attrs:{label:"名称",prop:"pass"}},[r("el-input",{attrs:{type:"text"},model:{value:t.floderName,callback:function(e){t.floderName=e},expression:"floderName"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("确 定")])],1)],1)],1)},d=[],v=(r("99af"),r("a15b"),r("fb6a"),r("a9e3"),r("ac1f"),r("1276"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Floader"},[r("div",{staticClass:"module back"},[r("div",{staticClass:"icon",attrs:{title:"上一级"},on:{click:t.backUpperLevel}},[r("i",{staticClass:"el-icon-arrow-up"})])]),r("div",{staticClass:"module module-floder"},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",disabled:t.isDisabled},on:{blur:t.blurInput},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}},[r("i",{staticClass:"el-icon-edit",attrs:{slot:"append"},on:{click:t.editItem},slot:"append"})])],1),r("div",{staticClass:"icon floder-icon",attrs:{title:"当前目录"},on:{click:t.rootDir}},[r("i",{staticClass:"el-icon-folder-opened",staticStyle:{width:"28px"}})]),r("div",{staticClass:"icon refresh-icon",attrs:{title:"刷新"},on:{click:t.refresh}},[r("i",{staticClass:"el-icon-refresh"})]),r("div",{staticClass:"icon oters final"},[r("el-dropdown",{on:{command:t.commandMore}},[r("el-button",{attrs:{type:"primary"}},[r("i",{staticClass:"el-icon-more"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"mkdir"}},[r("i",{staticClass:"el-icon-folder-add",staticStyle:{"margin-right":"8px"}}),r("span",[t._v("新建文件夹")])]),r("el-dropdown-item",{attrs:{command:"viewhide"}},[r("i",{staticClass:"el-icon-view",staticStyle:{"margin-right":"8px"}}),r("span",[t._v(t._s(t.isShowHideFile?"显示隐式文件或文件夹":"隐藏隐式文件或文件夹"))])])],1)],1)],1)])}),m=[];function g(t,e){var r;return function(){var n=this,i=arguments;r||(r=setTimeout((function(){t.apply(n,i),r=null}),e))}}var b={name:"Floader",props:{fileList:{type:Array,default:function(){return[]}},path:{type:String,default:""}},data:function(){return{floderName:"",isDisabled:!0,isShowHideFile:!0}},created:function(){this.floderName=this.path.split("/").slice(-1)[0]},watch:{path:function(){this.floderName=this.isDisabled?this.path.split("/").slice(-1)[0]:this.path},floderName:g((function(t){this.isDisabled||this.$emit("editItem",t)}),100)},methods:{editItem:function(){this.isDisabled=!1,this.floderName=this.path},blurInput:function(){this.isDisabled=!0,this.floderName=this.path.split("/").slice(-1)[0]},backUpperLevel:function(){this.$emit("backUpperLevel")},rootDir:function(){this.$emit("rootDir")},refresh:function(){this.$emit("refresh")},favoritePath:function(){this.$emit("favoritePath")},removeFavoritePath:function(){this.$emit("removeFavoritePath")},handleCommand:function(t){this.$emit("goThisPath",t)},commandMore:function(t){"mkdir"===t?this.$emit("mkdir"):"viewhide"===t&&(this.isShowHideFile=!this.isShowHideFile,this.$emit("viewhide",this.isShowHideFile))},importProject:function(){this.$emit("importProject")}}},y=b,w=(r("e2f0"),Object(u["a"])(y,v,m,!1,null,null,null)),x=w.exports,L={name:"Import",components:{Floder:x},props:{isSwitchTab:{type:Number,default:0}},data:function(){return{fileList:[],path:this.$store.state.project.cwd,favorite:!1,favoritePathList:[],dialogVisible:!1,floderName:""}},created:function(){this.getFloder(this.$store.state.project.cwd),this.queryFavoritePath()},methods:{getFloder:function(t){var e,r,n=arguments;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=!(n.length>1&&void 0!==n[1])||n[1],i.prev=1,i.next=4,regeneratorRuntime.awrap(this.$api.create.list(t,e));case 4:if(r=i.sent,"ENOENT"!==r.code){i.next=8;break}return this.fileList=[],i.abrupt("return");case 8:this.fileList=r,i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](1),console.log(i.t0);case 14:case"end":return i.stop()}}),null,this,[[1,11]])},backUpperLevel:function(){this.path=this.path.split("/").slice(0,-1).join("/"),this.getFloder(this.path)},getThisFileList:function(t){var e=t.name,r=t.type;"file"!==r?(this.path="".concat(this.path,"/").concat(e),this.getFloder(this.path)):this.$message.warning("请点击文件夹")},deleteThis:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(e.$api.create.deleteFile(e.path,t));case 3:r=n.sent,r.success&&(e.getFloder(e.path),e.$message.success("删除成功")),r.hasFloder&&e.$message.warning("此文件夹不存在"),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}))},editItem:function(t){t=""===t.split("/").slice(-1)[0]?t.split("/").slice(0,-1).join("/"):t,this.getFloder(t),this.path=t},favoriteOperate:function(t){var e,r,n,i;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return e=t.id,r=t.favorite,n=r?"取消成功":"收藏成功",a.prev=2,a.next=5,regeneratorRuntime.awrap(this.$api.create.favorite(e,r));case 5:i=a.sent,i&&this.$message.success(n),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),console.log(a.t0);case 12:case"end":return a.stop()}}),null,this,[[2,9]])},operateFavorite:function(t){this.favorite=t.favorite,console.log(t.projectList),t.projectList.length>0&&this.favoriteOperate(t.projectList[0])},rootDir:function(){this.path="",this.getFloder("/")},refresh:function(){this.path=this.$store.state.project.cwd,this.getFloder(this.path)},importProject:function(){var t,e,r,n,i;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=this.path.split("/").slice(-1)[0],e=this.path,r=this.favorite,console.log(e),a.next=5,regeneratorRuntime.awrap(this.checkHasProject(e));case 5:if(n=a.sent,!n){a.next=9;break}return this.$message.warning("已拥有此项目"),a.abrupt("return");case 9:return a.prev=9,a.next=12,regeneratorRuntime.awrap(this.$api.create.importProject({name:t,path:e,favorite:r}));case 12:i=a.sent,i&&this.$message.success("导入成功"),a.next=19;break;case 16:a.prev=16,a.t0=a["catch"](9),console.log(a.t0);case 19:case"end":return a.stop()}}),null,this,[[9,16]])},checkHasProject:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(this.$api.create.checkHasProject(t));case 3:return e=r.sent,r.abrupt("return",e.hasProject);case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),null,this,[[0,7]])},favoritePath:function(){var t,e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=this.path,r.prev=1,r.next=4,regeneratorRuntime.awrap(this.$api.create.favoritePath({path:t}));case 4:e=r.sent,e&&(this.queryFavoritePath(),this.$message.success("收藏成功")),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0);case 11:case"end":return r.stop()}}),null,this,[[1,8]])},queryFavoritePath:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.$api.create.queryFavoritePath());case 3:t=e.sent,t.success&&(this.favoritePathList=t.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},removeFavoritePath:function(){var t,e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=this.path,r.prev=1,r.next=4,regeneratorRuntime.awrap(this.$api.create.removeFavoritePath(t));case 4:e=r.sent,e.success&&(this.queryFavoritePath(),this.$message.success("删除成功")),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0);case 11:case"end":return r.stop()}}),null,this,[[1,8]])},goThisPath:function(t){this.getFloder(t),this.path=t},mkdir:function(){this.floderName="",this.dialogVisible=!0},submitEdit:function(){var t,e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.path,e=this.floderName,n.prev=1,n.next=4,regeneratorRuntime.awrap(this.$api.create.mkDir(t,e));case 4:r=n.sent,r.success&&(this.getFloder(t),this.$message.success("创建文件夹成功")),r.hasFloder&&this.$message.warning("此文件夹已存在"),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:return n.prev=12,this.dialogVisible=!1,n.finish(12);case 15:case"end":return n.stop()}}),null,this,[[1,9,12,15]])},viewhide:function(t){this.getFloder(this.path,t)}}},k=L,E=(r("2a02"),Object(u["a"])(k,p,d,!1,null,"18458b1f",null)),j=E.exports,P={name:"Create",components:{PageHeader:a["a"],ProjectList:f,Import:j},data:function(){return{activeName:"project",favorriteProjectList:[],notFavorriteProjectList:[],dialogVisible:!1,id:"",floderName:"",currentTabName:"",isSwitchTab:0}},computed:{project:function(){return this.$store.state.project}},watch:{currentTabName:function(){this.isSwitchTab=Math.random([0,1])}},created:function(){this.getProjectList()},methods:{getProjectList:function(){var t,e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(this.$api.create.getProjectList());case 3:t=n.sent,e=t.success,r=t.data,e&&(this.favorriteProjectList=r.filter((function(t){return t.favorite})),this.notFavorriteProjectList=r.filter((function(t){return!t.favorite}))),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),null,this,[[0,8]])},favorite:function(t){var e,r,n,i;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return e=t.id,r=t.favorite,n=r?"取消成功":"收藏成功",a.prev=2,a.next=5,regeneratorRuntime.awrap(this.$api.create.favorite(e,r));case 5:i=a.sent,i.success&&(this.getProjectList(),this.$message.success(n)),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),console.log(a.t0);case 12:case"end":return a.stop()}}),null,this,[[2,9]])},deleteItem:function(t){var e=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(e.$api.create.deleteItem(t));case 3:r=n.sent,r.success&&(e.getProjectList(),e.$message.success("删除成功")),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}));case 1:case"end":return r.stop()}}),null,this)},editItem:function(t){var e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:e=t.id,r=t.name,this.floderName=r,this.id=e,this.dialogVisible=!0;case 4:case"end":return n.stop()}}),null,this)},submitEdit:function(){var t,e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.id,e=this.floderName,n.prev=1,n.next=4,regeneratorRuntime.awrap(this.$api.create.editItem(t,e));case 4:r=n.sent,r&&(this.getProjectList(),this.$message.success("修改成功")),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:return n.prev=11,this.dialogVisible=!1,n.finish(11);case 14:case"end":return n.stop()}}),null,this,[[1,8,11,14]])},openEditor:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return e=t.path,r.prev=1,r.next=4,regeneratorRuntime.awrap(this.$api.create.openEditor(e));case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),console.log(r.t0);case 9:case"end":return r.stop()}}),null,this,[[1,6]])},getFloder:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:try{e=this.$api.create.list(t),this.fileList=e}catch(n){console.log(n)}case 1:case"end":return r.stop()}}),null,this)},handleClick:function(t,e){this.currentTabName=t.name,"project"===t.name&&this.getProjectList()}}},I=P,F=(r("5fe2"),Object(u["a"])(I,n,i,!1,null,null,null));e["default"]=F.exports},d784:function(t,e,r){"use strict";var n=r("9112"),i=r("6eeb"),a=r("d039"),o=r("b622"),s=r("9263"),c=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,h){var f=o(t),p=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=p&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}));if(!p||!d||"replace"===t&&!l||"split"===t&&!u){var v=/./[f],m=r(f,""[t],(function(t,e,r,n,i){return e.exec===s?p&&!i?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),g=m[0],b=m[1];i(String.prototype,t,g),i(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)}),h&&n(RegExp.prototype[f],"sham",!0)}}},e2f0:function(t,e,r){"use strict";var n=r("520d"),i=r.n(n);i.a},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),a=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("1dde"),h=r("b622"),f=h("species"),p=[].slice,d=Math.max;n({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var r,n,u,h=c(this),v=s(h.length),m=o(t,v),g=o(void 0===e?v:e,v);if(a(h)&&(r=h.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(h,m,g);for(n=new(void 0===r?Array:r)(d(g-m,0)),u=0;m<g;m++,u++)m in h&&l(n,u,h[m]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-ba409078.f85b8498.js.map