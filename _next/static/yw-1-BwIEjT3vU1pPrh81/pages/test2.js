(this.webpackJsonp=this.webpackJsonp||[]).push([["0a5a"],{"6ddL":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){var e=n("XYTj");return{page:e.default||e}}])},"6wD9":function(e,t,n){var r=n("CN1n"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},CN1n:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("0t2J"))},CTfC:function(e,t,n){var r=n("zjeZ"),i=n("syqw"),o=n("LPA5"),a="Expected a function",c=Math.max,u=Math.min;e.exports=function(e,t,n){var s,l,f,p,d,m,v=0,b=!1,y=!1,h=!0;if("function"!=typeof e)throw new TypeError(a);function g(t){var n=s,r=l;return s=l=void 0,v=t,p=e.apply(r,n)}function O(e){var n=e-m;return void 0===m||n>=t||n<0||y&&e-v>=f}function j(){var e=i();if(O(e))return w(e);d=setTimeout(j,function(e){var n=t-(e-m);return y?u(n,f-(e-v)):n}(e))}function w(e){return d=void 0,h&&s?g(e):(s=l=void 0,p)}function S(){var e=i(),n=O(e);if(s=arguments,l=this,m=e,n){if(void 0===d)return function(e){return v=e,d=setTimeout(j,t),b?g(e):p}(m);if(y)return d=setTimeout(j,t),g(m)}return void 0===d&&(d=setTimeout(j,t)),p}return t=o(t)||0,r(n)&&(b=!!n.leading,f=(y="maxWait"in n)?c(o(n.maxWait)||0,t):f,h="trailing"in n?!!n.trailing:h),S.cancel=function(){void 0!==d&&clearTimeout(d),v=0,s=m=l=d=void 0},S.flush=function(){return void 0===d?p:w(i())},S}},H5Wu:function(e,t,n){"use strict";n("GK6Y"),n("/J8I")},Ipc1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n("uqIC")),i=f(n("EH+i")),o=l(n("iczh")),a=l(n("B1rl")),c=l(n("CTfC")),u=n("AYAf"),s=n("lYSt");function l(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},O=(0,s.tuple)("small","default","large"),j=null;var w=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,y(t).call(this,e))).debouncifyUpdateSpinning=function(e){var t=(e||n.props).delay;t&&(n.cancelExistingSpin(),n.updateSpinning=(0,c.default)(n.originalUpdateSpinning,t))},n.updateSpinning=function(){var e=n.props.spinning;n.state.spinning!==e&&n.setState({spinning:e})},n.renderSpin=function(e){var t,i=e.getPrefixCls,c=n.props,u=c.prefixCls,s=c.className,l=c.size,f=c.tip,p=c.wrapperClassName,v=c.style,b=g(c,["prefixCls","className","size","tip","wrapperClassName","style"]),y=n.state.spinning,h=i("spin",u),O=(0,o.default)(h,(m(t={},"".concat(h,"-sm"),"small"===l),m(t,"".concat(h,"-lg"),"large"===l),m(t,"".concat(h,"-spinning"),y),m(t,"".concat(h,"-show-text"),!!f),t),s),w=(0,a.default)(b,["spinning","delay","indicator"]),S=r.createElement("div",d({},w,{style:v,className:O}),function(e,t){var n=t.indicator,i="".concat(e,"-dot");return r.isValidElement(n)?r.cloneElement(n,{className:(0,o.default)(n.props.className,i)}):r.isValidElement(j)?r.cloneElement(j,{className:(0,o.default)(j.props.className,i)}):r.createElement("span",{className:(0,o.default)(i,"".concat(e,"-dot-spin"))},r.createElement("i",{className:"".concat(e,"-dot-item")}),r.createElement("i",{className:"".concat(e,"-dot-item")}),r.createElement("i",{className:"".concat(e,"-dot-item")}),r.createElement("i",{className:"".concat(e,"-dot-item")}))}(h,n.props),f?r.createElement("div",{className:"".concat(h,"-text")},f):null);if(n.isNestedPattern()){var E=(0,o.default)("".concat(h,"-container"),m({},"".concat(h,"-blur"),y));return r.createElement("div",d({},w,{className:(0,o.default)("".concat(h,"-nested-loading"),p)}),y&&r.createElement("div",{key:"loading"},S),r.createElement("div",{className:E,key:"container"},n.props.children))}return S};var i=e.spinning,u=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(i,e.delay);return n.state={spinning:i&&!u},n.originalUpdateSpinning=n.updateSpinning,n.debouncifyUpdateSpinning(e),n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.Component),n=t,s=[{key:"setDefaultIndicator",value:function(e){j=e}}],(i=[{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"render",value:function(){return r.createElement(u.ConfigConsumer,null,this.renderSpin)}}])&&v(n.prototype,i),s&&v(n,s),t}();w.defaultProps={spinning:!0,size:"default",wrapperClassName:""},w.propTypes={prefixCls:i.string,className:i.string,spinning:i.bool,size:i.oneOf(O),wrapperClassName:i.string,indicator:i.element};var S=w;t.default=S},K9rc:function(e,t,n){var r=n("6wD9").Symbol;e.exports=r},L4WH:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},LPA5:function(e,t,n){var r=n("zjeZ"),i=n("d+M5"),o=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):c.test(e)?o:+e}},XYTj:function(e,t,n){"use strict";n.r(t);n("kM4Y");var r=n("PvC1"),i=n.n(r),o=n("95Bc"),a=n("lvNx"),c=n("EjGv"),u=n("A6+v"),s=n("XEGp"),l=n("SxE1"),f=n("xzqr"),p=n("uqIC"),d=n.n(p),m=n("fQ5E"),v=n("+dyf"),b=n("QWwA"),y=(n("H5Wu"),n("Ipc1")),h=n.n(y),g=n("PIrc"),O=n.n(g),j=function(e){function t(e){var n;return Object(o.default)(this,t),n=Object(c.default)(this,Object(u.default)(t).call(this,e)),Object(f.a)(Object(s.default)(n),"renderNormalComponent",function(){return d.a.createElement("div",{style:{flex:1,display:"flex",height:"100%",justifyContent:"center",alignItems:"center"}},d.a.createElement(h.a,{tip:"页面加载中..."}))}),Object(f.a)(Object(s.default)(n),"renderLoading",function(){return n.state.isShowLoading?d.a.createElement("div",{className:O.a.loading},d.a.createElement(h.a,{tip:"页面加载中..."})):null}),Object(f.a)(Object(s.default)(n),"renderMainView",function(e){return d.a.createElement("div",{style:{flex:1,display:"flex",position:"relative",height:"100%"}},e(),n.renderLoading())}),n.state={isShow:null==n.props.isShow||n.props.isShow,isShowLoading:!1},n.inital=!1,n}return Object(l.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){this.inital=!0}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){0!=e.isShow||1!=this.state.isShow||this.isInital?e.isShow?this.setState({isShowLoading:!0}):this.setState({isShowLoading:!1}):(this.isInital=!0,this.setState({isShow:e.isShow,isShowLoading:!1}))}},{key:"shouldComponentUpdate",value:function(e,t){return!t.isShow}},{key:"render",value:function(){var e=this.state.isShow,t=this.props,n=t.renderComponent,r=t.renderView;if(e)return this.renderNormalComponent();var i=r||n;return this.renderMainView(i)}}]),t}(p.Component);Object(f.a)(j,"defaultProps",{isShow:!0});var w,S=j;n.d(t,"default",function(){return E});var E=Object(m.a)(["Test3"])(w=function(e){function t(){var e,n;Object(o.default)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=Object(c.default)(this,(e=Object(u.default)(t)).call.apply(e,[this].concat(a))),Object(f.a)(Object(s.default)(n),"onNetTest1",function(){v.a.send(Object(s.default)(n),[{url:"/sug?code=utf-8&q=1",method:"GET",target:"Test3"}])}),Object(f.a)(Object(s.default)(n),"onNetTest2",function(){v.a.send(Object(s.default)(n),[{url:"/sug?code=utf-8&q=1",method:"GET",target:"Test3",tranData:function(e){return{a:e.result}}},{url:"/sug?code=utf-8&q=1",method:"GET",target:"Test3",tranData:function(e){return{b:e.result}}},{url:"/sug?code=utf-8&q=1",method:"GET",target:"Test3",tranData:function(e){return{c:e.result}}}])}),Object(f.a)(Object(s.default)(n),"renderList",function(e){return e.map(function(e){return d.a.createElement("div",null,e.map(function(e){return d.a.createElement("div",null,e)}))})}),Object(f.a)(Object(s.default)(n),"onNetTest3",function(){v.a.send(Object(s.default)(n),[b.a.test("Test3").getList()({tranData:function(e){return{d:e.result,a:[],b:[],c:[],result:[]}},onCallBack:function(){console.log("接口成功")},onError:function(){console.log("接口失败")}})])}),Object(f.a)(Object(s.default)(n),"renderView",function(){var e=n.props,t=e.a,r=e.b,o=e.c,a=e.d,c=e.result;return d.a.createElement("div",null,d.a.createElement(i.a,{onClick:n.onNetTest1},"接口测试写法1"),d.a.createElement(i.a,{onClick:n.onNetTest2},"接口测试写法2"),d.a.createElement(i.a,{onClick:n.onNetTest3},"接口测试美化写法"),c&&n.renderList(c),t&&n.renderList(t),r&&n.renderList(r),o&&n.renderList(o),a&&n.renderList(a))}),n}return Object(l.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){var e=v.a.getRouterParams(this);e.id?v.a.send(this,[{url:"/sug?code=utf-8&q="+e.id,method:"GET",target:"Test3",tranData:function(e){return{a:e.result}}}]):v.a.setValue(this,"Test3",{isShow:!1})}},{key:"render",value:function(){var e=this.props.isShow;return d.a.createElement(S,{isShow:e,renderView:this.renderView})}}]),t}(p.Component))||w},"d+M5":function(e,t,n){var r=n("wg/C"),i=n("L4WH"),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&r(e)==o}},ph9F:function(e,t,n){var r=n("K9rc"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var i=a.call(e);return r&&(t?e[c]=n:delete e[c]),i}},syqw:function(e,t,n){var r=n("6wD9");e.exports=function(){return r.Date.now()}},uE1n:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},"wg/C":function(e,t,n){var r=n("K9rc"),i=n("ph9F"),o=n("uE1n"),a="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:a:u&&u in Object(e)?i(e):o(e)}},zjeZ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}}},[["6ddL","5d41","9da1","ad9d"]]]);