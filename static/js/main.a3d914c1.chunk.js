(this.webpackJsonptodoHooks=this.webpackJsonptodoHooks||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),i=n.n(s),a=n(8),o=n.n(a),r=(n(14),n(7)),j=n(3),u=n(6);n(15);var l=function(){var t=Object(s.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1],a=Object(s.useState)(""),o=Object(u.a)(a,2),l=o[0],b=o[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"containero",children:[Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{className:"inputfield",placeholder:"Enter....",onChange:function(t){return function(t){b(t.target.value)}(t)}}),Object(c.jsx)("button",{className:"onebut",onClick:function(t){if(t.preventDefault(),""!==l){var e={id:Date.now(),isComplete:!1,text:l};i([].concat(Object(j.a)(n),[e]))}},type:"submit",children:Object(c.jsx)("i",{class:"fas fa-plus"})})]}),Object(c.jsx)("div",{className:"ftr",children:Object(c.jsxs)("ul",{children:[" ",n.map((function(t){return Object(c.jsxs)("li",{className:"listn",children:[Object(c.jsxs)("section",{className:"section",children:[Object(c.jsx)("p",{className:t.isComplete?"complete":"ninput",children:t.text}),Object(c.jsx)("button",{className:"butt1",type:"submit",onClick:function(e){return function(t){var e=n.findIndex((function(e){return e.id===t})),c=Object(j.a)(n);c[e]=Object(r.a)(Object(r.a)({},c[e]),{},{isComplete:!0}),i(Object(j.a)(c))}(t.id)},children:Object(c.jsx)("i",{class:"fas fa-check"})}),Object(c.jsx)("button",{className:"butt2",type:"submit",onClick:function(e){return function(t){var e=Object(j.a)(n).filter((function(e){return e.id!==t}));i(e)}(t.id)},children:Object(c.jsx)("i",{class:"fas fa-trash-alt"})})]})," "]},t.id)}))]})})]})})};var b=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l,{})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.a3d914c1.chunk.js.map