(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(62),a=n.n(r),i=n(4),o=n(36),l=n(14),d=n.p+"static/media/girl-studying-book.03cce87e.svg",j=n(1);var b=function(){return Object(j.jsxs)("div",{className:"Hero flex__container",title:"Hero",children:[Object(j.jsxs)("div",{className:"Hero__quote",title:"Hero_Quote",children:[Object(j.jsx)("q",{children:Object(j.jsx)("cite",{children:"Life is like riding a bicycle. To keep your balance you must keep moving."})}),"~Albert Einstein"]}),Object(j.jsx)("div",{className:"Hero__image",title:"Hero_Image",children:Object(j.jsx)("img",{src:d,alt:"Girl Studying Book"})})]})},u=n.p+"static/media/trophy.e4fa4e4a.svg";var h=function(){return Object(j.jsxs)("div",{className:"Toppers flex__container",title:"Toppers",children:[Object(j.jsx)("div",{className:"Toppers__image",title:"Toppers__image",children:Object(j.jsx)("img",{src:u,alt:"Trophy"})}),Object(j.jsx)("div",{className:"Toppers__list",title:"toppers_list",children:Object(j.jsx)("span",{className:"vertical__line"})})]})},m=n(25),p=n.n(m),x=n(44),O=n.p+"static/media/login.753498d3.svg";var g=function(e){var t=e.setUserLoginCredentials,n=Object(c.useState)(null),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(null),d=Object(i.a)(o,2),b=d[0],u=d[1],h=Object(c.useState)(null),m=Object(i.a)(h,2),g=m[0],f=m[1],v=Object(l.f)(),_=[{fieldName:"username",type:"text",setStateHook:function(e){a(e)}},{fieldName:"password",type:"password",setStateHook:function(e){u(e)}}];function S(){return(S=Object(x.a)(p.a.mark((function e(n){var c,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)},e.prev=1,e.next=4,fetch("http://localhost:5000/".concat(g,"/dashboard"),c);case 4:return s=e.sent,e.next=7,s.json();case 7:r=e.sent,t({route:g,body:r,id:n.id,password:n.password}),console.log("response is: ",r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),v.push("/");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"Login flex__container",title:"Login",children:[Object(j.jsxs)("div",{className:"Login__box flex__container",title:"Login_Box",children:[Object(j.jsx)("span",{children:"LOGIN"}),Object(j.jsx)("span",{className:"horizontal__line"}),_.map((function(e,t){return Object(j.jsxs)("div",{className:"".concat(e.fieldName,"__field"),children:[Object(j.jsx)("span",{children:"".concat(e.fieldName.charAt(0).toUpperCase()).concat(e.fieldName.slice(1))}),Object(j.jsx)("input",{type:e.type,onChange:function(t){return e.setStateHook(t.target.value)}})]},t)})),Object(j.jsxs)("div",{className:"role__field",children:[Object(j.jsx)("span",{children:"Who you are ?"}),["Student","Teacher","Admin"].map((function(e,t){return Object(j.jsxs)("div",{id:e,children:[Object(j.jsx)("input",{type:"checkbox",name:e,onClick:function(){return f(e)}}),Object(j.jsx)("span",{children:e})]},t)}))]}),Object(j.jsx)("div",{className:"Login__button flex__container",children:Object(j.jsx)("button",{type:"submit",onClick:function(){if(!r||!b||!g)return console.log("username or password or route is null"),console.log("user name is: ",r),console.log("user password is: ",b),void console.log("can't login");!function(e){S.apply(this,arguments)}({id:r,password:b}),v.push("".concat(g,"/dashboard"))},children:"Login"})})]}),Object(j.jsx)("div",{className:"Login__image",title:"Login_Image",children:Object(j.jsx)("img",{src:O,alt:"Login svg"})})]})},f=n.p+"static/media/my-pic.a4634a09.jpg";var v=function(){return Object(j.jsxs)("div",{className:"Profile flex__container",title:"Profile",children:[Object(j.jsx)("h3",{title:"heading",children:"Developed By"}),Object(j.jsxs)("div",{className:"Profile__mine flex__container",title:"Profile_me",children:[Object(j.jsx)("div",{className:"about__me flex__container",title:"about_me",children:Object(j.jsxs)("p",{children:['"A passionte developer,',Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{}),'who loves to create innovations"']})}),Object(j.jsxs)("div",{className:"mine__photo flex__container",children:[Object(j.jsx)("img",{src:f,alt:"My Pic",title:"mine_pic"}),Object(j.jsx)("p",{title:"my_name",children:"Rishabh Raghwendra"}),Object(j.jsx)("q",{title:"title",children:"CSE Student,GNIT"})]})]})]})};var _=function(){var e=Object(c.useContext)(V);return Object(j.jsxs)("div",{className:"Home",title:"Home",children:[Object(j.jsx)(b,{}),Object(j.jsx)(h,{}),Object(j.jsx)(g,{setUserLoginCredentials:e}),Object(j.jsx)(v,{})]})},S=n(144);var y=function(){var e=Object(c.useContext)(K);return Object(j.jsx)("div",{className:"StudentDashBoard flex__container",children:Object(j.jsxs)("div",{className:"StudentDashBoard__marksDiv",children:[Object(j.jsx)("div",{className:"studentDetailsAndSemesters",children:Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["ID: ",e.body.id]})})}),Object(j.jsx)("div",{className:"verticalLine"}),Object(j.jsxs)(S.a,{variant:"simple",colorScheme:"black",size:"lg",children:[Object(j.jsx)(S.b,{children:"nulls: marks has not been uploaded"}),Object(j.jsx)(S.f,{children:Object(j.jsxs)(S.g,{children:[Object(j.jsx)(S.e,{children:"subject"}),Object(j.jsx)(S.e,{children:"Marks"})]})}),Object(j.jsx)(S.c,{children:Object.entries(e.body).map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];if("id"!==n){var s=n.split("_");return Object(j.jsxs)(S.g,{children:[Object(j.jsx)(S.d,{children:s.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)+" "}))}),Object(j.jsx)(S.d,{children:c||"null"})]})}}))})]})]})})},k=n.p+"static/media/GNITLogo.b886bf4c.jpg";var N=function(){return Object(j.jsxs)("nav",{title:"NavBar",children:[Object(j.jsx)("img",{src:k,alt:"Logo",title:"navbar_logo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"#",title:"home_anchor_tag",children:"Home"}),Object(j.jsx)("a",{href:"#",title:"login_anchor_tag",children:"Login"}),Object(j.jsx)("a",{href:"#",title:"contact_anchor_tag",children:"Contact Us"})]})]})};var C=function(){var e=Object(c.useContext)(K);return Object(j.jsxs)("div",{className:"TeachersDashboard flex__container",children:[Object(j.jsx)(o.b,{to:"/teacher/uploadmarks",children:Object(j.jsx)("button",{className:"uploadButton",children:"Upload Marks"})}),Object(j.jsxs)("div",{className:"dashboard",children:[Object(j.jsx)("div",{className:"teacherInformation",children:Object(j.jsx)("p",{children:e.body.id})}),Object(j.jsx)("div",{className:"teachersStudentMarks",children:Object(j.jsxs)(S.a,{variant:"simple",colorScheme:"black",size:"lg",children:[Object(j.jsx)(S.f,{children:Object(j.jsxs)(S.g,{children:[Object(j.jsx)(S.e,{children:"Student ID"}),Object(j.jsx)(S.e,{children:"Student Name"}),Object(j.jsx)(S.e,{children:"Student Branch"})]})}),Object(j.jsx)(S.c,{children:e.body.map((function(e){var t=[];for(var n in e)t.push(Object(j.jsx)(S.d,{children:e[n]}));return Object(j.jsx)(S.g,{children:t.map((function(e){return e}))})}))})]})})]})]})},w=n(145),z=n(42),T=n(161),B=n(158),L=n(65),A=n(159),U=n(150),H=n(151);var P=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),o=a[0],l=a[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),u=b[0],h=b[1],m=Object(c.useState)(!1),O=Object(i.a)(m,2),g=O[0],f=O[1],v=Object(c.useState)(),_=Object(i.a)(v,2),S=_[0],y=_[1],k=Object(c.useRef)(),N=Object(c.useContext)(K),C=function(){return f(!1)};function P(){return(P=Object(x.a)(p.a.mark((function e(t){var n,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({id:N.id,password:N.password,student:t.student})},e.prev=1,e.next=4,fetch("http://localhost:5000/teacher/uploadmarks",n);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,console.log("response on uploading is: ",s.description),y({status:s.status,description:s.description}),f(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error on uploading: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"UploadMarks flex__container",children:[Object(j.jsx)(w.a,{isOpen:g,leastDestructiveRef:k,onClose:C,children:Object(j.jsx)(z.f,{children:Object(j.jsxs)(w.b,{children:[Object(j.jsx)(z.e,{fontSize:"lg",fontWeight:"bold",children:200===(null===S||void 0===S?void 0:S.status)?"Successfully!":"Error!"}),Object(j.jsx)(z.b,{children:Object(j.jsxs)(T.a,{status:200===(null===S||void 0===S?void 0:S.status)?"success":"error",children:[Object(j.jsx)(T.b,{}),200===(null===S||void 0===S?void 0:S.status)?"Marks Uploaded":"Error: ".concat(null===S||void 0===S?void 0:S.description)]})}),Object(j.jsx)(z.d,{children:Object(j.jsx)(B.a,{ref:k,onClick:C,children:"Close"})})]})})}),Object(j.jsx)("div",{className:"Form",children:Object(j.jsxs)(L.a,{width:"50%",children:[Object(j.jsxs)(A.a,{spacing:"24px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",children:"Name"}),Object(j.jsx)(H.a,{type:"text",border:"6px solid black",boxSizing:"border-box",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(j.jsxs)(A.a,{spacing:"24px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",boxSizing:"border-box",children:"ID"}),Object(j.jsx)(H.a,{type:"text",border:"6px solid black",boxSizing:"border-box",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(A.a,{spacing:"24px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",children:"Subject Marks"}),Object(j.jsx)(H.a,{type:"number",border:"6px solid black",boxSizing:"border-box",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(A.b,{spacing:"23px",marginBottom:"1rem",direction:"row",children:[Object(j.jsx)(B.a,{loadingText:"Submitting",colorScheme:"blue",fontSize:"1.5rem",onClick:function(){if(!n||!o||!u)return y({status:500,description:"Please enter student/id/marks"}),void f(!0);!function(e){P.apply(this,arguments)}({student:{name:n,id:o,marks:u}})},children:"Upload Marks"}),Object(j.jsx)(B.a,{loadingText:"Submitting",colorScheme:"red",fontSize:"1.5rem",onClick:function(){s(""),h(""),l("")},children:"Cancel"})]})]})})]})};var D=function(e){return e.match,Object(j.jsx)(o.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/teacher/uploadmarks",component:P}),Object(j.jsx)(l.a,{path:"/",component:C})]})})},E=n(6),I=[{semester:"sem1",subjects:["applied_mathematics","applied_physics","manufacturing_processes","electrical_technology","human_values_and_professional_ethics","fundamentals_of_computing","applied_chemistry"]},{semester:"sem2",subjects:["applied_mathematics","applied_physics","electronic_devices","introduction_to_programming","engineering_mechanics","communication_skills","environmental_studies"]},{semester:"sem3",subjects:["applied_mathematics","foundation_of_computer_science","switching_theory_and_logic_design","circuits_and_system","data_structure","computer_graphics_and_multimedia"]},{semester:"sem4",subjects:["applied_mathematics","computer_organization_and_architecture","theory_of_computation","database_management_systems","object_oriented_programming","communication_systems"]},{semester:"sem5",subjects:["algorithms_design_and_analysis","software_engineering","java_programming","industrial_management","digital_communication","communication_skills_for_professionals"]},{semester:"sem6",subjects:["compiler_design","operating_systems","computer_networks","web_technology","artificial_intelligence","microprocessor_and_microcontroller"]},{semester:"sem7",subjects:["information_security","software_testing_and_quality_assurance","wireless_communication"]},{semester:"sem8",subjects:["mobile_computing","machine_learning","human_values_and_professional_ethics"]}],M=["CSE","IT","ECE","ME"],F=n(152),R=n(157);var J=function(){var e,t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(),o=Object(i.a)(a,2),l=o[0],d=o[1],b=Object(c.useState)(null),u=Object(i.a)(b,2),h=u[0],m=u[1],O=Object(c.useState)(null),g=Object(i.a)(O,2),f=g[0],v=g[1],_=Object(c.useState)(null),S=Object(i.a)(_,2),y=S[0],k=S[1],N=Object(c.useState)(null),C=Object(i.a)(N,2),w=C[0],z=C[1],T=Object(c.useState)(null),P=Object(i.a)(T,2),D=P[0],J=P[1],q=Object(c.useState)([!1,!1]),G=Object(i.a)(q,2),W=G[0],Q=G[1],V=Object(c.useRef)(),X=Object(c.useRef)(),Y=[V,X],Z=[h,f,y,D,w],$=[m,v,k,z,J],ee=Object(c.useContext)(K);function te(){return(te=Object(x.a)(p.a.mark((function e(t){var n,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({id:ee.id,password:ee.password,user:t})},e.prev=1,e.next=4,fetch("http://localhost:5000/admin/adduser",n);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,console.log("response on creating account: ",s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error in creating account: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"AccountSignUp flex__container",children:Object(j.jsx)("div",{className:"Form",children:Object(j.jsxs)(L.a,{width:"50%",children:[Object(j.jsxs)(A.a,{spacing:"45px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",boxSizing:"border-box",children:"ID"}),Object(j.jsx)(H.a,{type:"text",border:"6px solid black",boxSizing:"border-box",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(j.jsxs)(A.a,{spacing:"24px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",children:"Name"}),Object(j.jsx)(H.a,{type:"text",border:"6px solid black",boxSizing:"border-box",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(j.jsxs)(A.a,{spacing:"45px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",boxSizing:"border-box",children:"User Password"}),Object(j.jsx)(H.a,{type:"text",border:"6px solid black",boxSizing:"border-box",value:w,onChange:function(e){return z(e.target.value)}})]}),Object(j.jsxs)(A.a,{spacing:"45px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",boxSizing:"border-box",children:"Semester"}),Object(j.jsx)(F.a,{placeholder:"select semester",size:"lg",border:"6px solid black",boxSizing:"border-box",onChange:function(e){d(e.target.value),k(I[e.target.value].semester)},children:I.map((function(e,t){return Object(j.jsx)("option",{value:t,children:e.semester},t)}))})]}),Object(j.jsx)(U.a,{fontSize:"1.7rem",children:"Role:"}),Object(j.jsxs)(A.b,{spacing:"23px",marginBottom:"1rem",direction:"column",padding:"1rem",children:[Object(j.jsx)(R.a,{size:"lg",isChecked:W[0],onChange:function(){r(!0),Q([!0,!1])},children:"Student"}),Object(j.jsx)(R.a,{size:"lg",isChecked:W[1],onChange:function(){r(!1),Q([!1,!0])},children:"Teacher"})]}),Object(j.jsxs)(A.b,{spacing:"23px",marginBottom:"1rem",direction:"row",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",boxSizing:"border-box",children:"Subject"}),Object(j.jsx)(F.a,{ref:V,placeholder:"Select Subject",size:"lg",border:"6px solid black",boxSizing:"border-box",isDisabled:s,onChange:function(e){return J(["subject",e.target.value])},children:null===(e=I[l])||void 0===e?void 0:e.subjects.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]}),Object(j.jsxs)(A.a,{spacing:"45px",marginBottom:"1rem",children:[Object(j.jsx)(U.a,{fontSize:"1.5rem",boxSizing:"border-box",children:"Branch"}),Object(j.jsx)(F.a,{ref:X,placeholder:"Select Branch",size:"lg",border:"6px solid black",boxSizing:"border-box",isDisabled:!s,onChange:function(e){return J(["branch",e.target.value])},children:M.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]}),Object(j.jsxs)(A.b,{spacing:"23px",marginBottom:"1rem",direction:"row",children:[Object(j.jsx)(B.a,{loadingText:"Submitting",colorScheme:"blue",fontSize:"1.5rem",onClick:function(){var e;if(Z.filter((function(e){return!e||""===e})).length)alert("Please fill all the fields");else{var t=(e={id:f,name:h},Object(E.a)(e,D[0],D[1]),Object(E.a)(e,"role",s?"student":"teacher"),Object(E.a)(e,"password",w),Object(E.a)(e,y,!0),e);!function(e){te.apply(this,arguments)}(t),console.log("userobject: ",t)}},children:"Create Account"}),Object(j.jsx)(B.a,{loadingText:"Submitting",colorScheme:"red",fontSize:"1.5rem",onClick:function(){$.map((function(e){return e("")})),Q([!1,!1]),Y.map((function(e){return e.current.options.selectedIndex=0}))},children:"Cancel"})]})]})})})},q=n(155);var G=function(e){var t=e.data;return Object(j.jsx)("div",{children:Object(j.jsxs)(S.a,{colorScheme:"black",size:"lg",children:[Object(j.jsx)(S.f,{children:Object(j.jsx)(S.g,{children:null===t||void 0===t?void 0:t.tableHeader.map((function(e,t){return Object(j.jsx)(S.e,{children:e},t)}))})}),Object(j.jsx)(S.c,{children:null===t||void 0===t?void 0:t.type.map((function(e,n){return 3===(null===t||void 0===t?void 0:t.tableHeader.length)?Object(j.jsxs)(S.g,{children:[Object(j.jsx)(S.d,{children:e.name}),Object(j.jsx)(S.d,{children:e.branch}),Object(j.jsx)(S.d,{children:e.marks})]},n):Object(j.jsxs)(S.g,{children:[Object(j.jsx)(S.d,{children:e.name}),Object(j.jsx)(S.d,{children:e.subject})]})}))})]})})};var W=function(){var e=Object(c.useRef)(null),t=Object(c.useState)("sem1"),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(["Students Name","Branch","Marks"]),l=Object(i.a)(a,2),d=l[0],b=l[1],u=Object(c.useState)(),h=Object(i.a)(u,2),m=h[0],O=h[1],g=Object(c.useContext)(K),f=["sem1","sem2","sem3","sem4","sem5","sem6","sem7","sem8"];return Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n=e.sent,console.log("before setting dataObject: ",d),"Students Name"===d[0]?O({tableHeader:d,type:n.students}):O({tableHeader:d,type:n.teachers});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return n.apply(this,arguments)}function n(){return(n=Object(x.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({id:g.id,password:g.password})},e.prev=1,console.log("params is: ",t),e.next=5,fetch("http://localhost:5000/admin/dashboard?semester=".concat(s),t);case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",Promise.resolve(c));case 12:e.prev=12,e.t0=e.catch(1),console.log("error in admin: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,d,g.id,g.password]),Object(c.useEffect)((function(){e.current.focus()}),[]),Object(j.jsxs)("div",{className:"AdminDashboard flex__container",children:[Object(j.jsx)(o.b,{to:"/accountsignup",children:Object(j.jsx)("button",{className:"uploadButton",children:"Create Account"})}),Object(j.jsxs)("div",{className:"dashboard",children:[Object(j.jsx)("div",{className:"teacher__student",children:Object(j.jsxs)(A.b,{spacing:4,direction:"column",align:"center",children:[Object(j.jsx)(B.a,{ref:e,colorScheme:"blue",variant:"outline",isFullWidth:!0,_focus:{color:"white",bg:"#265FAE"},onClick:function(){return b(["Students Name","Branch","Marks"])},children:"Students"}),Object(j.jsx)(B.a,{colorScheme:"blue",variant:"outline",isFullWidth:!0,_focus:{color:"white",bg:"#265FAE"},onClick:function(){return b(["Teachers Name","Subject"])},children:"Teachers"})]})}),Object(j.jsx)("div",{className:"data",children:Object(j.jsxs)(q.e,{variant:"enclosed",children:[Object(j.jsx)(q.b,{children:f.map((function(e,t){return Object(j.jsx)(q.a,{_selected:{color:"white",bg:"#265FAE"},onClick:function(e){r(e.target.innerHTML)},children:e},t)}))}),Object(j.jsx)(q.d,{children:f.map((function(){return Object(j.jsx)(q.c,{children:Object(j.jsx)(G,{data:m})})}))})]})})]})]})};var Q=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/accountsignup",component:J}),Object(j.jsx)(l.a,{path:"/",component:W})]})})},K=Object(c.createContext)(),V=Object(c.createContext)();var X=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(N,{}),Object(j.jsx)(K.Provider,{value:n,children:Object(j.jsxs)(l.c,{children:[!n||"Admin"!==n.route||void 0!==n.isUser&&!0!==n.isUser?0:Object(j.jsx)(l.a,{path:"/admin/dashboard",component:Q}),!n||"Teacher"!==n.route||void 0!==n.isUser&&!0!==n.isUser?0:Object(j.jsx)(l.a,{path:"/teacher/dashboard",component:D}),!n||"Student"!==n.route||void 0!==n.isUser&&!0!==n.isUser?0:Object(j.jsx)(l.a,{path:"/student/dashboard",component:y}),Object(j.jsx)(V.Provider,{value:s,children:Object(j.jsx)(l.a,{path:"/",component:_})})]})})]})})},Y=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))}),Z=n(156);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Z.a,{children:Object(j.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[133,1,2]]]);
//# sourceMappingURL=main.4bcf2093.chunk.js.map