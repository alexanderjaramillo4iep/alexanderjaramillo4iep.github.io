(this["webpackJsonpmy-theme"]=this["webpackJsonpmy-theme"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,function(e,t,n){e.exports=n.p+"static/media/lorem-ipsum.db89bb5c.txt"},,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(18),n(4),n(19),n(8)),l=n(9),u=n(12),s=n(11),m=n(3),p=function(e){var t=e.className||"";return r.a.createElement("div",{className:[].concat(["content"],Object(m.a)(t.split(" "))).join(" ")},e.children)},f=n(5),h=(n(20),function(e){var t=e.className||"";return r.a.createElement("div",{className:[].concat(["btn"],Object(m.a)(t.split(" "))).join(" "),onClick:e.onClick},r.a.createElement("button",null,e.children))}),d=(n(21),function(e){return r.a.createElement("div",{className:"group"},e.group.map((function(t,n){return r.a.createElement(h,{className:[e.prefix,t].join("-"),key:n,onClick:e.handleBtnClick},t)})))}),v=function(e){var t=function(e){return e?"btn-outline":"btn"},n=Object(a.useState)(!!e.outline),c=Object(f.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(t(o)),u=Object(f.a)(l,2),s=u[0],m=u[1],p=function(e){var n=!o;i(n),m(t(n))};return r.a.createElement("div",{className:"groups"},[["primary","secondary","tertiary"],["success","info","warning","danger"],["light","dark"]].map((function(e,t){return r.a.createElement(d,{group:e,handleBtnClick:p,key:t,prefix:s})})))},E=n(10),b=n.n(E),g={get:function(){return new Promise((function(e,t){fetch(b.a).then((function(e){return e.text()})).then(e).catch(t)}))}},k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loremIpsum:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.get().then((function(t){e.updateLoremIpsum(t)}))}},{key:"updateLoremIpsum",value:function(e){this.setState({loremIpsum:e})}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement("h1",null,"Lorem ipsum"),r.a.createElement("h2",null,"Dolor sit amet"),r.a.createElement("h3",null,"Consectetur adipiscing elit"),r.a.createElement("h4",null,"Sed do eiusmod"),r.a.createElement("p",null,this.state.loremIpsum),r.a.createElement(v,null),r.a.createElement(v,{outline:!0}))}}]),n}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.12752688.chunk.js.map