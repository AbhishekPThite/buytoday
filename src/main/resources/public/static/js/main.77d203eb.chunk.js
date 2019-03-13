(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){e.exports=n(249)},157:function(e,t,n){},235:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n(51),i=n(24),l=(n(157),n(258)),s=n(259),u=n(257),p=n(27),m=n(28),d=n(31),g=n(29),b=n(30),f=n(126),h=n.n(f),E=n(19),O=function(e){return{type:"LOGIN_IN_PROGRESS",payload:e}},y=(n(176),n(253)),v=n(256),j=n(255),I=n(11),S=n(250),w=y.a.Title,T=v.a.Header,P=v.a.Content,x=v.a.Footer,L=v.a.Sider,k=j.a.SubMenu,C=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0},n.onCollapse=function(e){console.log(e),n.setState({collapsed:e})},n.navHomeLinksTo=function(e){return e?"/dashboard":"/login"},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement(v.a,{style:{minHeight:"100vh"}},r.a.createElement(L,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement("div",{className:"logo"}),r.a.createElement(j.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(j.a.Item,{key:"1"},r.a.createElement(S.a,{to:this.navHomeLinksTo(e)},r.a.createElement(I.a,{type:"home"}),r.a.createElement("span",null,"Home"))),e&&r.a.createElement(k,{key:"sub1",title:r.a.createElement(I.a,{type:"user"})},r.a.createElement(j.a.Item,{key:"3"},r.a.createElement(S.a,{to:"/accounts"},"My Accounts")),r.a.createElement(j.a.Item,{key:"5",onClick:this.props.postLogout},"Logout")))),r.a.createElement(v.a,null,r.a.createElement(T,{style:{background:"#fff",padding:0,textAlign:"center"}},r.a.createElement(w,{level:2},"Can I Buy It Today?")),r.a.createElement(P,{style:{margin:"0 16px"}},this.props.children),r.a.createElement(x,{style:{textAlign:"center"}},"Done by Team 8")))}}]),t}(r.a.PureComponent),R=Object(i.c)(function(e){return{isLoggedIn:e.login.isLoggedIn}},function(e){return{postLogout:function(){return e(function(e){e({type:"POST_LOGOUT"}),e(Object(E.d)("/"))})}}})(C),N=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null,this.props.children))}}]),t}(a.Component),_=n(72),A=n(254),F=n(79),G=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.updateField=function(e,t){n.setState(Object(_.a)({},t,e.target.value))},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"Login",r.a.createElement(A.a,{placeholder:"username",onChange:function(t){return e.updateField(t,"username")}}),r.a.createElement(A.a.Password,{placeholder:"password",onChange:function(t){return e.updateField(t,"password")}}),r.a.createElement(F.a,{type:"primary",loading:this.props.loginInProgress,onClick:function(){return e.props.postLogin({username:e.state.username,password:e.state.password})}},"Login"))}}]),t}(r.a.PureComponent),D=Object(i.c)(function(e){return{isLoggedIn:e.login.isLoggedIn,loginInProgress:e.login.loginInProgress}},function(e){return{postLogin:function(t){return e(function(e){e(O(!0)),h.a.post("/home/login?username=abc&pwd=abc").then(function(t){return setTimeout(function(){e({type:"POST_LOGIN",success:!0,details:t.data}),e(O(!1)),e(Object(E.d)("/dashboard"))},2e3)}).catch(function(t){console.log(t),e(O(!1)),e({type:"POST_LOGIN",success:!1})})})}}})(G),M=function(){return r.a.createElement("div",null,"404 NOT FOUND")},U=function(){return r.a.createElement("div",null,"Accounts")},B=n(77),H=n(251),J=n(252),$=n(78),Y=(n(235),function(e){return r.a.createElement("button",Object.assign({type:"button",className:"rtf--mb"},e),e.children)}),K=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.enter=function(){return"hover"===n.props.event&&n.open()},n.leave=function(){return"hover"===n.props.event&&n.close()},n.open=function(){return n.setState({open:!0})},n.close=function(){return n.setState({open:!1})},n.toggle=function(){"click"===n.props.event&&(n.state.open?n.close():n.open())},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.icon,a=e.mainButtonStyles,o=e.onClick;return r.a.createElement("ul",{onMouseEnter:this.enter,onMouseLeave:this.leave,className:"rtf ".concat(this.state.open?"open":"closed"),"data-testid":"fab",style:t},r.a.createElement("li",{className:"rtf--mb__c"},r.a.createElement(Y,{onClick:o,style:a,"data-testid":"main-button",role:"button","aria-label":"Floating menu",tabIndex:"0"},n)))}}]),t}(r.a.Component);function W(){var e=Object(B.a)(["\n  min-height: 50px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  margin-bottom: 10px;\n"]);return W=function(){return e},e}function q(){var e=Object(B.a)(["\n  width: calc(100% / 3);\n  min-height: 50px;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n"]);return q=function(){return e},e}function z(){var e=Object(B.a)(["\n  /* width: 260px; */\n  /* min-height: 50px; */\n  /* border-radius: 5px; */\n  /* box-shadow: 3px 3px 5px 1px rgba(207, 207, 207, 0.5); */\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 2px;\n  margin-bottom: 10px;\n"]);return z=function(){return e},e}K.defaultProps={position:{bottom:0,right:0},event:"hover"};var Q=y.a.Title,V=y.a.Text,X=$.a.div(z()),Z=Object($.a)(H.a)(q()),ee=Object($.a)(H.a)(W()),te=["January","Feburary","March","April","May","June","July","August","September","October","November","December"],ne=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).onSpeechRecognitionClick=function(){var e,t=n.props,a=t.transcribeInProgress,r=t.updateInterimScript,o=t.updateFinalScript;a?(e.stop(),n.props.toggleTranscribe(a)):(window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,(e=new window.SpeechRecognition).interimResults=!0,e.maxAlternatives=10,e.continuous=!1,e.start(),n.props.toggleTranscribe(!0),e.onresult=function(t){for(var a="",c="",i=t.resultIndex;i<t.results.length;i+=1){var l=t.results[i][0].transcript;t.results[i].isFinal?(o(c+=l),e.stop(),n.props.toggleTranscribe(!1)):r(a+=l)}})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Q,{level:3},"".concat(te[(new Date).getMonth()]," ").concat((new Date).getFullYear())),r.a.createElement(ee,null,r.a.createElement(V,null,"You are spending within limits"),r.a.createElement(J.a,{percent:50})),r.a.createElement(X,null,r.a.createElement(Z,{loading:!1},r.a.createElement(V,null,"Expenses"),r.a.createElement("br",null),r.a.createElement(V,null,"$1337")),r.a.createElement(Z,{loading:!1},r.a.createElement(V,null,"Income"),r.a.createElement("br",null),r.a.createElement(V,null,"$7331")),r.a.createElement(Z,{loading:!1},r.a.createElement(V,null,"Balance"),r.a.createElement("br",null),r.a.createElement(V,null,"$1500"))),!this.props.transcribeInProgress&&r.a.createElement(K,{icon:r.a.createElement(I.a,{type:"smile"}),event:"click",onClick:this.onSpeechRecognitionClick}))}}]),t}(r.a.PureComponent),ae=Object(i.c)(function(e){return{transcribeInProgress:e.dashboard.transcribeInProgress,interimScript:e.dashboard.interimScript,finalScript:e.dashboard.finalScript}},function(e){return{toggleTranscribe:function(t){return e(function(e){return{type:"TOGGLE_TRANSCRIBE",transcribeInProgress:e}}(t))},updateInterimScript:function(t){return e({type:"UPDATE_INTERIM_SCRIPT",inputScript:t})},updateFinalScript:function(t){return e({type:"UPDATE_FINAL_SCRIPT",inputScript:t})}}})(ne),re=function(){return r.a.createElement(N,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{path:"/login",component:D}),r.a.createElement(s.a,{path:"/dashboard",component:ae}),r.a.createElement(s.a,{path:"/accounts",component:U}),r.a.createElement(s.a,{path:"/not-found",component:M}),r.a.createElement(s.a,{path:"/",exact:!0,component:D}),r.a.createElement(u.a,{to:"/not-found"})))},oe=n(38),ce=n(36),ie=n(124),le=n(140),se=n(141),ue=n.n(se),pe=n(142),me=n(33),de={isLoggedIn:!1,loginInProgress:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_LOGIN":return t.success?Object(me.a)({},e,{isLoggedIn:t.success,details:t.details}):Object(me.a)({},e,{isloggedIn:t.success});case"POST_LOGOUT":return Object(me.a)({},e,{isLoggedIn:!1});case"LOGIN_IN_PROGRESS":return Object(me.a)({},e,{loginInProgress:t.payload});default:return e}},be={transcribeInProgress:!1,interimScript:"",finalScript:""},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TRANSCRIBE":return Object(me.a)({},e,{transcribeInProgress:t.transcribeInProgress});case"UPDATE_INTERIM_SCRIPT":return Object(me.a)({},e,{interimScript:t.inputScript});case"UPDATE_FINAL_SCRIPT":return Object(me.a)({},e,{finalScript:t.inputScript});default:return e}},he=function(e){return Object(ce.combineReducers)({router:Object(c.b)(e),login:ge,dashboard:fe})},Ee=Object(oe.a)();var Oe,ye=Object(ce.createStore)(he(Ee),Oe,Object(le.composeWithDevTools)(Object(ce.applyMiddleware)(Object(ie.a)(Ee),pe.a,ue.a)));Object(o.render)(r.a.createElement(i.a,{store:ye},r.a.createElement(c.a,{history:Ee},r.a.createElement(re,null))),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.77d203eb.chunk.js.map