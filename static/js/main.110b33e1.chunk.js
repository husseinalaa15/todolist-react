(this.webpackJsonptodolist21=this.webpackJsonptodolist21||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(7),a=c.n(s),r=(c(13),c(2)),i=c(8),d=c(4),l=(c(14),c(0));var j=function(e){var t=e.addTodo,c=Object(n.useState)({id:Math.random(),task:"",completed:!1}),o=Object(d.a)(c,2),s=o[0],a=o[1];return Object(l.jsx)("div",{className:"container formcontainer mt-3",children:Object(l.jsxs)("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),t(Object(r.a)(Object(r.a)({},s),{},{id:Math.random()})),a(Object(r.a)(Object(r.a)({},s),{},{task:""}))},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",name:"task",value:s.task,placeholder:"Todo Name ",onChange:function(e){a(Object(r.a)(Object(r.a)({},s),{},{task:e.target.value}))}})}),Object(l.jsx)("div",{class:"form-group",children:Object(l.jsx)("button",{className:"btn btn-success ml-2",type:"submit",children:"Add"})})]})})},m=function(e){var t=e.todo,c=e.toggleTodo,n=e.removeTodo;return Object(l.jsxs)("li",{className:"todoli mt-3",children:[Object(l.jsx)("div",{class:"todoname",children:Object(l.jsxs)("h3",{children:[" ",t.task]})}),Object(l.jsxs)("div",{className:"actions ",children:[Object(l.jsxs)("label",{for:"done"+t.id,className:t.completed?"btn btn-success ":"btn btn-warning",children:[t.completed?Object(l.jsx)("i",{class:"fas fa-check-circle  mr-1"}):Object(l.jsx)("i",{class:"fas fa-clock mr-1"}),t.completed?"Completed":"Pending"]}),Object(l.jsx)("input",{onChange:function(){c(t.id)},id:"done"+t.id,type:"checkbox",checked:t.completed?"checked":""}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){n(t.id)},children:"X"})]})]},t.id)};var b=function(e){var t=e.todos,c=e.toggleTodo,n=e.removeTodo;return Object(l.jsx)("ul",{className:"container mt-3",children:t.map((function(e){return Object(l.jsx)(m,{todo:e,removeTodo:n,toggleTodo:c},e.id)}))})};var u=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],o=t[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("LOCAL_STORAGE_KEY"));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("LOCAL_STORAGE_KEY",JSON.stringify(c))}),[c]);var s=Object(n.useState)({person:""}),a=Object(d.a)(s,2),m=a[0],u=a[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("name"));e&&u(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("name",JSON.stringify(m))}),[m]);var O=window.document.getElementById("nameInput");return""==m.person?Object(l.jsxs)("div",{id:"nameForm",children:[Object(l.jsx)("div",{className:"title text-center",children:Object(l.jsx)("h2",{children:" Welcome. "})}),Object(l.jsx)("div",{className:"container formcontainer mt-3",children:Object(l.jsxs)("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),u(Object(r.a)(Object(r.a)({},m),{},{person:O.value}))},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control",type:"text",id:"nameInput",placeholder:"Write Your Name"})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("button",{className:"btn btn-success ml-2",type:"submit",children:"Add"})})]})})]}):Object(l.jsxs)("div",{className:"App container appcontainer",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{children:" Todo. "}),Object(l.jsxs)("h5",{children:[" Hey  ",m.person," you Can do it."]})]}),Object(l.jsx)(j,{addTodo:function(e){o([].concat(Object(i.a)(c),[e]))}}),Object(l.jsx)(b,{todos:c,toggleTodo:function(e){o(c.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){o(c.filter((function(t){return t.id!==e})))}})]})};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.110b33e1.chunk.js.map