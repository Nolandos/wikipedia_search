(this.webpackJsonpwikipedia_search=this.webpackJsonpwikipedia_search||[]).push([[0],{107:function(e,n,t){},117:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(20),i=t.n(c),o=(t(65),t(16)),l=t(21),d=t(33),s=t(17),u={en:{translation:t(49)},pl:{translation:t(50)}};d.a.use(s.e).init({lng:"en",resources:u});var p,b,j,h,g,O,v,f,x,m,k,y,w=d.a,S=(t(71),t(3)),H=t(14),C=t.n(H),E=t(25),P=t(27),R=t(118),_=t(4),I=t(5),L=t(6),A=t(26),N="#FFFFFF",B="transparent",F="#000000",W="#801515",D="#787A91",T="#141E61",K="#5D8233",U=I.a.input(p||(p=Object(_.a)(["\n    border: 1px solid ",";\n    outline: none;\n    padding: 10px 15px;\n    width: calc(100% - 30px);\n"])),F),q=I.a.p(b||(b=Object(_.a)(["\n    margin: 5px 0 0 0;\n    padding: 0;\n    color: ",";\n"])),W),z=I.a.div(j||(j=Object(_.a)(["\n    margin: 15px 0;\n    max-width: 400px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n"]))),J=t(1),M=["id","name","type","onChangeHandler","onFocusHandler","onKeyDownHandler","onKeyUpHandler","value","placeholder","error"],Z=function(e){var n=e.id,t=e.name,a=e.type,r=e.onChangeHandler,c=e.onFocusHandler,i=e.onKeyDownHandler,o=e.onKeyUpHandler,l=e.value,d=e.placeholder,s=e.error,u=Object(A.a)(e,M);return Object(J.jsxs)(z,Object(L.a)(Object(L.a)({},u),{},{children:[Object(J.jsx)(U,{id:n,name:t,type:a,onChange:function(e){return r&&r(e.target.value)},onKeyDown:i,onKeyUp:o,onFocus:c,placeholder:d,value:l}),s&&Object(J.jsx)(q,{children:s})]}))},X=I.a.div(h||(h=Object(_.a)(["\n    margin: 15px 0;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    min-height: 400px;\n\n    .searchmatch {\n        background-color: yellow;\n    }\n"]))),V=Object(I.a)(Z)(g||(g=Object(_.a)(["\n    margin: 15px;\n    height: 50px;\n"]))),G=I.a.div(O||(O=Object(_.a)([""]))),Q=I.a.ul(v||(v=Object(_.a)(["\n    padding: 25px;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Y=I.a.div(f||(f=Object(_.a)([""]))),$=I.a.button(x||(x=Object(_.a)(["\n    width: 40px;\n    height: 40px;\n    margin: 15px;\n    border-radius: 50%;\n    cursor: pointer;\n    border: none;\n    background-color: ",";\n\n    > img {\n        width: 100%;\n        height: auto;\n    }\n"])),B),ee=I.a.div(m||(m=Object(_.a)(["\n    margin-top: 25px;\n    position: relative;\n"]))),ne="primary",te="secondary",ae="action",re=t(15),ce=ne,ie=te,oe=ae,le=(k={},Object(re.a)(k,ce,{background:T,border:"1px solid ".concat(T),borderHover:"1px solid ".concat(T),backgroundHover:N,borderColorHover:T,colorHover:T,color:N}),Object(re.a)(k,ie,{background:N,border:"1px solid ".concat(T),borderColor:T,backgroundHover:T,borderColorHover:B,colorHover:N,color:T}),Object(re.a)(k,oe,{background:K,border:"1px solid ".concat(K),borderHover:"1px solid ".concat(K),backgroundHover:N,borderColorHover:K,colorHover:K,color:N}),k),de=function(e,n){return e&&le[e][n]},se=I.a.button(y||(y=Object(_.a)(["\n    align-items: center;\n    background-color: ",";\n    border: ",";\n    color: ",";\n    cursor: pointer;\n    display: inline-flex;\n    font-family: inherit;\n    font-size: 16px;\n    font-weight: 600;\n    justify-content: space-between;\n    height: 50px;\n    margin: 15px;\n\n    outline: 0;\n    transition: background-color 0.2s;\n    padding-bottom: 3px;\n    opacity: ",";\n    border-radius: 4px;\n\n    &:hover:not(:disabled):not(.button--disabled):not(:active) {\n        background-color: ",";\n        border-color: ",";\n        color: ",";\n        border: ",";\n    }\n\n    ","\n"])),(function(e){var n=e.variant;return de(n,"background")}),(function(e){var n=e.variant;return de(n,"border")}),(function(e){var n=e.variant;return de(n,"color")}),(function(e){return e.isLoading?.5:1}),(function(e){var n=e.variant;return de(n,"backgroundHover")}),(function(e){var n=e.variant;return de(n,"borderColorHover")}),(function(e){var n=e.variant;return de(n,"colorHover")}),(function(e){var n=e.variant;return de(n,"borderHover")}),(function(e){var n=e.disabled;return n&&function(e){return e?"\n      &:disabled,\n      &.button--disabled {\n        border: none;\n        background-color: ".concat(D,";\n        color: ").concat(N,";\n        cursor: not-allowed;\n      }\n    "):""}(n)})),ue=["variant","children","isLoading","disabled","onClickHandler","customStyle"],pe=function(e){var n=e.variant,t=e.children,a=e.isLoading,r=e.disabled,c=e.onClickHandler,i=e.customStyle,o=Object(A.a)(e,ue);return Object(J.jsx)(se,Object(L.a)(Object(L.a)({variant:n,disabled:r,isLoading:a,onClick:c,style:i},o),{},{children:t}))};pe.defaultProps={variant:ne,isLoading:!1,disabled:!1};var be,je=pe,he=(t(75),t(56)),ge=function(e){var n=e.pageId,t=e.title,a=e.snippet;return Object(J.jsxs)("li",{className:"wikipedia-search-engine-item",children:[Object(J.jsx)("h2",{className:"wikipedia-search-engine-item__title",children:t}),Object(J.jsx)("p",{className:"wikipedia-search-engine-item__snippet",children:Object(he.a)(a)})]},n)},Oe=t.p+"static/media/poland.6b8b26e8.png",ve=t.p+"static/media/england.c18569cd.png",fe=function(e){var n=e.lang,t=e.flagSrc;return Object(J.jsx)($,{onClick:function(){return w.changeLanguage(n)},children:Object(J.jsx)("img",{src:t,alt:n})})},xe="APP_START",me="APP_SUCCESS",ke="APP_FAIL",ye="APP_WIKIPEDIA_DATA",we=t(57),Se=t.n(we).a.create({baseURL:"https://en.wikipedia.org/w/api.php"}),He=function(e){return{payload:e,type:ke}},Ce=function(e,n){return function(){var t=Object(E.a)(C.a.mark((function t(a){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:xe}),t.prev=1,t.next=4,Se.get("",{params:{action:"query",list:"search",format:"json",origin:"*",srsearch:e,srlimit:n}});case 4:r=t.sent,a({payload:r.data.query.search,type:ye}),a({type:me}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(He(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},Ee=(t(107),function(){return Object(J.jsxs)("div",{className:"ball-loader",children:[Object(J.jsx)("div",{className:"ball-loader-ball ball1"}),Object(J.jsx)("div",{className:"ball-loader-ball ball2"}),Object(J.jsx)("div",{className:"ball-loader-ball ball3"})]})}),Pe=function(){var e=Object(o.b)(),n=Object(R.a)().t,t=Object(S.f)(),r=(Object(S.g)(),Object(o.c)((function(e){return e.app.wikipediaData}))),c=Object(o.c)((function(e){return e.app.loading})),i=Object(a.useState)(""),l=Object(P.a)(i,2),d=l[0],s=l[1],u=Object(a.useState)(""),p=Object(P.a)(u,2),b=p[0],j=p[1],h=Object(a.useState)(null),g=Object(P.a)(h,2),O=g[0],v=g[1],f=c||""===b.trim()||""===d.trim(),x=function(){var n=Object(E.a)(C.a.mark((function n(a){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.trim().length>0&&(t.push("?search=".concat(a)),e(Ce(a,10)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){var n=new URLSearchParams(t.location.search).get("search");n&&(s(n),e(Ce(n,10)))}),[]),Object(J.jsxs)(X,{children:[Object(J.jsxs)(Y,{children:[Object(J.jsx)(fe,{flagSrc:Oe,lang:"pl"}),Object(J.jsx)(fe,{flagSrc:ve,lang:"en"})]}),Object(J.jsxs)(G,{children:[Object(J.jsx)(V,{value:d,onChangeHandler:function(e){!function(e){s(e)}(e),v(null),clearTimeout(O),function(e){v(setTimeout((function(){return x(e)}),500))}(e)},placeholder:n("WikipediaSearchEngine.SearchInputPlaceholder"),onKeyDownHandler:function(e){"Enter"===e.key&&x(d)}}),Object(J.jsx)(V,{onChangeHandler:function(e){return j(e)},placeholder:n("WikipediaSearchEngine.ReplaceWithInputPlaceholder")}),Object(J.jsx)(je,{onClickHandler:function(){x(d)},children:n("WikipediaSearchEngine.SearchButton")}),Object(J.jsx)(je,{disabled:f,variant:"secondary",onClickHandler:function(){var e=document.getElementById("wikipedia-results-container"),n=null===e||void 0===e?void 0:e.querySelector(".searchmatch");n&&(n.innerHTML=b,n.classList.remove("searchmatch"))},children:n("WikipediaSearchEngine.ReplaceButton")}),Object(J.jsx)(je,{disabled:f,variant:"action",onClickHandler:function(){var e=document.getElementById("wikipedia-results-container"),n=null===e||void 0===e?void 0:e.querySelectorAll(".searchmatch");null===n||void 0===n||n.forEach((function(e){var n=e;n.innerHTML=b,n.classList.remove("searchmatch")}))},children:n("WikipediaSearchEngine.ReplaceAllButton")})]}),c?Object(J.jsx)(ee,{children:Object(J.jsx)(Ee,{})}):Object(J.jsx)(Q,{id:"wikipedia-results-container",children:r.map((function(e){var n=e.pageid,t=e.title,a=e.snippet;return Object(J.jsx)(ge,{pageId:n,title:t,snippet:a},n)}))}),0===r.length&&!c&&Object(J.jsx)("p",{children:n("WikipediaSearchEngine.NoResults")})]})},Re=I.a.div(be||(be=Object(_.a)(["\n    display: flex;\n    justify-content: center;\n"]))),_e=function(){return Object(J.jsx)(Re,{children:Object(J.jsx)(Pe,{})})};var Ie=function(){return Object(J.jsx)(S.c,{children:Object(J.jsx)(S.a,{path:"/",component:_e})})},Le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,119)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))},Ae=t(19),Ne=t(59),Be={error:null,loading:!1,wikipediaData:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case xe:return Object(L.a)(Object(L.a)({},e),{},{loading:!0});case me:return Object(L.a)(Object(L.a)({},e),{},{loading:!1,error:null});case ke:return Object(L.a)(Object(L.a)({},e),{},{error:n.payload,loading:!1});case ye:return Object(L.a)(Object(L.a)({},e),{},{wikipediaData:n.payload});default:return e}},We=Object(Ae.b)({app:Fe}),De=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.c,Te=Object(Ae.d)(We,De(Object(Ae.a)(Ne.a)));i.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(o.a,{store:Te,children:Object(J.jsx)(l.a,{children:Object(J.jsx)(Ie,{})})})}),document.getElementById("root")),Le()},49:function(e){e.exports=JSON.parse('{"Common":{"title":"wikipedia_search"},"WikipediaSearchEngine":{"SearchInputPlaceholder":"Search","ReplaceWithInputPlaceholder":"Replace with","SearchButton":"Search","ReplaceButton":"Replace","ReplaceAllButton":"Replace All","NoResults":"No Results"}}')},50:function(e){e.exports=JSON.parse('{"Common":{"title":"wikipedia_search"},"WikipediaSearchEngine":{"SearchInputPlaceholder":"Wyszukaj","ReplaceWithInputPlaceholder":"Zamie\u0144 na","SearchButton":"Wyszukaj","ReplaceButton":"Zamie\u0144","ReplaceAllButton":"Zamie\u0144 wszystko","NoResults":"Brak wynik\xf3w"}}')},65:function(e,n,t){},71:function(e,n,t){},75:function(e,n,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.d3f9f9b1.chunk.js.map