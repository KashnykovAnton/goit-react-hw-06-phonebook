(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),i=n.n(r),o=n(2),l=(n(24),n(25),n(26),n(1));function s(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),n]})}var u={deleteContact:function(e){return{type:"contacts/delete",payload:{id:e}}}},d=Object(o.b)(null,u)((function(e){var t=e.id,n=e.name,c=e.number,a=e.deleteContact;return Object(l.jsxs)("li",{children:[Object(l.jsxs)("span",{children:[n,":"]}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("button",{type:"button",id:t,onClick:function(){a(t)},children:"Delete"})]})}));function b(e){var t=e.list;return console.log("\u0421\u0440\u0430\u0431\u043e\u0442\u0430\u043b ContactList"),Object(l.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(l.jsx)(d,{id:t,name:n,number:c},t)}))})}var j=n(9),m=n(29);function h(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),u=s[0],d=s[1],b=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":d(c);break;default:return}},h=Object(m.a)(),f=Object(m.a)();return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:u,id:Object(m.a)()}),i(""),d("")},children:[Object(l.jsx)("label",{htmlFor:h,children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:h,onChange:b}),Object(l.jsx)("label",{htmlFor:f,children:"Number"}),Object(l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,id:f,onChange:b}),Object(l.jsx)("button",{type:"submit",children:"Add contact"})]})}function f(e){var t=e.value,n=e.onChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:Object(m.a)(),children:"Find contacts by name"}),Object(l.jsx)("input",{type:"text",value:t,id:Object(m.a)(),onChange:n})]})}var O={addContact:function(e){return{type:"contacts/add",payload:e}},filterContact:function(e){return{type:"contacts/filter",payload:{filter:e}}}},p=Object(o.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),O)((function(e){var t=e.contacts,n=e.filter,a=e.addContact,r=e.filterContact,i=function(e){a(e),console.log("item:",e)},o=Object(c.useCallback)((function(e){r(e.target.value)}),[r]),u=Object(c.useMemo)((function(){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}),[n,t]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(s,{title:"Phonebook",children:Object(l.jsx)(h,{onSubmit:function(e){var n=e.name.toLowerCase();t.find((function(e){return e.name.toLowerCase()===n}))?alert("".concat(e.name," is already in contacts")):i(e)}})}),Object(l.jsxs)(s,{title:"Contacts",children:[Object(l.jsx)(f,{value:n,onChange:o}),Object(l.jsx)(b,{list:u})]})]})})),v=n(3),x=n(12),C=[{id:"id-1",name:"Rosie Simpson",number:4591256},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],y=Object(v.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"contacts/add":return[].concat(Object(x.a)(e),[c]);case"contacts/delete":return e.filter((function(e){return e.id!==c.id}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return"contacts/filter"===n?c.filter:e}}),g=n(11),w=Object(v.createStore)(y,Object(g.composeWithDevTools)());i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o.a,{store:w,children:Object(l.jsx)(p,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e666d8c8.chunk.js.map