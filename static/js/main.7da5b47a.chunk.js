(window.webpackJsonpreact_game=window.webpackJsonpreact_game||[]).push([[0],{22:function(e,a,t){e.exports=t(32)},27:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n,l,r=t(0),s=t.n(r),i=t(12),c=t.n(i),o=(t(27),t(19)),m=t(14),p=t(6),d=t(15),g=t(16),u=t(4),h=t(20),v=t(43),f=t(18),E=Object(f.a)({root:{background:"#F0F8FF",borderRadius:"20px",border:"2px solid black",color:"white",height:"15em",padding:"0 30px",width:"15em",display:"inline-block",margin:"0 1em 0 1em","@media (max-width: 1200px)":{padding:"0 10px",height:"8em",width:"8em"},"@media (max-width: 800px)":{padding:"0 5px",height:"5em",width:"5em"}}})(v.a),b=t(8),x=t.n(b),N=function(e){for(var a=e,t=a.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),l=[a[n],a[t]];a[t]=l[0],a[n]=l[1]}return a},w=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(g.a)(a).call(this,e))).handleClick=function(e){console.log(e),t.setState((function(e){return{filled:e.filled+1}})),console.log(t.state.filled)},t.resetButton=function(){t.setState({filled:0,shuffledImageSizes:N(t.props.imageSizes)})},t.state={filled:0,answer:new Set,order:["ascending","descending"],shuffledImageSizes:N(t.props.imageSizes)},t.handleClick=t.handleClick.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(p.a)(a,[{key:"generateContainers",value:function(){return this.state.shuffledImageSizes.slice().map((function(e){return s.a.createElement(E,{maxWidth:"sm"})}))}},{key:"generateImages",value:function(){var e=this;return this.state.shuffledImageSizes.slice().map((function(a){return s.a.createElement("li",{style:{display:"inline"}},s.a.createElement("button",null,s.a.createElement("img",{key:Object(o.a)(Array(e.state.shuffledImageSizes.length).keys()),src:e.props.originalImages[0],className:a,alt:a,onClick:function(a){return e.handleClick(a.currentTarget.className)}})))}))}},{key:"render",value:function(){var e=this.state.mistake>=this.props.maxWrong,a=this.props.imageSizes===this.state.answer;return n=this.generateContainers(),l=this.generateImages(),a&&(l="YOU WON"),e&&(l="YOU LOST"),s.a.createElement("div",{className:"Hangman"},s.a.createElement("nav",{className:"navbar navbar-expand-lg"},s.a.createElement("a",{className:"navbar-brand text-dark fontSpace",href:"/"},"Sorting Game"),s.a.createElement("span",{className:"d-xl-none d-lg-none text-dark fontSpace"},"Filled: ",this.state.filled),s.a.createElement("button",{className:"navbar-toggler sr-only",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item "}),s.a.createElement("li",{className:"nav-item"}),s.a.createElement("li",{className:"nav-item"})),s.a.createElement("span",{className:"navbar-text text-dark fontSpace"},"Filled: ",this.state.filled))),s.a.createElement("div",{className:"container center"},s.a.createElement("p",{className:"text-center instructions"},"Arrange in ",this.state.order[0]," order as shown below")),s.a.createElement("div",{className:"imgArray text-center container"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("img",{src:this.props.originalImages[0],className:"responsive apple4",alt:1})),s.a.createElement("li",null,s.a.createElement("img",{src:this.props.originalImages[0],className:"responsive apple3",alt:1})),s.a.createElement("li",null,s.a.createElement("img",{src:this.props.originalImages[0],className:"responsive apple2",alt:1})),s.a.createElement("li",null,s.a.createElement("img",{src:this.props.originalImages[0],className:"responsive apple1",alt:1})))),s.a.createElement("div",null,n),s.a.createElement("div",{className:"imgArray text-center container"},s.a.createElement("p",null,l)),s.a.createElement("div",null,s.a.createElement("p",{className:"text-center"},s.a.createElement("button",{className:"Hangman-reset",onClick:this.resetButton},"Reset"))))}}]),a}(r.Component);w.defaultProps={maxWrong:4,originalImages:[x.a,x.a,x.a,x.a],imageSizes:["responsive apple1","responsive apple2","responsive apple3","responsive apple4"]};var k=w;var S=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t.p+"static/media/apple.ff4c70f3.png"}},[[22,1,2]]]);
//# sourceMappingURL=main.7da5b47a.chunk.js.map