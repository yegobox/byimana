(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},40:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(6),s=a(7),i=Object(s.f)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("label",{htmlFor:"drop",className:"toggle"},"\u2261 Menu"),r.a.createElement("input",{type:"checkbox",id:"drop"}),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Reception")),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"drop-2",className:"toggle"},"Holiday Works +"),r.a.createElement("a",{href:""},"Holiday Works"),r.a.createElement("input",{type:"checkbox",id:"drop-2"}),r.a.createElement("ul",null,r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S1"},"Senior1")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S2"},"Senior2")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S3"},"Senior3")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement("label",{htmlFor:"drop-3",className:"toggle"},"Senior4+"),r.a.createElement(o.b,{href:""},"Senior4"),r.a.createElement("input",{type:"checkbox",id:"drop-3"}),r.a.createElement("ul",null,r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S4MPC"},"S4 MPC")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S4PCM"},"S4 PCM")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S4MCB"},"S4 MCB")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S4PCB"},"S4 PCB")))),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement("label",{htmlFor:"drop-3",className:"toggle"},"Senior5 +"),r.a.createElement(o.b,null,"Senior 5"),r.a.createElement("input",{type:"checkbox",id:"drop-3"}),r.a.createElement("ul",null,r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S5MPC"},"S5 MPC")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S5PCM"},"S5 PCM")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S5MCB"},"S5 MCB")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S5PCB"},"S5 PCB")))),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement("label",{htmlFor:"drop-3",className:"toggle"},"Senior6+"),r.a.createElement(o.b,null,"Senior 6"),r.a.createElement("input",{type:"checkbox",id:"drop-3"}),r.a.createElement("ul",null,r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S6MPC"},"S6 MPC")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S6PCM"},"S6 PCM")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S6MCB"},"S6 MCB")),r.a.createElement("li",{className:"dropdown-color"},r.a.createElement(o.b,{to:"/S6PCB"},"S6 PCB")))))),r.a.createElement("li",null,r.a.createElement("a",{href:"/login.html"},"Join Live chat")))))})),m=(a(40),a(1)),u=a(2),d=a(4),h=a(3),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"vertical"}),r.a.createElement("div",{class:"vertical2"}),r.a.createElement("div",{class:"header"},r.a.createElement("h1",null,"Welcome to the Esc Byimana E-learning platform "),r.a.createElement("p",null,"Sign in using your student account to access the system.You can also access Live discussions directly from the system with your class and share different materials. You can also get Holiday works for your class directly by clicking the Works tab on the NavBar and selecting your class."),r.a.createElement("div",{class:"sign"},r.a.createElement("a",{href:"/"},r.a.createElement("button",{className:"backtobss"},"Back to Bss"))))))}}]),a}(n.Component),k=a(5),p=a.n(k),v=function(e){var t=e.Works,a=t.length?t.map((function(e){return r.a.createElement("div",{className:"text-center work-card",key:e._id},r.a.createElement("h2",null,"  ",e.title," "),r.a.createElement("p",{className:"lead"},"Facilitator: ",e.facilitator),r.a.createElement("h6",null,"Upload Date: ",e.date),r.a.createElement("a",{href:e.link},r.a.createElement("button",{className:"workdownloadbtn"},"Download Work")))})):r.a.createElement("div",{className:"container work-card"},r.a.createElement("h3",{className:"text-center m-2 no-works"},"You have no Holidays works Yet !"));return r.a.createElement("div",null,a)},f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S1"===e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 1 Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S2"===e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 2 Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S3"===e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 3 Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S4MCB"===e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 4 MCB Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S4MPC"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 4 MPC Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S4PCB"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 4 PCB Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S4PCM"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 4 PCM Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S5MCB"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 5 MCB Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){console.log(t.data);var a=t.data,n=a.filter((function(e){return"S5MPC"===e.class}));return console.log(n),e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 5 MPC Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S5PCB"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 5 PCB Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S5PCM"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 5 PCM Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S6MPC"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 6 MPC Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S6MCB"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 6 MCB Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S6PCB"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 6 PCB Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={works:[],selectedWorks:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/links").then((function(t){var a=t.data,n=a.filter((function(e){return"S6PCM"==e.class}));return e.setState({works:a,selectedWorks:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"Senior 6 PCM Holiday works"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement(v,{Works:this.state.selectedWorks})))}}]),a}(n.Component);a(58);var F=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:E}),r.a.createElement(s.a,{path:"/S1",component:f}),r.a.createElement(s.a,{path:"/S2",component:b}),r.a.createElement(s.a,{path:"/S3",component:y}),r.a.createElement(s.a,{path:"/S4MPC",component:w}),r.a.createElement(s.a,{path:"/S4PCM",component:C}),r.a.createElement(s.a,{path:"/S4PCB",component:N}),r.a.createElement(s.a,{path:"/S4MCB",component:S}),r.a.createElement(s.a,{path:"/S5MPC",component:W}),r.a.createElement(s.a,{path:"/S5PCB",component:j}),r.a.createElement(s.a,{path:"/S5MCB",component:g}),r.a.createElement(s.a,{path:"/S5PCM",component:O}),r.a.createElement(s.a,{path:"/S6MCB",component:P}),r.a.createElement(s.a,{path:"/S6MPC",component:M}),r.a.createElement(s.a,{path:"/S6PCB",component:B}),r.a.createElement(s.a,{path:"/S6PCM",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.83f3e872.chunk.js.map