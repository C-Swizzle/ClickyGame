(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"Spongebob Squarepants",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{id:2,name:"Jimmy Neutron",image:"https://vignette.wikia.nocookie.net/jimmyneutron/images/5/57/Jimmy_Neutron.png/revision/latest/scale-to-width-down/229?cb=20180219044703"},{id:3,name:"Sheen",image:"https://vignette.wikia.nocookie.net/jimmyneutron/images/e/ee/Sheen_jimmy_neutron.png/revision/latest?cb=20180214190900"},{id:4,name:"Timmy Turner",image:"https://vignette.wikia.nocookie.net/nickelodeon-movies/images/1/12/Timmy_Turner2.png/revision/latest?cb=20180412153339"},{id:5,name:"Patrick Star",image:"https://static.giantbomb.com/uploads/scale_small/8/82962/2001131-309px_patrick_star.svg.png"},{id:6,name:"Saitama",image:"https://vignette.wikia.nocookie.net/vsbattles/images/0/0c/Saitama_one_punch.png/revision/latest?cb=20190125003222"},{id:7,name:"Aang",image:"https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/mundonick.com/nickv2/Shows/Avatar-La-Leyenda-De-Aang/Characters/avatar-aang-character-main-550x510.png?height=0&width=480&matte=true&crop=false"},{id:8,name:"Sokka",image:"https://cdn130.picsart.com/268166933025211.png?r240x240"},{id:9,name:"Toph Beifong",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Toph_Beifong.png/220px-Toph_Beifong.png"}]},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(15),a(16),a(4)),s=a(5),l=a(7),m=a(6),d=a(8);var g=function(e){return r.a.createElement("div",{className:"card text-center border-2 border-primary rounded bg-primary",style:{width:"18rem"}},r.a.createElement("img",{className:"card-img-top ml-4",src:e.image,alt:e.name,style:{height:"15rem",width:"15rem"},id:e.id,onClick:e.onClick}))};var h=function(e){return r.a.createElement("div",{className:"col-md-4 mt-4"},e.children)},u=a(1);var p=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"jumbotron text-center bg-info"},r.a.createElement("h1",{className:"display-4 text-light"},"Welcome to the Clicky Game!"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("h4",{className:"text-danger font-weight-bold"},"Don't click a character more than once!"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",{className:"font-weight-bold"},"Score: ",e.score)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",{className:"font-weight-bold"},"Top Score: ",e.TopScore))))))};var v=function(e){return r.a.createElement("div",{className:"container"},e.children)};var k=function(e){return r.a.createElement("div",{className:"row mt-2"},e.children)},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={clickedArray:[],characters:u,score:0,TopScore:0},a.handleClick=function(e){var t=e.target.id;console.log(a.state.score),a.state.clickedArray.includes(t)?(console.log("loser"),a.setState({clickedArray:[],characters:a.shuffle(u),score:0})):a.state.score===a.state.TopScore?a.setState({clickedArray:a.state.clickedArray.concat([t]),characters:a.shuffle(u),score:a.state.score+1,TopScore:a.state.score+1}):a.setState({clickedArray:a.state.clickedArray.concat([t]),characters:a.shuffle(u),score:a.state.score+1})},a.shuffle=function(e){var t,a,n;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{score:this.state.score,TopScore:this.state.TopScore}),r.a.createElement(v,null,r.a.createElement(k,null,this.state.characters.map(function(t){return r.a.createElement(h,null,r.a.createElement(g,{image:t.image,name:t.name,id:t.id,onClick:e.handleClick}))}))))}}]),t}(n.Component);var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("br",null))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1032f43a.chunk.js.map