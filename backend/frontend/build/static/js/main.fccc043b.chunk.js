(this["webpackJsonpexercise-tracker"]=this["webpackJsonpexercise-tracker"]||[]).push([[0],{81:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(1),r=c.n(s),a=c(18),i=c.n(a),o=c(12),l=c(4),u=(c(27),c(6)),j=c(10),d=c.n(j),b=function(e){var t;return console.log("THIS ARE THE EXERCISES: ",e),console.log("This are PProps.exersuse. username ",e.exercice._id),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.exercice.username}),Object(n.jsx)("td",{children:e.exercice.description}),Object(n.jsx)("td",{children:e.exercice.duration}),Object(n.jsx)("td",{children:null===(t=e.exercice.date)||void 0===t?void 0:t.substring(0,16)}),Object(n.jsxs)("td",{children:[Object(n.jsx)(o.b,{to:"/edit/"+e.exercice._id,children:"edit"})," |"," ",Object(n.jsx)("a",{href:"#",onClick:function(){var t;null===e||void 0===e||e.deleteExercise(null===(t=e.exercice)||void 0===t?void 0:t._id)},children:"Delete"})]})]})},h=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1];Object(s.useEffect)((function(){!function(){var e;null===(e=d.a.get("/exercises"))||void 0===e||e.then((function(e){r(e.data),console.log("This is from the getExercisesLsitfromDB RESDATA",e.data)})).catch((function(e){console.log(e)}))}(),console.log("This is inside UseEFFECT getExercisesLsitfromDB Inside exercisesList:",c)}),[]);var a=function(e){d.a.delete("/exercise/"+e).then((function(t){console.log("This is Before Deleteexersice Inside exercisesList:",c),r(c.filter((function(t){return(null===t||void 0===t?void 0:t._id)!==e}))),console.log("This is After Deleteexersice Inside exercisesList:",c)})).catch((function(e){console.log("Already user ")}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Logged Exercises"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Username"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Duration"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:c.map((function(e){return Object(n.jsx)(b,{exercice:e,deleteExercise:a},e._id)}))})]})]})},x=c(19),O=c.n(x),m=(c(23),function(e){var t=Object(s.useState)(""),c=Object(u.a)(t,2),r=c[0],a=c[1],i=Object(s.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],b=Object(s.useState)(0),h=Object(u.a)(b,2),x=h[0],m=h[1],f=Object(s.useState)(new Date),g=Object(u.a)(f,2),v=g[0],p=g[1],N=Object(s.useState)([]),E=Object(u.a)(N,2),D=E[0],C=E[1];Object(s.useEffect)((function(){S()}),[]);var S=function(){d.a.get("/exercise/"+e.match.params.id).then((function(e){a(e.data.username),j(e.data.description),m(e.data.duration),p(new Date(e.data.date)),console.log("this is the exerceise/+props.match.id",e.data)})).catch((function(e){return console.log(e)})),d.a.get("/user/getUsers").then((function(e){e.data.length>0&&(C(e.data.map((function(e){return e.username}))),console.log("this is the Iteration from get userfrom DB",e.data))})).catch((function(e){return console.log(e)}))},T=Object(s.useRef)(null);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Edit Exercise Log"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={username:r,description:l,duration:x,date:v};console.log(c),d.a.put("/exercise/update/"+e.match.params.id,c).then((function(e){console.log(e.data)})).catch((function(){console.log("Exercises NOT AAADED")}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username: "}),Object(n.jsx)("select",{ref:T,required:!0,className:"form-control",value:r,onChange:function(e){return a(e.target.value)},children:D.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Description: "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Duration (in minutes): "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Date: "}),Object(n.jsx)(O.a,{onChange:function(){return p(v)}})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Edit exercise log",className:"btn btn-primary"})})]})]})}),f=function(e){var t=Object(s.useState)(""),c=Object(u.a)(t,2),r=c[0],a=c[1],i=Object(s.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],b=Object(s.useState)(""),h=Object(u.a)(b,2),x=h[0],m=h[1],f=Object(s.useState)(new Date),g=Object(u.a)(f,2),v=g[0],p=g[1],N=Object(s.useState)([]),E=Object(u.a)(N,2),D=E[0],C=E[1];console.log("This is the current date: ",v);Object(s.useEffect)((function(){d.a.get("/user/getUsers").then((function(e){console.log("This are the users--------------\x3e ",e),e.data.length>0&&(C(e.data.map((function(e){return e.username}))),console.log("this is the Iteration from get userfrom db ".concat(e.data)),a(e.data[0].username))})).catch((function(e){return console.log(e)})),p(v)}),[]);var S=Object(s.useRef)(null);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Create new Exercise Log"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:r,description:l,duration:x,date:v};console.log(t),d.a.post("/exercise/add",t).then((function(e){console.log(e.data),a("")})).catch((function(){console.log("Exercises NOT AAADED")}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username: "}),Object(n.jsx)("select",{ref:S,required:!0,className:"form-control",value:r,onChange:function(e){return a(e.target.value)},children:D.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Description: "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Duration (in minutes): "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Date: "}),Object(n.jsx)(O.a,{onChange:function(){return p(v)}})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Create Awomse exercise log",className:"btn btn-primary"})})]})]})},g=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Create new User"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:c};console.log("This is the username variable : ::: ",c),console.log("arigato"),d.a.post("/user/add",t).then((function(e){console.log("This is res.data from users/add: ......",e),r("")})).catch((function(e){console.log("Already user ")}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username: "}),Object(n.jsx)("input",{type:"text",required:!0,className:"form-control",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Create Awomse exercise log",className:"btn btn-primary"})})]})]})},v="/list",p="/edit/:id",N="/create",E="/user",D=function(e){return Object(n.jsxs)(o.a,{children:[e.children,Object(n.jsx)(l.a,{exact:!0,path:v,component:h}),Object(n.jsx)(l.a,{path:p,exact:!0,component:m}),Object(n.jsx)(l.a,{path:N,exact:!0,component:f}),Object(n.jsx)(l.a,{path:E,exact:!0,component:g})]})},C=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(n.jsx)(o.b,{to:"/",className:"navbar-brand",children:"ExerTracker"}),Object(n.jsx)("div",{className:"collapase navbar-collapse",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(o.b,{to:"/",className:"nav-link",children:"Exercises"})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(o.b,{to:"/create",className:"nav-link",children:"Create Exercises Log"})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(o.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})};var S=function(){return console.log("Inside REACT APP"),Object(n.jsx)(D,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(C,{})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.fccc043b.chunk.js.map