(this["webpackJsonpsong-rate-front"]=this["webpackJsonpsong-rate-front"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(31),a=n.n(c),s=(n(105),n(106),n(29)),i=n.n(s),o=n(48),u=n(72),l=(n(108),n(148)),j=n(151),p=n(152),d=n(28),b=(n(109),n(149)),x=n(45),h=n.n(x),f=n(9),O=function(e){var t=e.title,n=e.setTopSongs,r=function(){var e=Object(o.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/rating",{title:t,action:1});case 3:r=e.sent,n(Object.entries(r.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/rating",{title:t,action:0});case 3:r=e.sent,n(Object.entries(r.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"song",children:[t,Object(f.jsxs)("div",{className:"ratingButtons",children:[Object(f.jsx)(b.a,{icon:!0,basic:!0,onClick:r,children:Object(f.jsx)(d.a,{name:"thumbs up outline",style:{color:"green"}})}),Object(f.jsx)(b.a,{icon:!0,basic:!0,onClick:c,children:Object(f.jsx)(d.a,{name:"thumbs down outline",style:{color:"red"}})})]})]})},v=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(u.a)(a,2),b=s[0],x=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/songs");case 3:return t=e.sent,e.next=6,h.a.get("/api/rating");case 6:n=e.sent,c(t.data),x(Object.entries(n.data).sort((function(e,t){return t[1]-e[1]}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error loading data: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"songList",children:Object(f.jsx)(l.a,{divided:!0,relaxed:!0,verticalAlign:"middle",children:n.map((function(e){return Object(f.jsx)(l.a.Item,{children:Object(f.jsx)(O,{title:e,topSongs:b,setTopSongs:x})})}))})}),Object(f.jsx)("div",{className:"topSongs",children:Object(f.jsxs)(j.a,{compact:!0,style:{height:"1px"},children:[Object(f.jsx)("div",{align:"center",children:Object(f.jsx)(p.a,{as:"h2",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0442\u043e\u043f 10"})}),Object(f.jsx)(l.a,{relaxed:!0,divided:!0,children:b.sort((function(e,t){return t[1]-e[1]})).slice(0,10).map((function(e){return Object(f.jsxs)(l.a.Item,{children:[e[0]," : ",e[1]," ",Object(f.jsx)(d.a,{name:"thumbs up outline",style:{marginLeft:"5px"}})]})}))})]})})]})};a.a.render(Object(f.jsx)(v,{}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.99e778d7.chunk.js.map