(this["webpackJsonpimages-app"]=this["webpackJsonpimages-app"]||[]).push([[0],{24:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),s=t(14),i=t.n(s),a=(t(24),t(11)),o=t.n(a),u=t(15),j=t(13),l=t(8),h=(t(29),t(30),t(31),t(18)),d=t(19),b=t(3),p=function(){var e=Object(c.useState)([]),n=Object(j.a)(e,2),t=n[0],r=n[1],s=Object(c.useState)(!0),i=Object(j.a)(s,2),a=i[0],p=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{children:Object(b.jsx)(l.c,{initialValues:{search:""},onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,fetch("https://api.unsplash.com/search/photos?per_page=20&query=".concat(n.search),{headers:{Authorization:"Client-ID rXPkNgsB29-uynn0vY_HuzFyCETLXKVj42CELIlyQBs"}}).then((function(e){return e.json()})).then((function(e){return r(e.results)})).then(p(!1));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:Object(b.jsx)(l.b,{children:Object(b.jsxs)("div",{className:"form-content",children:[Object(b.jsx)(l.a,{name:"search",placeholder:"Buscar"}),Object(b.jsx)("button",{className:"submit-button",children:Object(b.jsx)(d.a,{icon:h.a})})]})})})}),Object(b.jsx)("div",{className:"container",children:a?Object(b.jsx)("div",{className:"loading-screen",children:Object(b.jsx)("h2",{children:"Cargando im\xe1genes..."})}):Object(b.jsx)("div",{className:"center",children:t.map((function(e){return Object(b.jsxs)("article",{onClick:function(){return n=e.links.html,window.open(n);var n},children:[Object(b.jsx)("img",{src:e.urls.regular}),Object(b.jsxs)("p",{children:[" ",[e.description,e.alt_description].join("-")," "]})]},e.id)}))})})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.33c8c322.chunk.js.map