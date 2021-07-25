(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{37:function(t,e,n){},4:function(t,e,n){t.exports={App:"Contacts_App__1zGy2",input:"Contacts_input__3-qCH",button:"Contacts_button__3vpXq",buttonDelete:"Contacts_buttonDelete__2UTc8",contactsBlock:"Contacts_contactsBlock__QgLWd",contactItem:"Contacts_contactItem__x4h94"}},73:function(t,e,n){"use strict";n.r(e);var c,a,r,o=n(0),s=n.n(o),u=n(12),i=n.n(u),l=(n(37),n(13)),b=n(14),d=n(16),h=n(15),f=n(7),j=n(10),p=n(6),O=n(17),m=n.n(O),C=n(21),v=n.n(C),g=n(31),x=n(18),y=n.n(x),S=n(2),w=Object(S.b)("contacts/fetchContactsRequest"),k=Object(S.b)("contacts/fetchContactsSuccess"),_=Object(S.b)("contacts/fetchContactsError"),I=Object(S.b)("contacts/addContactSuccess"),E=Object(S.b)("contacts/addContactsError"),N=Object(S.b)("contacts/addContactRequest"),q={fetchContactsRequest:w,fetchContactsSuccess:k,fetchContactsError:_,changeFilter:Object(S.b)("contacts/filter"),addContactRequest:N,addContactSuccess:I,addContactsError:E,deleteContactSuccess:Object(S.b)("contacts/deleteContactSuccess"),deleteContactsError:Object(S.b)("contacts/deleteContactsError"),deleteContactRequest:Object(S.b)("contacts/deleteContactRequest")},A=function(t){var e=t.name,n=t.number;return function(){var t=Object(g.a)(v.a.mark((function t(c){var a,r,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(q.addContactRequest()),t.prev=2,t.next=5,y.a.post("http://localhost:4040/contacts",a);case 5:r=t.sent,o=r.data,c(q.addContactSuccess(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(q.addContactsError(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},R=function(t){return function(e){e(q.deleteContactRequest()),y.a.delete("http://localhost:4040/contacts/".concat(t)).then((function(){return e(q.deleteContactSuccess(t))})).catch((function(t){return e(q.deleteContactsError(t))}))}},z=function(){return function(t){t(q.fetchContactsRequest()),y.a.get("http://localhost:4040/contacts").then((function(e){var n=e.data;return t(q.fetchContactsSuccess(n))})).catch((function(e){return t(q.fetchContactsError(e))}))}},B=n(9),D=function(t){return t.contacts.filter},L={getValue:D,getVisibleContacts:Object(B.a)([D,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},M=n(3),V=q.fetchContactsSuccess,F=q.addContactSuccess,H=q.deleteContactSuccess,P=q.changeFilter,J=Object(S.c)([],(c={},Object(f.a)(c,V,(function(t,e){return e.payload})),Object(f.a)(c,F,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?alert("".concat(n.name," is already in contacts.")):[n].concat(Object(j.a)(t))})),Object(f.a)(c,H,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),T=Object(S.c)("",Object(f.a)({},P,(function(t,e){return e.payload}))),Z=Object(M.b)({items:J,filter:T}),G=n(4),Q=n.n(G),U=n(1),W=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.addList=function(e,n){var c={id:m.a.generate(),name:e,number:n};t.setState((function(t){return{contacts:[c].concat(Object(j.a)(t.contacts))}}))},t.loginInputId=m.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(f.a)({id:m.a.generate()},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(U.jsx)("div",{className:Q.a.contactsBlock,children:Object(U.jsxs)("form",{onSubmit:this.handleSubmit,className:Q.a.formName,children:[Object(U.jsxs)("label",{id:this.loginInputId,children:["Name",Object(U.jsx)("input",{className:Q.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(U.jsxs)("label",{id:this.loginInputId,children:["Number",Object(U.jsx)("input",{className:Q.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(U.jsx)("button",{className:Q.a.button,type:"submit",children:"Add conract"})]})})}}]),n}(o.Component),X=Object(p.b)(null,(function(t){return{onSubmit:function(e){return t(A(e))}}}))(W),$=Object(p.b)((function(t){return{value:L.getValue(t)}}),(function(t){return{onChange:function(e){return t(q.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(U.jsx)("div",{className:Q.a.contactsBlock,children:Object(U.jsxs)("label",{children:["Find contact by name",Object(U.jsx)("input",{className:Q.a.input,type:"text",value:e,onChange:n})]})})})),K=["title","titleId"];function Y(){return(Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function tt(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function et(t,e){var n=t.title,c=t.titleId,s=tt(t,K);return o.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":c},s),n?o.createElement("title",{id:c},n):null,a||(a=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),r||(r=o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var nt=o.forwardRef(et),ct=(n.p,Object(p.b)((function(t){return{contactList:L.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(R(e))}}}))((function(t){var e=t.contactList,n=t.onDeleteContact;return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("ul",{className:Q.a.contactsBlock,children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(U.jsxs)("li",{className:Q.a.contactItem,children:[e,": ",c,Object(U.jsx)("button",{onClick:function(){return n(a)},className:Q.a.buttonDelete,"aria-label":"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(U.jsx)(nt,{width:"20",height:"20",fill:"#fff"})})]},a)}))})})}))),at=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(U.jsxs)("div",{className:Q.a.App,children:[Object(U.jsx)("h1",{children:"Phonebook"}),Object(U.jsx)(X,{}),Object(U.jsx)("h2",{children:"Contacts"}),Object(U.jsx)($,{}),Object(U.jsx)(ct,{})]})}}]),n}(o.Component),rt=Object(p.b)(null,(function(t){return{fetchContacts:function(){return t(z())}}}))(at),ot=n(32),st=n.n(ot),ut=n(8),it=[].concat(Object(j.a)(Object(S.d)({serializableCheck:{ignoredActions:[ut.a,ut.f,ut.b,ut.c,ut.d,ut.e]}})),[st.a]),lt=Object(S.a)({reducer:{contacts:Z},middleware:it,devContacts:!1});i.a.render(Object(U.jsx)(s.a.StrictMode,{children:Object(U.jsx)(p.a,{store:lt,children:Object(U.jsx)(rt,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b686f5f7.chunk.js.map