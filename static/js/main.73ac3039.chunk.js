(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(0)),o=function(){return Object(i.jsx)("h2",{children:"Expense Tracker"})},u=(n(15),n(3)),j=n(8),l=n(4),d=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transactions:[e.payload].concat(Object(j.a)(t.transactions))});default:return t}},b={transactions:[]},x=Object(c.createContext)(b),O=function(t){var e=t.children,n=Object(c.useReducer)(d,b),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(x.Provider,{value:{transactions:a.transactions,deleteTransaction:function(t){s({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){s({type:"ADD_TRANSACTION",payload:t})}},children:e})},h=function(){var t=Object(c.useContext)(x).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsx)("h1",{children:t})]})},f=function(){var t=Object(c.useContext)(x).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsx)("p",{className:"money plus",children:e})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsx)("p",{className:"money minus",children:n})]})]})},m=function(t){var e=t.transaction,n=Object(c.useContext)(x).deleteTransaction,r=e.amount<0?"-":"+";return Object(i.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(i.jsxs)("span",{children:[r,"$",Math.abs(e.amount)]}),Object(i.jsx)("button",{onClick:function(){return n(e.id)},class:"delete-btn",children:"x"})]})},p=function(){var t=Object(c.useContext)(x).transactions;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{className:"list",children:t.map((function(t){return Object(i.jsx)(m,{transaction:t},t.id)}))})]})},v=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),s=Object(u.a)(a,2),o=s[0],j=s[1],l=Object(c.useContext)(x).addTransaction;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+o};l(e)},children:[Object(i.jsxs)("div",{class:"form-control",children:[Object(i.jsx)("label",{htmlfor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{class:"form-control",children:[Object(i.jsxs)("label",{htmlfor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{class:"btn",children:"Add transaction"})]})]})};var T=function(){return Object(i.jsxs)(O,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(f,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.73ac3039.chunk.js.map