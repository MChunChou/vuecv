(function(e){function t(t){for(var c,o,i=t[0],r=t[1],u=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);s&&s(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],c=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(c=!1)}c&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},l=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vuecv/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=r;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"307c":function(e,t,n){e.exports=n.p+"img/project4.b7c87ddb.jpg"},"47ff":function(e,t,n){"use strict";n("dda1")},"49ba":function(e,t,n){e.exports=n.p+"img/project2.5d213104.jpg"},"4a79":function(e,t,n){"use strict";n("9f73")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,l,o){var i=Object(c["m"])("Toggle"),r=Object(c["m"])("Banner"),u=Object(c["m"])("About"),s=Object(c["m"])("Skills"),b=Object(c["m"])("Projects"),d=Object(c["m"])("Contact");return Object(c["i"])(),Object(c["c"])("div",null,[Object(c["e"])(i),Object(c["e"])(r),Object(c["e"])(u),Object(c["e"])(s),Object(c["e"])(b),Object(c["e"])(d)])}var l={class:"sidebar"};function o(e,t,n,a,o,i){return Object(c["i"])(),Object(c["c"])("div",{class:["toggle",{scroll:a.scrollFlag,active:a.active}],onMouseleave:t[6]||(t[6]=function(e){return a.active=!1}),onClick:t[7]||(t[7]=function(e){return a.active=!a.active})},[Object(c["e"])("div",l,[Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#home",onClick:t[1]||(t[1]=function(){return a.handleToggle&&a.handleToggle.apply(a,arguments)})},"Home")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#about",onClick:t[2]||(t[2]=function(){return a.handleToggle&&a.handleToggle.apply(a,arguments)})},"About")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#skills",onClick:t[3]||(t[3]=function(){return a.handleToggle&&a.handleToggle.apply(a,arguments)})},"Skills")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#projects",onClick:t[4]||(t[4]=function(){return a.handleToggle&&a.handleToggle.apply(a,arguments)})},"Projects")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#contact",onClick:t[5]||(t[5]=function(){return a.handleToggle&&a.handleToggle.apply(a,arguments)})},"Contack")])])])],34)}var i={setup:function(){var e=document.documentElement.clientWidth,t=Object(c["k"])(e<500),n=Object(c["k"])(!(e<500));Object(c["g"])((function(){if(e>500){var c=document.documentElement.clientHeight;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>c?(t.value=!0,n.value=!1):t.value=!1}))}})),Object(c["f"])((function(){window.removeEventListener("scroll",(function(){t.value=!1}))}));var a=function(){n.value=!1};return{active:n,scrollFlag:t,handleToggle:a}}};n("d1a5");i.render=o;var r=i,u=n("cfea"),s=n.n(u),b={class:"banner",id:"home"},d=Object(c["e"])("div",{class:"imgSidebar"},[Object(c["e"])("img",{src:s.a})],-1),j=Object(c["e"])("div",{class:"contentBx"},[Object(c["e"])("div",null,[Object(c["e"])("h4",null,[Object(c["e"])("span",null,"Hello"),Object(c["d"])(" I'm")]),Object(c["e"])("h2",null,"周 蔓 君"),Object(c["e"])("h4",null,"I'm a Front End Web Developer."),Object(c["e"])("p")])],-1);function A(e,t,n,a,l,o){return Object(c["i"])(),Object(c["c"])("section",b,[d,j])}var O={name:"Banner"};n("94bb");O.render=A;var p=O,m=n("ad91"),f=n.n(m),v={class:"about",id:"about"},g=Object(c["e"])("div",{class:"title white"},[Object(c["e"])("h2",null,"About Me"),Object(c["e"])("p")],-1),h={class:"content"},C={class:"textBx"},k=Object(c["e"])("div",{class:"imgBx"},[Object(c["e"])("img",{src:f.a})],-1);function w(e,t,n,a,l,o){return Object(c["i"])(),Object(c["c"])("div",null,[Object(c["e"])("section",v,[g,Object(c["e"])("div",h,[Object(c["e"])("div",C,[Object(c["e"])("p",null,Object(c["n"])(a.aboutCtn),1)]),k])])])}var y={name:"About",setup:function(){var e="畢業於逢甲大學，在學校中畢業專題選擇使用 JAVA 開發以圖形辨識的方法來辨識鋼琴樂譜並且依據此樂譜來撥放出 midi 音樂，在專題製作中雖然經歷很多的挫折跟失敗，但也讓我學習到如何去思考並且解決問題。    \n     畢業後的工作，進入一間 CNC 軟體開發的公司。主要負責的工作是 CNC 控制器的操作人機介面，使用 Web 方式取代掉原本使用 JAVA 開發的介面。開發語言使用 NodeJS 做為後端並與控制器溝通，前端畫面則使用 YUI Mojito 開發，後來改用 ReactJS。\n     之後接到另一個工作是負責雲端管理系統，內容包含登入、查詢、顯示、上傳、新增、刪除的功能，使用 ReactJS 開發前端，並使用 Rust 開發後端，資料庫則是使用PostgreSQL。\n     短期內目標試希望能夠完整掌握目前各項前端技能，並且深入了解後端架構，期望未來可以成為獨當一面的全端工程師。";return{aboutCtn:e}}};n("72ca");y.render=w;var M=y,x=n("8858"),B=n.n(x),S=n("9afb"),T=n.n(S),D={class:"contact",id:"contact"},E=Object(c["e"])("div",{class:"title white"},[Object(c["e"])("h2",null,"Contact Me"),Object(c["e"])("p")],-1),R=Object(c["e"])("div",{class:"contactBx"},[Object(c["e"])("div",{class:"row"},[Object(c["e"])("div",{class:"col50"},[Object(c["e"])("img",{src:B.a}),Object(c["e"])("h3",null,"Tel:")]),Object(c["e"])("div",{class:"col50"},[Object(c["e"])("h3",null,"0972303633")])]),Object(c["e"])("div",{class:"row"},[Object(c["e"])("div",{class:"col50"},[Object(c["e"])("img",{src:T.a}),Object(c["e"])("h3",null,"Email")]),Object(c["e"])("div",{class:"col50"},[Object(c["e"])("h3",null,"mchunchou89@gmail.com.tw")])])],-1),J={class:"contactForm"},N={class:"row"},Q={class:"col50"},P={class:"col50"},U={class:"row"},G={class:"col50"},V={class:"col50"},L={class:"row"},F={class:"col100"},I={class:"row"},Y={class:"col100"};function q(e,t,n,a,l,o){return Object(c["i"])(),Object(c["c"])("section",D,[E,R,Object(c["e"])("div",J,[Object(c["e"])("div",N,[Object(c["e"])("div",Q,[Object(c["q"])(Object(c["e"])("input",{type:"text",name:"firstName",placeholder:"姓","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.emailData.firstName=e})},null,512),[[c["o"],a.emailData.firstName]])]),Object(c["e"])("div",P,[Object(c["q"])(Object(c["e"])("input",{type:"text",name:"lastName",placeholder:"名","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.emailData.lastName=e})},null,512),[[c["o"],a.emailData.lastName]])])]),Object(c["e"])("div",U,[Object(c["e"])("div",G,[Object(c["q"])(Object(c["e"])("input",{type:"text",name:"email",placeholder:"Email","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.emailData.email=e})},null,512),[[c["o"],a.emailData.email]])]),Object(c["e"])("div",V,[Object(c["q"])(Object(c["e"])("input",{type:"text",name:"mobile",placeholder:"電話","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.emailData.mobile=e})},null,512),[[c["o"],a.emailData.mobile]])])]),Object(c["e"])("div",L,[Object(c["e"])("div",F,[Object(c["q"])(Object(c["e"])("textarea",{name:"msg",placeholder:"訊息","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.emailData.msg=e})},null,512),[[c["o"],a.emailData.msg]])])]),Object(c["e"])("div",I,[Object(c["e"])("div",Y,[Object(c["e"])("input",{type:"submit",value:"Send",onClick:t[6]||(t[6]=function(){return a.mail&&a.mail.apply(a,arguments)})})])])])])}n("99af");var W=n("cb3b"),H=n.n(W),Z={name:"Contact",setup:function(){var e=Object(c["j"])({firstName:"",lastName:"",email:"",mobile:"",msg:""});return Object(c["p"])(e,(function(e,t){})),{mail:function(){var t=e.firstName,n=e.lastName,c=e.email,a=e.mobile,l=e.msg;console.log(t,n,c,a,l);var o="Name: ".concat(t," ").concat(n,"\n        Email: ").concat(c,"\n        Mobile: ").concat(a,"\n        Msg: ").concat(l);H()(o)},emailData:e}}};n("bd6c");Z.render=q;var X=Z,z={class:"skills",id:"skills"},K=Object(c["e"])("div",{class:"title"},[Object(c["e"])("h2",null,"Skills"),Object(c["e"])("p")],-1),_={class:"content"},$={class:"skillBx"},ee=Object(c["e"])("h2",null,"FrontEnd",-1),te=Object(c["e"])("p",{class:"d3Ctn"},null,-1),ne={class:"card"},ce={class:"skillBx"},ae=Object(c["e"])("h2",null,"BackEnd",-1),le=Object(c["e"])("p",{class:"d3Ctn"},null,-1),oe={class:"card"};function ie(e,t,n,a,l,o){return Object(c["i"])(),Object(c["c"])("section",z,[K,Object(c["e"])("div",_,[Object(c["e"])("div",$,[ee,te,Object(c["e"])("p",ne,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(a.cards.front,(function(e,t){return Object(c["i"])(),Object(c["c"])("div",{class:"cardBx",key:t},[Object(c["e"])("h3",null,Object(c["n"])(e.title)+":",1),Object(c["e"])("ul",null,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(e.include,(function(e){return Object(c["i"])(),Object(c["c"])("li",{key:e},Object(c["n"])(e),1)})),128))])])})),128))])]),Object(c["e"])("div",ce,[ae,le,Object(c["e"])("p",oe,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(a.cards.back,(function(e,t){return Object(c["i"])(),Object(c["c"])("div",{class:"cardBx",key:t},[Object(c["e"])("h3",null,Object(c["n"])(e.title)+":",1),Object(c["e"])("ul",null,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(e.include,(function(e){return Object(c["i"])(),Object(c["c"])("li",{key:e},Object(c["n"])(e),1)})),128))])])})),128))])])])])}n("d81d"),n("b0c0"),n("a15b"),n("4de4");var re=n("5698");function ue(e,t){var n=re["g"](".d3Ctn").node().getBoundingClientRect(),c=n.width,a=n.height,l=t<=991?15:23,o=re["d"]().sort(null).value((function(e){return e.value})),i=Math.min(c,a)/2*.8,r=re["a"]().innerRadius(i).outerRadius(i),u=re["a"]().innerRadius(0).outerRadius(Math.min(c,a)/2-1),s=re["f"]().domain(e.map((function(e){return e.name}))).range(re["e"]((function(e){return re["c"](.8*e+.1)}),e.length).reverse()),b=o(e),d=re["b"]("svg").attr("viewBox",[-c/2,-a/2,c,a]);return d.append("g").attr("stroke","white").selectAll("path").data(b).join("path").attr("fill",(function(e){return s(e.data.name)})).attr("d",u).append("title").text((function(e){return"".concat(e.data.name,": ").concat(e.data.value)})),d.append("g").attr("font-family","sans-serif").attr("font-size",l).attr("text-anchor","middle").selectAll("text").data(b).join("text").attr("transform",(function(e){return"translate(".concat(r.centroid(e),")")})).call((function(e){return e.append("tspan").attr("y","-0.4em").attr("font-weight","bold").text((function(e){return e.data.name}))})).call((function(e){return e.filter((function(e){return e.endAngle-e.startAngle>.25})).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).text((function(e){return e.data.value.toLocaleString()+"%"}))})),d.node()}var se={name:"Skills",setup:function(){var e={front:[{title:"編譯",include:["webpack","babel"]},{title:"Language",include:["Html","Javascript","ReactJs","VueJS","Css"]},{title:"Other",include:["WebSocket","GraphQL"]}],back:[{title:"Language",include:["NodeJS","Rust","Java"]},{title:"Database",include:["Postgresql"]}]},t={front:[{name:"Html",value:10},{name:"Css",value:15},{name:"Javascript",value:20},{name:"ReactJs",value:25},{name:"VueJs",value:10},{name:"Webpack",value:5},{name:"Babel",value:5},{name:"WebSocket",value:5},{name:"GraphQL",value:5}],back:[{name:"Java",value:15},{name:"Rust",value:30},{name:"NodeJs",value:40},{name:"Postgresql",value:15}]};function n(e){re["h"](".d3Ctn svg").remove();var n=ue(t.front,e),c=ue(t.back,e);re["h"](".d3Ctn").nodes()[0].append(n),re["h"](".d3Ctn").nodes()[1].append(c)}return Object(c["g"])((function(){window.addEventListener("resize",(function(e){n(e.target.innerWidth)})),n(window.innerWidth)})),Object(c["h"])((function(){window.removeEventListener("resize",(function(){}))})),{cards:e}}};n("4a79");se.render=ie;var be=se,de=n("6378"),je=n.n(de),Ae=n("49ba"),Oe=n.n(Ae),pe=n("6cf5"),me=n.n(pe),fe=n("307c"),ve=n.n(fe),ge={class:"projects",id:"projects"},he=Object(c["e"])("div",{class:"title"},[Object(c["e"])("h2",null,"My Projects"),Object(c["e"])("p")],-1),Ce=Object(c["e"])("div",{class:"content"},[Object(c["e"])("div",{class:"projectBx"},[Object(c["e"])("div",{class:"name"},[Object(c["e"])("img",{src:je.a}),Object(c["e"])("h2",null,"檔案上傳介面"),Object(c["e"])("p")]),Object(c["e"])("div",{class:"describe"},[Object(c["e"])("pre",null,"使用 ReactJS 開發提供上傳檔案的介面 \r\n          Note: 連結網頁沒有 server 支援, 使用 JS 模擬 servere"),Object(c["e"])("a",{href:"https://mchunchou.github.io/simulateUpload/",target:"_blank"},"Go >")])]),Object(c["e"])("div",{class:"projectBx"},[Object(c["e"])("div",{class:"name"},[Object(c["e"])("img",{src:Oe.a}),Object(c["e"])("h2",null,"gmcode 模擬"),Object(c["e"])("p")]),Object(c["e"])("div",{class:"describe"},[Object(c["e"])("pre",null,"輸入 GMcode 並以此產生路徑模擬 "),Object(c["e"])("a",{href:"https://mchunchou.github.io/NcEmulator/",target:"_blank"},"Go >")])]),Object(c["e"])("div",{class:"projectBx"},[Object(c["e"])("div",{class:"name"},[Object(c["e"])("img",{src:me.a}),Object(c["e"])("h2",null,"古蹟資料列表"),Object(c["e"])("p")]),Object(c["e"])("div",{class:"describe"},[Object(c["e"])("pre",null,"嘗試使用 React Native 抓取 API 並加以顯示")])]),Object(c["e"])("div",{class:"projectBx"},[Object(c["e"])("div",{class:"name"},[Object(c["e"])("img",{src:ve.a}),Object(c["e"])("h2",null,"鋼琴樂譜辨識及播放系統"),Object(c["e"])("p")]),Object(c["e"])("div",{class:"describe"},[Object(c["e"])("pre",null,"使用 JAVA 開發對於鋼琴樂譜的影像辨識系統\r\n透過分析音符的位置判斷在使用 midi 播放")])])],-1);function ke(e,t,n,a,l,o){return Object(c["i"])(),Object(c["c"])("section",ge,[he,Ce])}var we={name:"Projects",setup:function(){var e=[{name:"",des:"",url:""},{name:"",des:"",url:""}];return console.log(e),{}}};n("47ff");we.render=ke;var ye=we,Me={name:"App",components:{Toggle:r,Banner:p,About:M,Contact:X,Skills:be,Projects:ye}};n("d8c1");Me.render=a;var xe=Me;Object(c["b"])(xe).mount("#app")},6378:function(e,t,n){e.exports=n.p+"img/project1.46c7466f.jpg"},"640a":function(e,t,n){},"6cf5":function(e,t,n){e.exports=n.p+"img/project3.2ce11589.jpg"},"72ca":function(e,t,n){"use strict";n("e56f")},8858:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAyklEQVRYw+3YPQoCMRCG4dcfsPAsNoIgrOXKHsl2D7N4CLVUsLDyLhYWslY2Fpn8TLJbzAfpwsyTpEkCI8vEc14DrIBZZJ8P8AROGugj0CuNLhXTKGJ+o3Y1nAqgtcYW/2WTAlpkADlrSqDimQfMvQHXyD47oNIGXYA2EtT6gkZ3ZAYykIEMNHQMZCADGWjoGEhKyJ26Ag6Rfbzu06GgGuHVqZHRHZkEemfo6awpgR4ZQMk1Owp+x/h+WO2BLbCMXNQLuAPn1N0pni8UYUqVi8pK5gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMy0yN1QxODoyMTozOSswMDowMPqSTv0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDMtMjdUMTg6MjE6MzkrMDA6MDCLz/ZBAAAAAElFTkSuQmCC"},"91a2":function(e,t,n){},"94bb":function(e,t,n){"use strict";n("c620")},"9afb":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAABJ0lEQVRYw+2XT2rCQBSHPy2kIOgButArCAVvUXDjFbxCj9A2N3Cru25zii7EKxQhca3QXcUumsgwZh6TmfwBmQ8GQublzZfMD5JAIBBol0cgBjLg0vDIgA8gkoTiFkT08SYJHToQyiQhtfAF+G5AIAUW2jkrIYAB8A781iByBlbA0LCWlVDBFPjykNkBM8u1jEUJMFHm+sASOFYQ+QFegQelzxPw6SIkNVxbyCTAuOSGTiW11kLSIzeFvghtlS2vLKSGcqTUq6HXQ6vPS72dhIqxB+badc/5UJnntTY9vYRMoS8oC20rQnropdBaC/VKhFzYKlvnQu/mwFPIl6tHvyMBI0EoCN29UObUxY9UEtp0ICSuGfH/dk5p/uM+zdcSf4MCgUDd/AHU8Fn0b5ondAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMy0yN1QxODoyMjowNSswMDowMFiKmGkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDMtMjdUMTg6MjI6MDUrMDA6MDAp1yDVAAAAAElFTkSuQmCC"},"9f73":function(e,t,n){},ad91:function(e,t,n){e.exports=n.p+"img/picTwo.b1a0c7ed.jpg"},bd6c:function(e,t,n){"use strict";n("91a2")},c620:function(e,t,n){},c6af:function(e,t,n){},cb3b:function(e,t,n){n("d3b7");var c={send:function(e){return new Promise((function(t,n){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var a=JSON.stringify(e);c.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",a,(function(e){t(e)}))}))},ajaxPost:function(e,t,n){var a=c.createCORSRequest("POST",e);a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onload=function(){var e=a.responseText;null!=n&&n(e)},a.send(t)},ajax:function(e,t){var n=c.createCORSRequest("GET",e);n.onload=function(){var e=n.responseText;null!=t&&t(e)},n.send()},createCORSRequest:function(e,t){var n=new XMLHttpRequest;return"withCredentials"in n?n.open(e,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest).open(e,t):n=null,n}};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c.send({Host:"smtp.gmail.com",Username:"evilmoon519",Password:"ulaqkhpkivegkidr",To:"evilmoon519@gmail.com",From:"evilmoon519@gmail.com",Subject:"Auto Email From VueCV",Body:e}).then((function(e){return console.log(e)})),"done"}},cfea:function(e,t,n){e.exports=n.p+"img/picOne.5983be6e.jpg"},d1a5:function(e,t,n){"use strict";n("c6af")},d8c1:function(e,t,n){"use strict";n("640a")},dda1:function(e,t,n){},e56f:function(e,t,n){}});
//# sourceMappingURL=app.8bdc5524.js.map