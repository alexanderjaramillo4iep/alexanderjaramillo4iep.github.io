(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"f+ep":function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=function(){return function(){}}(),r=t("pMnS"),u=t("A7o+"),i=t("ZYCi"),a=t("Ip0R"),g=function(){function n(n,l){this.translate=n,this.router=l,this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var t=this.translate.getBrowserLang();this.translate.use(t.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?t:"en")}return n.prototype.ngOnInit=function(){},n.prototype.onLoggedin=function(){localStorage.setItem("isLoggedin","true")},n}(),c=o["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.login-page[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:var(--primary);text-align:center;color:var(--white);padding:3em}.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%]{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none;border-bottom:2px solid var(--light);color:var(--white);border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus{border-bottom:2px solid var(--white);box-shadow:none}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{border-radius:50px;color:var(--white);background:var(--primary-darken-10);border:2px solid var(--white);font-size:18px;line-height:40px;padding:0 25px}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited{color:var(--light);border:2px solid var(--light);outline:0}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--light)}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{padding:8px 0}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:40px 0}.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{border-radius:50%;border:2px solid var(--white)}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function d(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,24,"div",[["class","login-page"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,23,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,22,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),o["\u0275eld"](3,0,null,null,0,"img",[["class","user-avatar"],["src","assets/images/logo.png"],["width","150px"]],null,null,null,null,null)),(n()(),o["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Software de Autenticaci\xf3n de Asistencia Sistematizada"])),(n()(),o["\u0275eld"](6,0,null,null,18,"form",[["role","form"]],null,null,null,null,null)),(n()(),o["\u0275eld"](7,0,null,null,6,"div",[["class","form-content"]],null,null,null,null,null)),(n()(),o["\u0275eld"](8,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o["\u0275eld"](9,0,null,null,1,"input",[["class","form-control input-underline input-lg"],["id",""],["ng-model","name"],["type","text"]],[[8,"placeholder",0]],null,null,null,null)),o["\u0275pid"](131072,u.i,[u.j,o.ChangeDetectorRef]),(n()(),o["\u0275eld"](11,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o["\u0275eld"](12,0,null,null,1,"input",[["class","form-control input-underline input-lg"],["id",""],["type","password"]],[[8,"placeholder",0]],null,null,null,null)),o["\u0275pid"](131072,u.i,[u.j,o.ChangeDetectorRef]),(n()(),o["\u0275eld"](14,0,null,null,4,"a",[["class","btn rounded-btn"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0,r=n.component;return"click"===l&&(e=!1!==o["\u0275nov"](n,15).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),"click"===l&&(e=!1!==r.onLoggedin()&&e),e},null,null)),o["\u0275did"](15,671744,null,0,i.n,[i.l,i.a,a.i],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](16,1),(n()(),o["\u0275ted"](17,null,["",""])),o["\u0275pid"](131072,u.i,[u.j,o.ChangeDetectorRef]),(n()(),o["\u0275ted"](-1,null,[" \xa0 "])),(n()(),o["\u0275eld"](20,0,null,null,4,"a",[["class","btn rounded-btn"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o["\u0275nov"](n,21).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),o["\u0275did"](21,671744,null,0,i.n,[i.l,i.a,a.i],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](22,1),(n()(),o["\u0275ted"](23,null,["",""])),o["\u0275pid"](131072,u.i,[u.j,o.ChangeDetectorRef])],function(n,l){var t=n(l,16,0,"/dashboard");n(l,15,0,t);var o=n(l,22,0,"/signup");n(l,21,0,o)},function(n,l){n(l,0,0,void 0),n(l,9,0,o["\u0275inlineInterpolate"](1,"",o["\u0275unv"](l,9,0,o["\u0275nov"](l,10).transform("Email")),"")),n(l,12,0,o["\u0275inlineInterpolate"](1,"",o["\u0275unv"](l,12,0,o["\u0275nov"](l,13).transform("Password")),"")),n(l,14,0,o["\u0275nov"](l,15).target,o["\u0275nov"](l,15).href),n(l,17,0,o["\u0275unv"](l,17,0,o["\u0275nov"](l,18).transform("Log in"))),n(l,20,0,o["\u0275nov"](l,21).target,o["\u0275nov"](l,21).href),n(l,23,0,o["\u0275unv"](l,23,0,o["\u0275nov"](l,24).transform("Register")))})}function p(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,d,c)),o["\u0275did"](1,114688,null,0,g,[u.j,i.l],null,null)],function(n,l){n(l,1,0)},null)}var s=o["\u0275ccf"]("app-login",g,p,{},{},[]),f=function(){return function(){}}();t.d(l,"LoginModuleNgFactory",function(){return m});var m=o["\u0275cmf"](e,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,s]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,a.n,a.m,[o.LOCALE_ID,[2,a.z]]),o["\u0275mpd"](1073742336,a.b,a.b,[]),o["\u0275mpd"](1073742336,u.g,u.g,[]),o["\u0275mpd"](1073742336,i.o,i.o,[[2,i.u],[2,i.l]]),o["\u0275mpd"](1073742336,f,f,[]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:g}]]},[])])})}}]);