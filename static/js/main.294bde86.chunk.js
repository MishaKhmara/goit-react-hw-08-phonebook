(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={phoneList:"ContactList_phoneList__VT0Fa",ContactsList:"ContactList_ContactsList__11BFb",button:"ContactList_button__uLG5h",name:"ContactList_name__2spGb",number:"ContactList_number__CD27W"}},33:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__3FkXp"}},38:function(e,t,n){},5:function(e,t,n){e.exports={form:"Phonebook_form__YYEEQ",label:"Phonebook_label__-EkEm",input:"Phonebook_input__2JsEz",button:"Phonebook_button__2zYRF",wraper:"Phonebook_wraper__21lQs"}},66:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(12),u=n.n(a),o=(n(38),n(14)),s=n(15),l=n(17),i=n(16),b=n(7),m=n(10),d=n.n(m),f=n(8),h=n.n(f),j=n(18),p=n(11),O=n.n(p),v=n(9),x=n(3),g=(Object(x.b)("number/addNumber",(function(e){return{payload:Object(v.a)(Object(v.a)({},e),{},{id:Object(x.d)()})}})),Object(x.b)("number/deleteNumber"),Object(x.b)("number/filteredNumber")),y=Object(x.b)("number/fetch-numbers-requested"),_=Object(x.b)("number/fetch-numbers-success"),C=Object(x.b)("number/fetch-numbers-failure"),w=Object(x.b)("number/add-number-requested"),E=Object(x.b)("number/add-number-success"),k=Object(x.b)("number/add-number-failure"),N=Object(x.b)("number/remove-number-requested"),z=Object(x.b)("number/remove-number-success"),L=Object(x.b)("number/remove-number-failure");O.a.defaults.baseURL="http://localhost:3004";var P=n(13),H=function(e){return e.contacts.filter},I=function(e){return e.contacts.loading},B=Object(P.a)([function(e){return e.contacts.contactList},H],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),F=n(33),S=n.n(F),A=n(1),q=function(e){var t=e.children,n=e.onClick;return Object(A.jsx)("button",{type:"button",className:S.a.IconButton,onClick:n,children:t})};q.defaultProps={onClick:function(){return null},children:null};var R,J,D,M,Y,Z,G,Q,T,U,V,W,X,$,K,ee=q;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ce(e,t){var n=e.title,r=e.titleId,a=ne(e,["title","titleId"]);return c.createElement("svg",te({height:"512pt",viewBox:"-54 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,R||(R=c.createElement("path",{d:"m54 264.285156v211.714844c0 14.359375 11.640625 26 26 26s26-11.640625 26-26v-211.714844zm0 0",fill:"#72d8ff"})),J||(J=c.createElement("path",{d:"m158 264.285156v211.714844c0 14.359375-11.640625 26-26 26s-26-11.640625-26-26v-211.714844zm0 0",fill:"#72d8ff"})),D||(D=c.createElement("path",{d:"m235 502h118.609375l40.390625-184h-199.390625zm0 0",fill:"#fff"})),M||(M=c.createElement("path",{d:"m106 10c-24.300781 0-44 19.699219-44 44v8c0 24.300781 19.699219 44 44 44s44-19.699219 44-44v-8c0-24.300781-19.699219-44-44-44zm0 0",fill:"#ffd5ab"})),Y||(Y=c.createElement("g",{fill:"#62cd4d"},c.createElement("path",{d:"m54 106h104v158.285156h-104zm0 0"}),c.createElement("path",{d:"m101.957031 106h33.042969c37.003906 0 67 29.996094 67 67v22.832031h25.640625c12.171875 0 22.042969 9.867188 22.042969 22.042969 0 12.171875-9.871094 22.042969-22.042969 22.042969h-52.136719c-9.667968 0-17.503906-7.835938-17.503906-17.503907v-16.503906"}),c.createElement("path",{d:"m109.945312 106h-32.945312c-37.003906 0-67 29.996094-67 67v113.339844c0 12.144531 9.847656 21.992187 21.992188 21.992187 12.148437 0 21.996093-9.847656 21.996093-21.992187v-63.839844"}))),Z||(Z=c.createElement("path",{d:"m244.757812 326 28-28 28 28-28 28zm0 0",fill:"#ffc66c"})),G||(G=c.createElement("path",{d:"m280.761719 409.667969h40v40h-40zm0 0",fill:"#ffc66c"})),Q||(Q=c.createElement("path",{d:"m227.640625 249.917969c17.667969 0 32.042969-14.375 32.042969-32.042969s-14.375-32.042969-32.042969-32.042969h-15.640625v-12.832031c0-38.339844-28.167969-70.214844-64.894531-76.039062 8.03125-9.429688 12.894531-21.636719 12.894531-34.960938v-8c0-29.773438-24.226562-54-54-54s-54 24.226562-54 54v8c0 13.324219 4.863281 25.53125 12.894531 34.960938-36.726562 5.824218-64.894531 37.699218-64.894531 76.039062v113.339844c0 17.640625 14.351562 31.992187 31.992188 31.992187 4.246093 0 8.296874-.835937 12.007812-2.34375v21.007813c0 5.523437 4.476562 10 10 10s10-4.476563 10-10v-62.710938h84v201.714844c0 8.820312-7.179688 16-16 16s-16-7.179688-16-16v-150c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v150c0 8.820312-7.179688 16-16 16s-16-7.179688-16-16v-58.332031c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v58.332031c0 19.851562 16.148438 36 36 36 10.214844 0 19.441406-4.28125 26-11.140625 6.558594 6.859375 15.785156 11.140625 26 11.140625 19.851562 0 36-16.148438 36-36v-227.132812c2.386719.679687 4.902344 1.050781 7.503906 1.050781zm-155.640625-195.917969c0-18.746094 15.253906-34 34-34s34 15.253906 34 34v8c0 18.746094-15.253906 34-34 34s-34-15.253906-34-34zm96 168.414062v-38.273437c0-5.523437-4.476562-10-10-10s-10 4.476563-10 10v70.144531h-84v-70.144531c0-5.523437-4.476562-10-10-10s-10 4.476563-10 10v38.128906c-.003906.078125-.011719.152344-.011719.230469v63.839844c0 6.613281-5.382812 11.992187-11.996093 11.992187-6.609376 0-11.992188-5.378906-11.992188-11.992187v-113.339844c0-31.429688 25.570312-57 57-57h58c31.429688 0 57 25.570312 57 57v22.832031c0 5.523438 4.476562 10 10 10h25.640625c6.640625 0 12.042969 5.402344 12.042969 12.042969s-5.402344 12.042969-12.042969 12.042969h-52.136719c-4.136718 0-7.503906-3.367188-7.503906-7.503907zm0 0"})),T||(T=c.createElement("path",{d:"m396.144531 308.230469c-5.394531-1.175781-10.730469 2.230469-11.914062 7.625l-38.664063 176.144531h-102.523437l-38.664063-176.144531c-1.1875-5.394531-6.515625-8.808594-11.914062-7.625-5.394532 1.1875-8.808594 6.519531-7.621094 11.914062l40.390625 184c1.003906 4.585938 5.070313 7.855469 9.765625 7.855469h118.609375c4.695313 0 8.761719-3.269531 9.769531-7.855469l40.390625-184c1.179688-5.394531-2.230469-10.726562-7.625-11.914062zm0 0"})),U||(U=c.createElement("path",{d:"m242.609375 384.59375-4.007813 4.007812c-3.902343 3.90625-3.90625 10.238282 0 14.144532 1.953126 1.953125 4.511719 2.929687 7.070313 2.929687s5.117187-.976562 7.070313-2.929687l4.007812-4.007813c3.90625-3.902343 3.90625-10.234375.003906-14.140625-3.90625-3.90625-10.238281-3.90625-14.144531-.003906zm0 0"})),V||(V=c.createElement("path",{d:"m328.9375 360.242188c1.953125 1.949218 4.511719 2.929687 7.074219 2.929687 2.558593 0 5.117187-.980469 7.070312-2.929687 3.902344-3.90625 3.902344-10.238282 0-14.144532l-4.007812-4.007812c-3.90625-3.902344-10.234375-3.902344-14.144531 0-3.902344 3.90625-3.902344 10.238281 0 14.144531zm0 0"})),W||(W=c.createElement("path",{d:"m220.535156 269.320312-3.105468 3.109376c-3.90625 3.902343-3.90625 10.234374 0 14.140624 1.953124 1.953126 4.511718 2.929688 7.070312 2.929688s5.117188-.976562 7.070312-2.929688l3.109376-3.105468c3.902343-3.90625 3.902343-10.238282 0-14.144532-3.90625-3.902343-10.238282-3.902343-14.144532 0zm0 0"})),X||(X=c.createElement("path",{d:"m237.691406 333.070312 28 28c1.953125 1.953126 4.511719 2.929688 7.070313 2.929688 2.558593 0 5.117187-.976562 7.070312-2.929688l28-28c3.90625-3.90625 3.90625-10.234374 0-14.140624l-28-28c-3.90625-3.90625-10.234375-3.90625-14.144531 0l-28 28c-3.902344 3.90625-3.902344 10.234374.003906 14.140624zm35.070313-20.925781 13.855469 13.855469-13.855469 13.855469-13.859375-13.855469zm0 0"})),$||($=c.createElement("path",{d:"m270.761719 409.667969v40c0 5.519531 4.476562 10 10 10h40c5.523437 0 10-4.480469 10-10v-40c0-5.523438-4.476563-10-10-10h-40c-5.523438 0-10 4.476562-10 10zm20 10h20v20h-20zm0 0"})),K||(K=c.createElement("path",{d:"m54 387.671875c2.628906 0 5.210938-1.070313 7.070312-2.933594 1.859376-1.867187 2.929688-4.4375 2.929688-7.066406 0-2.632813-1.070312-5.210937-2.929688-7.070313-1.859374-1.871093-4.441406-2.929687-7.070312-2.929687s-5.210938 1.058594-7.070312 2.929687c-1.859376 1.859376-2.929688 4.4375-2.929688 7.070313 0 2.628906 1.070312 5.199219 2.929688 7.066406 1.859374 1.863281 4.441406 2.933594 7.070312 2.933594zm0 0"})))}var re,ae,ue,oe=c.forwardRef(ce),se=(n.p,{onHandleRemove:function(e){return function(){var t=Object(j.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N()),t.prev=1,t.next=4,O.a.delete("/numbers/".concat(e));case 4:n(z(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(L(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}}),le=Object(b.b)((function(e){return{contactList:B(e)}}),se)((function(e){var t=e.contactList,n=e.onHandleRemove;return Object(A.jsx)("ul",{className:d.a.phoneList,children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(A.jsxs)("li",{className:d.a.ContactsList,children:[Object(A.jsxs)("p",{className:d.a.name,children:[c,":"]}),Object(A.jsx)("p",{className:d.a.number,children:r}),Object(A.jsx)(ee,{onClick:function(){return n(t)},children:Object(A.jsx)(oe,{width:"32",height:"32"})})]},t)}))})})),ie=n(2),be=n(5),me=n.n(be),de={name:"",number:""},fe=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state=Object(v.a)({},de),e.onHandleChange=function(t){var n=t.target,c=n.name,r=n.value;e.setState(Object(ie.a)({},c,r))},e.onHandleSubmit=function(t){t.preventDefault(),e.props.addNumber(e.state),e.setState(Object(v.a)({},de))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(A.jsxs)("form",{onSubmit:this.onHandleSubmit,className:me.a.form,children:[Object(A.jsxs)("label",{className:me.a.label,children:["Name",Object(A.jsx)("input",{className:me.a.input,type:"text",value:t,onChange:this.onHandleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(A.jsxs)("label",{className:me.a.label,children:["Number",Object(A.jsx)("input",{className:me.a.input,type:"tel",name:"number",value:n,onChange:this.onHandleChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(A.jsx)("button",{className:me.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),he={addNumber:function(e){return function(){var t=Object(j.a)(h.a.mark((function t(n){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(w()),t.prev=1,t.next=4,O.a.post("/numbers",e);case 4:c=t.sent,r=c.data,n(E(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(k(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},je=Object(b.b)(null,he)(fe),pe={onFilterHandleChange:g},Oe=Object(b.b)((function(e){return{filter:H(e)}}),pe)((function(e){var t=e.filter,n=e.onFilterHandleChange;return Object(A.jsxs)("label",{className:me.a.label,children:["Find contacts by name",Object(A.jsx)("input",{className:me.a.input,type:"text",value:t,onChange:function(e){n(e.target.value)},name:"filter"})]})})),ve=function(){return Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)("div",{style:{borderTopColor:"transparent"},className:"border-solid animate-spin  rounded-full border-blue-400 border-8 h-20 w-20"}),"... Loading"]})},xe=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNumbers()}},{key:"render",value:function(){return Object(A.jsxs)("div",{className:me.a.wraper,children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(je,{}),this.props.isLoading?Object(A.jsx)(ve,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h2",{children:" Contacts "}),Object(A.jsx)(Oe,{}),Object(A.jsx)(le,{})]})]})}}]),n}(c.Component),ge={fetchNumbers:function(){return function(){var e=Object(j.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y()),e.prev=1,e.next=4,O.a.get("/numbers");case 4:n=e.sent,c=n.data,t(_(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(C(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},ye=Object(b.b)((function(e){return{isLoading:I(e)}}),ge)(xe),_e=function(){return Object(A.jsx)(ye,{})},Ce=(n(65),n(6)),we=n(19),Ee=Object(x.c)(!1,(re={},Object(ie.a)(re,y,(function(){return!0})),Object(ie.a)(re,_,(function(){return!1})),Object(ie.a)(re,C,(function(){return!1})),Object(ie.a)(re,w,(function(){return!0})),Object(ie.a)(re,E,(function(){return!1})),Object(ie.a)(re,k,(function(){return!1})),Object(ie.a)(re,N,(function(){return!0})),Object(ie.a)(re,z,(function(){return!1})),Object(ie.a)(re,L,(function(){return!1})),re)),ke=Object(x.c)([],(ae={},Object(ie.a)(ae,_,(function(e,t){return t.payload})),Object(ie.a)(ae,E,(function(e,t){var n=t.payload;return[].concat(Object(we.a)(e),[n])})),Object(ie.a)(ae,z,(function(e,t){var n=t.payload,c=e.findIndex((function(e){return e.id===Number(n)}));return[].concat(Object(we.a)(e.slice(0,c)),Object(we.a)(e.slice(c+1)))})),ae)),Ne=function(e,t){return t.payload.response.data},ze=function(){return null},Le=Object(x.c)(null,(ue={},Object(ie.a)(ue,y,ze),Object(ie.a)(ue,C,Ne),Object(ie.a)(ue,w,ze),Object(ie.a)(ue,k,Ne),Object(ie.a)(ue,N,ze),Object(ie.a)(ue,L,Ne),ue)),Pe=Object(x.c)("",Object(ie.a)({},g,(function(e,t){return t.payload}))),He=Object(Ce.b)({loading:Ee,contactList:ke,error:Le,filter:Pe}),Ie=Object(Ce.b)({contacts:He}),Be=Object(x.a)({reducer:Ie});u.a.render(Object(A.jsx)(b.a,{store:Be,children:Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(_e,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.294bde86.chunk.js.map