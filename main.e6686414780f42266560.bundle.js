(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{356:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return MembershipListComponent});__webpack_require__(45),__webpack_require__(46),__webpack_require__(55),__webpack_require__(37),__webpack_require__(114),__webpack_require__(144),__webpack_require__(63),__webpack_require__(319),__webpack_require__(322),__webpack_require__(36),__webpack_require__(337),__webpack_require__(56),__webpack_require__(48);var _extendStatics,react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),antd__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(233),antd__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(771),antd__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(177),antd__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(772),antd__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(82),_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(774),_ant_design_icons__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(775),__extends=(_extendStatics=function extendStatics(d,b){return(_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})},__generator=function(thisArg,body){function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=0<(t=_.trys).length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}var f,y,t,g,_={label:0,sent:function sent(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g},MembershipListComponent=function(_super){function MembershipListComponent(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(MembershipListComponent,_super),MembershipListComponent.prototype.render=function(){var _this=this,_a=this.props,loading=_a.loading,footer=_a.footer,memberships=_a.memberships,roles=_a.roles,onDelete=_a.onDelete,readonly=_a.readonly,popoverContent=_a.popoverContent;return react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_14__.b,{size:"small",loading:loading,footer:footer,bordered:!1,dataSource:memberships,itemLayout:"horizontal",renderItem:function renderItem(item){return react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_14__.b.Item,{actions:[!readonly&&react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_15__.a,{key:"delete",title:"Are you sure?",okText:"Yes",cancelText:"No",icon:react__WEBPACK_IMPORTED_MODULE_13__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__.a,null),onConfirm:function onConfirm(){onDelete&&function(){__awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,onDelete(item.id)];case 1:return _a.sent(),[2]}})})}()}},react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_16__.a,{key:"delete",icon:react__WEBPACK_IMPORTED_MODULE_13__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_20__.a,null),size:"small",danger:!0}))]},react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_14__.b.Item.Meta,{title:react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_17__.a,{content:popoverContent?popoverContent(item):"ID: "+item.member.id},item.member.email)}),_this.rolesSelect({roles:roles,value:item.role,props:{size:"small",disabled:!0}}))}})},MembershipListComponent.prototype.rolesSelect=function(props){return props.roles&&react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_18__.a,__assign({value:props.value,style:{width:"120px"}},props.props),props.roles.map(function(r){return react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd__WEBPACK_IMPORTED_MODULE_18__.a.Option,{value:r.id},r.name)}))},MembershipListComponent}(react__WEBPACK_IMPORTED_MODULE_13__.Component)},378:function(module,exports,__webpack_require__){__webpack_require__(379),__webpack_require__(483),module.exports=__webpack_require__(484)},484:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(27),__webpack_require__(37),__webpack_require__(36),__webpack_require__(28),__webpack_require__(48),__webpack_require__(487);var _storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(163),req=__webpack_require__(697);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(262)(module))},697:function(module,exports,__webpack_require__){var map={"./index.stories.js":698};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=697},698:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var antd__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(773),_lib_list__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(356),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(371),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(163);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Memberships",module).add("basic",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:80}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__.a,{title:"Memberships"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_list__WEBPACK_IMPORTED_MODULE_1__.a,{memberships:[{id:"1",member:{id:"john.doe",email:"john.doe@example.com"},role:"admin"}],roles:[{id:"admin",name:"Administrator"}],onDelete:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("delete")})))},{notes:"A very simple component"})}.call(this,__webpack_require__(262)(module))}},[[378,1,2]]]);
//# sourceMappingURL=main.e6686414780f42266560.bundle.js.map