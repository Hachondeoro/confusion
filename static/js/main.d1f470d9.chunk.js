(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{110:function(e,a,t){e.exports=t(186)},118:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),o=t.n(l),s=(t(115),t(116),t(117),t(118),t(16)),c=t(17),m=t(19),i=t(20),u=t(187),d=t(188),h=t(189),E=t(190),f=t(191),p=t(192),g=t(7),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},v="http://localhost:3001/";function N(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(E.a,null,a.name))))}var y=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(N,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},w=t(21),O=t(193),k=t(194),M=t(195),C=t(196),L=t(6),S=function(e){return e&&e.length},x=function(e){return function(a){return!a||a.length<=e}},j=function(e){return function(a){return a&&a.length>=e}},F=function(e){return!isNaN(Number(e))},D=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},A=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(L.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(M.a,{md:10},r.a.createElement(L.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:S,minLength:j(3),maxLength:x(15)}}),r.a.createElement(L.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(M.a,{md:10},r.a.createElement(L.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:S,minLength:j(3),maxLength:x(15)}}),r.a.createElement(L.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(M.a,{md:10},r.a.createElement(L.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:S,minLength:j(3),maxLength:x(15),isNumber:F}}),r.a.createElement(L.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(M.a,{md:10},r.a.createElement(L.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:S,validEmail:D}}),r.a.createElement(L.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(k.a,{check:!0},r.a.createElement(L.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null," May we contact you?")))),r.a.createElement(M.a,{md:{size:3,offset:1}},r.a.createElement(L.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(M.a,{md:10},r.a.createElement(L.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{md:{size:10,offset:2}},r.a.createElement(C.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),I=t(197),T=t(198),_=t(199);var P=function(e){function a(e){var a=e.item;return r.a.createElement(I.a,{className:"p-3"},r.a.createElement(I.a,{className:"w-25"},r.a.createElement("img",{className:"pr-4 pt-1 w-100",src:a.image,alt:a.name})),r.a.createElement(I.a,{body:!0},r.a.createElement(I.a,{heading:!0},r.a.createElement("h2",null,a.name)),a.designation,r.a.createElement("br",null),r.a.createElement("br",null),a.description))}var t=e.leaders.map((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(a,{item:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(T.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(_.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(_.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(I.a,{list:!0},t))))},R=t(200),H=t(214),q=t(201),Y=t(202),B=t(39);function V(e){var a=e.dish;return null!=a?r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement(B.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(_.a,null,r.a.createElement(E.a,null,r.a.createElement("p",{className:"font-weight-bold text-uppercase"},a.category)," ",a.name),r.a.createElement(R.a,null,a.description))))):r.a.createElement("div",null)}var W=function(e){return e&&e.length},G=function(e){return function(a){return!a||a.length<=e}},z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1,isDropdownOpen:!1},n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.toggleDropdown=n.toggleDropdown.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"toggleDropdown",value:function(){this.setState({isDropdownOpen:!this.state.isDropdownOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(C.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil"})," Submit Comment"),r.a.createElement(H.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(q.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(Y.a,null,r.a.createElement(L.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"rating",md:2},"Rating"),r.a.createElement(M.a,{md:12},r.a.createElement(L.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"author",md:2},"Your Name"),r.a.createElement(M.a,{md:12},r.a.createElement(L.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:W,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:G(15)}}),r.a.createElement(L.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{htmlFor:"comment",md:2},"Comment"),r.a.createElement(M.a,{md:12},r.a.createElement(L.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"12",className:"form-control"}))),r.a.createElement(C.a,{type:"submit",value:"submit",color:"primary"},"Submit")))))}}]),t}(n.Component);function U(e){var a=e.dish,t=e.postComment,n=e.dishId;if(null!=a){var l=a.map((function(e){return r.a.createElement(B.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"--",e.author,", ",new Intl.DateTimeFormat("en-US",{weekday:"short",year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date)))))}));return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h2",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(B.Stagger,{in:!0},l)),r.a.createElement(z,{dishId:n,postComment:t}))}return r.a.createElement("div",null)}var K=function(e){return console.log("DishDetail Component render invoked"),e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(V,{dish:e.dish}),r.a.createElement(U,{dish:e.comments,postComment:e.postComment,dishId:e.dish.id}))):void 0},J=t(203),Z=t(204),$=t(205),Q=t(206),X=t(207),ee=t(208),ae=t(209),te=t(210),ne=t(211),re=t(212),le=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(Z.a,{onClick:this.toggleNav}),r.a.createElement($.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(Q.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(X.a,{navbar:!0},r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About us")),r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(ee.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact us"))),r.a.createElement(X.a,{className:"ml-auto",navbar:!0},r.a.createElement(ee.a,null,r.a.createElement(C.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}),"Login")))))),r.a.createElement(ae.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from you"))))),r.a.createElement(H.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(q.a,{toggle:this.toggleModal},"Login"),r.a.createElement(Y.a,null,r.a.createElement(te.a,{onSubmit:this.handleLogin},r.a.createElement(ne.a,null,r.a.createElement(k.a,{htmlFor:"username"},"Username"),r.a.createElement(re.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(ne.a,null,r.a.createElement(k.a,{htmlFor:"password"},"Password"),r.a.createElement(re.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(ne.a,{check:!0},r.a.createElement(k.a,{check:!0},r.a.createElement(re.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(C.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var oe=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-block btn-social btn-facebook",href:"http://facebook.com"},">",r.a.createElement("span",{className:"fa fa-facebook"})," Sign in with Facebook"),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"})),r.a.createElement("i",{className:"fa fa-facebook fa-3x"}),r.a.createElement("i",{className:"fa fa-google fa-3x"}),r.a.createElement("i",{className:"fa fa-twitter fa-3x"}),r.a.createElement("i",{className:"fa fa-linkedin fa-3x"}),r.a.createElement("i",{className:"fa fa-youtube fa-3x"})))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 Ristorante Con Fusion")))))},se=t(213);function ce(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(B.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:v+a.image,alt:a.name}),r.a.createElement(_.a,null,r.a.createElement(E.a,null,a.name),a.designation?r.a.createElement(se.a,null,a.designation):null,r.a.createElement(R.a,null,a.description))))}var me=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ce,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ce,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ce,{item:e.leader}))))},ie=t(8),ue=t(28),de=function(){return{type:"DISHES_LOADING"}},he=function(e){return{type:"DISHES_FAILED",payload:e}},Ee=function(e){return{type:"ADD_DISHES",payload:e}},fe=function(e){return{type:"COMMENTS_FAILED",payload:e}},pe=function(e){return{type:"ADD_COMMENTS",payload:e}},ge=function(){return{type:"PROMOS_LOADING"}},be=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOS",payload:e}},Ne=t(62),ye=t(63),we=t.n(ye),Oe=t(75),ke=t.n(Oe),Me={menu:{overflow:"hidden",border:"2px solid #ddd",width:300,marginTop:20},selection:{padding:10,margin:0,borderBottom:"1px solid #ededed"},button:{justifyContent:"center",alignItems:"center",display:"flex",cursor:"pointer",width:200,height:45,border:"none",borderRadius:4,backgroundColor:"#ffc107"}},Ce=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).animatedValue=new we.a.Value(0),e.animate=function(){e.animatedValue.setValue(0),we.a.timing(e.animatedValue,{toValue:1,duration:1e3,easing:ke.a.elastic(1)}).start()},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.animatedValue.interpolate({inputRange:[0,1],outputRange:[-120,0]});return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:Me.button,onClick:this.animate},"Animate"),r.a.createElement(we.a.div,{style:Object.assign({},Me.box,{opacity:this.animatedValue,marginLeft:e})},r.a.createElement("p",null,"Thanks for your submission!")))}}]),t}(n.Component),Le=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(Ne.TransitionGroup,null,r.a.createElement(Ne.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ie.d,null,r.a.createElement(ie.b,{path:"/home",component:function(){return r.a.createElement("div",null,r.a.createElement(me,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.filter((function(e){return e.featured}))[0]}),r.a.createElement(Ce,null))}}),r.a.createElement(ie.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(ie.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(K,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,ErrMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ie.b,{exact:!0,path:"/aboutus",component:function(a){a.person;return r.a.createElement(P,{leaders:e.props.leaders})}}),r.a.createElement(ie.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(A,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(ie.a,{to:"/home"})))),r.a.createElement(oe,null))}}]),t}(n.Component),Se=Object(ie.g)(Object(ue.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(v+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+":"+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments: ",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(de(!0)),fetch(v+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+":"+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ee(a))})).catch((function(a){return e(he(a.message))}))}))},resetFeedbackForm:function(){e(L.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(v+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+":"+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(fe(a.message))}))}))},fetchPromos:function(){e((function(e){return e(ge(!0)),fetch(v+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+":"+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(be(a.message))}))}))}}}))(Le)),xe=t(48),je=t.n(xe),Fe=function(){return r.a.createElement("div",{className:je.a.Container},r.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:je.a.Video},r.a.createElement("source",{src:"http://mirrors.standaloneinstaller.com/video-sample/star_trails.mkv",type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement("div",{className:je.a.Content},r.a.createElement("div",{className:je.a.SubContent},r.a.createElement("h1",null,"My first background"),r.a.createElement("button",{type:"button",className:"btn btn-outline-dark"},"Background"),r.a.createElement("img",{src:"https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png",alt:"profile"}))))},De=(t(185),t(12)),Ae=t(29),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(De.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(De.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(De.a)({},e,{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},Te=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,a=arguments.length>1?arguments[1]:void 0;return a.type,e},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(De.a)({},e,{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(De.a)({},e,{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(De.a)({},e,{comments:e.comments.concat(t)});default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(De.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(De.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(De.a)({},e,{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},He=t(108),qe=t(109),Ye=t.n(qe),Be={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ve=Object(Ae.createStore)(Object(Ae.combineReducers)(Object(De.a)({dishes:Ie,comments:Pe,promotions:Re,leaders:_e},Object(L.createForms)({feedback:Be}))),Object(Ae.applyMiddleware)(He.a,Ye.a)),We=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.Provider,{store:Ve},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Se,null),r.a.createElement(Fe,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports={Container:"video_Container__Yc4Pc",Video:"video_Video__3ON_Q",Content:"video_Content__2gx64",SubContent:"video_SubContent__14wkt"}}},[[110,1,2]]]);
//# sourceMappingURL=main.d1f470d9.chunk.js.map