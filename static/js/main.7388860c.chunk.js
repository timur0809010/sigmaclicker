(this["webpackJsonptap-game"]=this["webpackJsonptap-game"]||[]).push([[0],{12:function(A,e,t){},13:function(A,e,t){},15:function(A,e,t){"use strict";t.r(e);var f=t(1),o=t.n(f),n=t(3),r=t.n(n),i=(t(12),t(13),t.p+"static/media/energy-icon.4f29c6b7.png"),a=t(0);var c=function(){const[A,e]=Object(f.useState)(0),[t,o]=Object(f.useState)(5),[n,r]=Object(f.useState)(10),[c,P]=Object(f.useState)(1),[s,j]=Object(f.useState)(100),[K,v]=Object(f.useState)(100),[b,d]=Object(f.useState)(5),[F,l]=Object(f.useState)(!1),[R,U]=Object(f.useState)(null),[p,x]=Object(f.useState)(!1);return Object(f.useEffect)((()=>{const A=setInterval((()=>{s<K&&j((A=>Math.min(A+b,K)))}),1e3);return()=>clearInterval(A)}),[s,b,K]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"\u041a\u043b\u0438\u043a\u0430\u0439 \u0441\u0438\u0433\u043c\u0443 - \u043f\u043e\u043b\u0443\u0447\u0430\u0439 TON"}),Object(a.jsx)("div",{className:"score-board",children:Object(a.jsxs)("p",{children:["\u0421\u0438\u0433\u043c\u0430-\u043a\u043e\u0438\u043d\u043e\u0432: ",Object(a.jsx)("span",{children:A})]})}),Object(a.jsxs)("div",{className:"energy-board",children:[Object(a.jsx)("img",{src:i,alt:"Energy",className:"energy-icon"}),Object(a.jsxs)("p",{children:["\u042d\u043d\u0435\u0440\u0433\u0438\u044f: ",Object(a.jsx)("span",{children:s}),"/",K]})]}),Object(a.jsxs)("div",{className:"tabs",children:[Object(a.jsx)("button",{className:"tab-button",onClick:()=>setActiveTab("click"),children:"\u041a\u043b\u0438\u043a\u0430\u0442\u044c"}),Object(a.jsx)("button",{className:"tab-button",onClick:()=>setActiveTab("upgrade"),children:"\u041f\u0440\u043e\u043a\u0430\u0447\u043a\u0438"})]}),"click"===activeTab&&Object(a.jsx)("div",{className:"click-tab",children:Object(a.jsxs)("div",{className:"image-container",onClick:f=>{if(s>0&&!F){e(A+t),j(s-t);const o=f.clientX,n=f.clientY;U({x:o,y:n}),x(!0),setTimeout((()=>x(!1)),200),s-t<=0&&(l(!0),setTimeout((()=>l(!1)),3e3))}},children:[Object(a.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"\u041a\u043b\u0438\u043a\u043d\u0438 \u043c\u0435\u043d\u044f!",className:"clickable-image"}),p&&R&&Object(a.jsxs)("div",{className:"coin-popup",style:{left:R.x-30,top:R.y-50,position:"absolute",color:"white",fontSize:"20px",fontWeight:"bold",pointerEvents:"none",opacity:p?1:0,transition:"opacity 0.2s"},children:["+",t]})]})}),"upgrade"===activeTab&&Object(a.jsxs)("div",{className:"upgrade-tab",children:[Object(a.jsxs)("div",{className:"upgrade-container",children:[Object(a.jsxs)("button",{onClick:()=>{A>=n?(e(A-n),o(t+1),P(c+1),r(Math.floor(2*n))):alert("\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0438\u0433\u043c\u0430-\u043a\u043e\u0438\u043d\u043e\u0432 \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f!")},children:["\u041f\u0440\u043e\u043a\u0430\u0447\u0430\u0442\u044c (\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",n," \u043c\u043e\u043d\u0435\u0442) - \u0421\u0435\u0439\u0447\u0430\u0441: ",t," \u043c\u043e\u043d\u0435\u0442 \u0437\u0430 \u043a\u043b\u0438\u043a"]}),Object(a.jsxs)("p",{children:["\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u043a\u0430\u0447\u043a\u0438: ",c]})]}),Object(a.jsxs)("div",{className:"energy-upgrades",children:[Object(a.jsx)("button",{onClick:()=>{A>=50?(e(A-50),v(K+50)):alert("\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0438\u0433\u043c\u0430-\u043a\u043e\u0438\u043d\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u043a\u0430\u0447\u043a\u0438 \u0451\u043c\u043a\u043e\u0441\u0442\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438!")},children:"\u041f\u0440\u043e\u043a\u0430\u0447\u0430\u0442\u044c \u0451\u043c\u043a\u043e\u0441\u0442\u044c \u044d\u043d\u0435\u0440\u0433\u0438\u0438 (50 \u043c\u043e\u043d\u0435\u0442)"}),Object(a.jsx)("button",{onClick:()=>{A>=100?(e(A-100),d(b+5)):alert("\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441\u0438\u0433\u043c\u0430-\u043a\u043e\u0438\u043d\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u043a\u0430\u0447\u043a\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u043d\u0435\u0440\u0433\u0438\u0438!")},children:"\u041f\u0440\u043e\u043a\u0430\u0447\u0430\u0442\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u043d\u0435\u0440\u0433\u0438\u0438 (100 \u043c\u043e\u043d\u0435\u0442)"})]})]})]})};var P=A=>{A&&A instanceof Function&&t.e(3).then(t.bind(null,16)).then((e=>{let{getCLS:t,getFID:f,getFCP:o,getLCP:n,getTTFB:r}=e;t(A),f(A),o(A),n(A),r(A)}))};r.a.createRoot(document.getElementById("root")).render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(c,{})})),P()}},[[15,1,2]]]);
//# sourceMappingURL=main.7388860c.chunk.js.map