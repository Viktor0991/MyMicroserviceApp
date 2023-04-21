(this["webpackJsonpcreate-react-app-antd"]=this["webpackJsonpcreate-react-app-antd"]||[]).push([[0],{174:function(e,t,n){},180:function(e,t,n){},209:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(25),a=n.n(r),o=(n(174),n(1)),s=n(18),i=n(19),u=n(15),j=n(22),l=n(23),b=n(29),O=(n(180),n(28)),d="http://localhost:3000",p="accessToken",h=function(e){var t=new Headers({"Content-Type":"application/json"});localStorage.getItem(p)&&t.append("Authorization","Bearer "+localStorage.getItem(p));var n={headers:t};return e=Object.assign({},n,e),fetch(e.url,e).then((function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}))};function f(){return localStorage.getItem(p)?h({url:d+"/user",method:"GET"}):Promise.reject("No access token set.")}var x=n(130),m=n(220),v=n(149),g=n(7);function y(e){var t=Object(g.jsx)(v.a,{type:"loading-3-quarters",style:{fontSize:30},spin:!0});return Object(g.jsx)(m.a,{indicator:t,style:{display:"block",textAlign:"center",marginTop:30}})}var k="ACCOUNT_LIST_REQUEST",C="ACCOUNT_LIST_SUCCESS",w="ACCOUNT_LIST_ERROR",E="NEW_ACCOUNT_REQUEST",S="NEW_ACCOUNT_SUCCESS",N="UP_ACCOUNT_REQUEST",U="UP_ACCOUNT_SUCCESS",T="EXCHANGE_REQUEST",_="EXCHANGE_SUCCESS",R=function(){return{type:k}},L=function(e){return{type:C,payload:e}},A=function(e){return{type:w,payload:{error:e}}},I=function(e){return{type:S,payload:e}},P=function(e){return{type:"NEW_ACCOUNT_ERROR",payload:{error:e}}},B=function(e){return{type:U,payload:e}},G=function(e){return{type:"UP_ACCOUNT_ERROR",payload:{error:e}}},z=function(e){return{type:_,payload:e}},W=function(e){return{type:"EXCHANGE_ERROR",payload:{error:e}}},M=n(225),Q=n(221),D=n(5),H=n(59),V=n(230),F=n(228),J=n(144),q=n(231),X=function(e){var t=e.account,n=Object(c.useState)(!1),r=Object(D.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(0),i=Object(D.a)(s,2),u=i[0],j=i[1],l=Object(c.useCallback)((function(){return o(!0)}),[]),O=Object(c.useCallback)((function(){return o(!1)}),[]),d=Object(c.useCallback)((function(e){return j(e)}),[]),p=Object(b.c)();return Object(g.jsxs)("div",{children:[Object(g.jsx)(H.a,{type:"link",icon:Object(g.jsx)(J.a,{},"topUp"),onClick:l,children:"Top Up"}),Object(g.jsx)(V.a,{title:"Up balance for account: "+t,visible:a,onOk:function(){var e=Object(q.a)();p({type:N,payload:{uid:e,account:t,amount:u}}),o(!1)},onCancel:O,children:Object(g.jsx)(F.a,{defaultValue:0,onChange:d,value:u})})]})},Y=n(48),K=n(145),$=function(e){var t=e.from;return Object(g.jsx)(Y.a,{to:"/exchange/"+t,children:Object(g.jsx)(H.a,{type:"link",icon:Object(g.jsx)(K.a,{},"exchange"),children:"Exchange"})})},Z=n(146),ee=function(e){var t=e.account;return Object(g.jsx)(Y.a,{to:"/history/"+t,children:Object(g.jsx)(H.a,{type:"link",icon:Object(g.jsx)(Z.a,{},"history"),children:"History"})})},te=function(e){var t=e.id,n=e.currency,c=e.balance;return Object(g.jsx)(M.a,{bordered:!0,style:{width:600},title:"Account id: "+t,actions:[Object(g.jsx)(X,{account:t}),Object(g.jsx)($,{from:t}),Object(g.jsx)(ee,{account:t})],children:Object(g.jsxs)(x.b,{align:"baseline",size:"large",split:Object(g.jsx)(Q.a,{type:"vertical"}),children:[Object(g.jsxs)("p",{children:["Currency: ",n]}),Object(g.jsxs)("p",{children:["Balance: ",c]})]})})},ne=n(233),ce=n(101),re=ne.a.Option,ae=function(){var e=Object(b.c)(),t=Object(c.useState)(!1),n=Object(D.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)("RUB"),s=Object(D.a)(o,2),i=s[0],u=s[1],j=Object(c.useCallback)((function(){return a(!0)}),[]),l=Object(c.useCallback)((function(){return a(!1)}),[]),O=Object(c.useCallback)((function(e){return u(e)}),[]),d=Object(c.useCallback)((function(){e({type:E,payload:i}),a(!1)}),[i]);return Object(g.jsxs)("div",{children:[Object(g.jsx)(H.a,{type:"primary",shape:"round",size:"large",onClick:j,style:{float:"right"},icon:Object(g.jsx)(ce.a,{}),children:"Add account"}),Object(g.jsx)(V.a,{title:"New account",visible:r,onOk:d,onCancel:l,children:Object(g.jsxs)(ne.a,{value:i,style:{width:120},onChange:O,children:[Object(g.jsx)(re,{value:"RUB",children:"RUB"}),Object(g.jsx)(re,{value:"USD",children:"USD"}),Object(g.jsx)(re,{value:"EUR",children:"EUR"}),Object(g.jsx)(re,{value:"GBP",children:"GBP"})]})})]})},oe=(n(209),function(){var e=Object(b.d)((function(e){return e.accounts})),t=e.isLoading,n=e.accounts,r=Object(b.c)();return Object(c.useEffect)((function(){r(R())}),[r]),t?Object(g.jsx)(y,{}):Object(g.jsxs)("div",{className:"accounts-container",children:[Object(g.jsx)(ae,{}),0===n.length?Object(g.jsx)("div",{className:"no-accounts-found",children:Object(g.jsx)("span",{children:"No accounts found"})}):Object(g.jsx)(x.b,{direction:"vertical",size:"middle",children:n.sort((function(e,t){return e.id-t.id})).map((function(e){return Object(g.jsx)(te,{id:e.id,currency:e.currencyCode,balance:e.balance})}))})]})}),se="CURRENCY_RATE_REQUEST",ie="CURRENCY_RATE_SUCCESS",ue=function(e,t){return{type:ie,payload:t,country:e}},je=function(e){return{type:"CURRENCY_RATE_ERROR",payload:{error:e}}},le=(n(210),n(211),function(e){var t=e.lang,n=e.rate;return Object(g.jsxs)("div",{style:{display:"inline-flex",alignItems:"center"},children:[Object(g.jsx)("span",{className:"currency-block flag:"+t}),Object(g.jsxs)("span",{children:[": ",n]})]})}),be=function(){var e=Object(b.d)((function(e){return e.currency.rate})),t=Object(b.c)();Object(c.useEffect)((function(){t({type:se})}),[t]);var n=Object.entries(e).map((function(e){var t=Object(D.a)(e,2),n=t[0],c=t[1];return[n.slice(0,2),c]})).map((function(e){var t=Object(D.a)(e,2),n=t[0],c=t[1];return Object(g.jsx)(le,{rate:c,lang:n})}));return Object(g.jsx)(x.b,{style:{marginLeft:"100px"},size:50,children:n})},Oe=n(229),de=n(226),pe=ne.a.Option,he=de.a.Item,fe=function(e){return"Account #".concat(e.id,", balance: ").concat(e.balance,", currency: ").concat(e.currencyCode)},xe=function(e){var t=e.accounts,n=e.sourceId,r=e.onSubmit,a=Object(q.a)(),o=Object(c.useState)(n),s=Object(D.a)(o,2),i=s[0],u=s[1],j=Object(c.useState)(),l=Object(D.a)(j,2),b=l[0],O=l[1],d=Object(c.useState)(),p=Object(D.a)(d,2),h=(p[0],p[1]),f=Object(c.useCallback)((function(e){u(e)}),[]),x=Object(c.useCallback)((function(e){O(e)}),[]),m=Object(c.useCallback)((function(e){h(e)}),[]),v=Object(c.useCallback)((function(e){var t=e.target,n=e.amount;r({uid:a,from:i,to:t,money:n})}),[a,i]);return Object(g.jsxs)(de.a,{onFinish:v,className:"login-form",children:[Object(g.jsx)(he,{name:"source",children:Object(g.jsx)(ne.a,{placeholder:"Source account",style:{width:400},disabled:!0,value:i,onChange:f,defaultValue:{value:n,label:fe(t.filter((function(e){return e.id===parseInt(n)}))[0])},children:t.map((function(e){return Object(g.jsx)(pe,{value:e.id,children:fe(e)})}))})}),Object(g.jsx)(he,{name:"target",rules:[{required:!0,message:"Please select target account"}],children:Object(g.jsx)(ne.a,{placeholder:"Target account",style:{width:400},value:b,onChange:x,children:t.filter((function(e){return e.id!==parseInt(n)})).map((function(e){return Object(g.jsx)(pe,{value:e.id,children:fe(e)})}))})}),Object(g.jsx)(he,{name:"amount",rules:[{required:!0,message:"Please input exchange amount"}],children:Object(g.jsx)(F.a,{placeholder:"Amount",style:{width:200},onChange:m})}),Object(g.jsx)(he,{children:Object(g.jsx)(H.a,{type:"primary",htmlType:"submit",size:"large",className:"exchange-form-button",children:"Apply"})})]})},me=(n(212),function(){var e=Object(b.d)((function(e){return e.accounts})).accounts,t=Object(O.h)(),n=Object(O.g)(),r=Object(b.c)(),a=Object(c.useCallback)((function(e){r(function(e){return{type:T,payload:e}}(e)),n.push("/")}),[r,n]);return Object(g.jsx)("div",{className:"exchange-container",children:Object(g.jsxs)(x.b,{direction:"vertical",children:[Object(g.jsx)(Oe.a,{className:"exchange-page-header",title:"Exchange account view",onBack:function(){return n.goBack()}}),Object(g.jsx)(M.a,{style:{width:600},children:Object(g.jsx)(xe,{accounts:e,sourceId:t.from,onSubmit:a})})]})})}),ve=n(86),ge="EVENT_LIST_REQUEST",ye="EVENT_LIST_SUCCESS",ke="EVENT_LIST_ERROR",Ce=function(e,t){return{type:ye,account:e,payload:t}},we=function(e){return{type:ke,payload:{error:e}}},Ee=n(232),Se=Ee.b.Item,Ne=function(e){var t,n=e.event;return Object(g.jsx)(M.a,{style:{width:600},children:Object(g.jsxs)(Ee.b,{title:"Operation "+n.operation,column:2,children:[Object(g.jsxs)(Se,{label:"Amount",children:[" ",n.amount+" "+n.currency," "]}),Object(g.jsxs)(Se,{label:"Created",children:[" ",n.created," "]}),n.fromAccount&&Object(g.jsx)(Se,{label:(t=n.amount,t>=0?"From account":"To account"),children:"#"+n.fromAccount})]})})},Ue=(n(213),function(){var e=Object(b.d)((function(e){return e.history})),t=e.isLoading,n=e.events,r=Object(b.c)(),a=Object(O.g)(),o=Object(O.h)().account;Object(c.useEffect)((function(){r({type:ge,payload:o})}),[r,o]);var s=n[o];return t?Object(g.jsx)(y,{}):Object(g.jsx)("div",{className:"events-container",children:Object(g.jsxs)(x.b,{direction:"vertical",children:[Object(g.jsx)(Oe.a,{className:"history-page-header",title:"History account #"+o+" view",onBack:function(){return a.goBack()}}),s&&s.length>0?Object(g.jsx)(x.b,{direction:"vertical",children:s.map((function(e){return Object(g.jsx)(Ne,{event:e})}))}):Object(g.jsx)("div",{className:"no-events-found",children:Object(g.jsx)(ve.a,{description:"No events found"})})]})})}),Te=n(167),_e=n(227),Re="LOGIN_REQUEST",Le="LOGIN_SUCCESS",Ae="LOGIN_FAIL",Ie="REQUEST_USER_PROFILE",Pe="GET_USER_PROFILE",Be="LOGOUT_REQUEST",Ge="LOGOUT_SUCCESS",ze=function(e){return{type:Le,payload:{token:e}}},We=function(e){return{type:Ae,payload:{error:e}}},Me=function(e){return{type:Ie,payload:{token:e}}},Qe=function(e){return{type:Pe,payload:{user:e.name}}},De=function(){return{type:Ge}},He=(n(214),de.a.Item),Ve=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(u.a)(c)),c}return Object(i.a)(n,[{key:"handleSubmit",value:function(e){this.props.login(e)}},{key:"render",value:function(){return Object(g.jsxs)(de.a,{onFinish:this.handleSubmit,className:"login-form",children:[Object(g.jsx)(He,{name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(g.jsx)(_e.a,{placeholder:"Username"})}),Object(g.jsx)(He,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(g.jsx)(_e.a.Password,{placeholder:"Password"})}),Object(g.jsx)(He,{children:Object(g.jsx)(H.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",children:"Login"})})]})}}]),n}(c.Component),Fe=function(){var e=Object(b.d)((function(e){return e.auth})),t=e.isLoading,n=e.message,r=e.error,a=Object(b.c)(),o=Object(c.useCallback)((function(e){return a(function(e){return{type:Re,payload:e}}(e))}),[a]);return Object(c.useEffect)((function(){!t&&n&&Te.a.success(n)}),[t,n]),Object(c.useEffect)((function(){r&&Te.a.error({message:r.error,description:r.error_description})}),[r]),Object(g.jsxs)("div",{className:"login-container",children:[Object(g.jsx)("h1",{className:"page-title",children:"Login"}),Object(g.jsx)("div",{className:"login-content",children:Object(g.jsx)(Ve,{login:o})})]})},Je=n(222),qe=n(127),Xe=n(223),Ye=n(224),Ke=(n(215),Je.a.Header),$e=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).handleMenuClick=c.handleMenuClick.bind(Object(u.a)(c)),c}return Object(i.a)(n,[{key:"handleMenuClick",value:function(e){"logout"===e.key&&this.props.onLogout()}},{key:"render",value:function(){var e;return e=this.props.currentUser?[Object(g.jsx)(qe.a.Item,{children:Object(g.jsx)(Y.a,{to:"/",children:Object(g.jsx)(Ye.a,{type:"home",className:"nav-icon"})})},"/"),Object(g.jsx)(qe.a.Item,{className:"profile-menu",children:Object(g.jsx)(Ze,{currentUser:this.props.currentUser,handleMenuClick:this.handleMenuClick})},"/profile")]:[Object(g.jsx)(qe.a.Item,{children:Object(g.jsx)(Y.a,{to:"/login",children:"Login"})},"/login")],Object(g.jsx)(Ke,{className:"app-header",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"app-title",children:Object(g.jsx)(Y.a,{to:"/",children:"Java microservices web client"})}),Object(g.jsx)(be,{}),Object(g.jsx)(qe.a,{className:"app-menu",mode:"horizontal",selectedKeys:[this.props.location.pathname],style:{lineHeight:"64px"},children:e})]})})}}]),n}(c.Component);function Ze(e){var t=Object(g.jsxs)(qe.a,{onClick:e.handleMenuClick,className:"profile-dropdown-menu",children:[Object(g.jsxs)(qe.a.Item,{className:"dropdown-item",disabled:!0,children:[Object(g.jsx)("div",{className:"user-full-name-info",children:e.currentUser}),Object(g.jsxs)("div",{className:"username-info",children:["@",e.currentUser]})]},"user-info"),Object(g.jsx)(qe.a.Divider,{}),Object(g.jsx)(qe.a.Item,{className:"dropdown-item",children:"Logout"},"logout")]});return Object(g.jsx)(Xe.a,{overlay:t,trigger:["click"],getPopupContainer:function(){return document.getElementsByClassName("profile-menu")[0]},children:Object(g.jsxs)("a",{className:"ant-dropdown-link",children:[Object(g.jsx)(Ye.a,{type:"user",className:"nav-icon",style:{marginRight:0}})," ",Object(g.jsx)(Ye.a,{type:"down"})]})})}var et=Object(O.i)($e),tt=(n(216),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"page-not-found",children:[Object(g.jsx)("h1",{className:"title",children:"404"}),Object(g.jsx)("div",{className:"desc",children:"The Page you're looking for was not found."}),Object(g.jsx)(Y.a,{to:"/",children:Object(g.jsx)(H.a,{className:"go-back-btn",type:"primary",size:"large",children:"Go Back"})})]})}}]),n}(c.Component)),nt=tt,ct=n(11),rt=["component","authenticated"],at=function(e){var t=e.component,n=e.authenticated,c=Object(ct.a)(e,rt);return Object(g.jsx)(O.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){return n?Object(g.jsx)(t,Object(o.a)(Object(o.a)({},c),e)):Object(g.jsx)(O.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ot=Je.a.Content,st=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={currentUser:null,isAuthenticated:!1,isLoading:!1},c.handleLogout=c.handleLogout.bind(Object(u.a)(c)),c.loadCurrentUser=c.loadCurrentUser.bind(Object(u.a)(c)),Te.a.config({placement:"topRight",top:70,duration:3}),c}return Object(i.a)(n,[{key:"loadCurrentUser",value:function(){var e=this;f().then((function(t){e.setState({currentUser:t.name,isAuthenticated:!0,isLoading:!1})})).catch((function(t){e.setState({isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.props.profile(this.props.token)}},{key:"handleLogout",value:function(){this.props.logout()}},{key:"render",value:function(){return this.state.isLoading?Object(g.jsx)(y,{}):Object(g.jsxs)(Je.a,{className:"app-container",children:[Object(g.jsx)(et,{isAuthenticated:this.props.isAuthenticated,currentUser:this.props.user,onLogout:this.handleLogout}),Object(g.jsx)(ot,{className:"app-content",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(O.d,{children:[Object(g.jsx)(at,{exact:!0,path:"/",authenticated:this.props.isAuthenticated,component:oe}),Object(g.jsx)(at,{path:"/exchange/:from",authenticated:this.props.isAuthenticated,component:me}),Object(g.jsx)(at,{path:"/history/:account",authenticated:this.props.isAuthenticated,component:Ue}),Object(g.jsx)(O.b,{path:"/login",render:function(e){return Object(g.jsx)(Fe,Object(o.a)({},e))}}),Object(g.jsx)(O.b,{component:nt})]})})})]})}}]),n}(c.Component),it=Object(O.i)(Object(b.b)((function(e){return Object(o.a)(Object(o.a)({},e.auth),{},{isAuthenticated:null!=e.auth.token})}),(function(e){return{profile:function(){return e(Me())},logout:function(){return e({type:Be})}}}))(st)),ut=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function jt(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var lt,bt=n(40),Ot=Object(bt.a)(),dt=n(72),pt=n(166),ht=n(3);function ft(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,c=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(c.type)?t[c.type](n,c):n}}var xt,mt,vt=ft({isLoading:!1},(lt={},Object(ht.a)(lt,Re,(function(e){return Object(o.a)(Object(o.a)({},e),{},{error:null,isLoading:!0})})),Object(ht.a)(lt,Le,(function(e,t){return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.payload),{},{isLoading:!1,message:{message:"Currency exchange App",description:"You're successfully logged in."}})})),Object(ht.a)(lt,Ae,(function(e,t){return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.payload),{},{token:null,isLoading:!1})})),Object(ht.a)(lt,Pe,(function(e,t){return Object(o.a)(Object(o.a)({},e),t.payload)})),Object(ht.a)(lt,Ge,(function(e){return Object(o.a)(Object(o.a)({},e),{},{token:null,user:null})})),lt)),gt=ft({rate:{}},Object(ht.a)({},ie,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{rate:Object(o.a)(Object(o.a)({},e.rate),{},Object(ht.a)({},t.country,t.payload))})}))),yt=n(9),kt=ft({isLoading:!1,accounts:[],error:null},(xt={},Object(ht.a)(xt,k,(function(e){return Object(o.a)(Object(o.a)({},e),{},{accounts:[],isLoading:!0,error:null})})),Object(ht.a)(xt,C,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{accounts:t.payload,isLoading:!1})})),Object(ht.a)(xt,w,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1,error:t.error})})),Object(ht.a)(xt,U,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{accounts:[].concat(Object(yt.a)(e.accounts.filter((function(e){return e.id!==t.payload.id}))),[t.payload]),isLoading:!1})})),xt)),Ct=ft({events:{},isLoading:!1,error:null},(mt={},Object(ht.a)(mt,ge,(function(e){return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0,error:null})})),Object(ht.a)(mt,ye,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{events:Object(o.a)(Object(o.a)({},e.events),{},Object(ht.a)({},t.account,t.payload)),isLoading:!1})})),Object(ht.a)(mt,ke,(function(e,t){return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1,error:t.error})})),mt)),wt=n(12),Et=n(16);function St(e){return function(e){var t={method:"POST",body:new URLSearchParams(Object(o.a)({grant_type:"password"},e)),headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic d2ViLWNsaWVudDpwaW4xMjM="}};return fetch(d+"/oauth/token",t).then((function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}))}(Object.assign({},e))}function Nt(e){return f()}var Ut=Object(wt.a)().mark(It),Tt=Object(wt.a)().mark(Pt),_t=Object(wt.a)().mark(Bt),Rt=Object(wt.a)().mark(Gt),Lt=Object(wt.a)().mark(zt),At=Object(wt.a)().mark(Wt);function It(e){var t,n,c;return Object(wt.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(Et.b)(St,t);case 4:return n=r.sent,c=n.access_token,r.next=8,Object(Et.c)(ze(c));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(0),r.next=14,Object(Et.c)(We(r.t0));case 14:case"end":return r.stop()}}),Ut,null,[[0,10]])}function Pt(e){var t;return Object(wt.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.token,localStorage.setItem(p,t),n.next=4,Object(Et.c)(Me(t));case 4:case"end":return n.stop()}}),Tt)}function Bt(e){var t,n;return Object(wt.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,!(t=e.payload.token||localStorage.getItem(p))){c.next=8;break}return c.next=5,Object(Et.b)(Nt,t);case 5:return n=c.sent,c.next=8,Object(Et.c)(Qe(n));case 8:c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(0),c.next=14,Object(Et.c)(We(c.t0));case 14:case"end":return c.stop()}}),_t,null,[[0,10]])}function Gt(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ot.push("/");case 2:case"end":return e.stop()}}),Rt)}function zt(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem(p),e.next=3,Object(Et.c)(De());case 3:case"end":return e.stop()}}),Lt)}function Wt(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.e)(Re,It);case 2:return e.next=4,Object(Et.e)(Le,Pt);case 4:return e.next=6,Object(Et.e)(Ie,Bt);case 6:return e.next=8,Object(Et.e)(Pe,Gt);case 8:return e.next=10,Object(Et.e)(Be,zt);case 10:return e.next=12,Object(Et.e)(Ge,Gt);case 12:case"end":return e.stop()}}),At)}function Mt(e){return fetch("/currency/rate/".concat(e))}var Qt=Object(wt.a)().mark(Vt),Dt=Object(wt.a)().mark(Ft),Ht=Object(wt.a)().mark(Jt);function Vt(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ft("USD");case 2:return e.next=4,Ft("EUR");case 4:return e.next=6,Ft("GBP");case 6:case"end":return e.stop()}}),Qt)}function Ft(e){var t,n;return Object(wt.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(Et.b)(Mt,e);case 3:return t=c.sent,c.next=6,t.json();case 6:if(n=c.sent,!t.ok){c.next=12;break}return c.next=10,Object(Et.c)(ue(e,n));case 10:c.next=14;break;case 12:return c.next=14,Object(Et.c)(je("Currency fetch error"));case 14:c.next=20;break;case 16:return c.prev=16,c.t0=c.catch(0),c.next=20,Object(Et.c)(je(c.t0));case 20:case"end":return c.stop()}}),Dt,null,[[0,16]])}function Jt(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(se,Vt);case 2:case"end":return e.stop()}}),Ht)}function qt(){return h({url:d+"/processing/accounts",method:"GET"})}function Xt(e){return h({url:d+"/processing/account",method:"POST",body:JSON.stringify({currency:e})})}function Yt(e){return h({url:d+"/processing/account/"+e.account,method:"PUT",body:JSON.stringify(e)})}function Kt(e){return h({url:d+"/processing/exchange/"+e.uid,method:"PUT",body:JSON.stringify(e)})}var $t=Object(wt.a)().mark(rn),Zt=Object(wt.a)().mark(an),en=Object(wt.a)().mark(on),tn=Object(wt.a)().mark(sn),nn=Object(wt.a)().mark(un),cn=Object(wt.a)().mark(jn);function rn(){var e;return Object(wt.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Et.b)(qt);case 3:return e=t.sent,t.next=6,Object(Et.c)(L(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Et.c)(A(t.t0));case 12:case"end":return t.stop()}}),$t,null,[[0,8]])}function an(e){var t;return Object(wt.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Et.b)(Xt,e.payload);case 3:return t=n.sent,n.next=6,Object(Et.c)(I(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Et.c)(P(n.t0));case 12:case"end":return n.stop()}}),Zt,null,[[0,8]])}function on(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.c)(R());case 2:case"end":return e.stop()}}),en)}function sn(e){var t;return Object(wt.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Et.b)(Yt,e.payload);case 3:return t=n.sent,n.next=6,Object(Et.c)(B(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Et.c)(G(n.t0));case 12:case"end":return n.stop()}}),tn,null,[[0,8]])}function un(e){var t;return Object(wt.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Et.b)(Kt,e.payload);case 3:return t=n.sent,n.next=6,Object(Et.c)(z(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Et.c)(W(n.t0));case 12:case"end":return n.stop()}}),nn,null,[[0,8]])}function jn(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.e)(k,rn);case 2:return e.next=4,Object(Et.e)(E,an);case 4:return e.next=6,Object(Et.e)(S,on);case 6:return e.next=8,Object(Et.e)(N,sn);case 8:return e.next=10,Object(Et.e)(T,un);case 10:return e.next=12,Object(Et.e)(_,on);case 12:case"end":return e.stop()}}),cn)}function ln(e){return h({url:d+"/history/account/"+e,method:"GET"})}var bn=Object(wt.a)().mark(dn),On=Object(wt.a)().mark(pn);function dn(e){var t,n;return Object(wt.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,c.next=4,Object(Et.b)(ln,t);case 4:return n=c.sent,c.next=7,Object(Et.c)(Ce(t,n));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(0),c.next=13,Object(Et.c)(we(c.t0));case 13:case"end":return c.stop()}}),bn,null,[[0,9]])}function pn(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.e)(ge,dn);case 2:case"end":return e.stop()}}),On)}var hn=Object(wt.a)().mark(fn);function fn(){return Object(wt.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.a)([Wt(),Jt(),jn(),pn()]);case 2:case"end":return e.stop()}}),hn)}var xn=Object(dt.b)({auth:vt,currency:gt,accounts:kt,history:Ct}),mn=Object(pt.a)(),vn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||dt.c,gn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(dt.d)(xn,e,vn(Object(dt.a)(mn)));return mn.run(fn),t};var yn=gn(function(){var e=localStorage.getItem(p);return e&&{auth:{token:e}}||{}}());a.a.render(Object(g.jsx)(b.a,{store:yn,children:Object(g.jsx)(O.c,{history:Ot,children:Object(g.jsx)(it,{})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ut?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):jt(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):jt(e)}))}}()}},[[217,1,2]]]);
//# sourceMappingURL=main.86457463.chunk.js.map