(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(59),o=(a(69),a(5)),l=a(17),s=a(18),m=r.a.createContext(),i=function(e,t){var a=Object(n.useContext)(m),c=a.store,i=a.setContext,u=Object(n.useState)({error:!1,username:"",password:""}),d=Object(o.a)(u,2),p=d[0],E=d[1],f=function(e){var t=e.target;E(Object(s.a)({},p,Object(l.a)({},t.name,t.value)))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"admin"===p.username&&"admin"===p.password?(localStorage.setItem("USERNAME",p.username),i(Object(s.a)({},c,{username:p.username}))):E(Object(s.a)({},p,{error:!0}))}},r.a.createElement("div",{className:"container",id:"login-container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"heading"},"Login")),r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"username"},"Username: "),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",name:"username",id:"username",value:p.username,onChange:f,required:!0})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"password"},"Password: "),r.a.createElement("input",{type:"password",className:"form-control col-sm-9",name:"password",id:"password",value:p.password,onChange:f,required:!0})),r.a.createElement("div",{className:"text-center alert alert-danger "+(p.error?"":"visibility-hidden"),role:"alert"},r.a.createElement("span",null,"Wrong Username/Password !!")),r.a.createElement("div",{className:"text-center",id:"login-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-info"},"Login"))))},u=a(30),d=a.n(u),p=(a(78),a(79),a(80),a(81),function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 no-padding"},r.a.createElement(d.a,{focus:!0,name:"editorInput",mode:"python",theme:"monokai",width:"100%",height:"100vh",debounceChangePeriod:2e3,fontSize:14,tabSize:2,onChange:function(e){console.log("code :",e)},editorProps:{$blockScrolling:1/0}})),r.a.createElement("div",{className:"col-md-6 no-padding"},r.a.createElement(d.a,{value:"# Output",readOnly:!0,name:"codeOutput",mode:"python",theme:"monokai",width:"100%",height:"100vh",showGutter:!1,fontSize:14,tabSize:2,editorProps:{$blockScrolling:1/0}})))}),E=a(31),f=a.n(E),h=a(60),g=a(61),v=a.n(g),b=a(62),N=a.n(b),w=a(63),O=a(3),S=a.n(O),j=(a(194),function(e){var t=e.data,a=e.type,n={Users:[{id:"name",Header:"Name",accessor:function(e){return"".concat(S()(e,"profile.firstName","")," ").concat(S()(e,"profile.lastName",""))}},{id:"email",Header:"Email",accessor:function(e){return"".concat(S()(e,"emails.0.address",""))}},{id:"owner",Header:"Owner",accessor:function(e){return"".concat(S()(e,"owner.name","")," (").concat(e.owner.type,")")}}],Requests:[{Header:"Code",accessor:"code"},{id:"booker",Header:"Booker",accessor:function(e){return"".concat(S()(e,"booker.profile.firstName","")," ").concat(S()(e,"booker.profile.lastName","")," (").concat(S()(e,"booker.emails.0.address",""),")")}},{id:"company",Header:"Company",accessor:function(e){return"".concat(S()(e,"company.name",""))}},{id:"landlord",Header:"Landlord",accessor:function(e){return"".concat(S()(e,"landlord.name",""))}}],Apartments:[{Header:"Code",accessor:"code"},{id:"address",Header:"Address",accessor:function(e){return"".concat(S()(e,"address.formattedAddress",""))}},{id:"owner",Header:"Owner",accessor:function(e){return"".concat(S()(e,"owner.name",""))}},{id:"price",Header:"Price/Month",accessor:function(e){return"".concat(S()(e,"pricing.price",0)," ").concat(S()(e,"pricing.currency","").toUpperCase())}}]};return r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement(w.a,{defaultPageSize:10,minRows:1,data:t,columns:n[a]}))}),y=function(e){var t=e.error;return r.a.createElement("div",{className:"container",id:"no-match"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("h5",null,t))},k=localStorage.getItem("API_URL")||"http://localhost:3060",C=localStorage.getItem("API_ENV")||"development";localStorage.setItem("API_URL",k);var I=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),s=Object(o.a)(l,2),m=s[0],i=s[1],u=Object(n.useState)(k),d=Object(o.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(C),b=Object(o.a)(g,2),w=b[0],O=b[1],S=Object(n.useState)(!1),I=Object(o.a)(S,2),P=I[0],x=I[1],A=Object(n.useState)("No Match Found !!"),H=Object(o.a)(A,2),U=H[0],R=H[1],V=function(e){var t=e.target;O(t.value),localStorage.setItem("API_ENV",t.value),"development"===t.value?_("http://localhost:3060"):(t.value,_("http://localhost:3060")),setTimeout(function(){x(!P)},500)},_=function(e){E(e),localStorage.setItem("API_URL",e)},F=function(){var e=Object(h.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.value,c(a),!a){e.next=15;break}return e.prev=3,e.next=6,v.a.get("".concat(p,"/search/searchAll?term=").concat(a)).then(function(e){return e.data});case 6:(n=e.sent)&&n.data&&n.data.length?(r=N()(n.data,function(e){return e.schemaType}),i(r)):(R("No Match Found !!"),i({})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),R(e.t0.message);case 13:e.next=16;break;case 15:i({});case 16:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-bars float-right",onClick:function(){return x(!P)}}),r.a.createElement("div",{className:"container",id:"search-container"},r.a.createElement("div",{className:"row"},r.a.createElement("input",{type:"text",placeholder:"Type anything...",className:"form-control col-sm-12",name:"username",id:"username",value:a,onChange:F}))),Object.keys(m).length?Object.keys(m).map(function(e){return r.a.createElement("div",{className:"container",id:"suggestion-container",key:e},r.a.createElement(j,{data:m[e],type:e}))}):a&&a.length>1?r.a.createElement(y,{error:U}):"",P?r.a.createElement("div",{className:"api-modal"},r.a.createElement("div",null,r.a.createElement("p",null,"Select Environment:"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"development",name:"API_ENV",defaultValue:"development",checked:"development"===w,onChange:V}),r.a.createElement("label",{htmlFor:"development"},"Development")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"staging",name:"API_ENV",defaultValue:"staging",checked:"staging"===w,onChange:V}),r.a.createElement("label",{htmlFor:"staging"},"Staging")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"production",name:"API_ENV",defaultValue:"production",checked:"production"===w,onChange:V}),r.a.createElement("label",{htmlFor:"production"},"Production")))):"")},P=function(){return Object(n.useContext)(m).store.username?localStorage.getItem("SEARCH")?r.a.createElement(I,null):r.a.createElement(p,null):r.a.createElement(i,null)};Object(c.render)(r.a.createElement(function(){var e=localStorage.getItem("USERNAME"),t=Object(n.useState)({username:e}),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement(m.Provider,{value:{store:c,setContext:l}},r.a.createElement(P,null))},null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(196)},69:function(e,t,a){}},[[64,2,1]]]);
//# sourceMappingURL=main.8b3f103e.chunk.js.map