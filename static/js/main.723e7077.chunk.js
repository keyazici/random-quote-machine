(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(75),c=a(77),s=a(74),r=a(73),i=a(0),o=a(13),l=a.n(o),u=a(27),j=a.n(u),b=a(36),x=a(29),d=a(35),h=a(70),f=a(71),m=a(72),p=a(78),O=a(4),w=["statusCode","statusMessage"],g=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),a=t[0],n=t[1];function s(){return r.apply(this,arguments)}function r(){return(r=Object(x.a)(j.a.mark((function e(){var t,a,c,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.quotable.io/random");case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,c=a.statusCode,s=a.statusMessage,r=Object(b.a)(a,w),t.ok){e.next=12;break}throw new Error("".concat(c," ").concat(s));case 12:n(r),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),n({content:"Opps... Something went wrong"});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){s()}),[]),a?Object(O.jsxs)(h.a,{component:f.a,className:"quote-box",id:"quote-box",container:!0,spacing:4,direction:"column",justifyContent:"space-around",alignItems:"flex-end",children:[Object(O.jsx)(f.a,{item:!0,xs:12,children:Object(O.jsxs)(m.a,{className:"text",id:"text",variant:"subtitle1",children:[Object(O.jsx)("i",{class:"fas fa-quote-left fa-xs"})," ",a.content,Object(O.jsx)("i",{class:"fas fa-quote-right fa-xs"})]})}),Object(O.jsx)(f.a,{item:!0,xs:!0,children:Object(O.jsx)(m.a,{className:"author",id:"author",variant:"body1",children:Object(O.jsxs)(c.a,{fontStyle:"italic",textAlign:"right",m:1,children:["- ",a.author]})})}),Object(O.jsxs)(f.a,{container:!0,spacing:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(O.jsx)(f.a,{item:!0,xs:3,children:Object(O.jsx)("a",{href:"https://twitter.com/intent/tweet?text="+encodeURIComponent(a.content+"\n -"+a.author),id:"tweet-quote",target:"_blank",className:"twit",children:Object(O.jsx)("i",{className:"fab fa-twitter"})})}),Object(O.jsx)(f.a,{item:!0,xs:3,children:Object(O.jsx)(p.a,{className:"newquote",id:"new-quote",variant:"outlined",size:"small",onClick:s,fullWidth:!0,style:{textTransform:"none"},children:"New Quote"})})]})]}):null},y=(a(55),a(25)),k=a(34),q=Object(k.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:y.a.A400},background:{default:"#fff"}}});l.a.render(Object(O.jsxs)(r.a,{theme:q,children:[Object(O.jsx)(s.a,{}),Object(O.jsx)(n.a,{maxWidth:"sm",children:Object(O.jsx)(c.a,{my:4,children:Object(O.jsx)(g,{})})})]}),document.querySelector("#root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.723e7077.chunk.js.map