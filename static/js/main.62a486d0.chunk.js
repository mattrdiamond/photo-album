(this["webpackJsonpalpine-coding-assessment"]=this["webpackJsonpalpine-coding-assessment"]||[]).push([[0],{37:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(29),i=n.n(r),u=(n(37),n(9)),b=n(2),j=n(5),o=n(10),l=n(11),d=n.n(l),O=n(14),p=n(30),h=n.n(p),m=function(e){return h.a.get("https://jsonplaceholder.typicode.com/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},x=n(12),f=(n(56),function(e){var t=e.id,n=e.title,a=e.index;return Object(c.jsxs)(x.b,{to:{pathname:"/albums/".concat(t,"/photos"),state:{title:n,id:t}},className:"album",children:[Object(c.jsxs)("span",{className:"album-number",children:["Album ",a+1]}),Object(c.jsx)("span",{className:"album-title",children:n})]})}),v=(n(62),function(){return Object(c.jsx)("div",{className:"spinner-overlay",children:Object(c.jsx)("div",{className:"spinner"})})}),N=(n(63),function(e){var t=e.children;return Object(c.jsx)("div",{className:"grid",children:t})}),g=(n(64),function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(b.f)().id;return Object(a.useEffect)((function(){var e=!0;Object(O.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("users/".concat(r,"/albums"));case 2:return n=t.sent,e&&s(n),t.abrupt("return",(function(){return e=!1}));case 5:case"end":return t.stop()}}),t)})))()}),[r]),Object(c.jsxs)("div",{className:"albums",children:[Object(c.jsx)("h1",{children:"Albums"}),Object(c.jsx)(N,{children:n?n.map((function(e,t){var n=e.id,a=Object(o.a)(e,["id"]);return Object(c.jsx)(f,Object(j.a)({id:n,index:t},a),n)})):Object(c.jsx)(v,{})})]})}),w=(n(65),function(e){var t=e.name,n=e.id,a=e.email,s=e.website,r=e.avatar,i=e.activeUser,u=e.setActiveUser,b=e.sidebarOpen,j=e.setSidebarOpen,o=n==i;return Object(c.jsx)("li",{className:"user"+(o?" active":""),children:Object(c.jsx)(x.b,{to:"/albums/".concat(n),onClick:function(){u(n),window.innerWidth<=800&&b&&j(!1)},children:Object(c.jsxs)("div",{className:"user-wrapper",children:[Object(c.jsx)("img",{src:r,alt:t,className:"avatar"}),Object(c.jsxs)("div",{className:"user-content",children:[Object(c.jsx)("span",{className:"user-name",children:t}),Object(c.jsx)("span",{className:"user-details",children:a}),Object(c.jsx)("span",{className:"user-details",children:s})]})]})})})}),S=(n(66),function(e){var t=e.sidebarOpen,n=e.setSidebarOpen,s=Object(o.a)(e,["sidebarOpen","setSidebarOpen"]),r=Object(a.useState)([]),i=Object(u.a)(r,2),b=i[0],l=i[1];return Object(a.useEffect)((function(){var e=!0;Object(O.a)(d.a.mark((function t(){var n,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("users");case 2:return n=t.sent,t.next=5,m("photos?_start=0&_limit=10");case 5:return c=t.sent,a=n.map((function(e,t){return Object(j.a)(Object(j.a)({},e),{},{avatar:c[t].thumbnailUrl})})),e&&l(a),t.abrupt("return",(function(){return e=!1}));case 9:case"end":return t.stop()}}),t)})))()}),[]),Object(c.jsx)("ul",{className:"users",children:b.length?b.map((function(e){var a=e.id,r=Object(o.a)(e,["id"]);return Object(c.jsx)(w,Object(j.a)(Object(j.a)({id:a,sidebarOpen:t,setSidebarOpen:n},r),s),a)})):Object(c.jsx)(v,{})})}),k=(n(67),function(e){var t=e.sidebarOpen,n=Object(o.a)(e,["sidebarOpen"]);return console.log("sidebarOpen",t),Object(c.jsxs)("section",{className:"sidebar"+(t?"":" hidden"),children:[Object(c.jsx)("h2",{children:"Users"}),Object(c.jsx)(S,Object(j.a)({sidebarOpen:t},n))]})}),C=(n(68),function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)("h1",{children:"Photos"}),Object(c.jsx)("p",{className:"home-content",children:"Welcome to my React photos app! Click on a user in the sidebar to view their albums."})]})}),U=(n(69),function(e){var t=e.url,n=e.title;return Object(c.jsx)("a",{className:"photo",href:t,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsxs)("figure",{className:"img-container",children:[Object(c.jsx)("img",{src:t,alt:n}),Object(c.jsx)("figcaption",{children:n})]})})}),y=(n(70),function(e){var t=e.location.state,n=t.title,s=t.id,r=Object(a.useState)(null),i=Object(u.a)(r,2),b=i[0],l=i[1];return Object(a.useEffect)((function(){var e=!0;Object(O.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("albums/".concat(s,"/photos"));case 2:return n=t.sent,e&&l(n),t.abrupt("return",(function(){return e=!1}));case 5:case"end":return t.stop()}}),t)})))()}),[s]),Object(c.jsxs)("div",{className:"photos",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)(N,{children:b?b.map((function(e){var t=e.id,n=Object(o.a)(e,["id"]);return Object(c.jsx)(U,Object(j.a)({},n),t)})):Object(c.jsx)(v,{})})]})}),A=(n(71),function(e){var t=e.sidebarOpen,n=e.setSidebarOpen;return Object(c.jsx)("div",{className:"nav-button"+(t?" is-open":""),onClick:function(){return n(!t)},role:"button","aria-label":t?"Close sidebar":"Open sidebar","aria-expanded":!!t,tabIndex:"0",children:Object(c.jsx)("div",{className:"hamburger-btn",children:Object(c.jsx)("div",{className:"hamburger-bar"})})})}),E=(n(72),function(e){return Object(c.jsx)("nav",{className:"nav-bar",children:Object(c.jsx)(A,Object(j.a)({},e))})}),F=(n(73),function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!0),i=Object(u.a)(r,2),j=i[0],o=i[1];return Object(c.jsxs)("div",{id:"app",children:[Object(c.jsx)(E,{sidebarOpen:j,setSidebarOpen:o}),Object(c.jsxs)("main",{className:"main-window",children:[Object(c.jsx)(k,{activeUser:n,setActiveUser:s,sidebarOpen:j,setSidebarOpen:o}),Object(c.jsx)("div",{className:"content-window"+(j?" sb-open":""),onClick:function(){window.innerWidth<=800&&j&&o(!1)},children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",component:C}),Object(c.jsx)(b.a,{exact:!0,path:"/albums/:id",component:g}),Object(c.jsx)(b.a,{exact:!0,path:"/albums/:id/photos",component:y})]})})]})]})}),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)(F,{})})}),document.getElementById("root")),I()}},[[74,1,2]]]);
//# sourceMappingURL=main.62a486d0.chunk.js.map