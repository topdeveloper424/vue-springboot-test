(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"270d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("5f5b"),s=a("b1e0"),o=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",{attrs:{fluid:""}},[a("router-view")],1)],1)}),i=[],c=(a("5c0b"),a("2877")),l={},u=Object(c["a"])(l,o,i,!1,null,null,null),d=u.exports,p=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home mt-3"},[a("h1",[t._v("Amazon search")]),a("b-row",{staticClass:"mt-4"},[a("b-col",{attrs:{cols:"7"}},[a("b-row",[a("b-col",{staticClass:"text-right",attrs:{cols:"3"}},[a("label",{staticClass:"mt-1 mb-sm-0",attrs:{for:"inline-form-input-name"}},[t._v("Date Context:")])]),a("b-col",{staticClass:"text-left",attrs:{cols:"6"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker",size:"sm"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{staticClass:"text-right",attrs:{cols:"8",offset:"1"}},[a("b-input-group",{staticClass:"mb-2",attrs:{size:"sm"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"}})],1),a("b-form-input",{attrs:{type:"search",id:"searchTerm",placeholder:"Search terms"}})],1)],1),a("b-col",{staticClass:"text-left",attrs:{cols:"3"}},[a("b-button",{attrs:{variant:"danger",size:"sm",id:"searchBtn"},on:{click:t.search}},[t._v("Search")])],1)],1),a("b-row",[a("b-col",{attrs:{offset:"1"}},[a("save-search-component")],1)],1)],1),a("b-col",[a("upload-file-component")],1)],1),a("b-row",{staticClass:"mt-3 mb-3"},[a("b-col",[a("data-view-component",{attrs:{searchTerm:t.searchTerm}})],1)],1)],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vuetable-pagination",{ref:"pagination",attrs:{css:t.css.pagination},on:{"vuetable-pagination:change-page":t.onChangePage}}),a("vuetable",{ref:"vuetable",attrs:{"api-url":t.serverURL+"data/getData?searchTerm="+t.searchTerm,fields:t.fields,"sort-order":t.sortOrder,css:t.css.table,"pagination-path":"pagination","per-page":10},on:{"vuetable:pagination-data":t.onPaginationData,"vuetable:loading":t.onLoading,"vuetable:loaded":t.onLoaded},scopedSlots:t._u([{key:"actions",fn:function(e){return[a("div",{staticClass:"table-button-container"},[a("button",{staticClass:"btn btn-warning btn-sm",on:{click:function(a){return t.editRow(e.rowData)}}},[a("span",{staticClass:"glyphicon glyphicon-pencil"}),t._v(" Edit")])])]}}])})],1)},h=[],v=a("af52"),g=a.n(v),y=a("3568"),w=a("bc3a"),x=a.n(w),C=(a("2ef0"),{serverURL:"http://3.129.211.52:8080/"}),_={name:"DataView",components:{Vuetable:g.a,VuetablePagination:y["a"]},props:{searchTerm:String},data:function(){return{serverURL:C.serverURL,fields:[{name:"searchTerm",title:"Search Term",sortField:"searchTerm",titleClass:"center aligned"},{name:"rank",title:"Rank",sortField:"Rank",titleClass:"center aligned"},{name:"asin1",title:"ASIN #1",sortField:"asin1",titleClass:"center aligned"},{name:"title1",title:"Title",sortField:"title1",titleClass:"center aligned"},{name:"share1",title:"Share",sortField:"share1",titleClass:"center aligned"},{name:"conv1",title:"Conv",sortField:"conv1",titleClass:"center aligned"},{name:"asin2",title:"ASIN #2",sortField:"asin2",titleClass:"center aligned"},{name:"title2",title:"Title",sortField:"title2",titleClass:"center aligned"},{name:"share2",title:"Share",sortField:"share2",titleClass:"center aligned"},{name:"conv2",title:"Conv",sortField:"conv2",titleClass:"center aligned"},{name:"asin3",title:"ASIN #3",sortField:"asin3",titleClass:"center aligned"},{name:"title3",title:"Title",sortField:"title3",titleClass:"center aligned"},{name:"share3",title:"Share",sortField:"share3",titleClass:"center aligned"},{name:"conv3",title:"Conv",sortField:"conv3",titleClass:"center aligned"},"__slot:actions"],sortOrder:[{field:"created_at",direction:"asc"}],css:{table:{tableClass:"table table-striped table-bordered table-hovered",loadingClass:"loading",ascendingIcon:"glyphicon glyphicon-chevron-up",descendingIcon:"glyphicon glyphicon-chevron-down",handleIcon:"glyphicon glyphicon-menu-hamburger"},pagination:{infoClass:"pull-left",wrapperClass:"vuetable-pagination pull-right",activeClass:"btn-primary",disabledClass:"disabled",pageClass:"btn btn-border",linkClass:"btn btn-border",icons:{first:"",prev:"",next:"",last:""}}}}},computed:{},methods:{onPaginationData:function(t){this.$refs.pagination.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},editRow:function(t){alert("You clicked edit on"+JSON.stringify(t))},deleteRow:function(t){alert("You clicked delete on"+JSON.stringify(t))},onLoading:function(){console.log("loading... show your spinner here")},onLoaded:function(){console.log("loaded! .. hide your spinner here")}}},O=_,k=(a("d2aa"),Object(c["a"])(O,f,h,!1,null,null,null)),S=k.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"save-search"},[a("b-row",{staticClass:"mt-3"},[a("b-col",{staticClass:"text-right"},[a("b-button",{staticClass:"ml-3",attrs:{variant:"primary",size:"sm",id:"searchBtn"}},[t._v("Save Search")])],1)],1),a("b-row",[a("b-col",[a("div",{staticClass:"accordion",attrs:{role:"tablist"}},[a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"text-left",attrs:{block:"",variant:"info",size:"sm"}},[t._v("Targets")])],1),a("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",{staticClass:"text-left"},[a("b-form-checkbox",{attrs:{size:"sm",id:"checkbox-1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" Search Terms ")])],1),a("b-card-text",{staticClass:"text-left"},[a("b-form-checkbox",{attrs:{size:"sm",id:"checkbox-2",name:"checkbox-2",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" All Titles ")])],1),a("b-card-text",{staticClass:"text-left"},[a("b-form-checkbox",{attrs:{size:"sm",id:"checkbox-2",name:"checkbox-2",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" #1 Title ")])],1),a("b-card-text",{staticClass:"text-left"},[a("b-form-checkbox",{attrs:{size:"sm",id:"checkbox-2",name:"checkbox-2",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" #ASINs ")])],1)],1)],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"text-left",attrs:{block:"",variant:"info",size:"sm"}},[t._v("Filters")])],1),a("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",{staticClass:"text-left"},[a("b-row",[a("b-col",{attrs:{cols:"2"}},[a("b-form-checkbox",{attrs:{size:"sm",id:"checkbox-4",name:"checkbox-4",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" Rank ")])],1),a("b-col",{attrs:{cols:"1"}},[t._v(" > ")]),a("b-col",{attrs:{cols:"2"}},[a("b-form-input",{attrs:{id:"input-small",size:"sm"}})],1),a("b-col",{attrs:{cols:"1"}},[t._v(" < ")]),a("b-col",{attrs:{cols:"2"}},[a("b-form-input",{attrs:{id:"input-small",size:"sm"}})],1)],1)],1)],1)],1)],1)],1)])],1)],1)},j=[],T={name:"SaveSearch",data:function(){return{}},methods:{}},R=T,D=Object(c["a"])(R,P,j,!1,null,null,null),F=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-file"},[a("p",[t._v("Data Current to: November, 22 2020")]),a("p",[t._v("Historical Dates missing: Sept 1-7 2020, Sept 15-23 2020, Oct 1-7 2020")]),t.lastHistories.length>0?a("p",[t._v("Last Upload: "+t._s(t.lastHistories[t.lastHistories.length-1].recordNumber)+" records - "+t._s(t.lastHistories[t.lastHistories.length-1].uploadedTime))]):t._e(),a("b-row",[a("b-col",[a("input",{attrs:{id:"fileUpload",type:"file",accept:".xlsx, .xls, .csv",hidden:""},on:{change:t.uploadFile}}),a("b-button",{attrs:{size:"sm"},on:{click:function(e){return t.chooseFiles()}}},[t._v("Upload CSV")])],1)],1),""!=t.status?a("b-row",{staticClass:"mt-4"},[a("b-col",{attrs:{cols:"3"}},[t._v(t._s(t.status))]),a("b-col",{attrs:{cols:"6"}},[a("b-progress",{attrs:{value:t.value,max:t.max,"show-progress":"",animated:""}})],1),a("b-col",{attrs:{cols:"3"}},[a("b-link",{attrs:{disabled:!t.cancelSource},on:{click:t.cancelUpload}},[t._v("Cancel")])],1)],1):t._e()],1)},U=[],E=a("2f62");function H(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?H(Object(a),!0).forEach((function(e){A(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function A(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var I={name:"UploadFile",data:function(){return{value:0,max:100,cancelSource:null}},computed:z({status:""},Object(E["b"])(["lastHistories"])),mounted:function(){this.$store.dispatch("storeHistory")},methods:{chooseFiles:function(){status="",document.getElementById("fileUpload").click()},cancelUpload:function(){this.cancelSource&&(this.cancelSource.cancel("Start new search, stop active search"),console.log("cancel request done"))},onUploadProgress:function(t){var e=Math.round(100*t.loaded/t.total);this.value=e,console.log("onUploadProgress",e)},uploadFile:function(t){status="uploading...",this.value=0,this.cancelSource=x.a.CancelToken.source();var e=new FormData;e.append("file",t.target.files[0]),x.a.post(C.serverURL+"data/uploadFile",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:this.onUploadProgress,cancelToken:this.cancelSource.token}).then((function(t){console.log(t),status="finished"})).catch((function(t){console.log(t)}))}}},$=I,N=Object(c["a"])($,L,U,!1,null,null,null),V=N.exports,Y={components:{DataViewComponent:S,SaveSearchComponent:F,UploadFileComponent:V},name:"Home",data:function(){return{searchTerm:""}},methods:{search:function(){this.searchTerm=document.getElementById("searchTerm").value}}},M=Y,B=Object(c["a"])(M,b,m,!1,null,null,null),J=B.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{"max-width":"500px","padding-top":"10%"}},[a("h2",{staticClass:"mt-4"},[t._v("Log in")]),a("b-toast",{attrs:{id:"my-toast",variant:"warning",solid:""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[a("b-img",{staticClass:"mr-2",attrs:{blank:"","blank-color":"#ff5555",width:"12",height:"12"}}),a("strong",{staticClass:"mr-auto"},[t._v("Notice!")]),a("small",{staticClass:"text-muted mr-2"},[t._v("42 seconds ago")])],1)]},proxy:!0}])}),a("b-form",{staticClass:"mt-4",on:{submit:t.onSubmit,reset:t.onReset}},[a("b-row",{staticClass:"my-1"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"input-small"}},[t._v("Username:")])]),a("b-col",{attrs:{sm:"9"}},[a("b-input-group",{staticClass:"mb-2",attrs:{size:"sm"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"file-person"}})],1),a("b-form-input",{attrs:{type:"text",id:"username",placeholder:"Enter Username",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1)],1)],1),a("b-row",{staticClass:"my-1 mt-3"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"input-small"}},[t._v("Password:")])]),a("b-col",{attrs:{sm:"9"}},[a("b-input-group",{staticClass:"mb-2",attrs:{size:"sm"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"lock"}})],1),a("b-form-input",{attrs:{type:"password",id:"password",placeholder:"Enter Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1),a("b-row",{staticClass:"mt-4"},[a("b-col",[a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Log in")])],1)],1)],1)],1)},G=[],K=(a("b0c0"),{name:"Login",data:function(){return{form:{password:"",username:""}}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),this.$store.getters.login(this.form).then((function(t){var a=t.data;a&&"success"==a.status?(localStorage.setItem("username",e.form.username),e.$router.push({name:"Home"})):e.$bvToast.toast("Authentication failed",{title:"Error",href:"#my-toast",autoHideDelay:5e3,variant:"danger"})}))},onReset:function(t){t.preventDefault(),this.form.email="",this.form.name=""}}}),Q=K,W=Object(c["a"])(Q,q,G,!1,null,null,null),X=W.exports;function Z(t){var e=t.next,a=t.router;return console.log("username",localStorage.getItem("username")),localStorage.getItem("username")?e():a.push({name:"Login"})}function tt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function et(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(a),!0).forEach((function(e){at(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):tt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function at(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}r["default"].use(p["a"]);var rt=[{path:"/",name:"Home",component:J,meta:{middleware:Z}},{path:"/login",name:"Login",component:X}],nt=new p["a"]({mode:"history",base:"/",routes:rt});function st(t,e,a){var r=e[a];return r?function(){t.next.apply(t,arguments);var n=st(t,e,a+1);r(et(et({},t),{},{next:n}))}:t.next}nt.beforeEach((function(t,e,a){if(t.meta.middleware){var r=Array.isArray(t.meta.middleware)?t.meta.middleware:[t.meta.middleware],n={from:e,next:a,router:nt,to:t},s=st(n,r,1);return r[0](et(et({},n),{},{next:s}))}return a()}));var ot=nt,it={lastHistories:[]},ct={SAVE_LAST_HISTORY:"SAVE_LAST_HISTORY"};function lt(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var ut=lt({},ct.SAVE_LAST_HISTORY,(function(t,e){t.lastHistories.push(e)}));a("d3b7"),a("e6cf"),a("96cf");function dt(t,e,a,r,n,s,o){try{var i=t[s](o),c=i.value}catch(l){return void a(l)}i.done?e(c):Promise.resolve(c).then(r,n)}function pt(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function o(t){dt(s,r,n,o,i,"next",t)}function i(t){dt(s,r,n,o,i,"throw",t)}o(void 0)}))}}var bt={storeHistory:function(t,e){return pt(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,e.next=4,x.a.get(C.serverURL+"history/getLastHistory");case 4:r=e.sent,n=r.data,n&&a(ct.SAVE_LAST_HISTORY,n),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}};function mt(t,e,a,r,n,s,o){try{var i=t[s](o),c=i.value}catch(l){return void a(l)}i.done?e(c):Promise.resolve(c).then(r,n)}function ft(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function o(t){mt(s,r,n,o,i,"next",t)}function i(t){mt(s,r,n,o,i,"throw",t)}o(void 0)}))}}var ht={getPageData:function(){var t=ft(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get(C.serverURL+"data/getData");case 3:return a=t.sent,t.abrupt("return",a);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),login:function(t){return function(){var t=ft(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=e.username,r=e.password,t.next=4,x.a.post(C.serverURL+"auth/login",{username:a,password:r});case 4:return n=t.sent,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}};r["default"].use(E["a"]);var vt=new E["a"].Store({state:it,getters:ht,mutations:ut,actions:bt});r["default"].use(n["a"]),r["default"].use(s["a"]),r["default"].config.productionTip=!1,new r["default"]({router:ot,store:vt,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},d2aa:function(t,e,a){"use strict";a("270d")}});
//# sourceMappingURL=app.18d0f00f.js.map