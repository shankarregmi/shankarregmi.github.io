(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4,6],{43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a);t.default=function(e){var t=e.friend,n=void 0===t?{}:t,a=n.firstName,r=n.lastName;return c.a.createElement("div",{className:"chat-header"},c.a.createElement("div",{className:"chatting-with"},c.a.createElement("span",null,"".concat(a," ").concat(r)),c.a.createElement("span",{className:"online-status"},"Active now")))}},44:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n.n(c);t.default=function(e){var t=e.send,n=Object(c.useState)(""),s=Object(a.a)(n,2),l=s[0],i=s[1];return r.a.createElement("div",{className:"msg-form"},r.a.createElement("input",{className:"form-control",value:l,onChange:function(e){var t=e.target.value;return i(t)},onKeyPress:function(e){"Enter"===e.key&&(t(l),i(""),function(){var e=document.getElementsByClassName("conversation")[0];e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}())}}))}},45:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=n(9),s=n(6),l=n(0),i=n.n(l),o=n(24),u=n(26),m=n(43),f=n(44),d=function(e){var t=e.msg;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("p",{className:"sent"},t.content)))},v=function(e){var t=e.msg;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("p",{className:"reply"},t.content)))};t.default=function(){var e=Object(l.useContext)(o.a).store,t=e.user,n=e.activeChannel,a=Object(l.useState)([]),E=Object(s.a)(a,2),p=E[0],h=E[1],g=n.participants.find(function(e){return e._id!==t._id}),_=e.Socket;Object(l.useEffect)(Object(r.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("channels/".concat(n._id,"/messages"));case 2:t=e.sent,_.emit("join_private_channel",{channel:n._id}),h(t),_.on("receive_message",function(e){e.from===g._id&&(t.push({content:e.content}),h(t))});case 6:case"end":return e.stop()}},e,this)})),[n._id]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.default,{friend:g}),i.a.createElement("div",{className:"conversation"},i.a.createElement("ul",null,p.map(function(e,n){return i.a.createElement(i.a.Fragment,{key:n},e.from===t._id?i.a.createElement(d,{msg:e}):i.a.createElement(v,{msg:e}))}))),i.a.createElement(f.default,{send:function(e){p.push({content:e,from:t._id,channel:n._id}),h(p),_.emit("send_message",{content:e,channel:n._id})}}))}}}]);
//# sourceMappingURL=5.9ad94220.chunk.js.map