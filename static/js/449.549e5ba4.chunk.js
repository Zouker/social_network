"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[449],{3449:function(n,e,s){s.r(e),s.d(e,{default:function(){return p}});var r=s(1373),a=(s(2791),{dialogs:"Dialogs_dialogs__4VZML",dialogsItems:"Dialogs_dialogsItems__P7bYT",active:"Dialogs_active__neLxr",messages:"Dialogs_messages__5CmT2",message:"Dialogs_message__2yEf1",avatar:"Dialogs_avatar__74mG7"}),t=s(1523),i=s(184),o=function(n){var e="/dialogs/"+n.id;return(0,i.jsxs)("div",{className:a.dialog+" "+a.active,children:[(0,i.jsx)("img",{className:a.avatar,src:n.avatar,alt:"avatar"}),(0,i.jsx)(t.OL,{to:e,children:n.name})]})},u=function(n){return(0,i.jsx)("div",{className:a.message,children:n.message})},d=s(9271),l=s(5298),c=s(6139),m=s(704),g=s(1117),f=(0,l.D)(50),h=(0,m.Z)({form:"dialogAddMessageForm"})((function(n){return(0,i.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{component:g.gx,name:"newMessageBody",validate:[l.C,f],placeholder:"Enter your message"})}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{type:"submit",children:"Send"})})]})})),v=function(n){var e=n.dialogs.map((function(n){return(0,i.jsx)(o,{name:n.name,id:n.id,avatar:n.avatar},n.id)})),s=n.messages.map((function(n){return(0,i.jsx)(u,{id:n.id,message:n.message},n.id)}));return n.isAuth?(0,i.jsxs)("div",{className:a.dialogs,children:[(0,i.jsx)("div",{className:a.dialogsItems,children:e}),(0,i.jsxs)("div",{className:a.messages,children:[(0,i.jsx)("div",{children:s}),(0,i.jsx)(h,{onSubmit:function(e){n.sendMessage(e.newMessageBody),e.newMessageBody=""}})]})]}):(0,i.jsx)(d.l_,{to:"/login"})},x=s(8687),_=s(7781),j=s(2932),p=(0,_.qC)(j.D,(0,x.$j)((function(n){return{dialogs:n.dialogsPage.dialogs,messages:n.dialogsPage.messages,isAuth:n.auth.isAuth}}),(function(n){return{sendMessage:function(e){n((0,r.d)(e))}}})))(v)},1117:function(n,e,s){s.d(e,{gx:function(){return c},II:function(){return m},Gr:function(){return g}});var r=s(1413),a=s(5987),t=(s(2791),s(232)),i=s(6139),o=s(184),u=["input","meta"],d=["input","meta"],l=function(n){var e=n.meta,s=e.touched,r=e.error,a=n.children,i=s&&r;return(0,o.jsxs)("div",{className:t.Z.formControl+" "+(i?t.Z.error:""),children:[(0,o.jsx)("div",{children:a}),i&&(0,o.jsx)("span",{children:r})]})},c=function(n){var e=n.input,s=n.meta,t=(0,a.Z)(n,u);return(0,o.jsxs)(l,{meta:s,children:[" ",(0,o.jsx)("textarea",(0,r.Z)((0,r.Z)({},e),t))," "]})},m=function(n){var e=n.input,s=n.meta,t=(0,a.Z)(n,d);return(0,o.jsxs)(l,{meta:s,children:[" ",(0,o.jsx)("input",(0,r.Z)((0,r.Z)({},e),t))," "]})},g=function(n,e,s,a){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Z,(0,r.Z)({placeholder:n,name:e,validate:s,component:a},t))," ",u]})}},2932:function(n,e,s){s.d(e,{D:function(){return l}});var r=s(1413),a=s(5987),t=(s(2791),s(9271)),i=s(8687),o=s(184),u=["isAuth"],d=function(n){return{isAuth:n.auth.isAuth}};function l(n){return(0,i.$j)(d)((function(e){var s=e.isAuth,i=(0,a.Z)(e,u);return s?(0,o.jsx)(n,(0,r.Z)({},i)):(0,o.jsx)(t.l_,{to:"/login"})}))}},5298:function(n,e,s){s.d(e,{C:function(){return r},D:function(){return a}});var r=function(n){if(!n)return"Field is required"},a=function(n){return function(e){if(e.length>n)return"Max length is ".concat(n," symbols")}}},232:function(n,e){e.Z={formControl:"FormControls_formControl__8Dqnn",error:"FormControls_error__qoW33",formSummaryError:"FormControls_formSummaryError__pSOJC"}}}]);
//# sourceMappingURL=449.549e5ba4.chunk.js.map