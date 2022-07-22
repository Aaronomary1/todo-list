(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>v});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),l=t(667),d=t.n(l),c=new URL(t(897),t.b),s=new URL(t(834),t.b),u=new URL(t(830),t.b),p=new URL(t(949),t.b),m=new URL(t(685),t.b),f=a()(i());f.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);var g=d()(c),h=d()(s),x=d()(u),y=d()(p),b=d()(m);f.push([e.id,'body{\n    font-family:"Roboto";\n    background-color: #F1F1F1;\n    display: flex;\n    flex-direction: column;\n    place-content: center;\n    height: 95vh;\n    align-items: center;\n}\nlabel{\n    font-weight:bold;\n    font-size: 12px;\n}\ninput,\nselect{\n    padding: 20px 10px 20px 10px;\n    width: 240px;\n    font-weight: bolder;\n    border-radius: 5px;\n    border: none;\n    background-color: #F1F1F1;\n    box-shadow: 0px 3px 6px #888888;\n}\nselect{\n    width:260px;\n}\n\nbutton{\n    border: none;\n    background-color: #4c8bf5;\n    color: white;\n    padding: 20px 10px 20px 10px;\n    border-radius: 5px;\n    width: 165px;\n    font-weight: bolder;\n    cursor:pointer;\n    \n}\ninput:focus,\nselect:focus {\n    outline: none; /* Removes the border when the input is clicked */\n    }\n#main-container{\n    width:900px;\n    background-color:white;\n    border-radius: 5px;\n    position: relative;\n    overflow:scroll;\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */\n    scrollbar-width: none;  /* Firefox */\n    box-shadow: 0px 3px 6px #888888;\n    height:75vh;\n}\n\n@media only screen and (max-width:900px){ \n    body{\n        margin: 0px;\n}   \n}\n\n#main-container::-webkit-scrollbar,\n#list-menu::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n}\n#header{\n    display:flex;\n    border-bottom:1px solid #DFDFDF;\n    padding:10px;\n    position:sticky;\n    top:0;\n    background-color: white;\n    gap:15px;\n    margin-bottom:15px;\n}\n#newlist-img{\n    content:url('+g+");\n    height:25px;\n    width:25px;\n}\n#lists-img{\n    content:url("+h+");\n    height:25px;\n    width:25px;\n}\n.edittodo-img{\n    content:url("+x+");\n    height:15px;\n    width:15px;\n    margin-top: -70px;\n    margin-right: -20px;\n    cursor:pointer;\n}\n#complete-img{\n    content:url("+y+");\n    height:25px;\n    width:25px;\n}\n#addnew-img{\n    content:url("+b+");\n    height:20px;\n    width:20px;\n}\n#newlist-button{\n    background-color:#4c8bf5;\n    color:white;\n    box-shadow: 0px 3px 6px #888888;\n}\n#complete-button{\n    margin-right:auto;\n}\n#add-new{\n    background-color: #4c8bf5;\n    width:50px;\n    height:50px;\n    border-radius: 25px;\n    position:sticky;\n    margin-left:auto;\n    bottom:15px;\n    right:15px;\n    margin-top:30px;\n    cursor: pointer;\n    user-select: none;\n}\n#lists-button, #complete-button, #newlist-button{\n    cursor:pointer;\n}\n@media only screen and (max-width:900px){ \n    #add-new{\n        position:fixed;\n}   \n}\n#tasks-container{\n    min-height:67vh;\n    padding: 0px 10px 0px 10px;\n    display:flex;\n    flex-direction: column;\n    gap:10px;\n}\n@media only screen and (max-width:900px){ \n    #main-container, body{\n        width:100vw;\n        height: 100vh;\n}   \n}\n#no-tasks{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    width:85%;\n    padding:15px;\n}\n#newlist-form{\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 260px;\n    justify-content: center;\n}\n#dynamic-list{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n.form{\n    background-color:white;\n    padding:35px;\n    display:flex;\n    flex-direction: column;\n    gap:20px;\n    align-items: center;\n    border-radius: 5px;\n}\n.popup-container{\n    width: 100vw;\n    height: 105vh;\n    position: fixed;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    background-color: #000000b0;\n}\n.button{\n    width:65px;\n    height:50px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.list-button{\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 10px 20px 10px;\n    width: 240px;\n    font-weight: bolder;\n    border-radius: 5px;\n    border: none;\n    background-color: #F1F1F1;\n    box-shadow: 0px 3px 6px #888888;\n    cursor: pointer;\n}\n.button-label{\n    margin:0px;\n    font-size:12px;\n    font-weight:bold;\n}\n.color-input{\n    width: 152px;\n    height: 65px;\n    appearance: none;\n    cursor: pointer;\n    padding:0px;\n    background-color: transparent;\n    border:3px solid;\n}\n.color-input::-webkit-color-swatch{\n    border-radius:5px;\n    border:none;\n}\n/* todo css */\n.todo{\n    background-color: #F2F2F2;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n}\n.task-info{\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    flex:15;\n    overflow-wrap:anywhere;\n}\n.task-text{\n    margin:0px;\n    font-weight:100;\n    font-size:15px;\n}\n.task-date{\n    margin:0px;\n    font-weight:100;\n    font-size:12px;\n}\n.task-list{\n    display: flex;\n    gap:10px;\n    font-weight:100;\n    font-size:12px;\n    align-items: center;\n    flex:4;\n    text-align: right;\n}\n.list-color{\n    max-width:15px;\n    height:15px;\n    background-color:#4c8bf5;\n    border-radius: 10px;\n    flex:55%;\n    min-width: 15px;\n}\n.todo-input{\n    padding:0;\n    width:13px;\n    font-weight: none;\n    border-radius: none;\n    border: none;\n    background-color: #F1F1F1;\n    box-shadow: none;\n    flex:1;\n}\n.list-name{\n    flex:45%;\n    overflow-wrap:normal;\n}\n/* Form css */\n.error-message{\n    background: #ff3d3d;\n    padding: 16px;\n    width: 228px;\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    border-radius: 5px;\n    overflow-wrap: break-word;\n    display:none;\n}\n#list-menu{\n    overflow: scroll;\n    max-height: 300px;\n}\n#list-name-length{\n    margin-left: auto;\n    margin-bottom: -29px;\n    z-index: 100;\n    font-weight: bold;\n    color: #7a7a7a;\n}",""]);const v=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},a=[],l=0;l<e.length;l++){var d=e[l],c=o.base?d[0]+o.base:d[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=i(m,o);o.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var l=t(r[a]);n[l].references--}for(var d=o(e,i),c=0;c<r.length;c++){var s=t(r[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},949:(e,n,t)=>{e.exports=t.p+"73714faed1e6506c7699.png"},830:(e,n,t)=>{e.exports=t.p+"7bb766359e78560b731b.png"},834:(e,n,t)=>{e.exports=t.p+"400dc3756213b68c6d2e.png"},897:(e,n,t)=>{e.exports=t.p+"06d10213ee8141f92e6f.png"},685:(e,n,t)=>{e.exports=t.p+"f4a4c847858146a50926.png"}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),a=t.n(r),l=t(565),d=t.n(l),c=t(216),s=t.n(c),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let g=[],h=[{name:"Important",color:"#de5246",id:"#de5246"+x(1e6)},{name:"Today",color:"#1aa260",id:"#1aa260"+x(1e6)}];function x(e){return Math.floor(Math.random()*e)}let y=function(){let e=JSON.stringify(h);localStorage.setItem("lists",e);let n=JSON.stringify(g);localStorage.setItem("todos",n)};const b=function(){document.getElementById("task-description").value="",document.getElementById("task-date").value="",document.getElementById("newtask-error").style.display="none",document.getElementById("newtask-form-container").style.display="none",document.getElementById("edit-task-description").value="",document.getElementById("edit-task-date").value="",document.getElementById("edittask-error").style.display="none",document.getElementById("edittask-form-container").style.display="none",document.getElementById("newlist-name").value="",document.getElementById("newlist-color").value="#4c8bf4",document.getElementById("newlist-form-container").style.display="none",document.getElementById("newlist-error").style.display="none",document.getElementById("list-menu-container").style.display="none",document.getElementById("list-select").value="none",document.getElementById("list-name-length").innerText=""},v=function(e){document.getElementById("tasks-container").innerHTML="",g.forEach((function(n){(n.list===e&&!1===n.check||"complete"===e&&!0===n.check||"default"===e&&!1===n.check)&&function(e){let n="";h.forEach((function(t){t.name===e.list&&(n=t.color)}));let t=document.getElementById("tasks-container"),o=document.createElement("div");o.classList="todo";let i=document.createElement("input");i.classList="todo-input",i.setAttribute("type","checkbox"),i.setAttribute("id",e.id+"i"),i.value=e.check,!0===e.check&&(i.checked=!0),o.append(i);let r=document.createElement("div");r.classList="task-info",o.append(r);let a=document.createElement("h3");a.classList="task-text",r.append(a);let l=document.createElement("p");l.classList="task-date",r.append(l);let d=document.createElement("div");d.classList="task-list",o.append(d);let c=document.createElement("p");c.classList="list-name",d.append(c);let s=document.createElement("div");s.classList="list-color",s.style.backgroundColor=n,d.append(s);let u=document.createElement("img");u.classList="edittodo-img",u.setAttribute("id",e.id),d.append(u),a.innerText=e.task,l.innerText=e.date,c.innerText=e.list,t.prepend(o)}(n)}));let n=document.getElementById("tasks-container");if(""==n.innerHTML){let t=document.createElement("h2");t.innerText="default"===e||void 0===e?"There are currently no tasks.":`Nothing in "${e}".`,t.setAttribute("id","no-tasks"),n.append(t)}I(),y()},w=function(){b(),function(){let e=document.getElementById("dynamic-list");document.querySelectorAll(".dynamic-option").forEach((e=>{e.remove()})),e.innerHTML=""}(),h.forEach((function(e){!function(e){let n=document.getElementById("dynamic-list"),t=document.createElement("div");t.classList="list-button",t.setAttribute("id",e.id);let o=document.createElement("p");o.innerText=e.name,o.classList="button-label";let i=document.createElement("div");i.classList="list-color",i.style.backgroundColor=e.color,t.append(o,i),n.append(t);let r=document.getElementById("edit-list-select"),a=document.getElementById("list-select"),l=document.createElement("option"),d=document.createElement("option");l.setAttribute("id",e.color),l.classList="dynamic-option",l.style.color=e.color,l.innerText=e.name,a.append(l),d.setAttribute("id",e.color),d.classList="dynamic-option",d.style.color=e.color,d.innerText=e.name,r.append(d)}(e)}))},E=function(e,n){document.getElementById("edittask-form-container").style.display="flex",document.getElementById("edit-task-description").value=e.task,document.getElementById("edit-task-date").value=e.date.substr(7,16),document.getElementById("todo-id").value=e.id,document.getElementById("edit-list-select").value=e.list};let k="default";const I=function(){g.forEach((function(e){if(!1!==e.check||e.list!==k&&"default"!==k){if("complete"!==k||!0!==e.check)return;{let n=document.getElementById(e.id),t=document.getElementById(e.id+"i");e.id,n.addEventListener("click",(function(){E(e)})),t.addEventListener("click",(function(){e.check=!1,v(k)}))}}else{let n=document.getElementById(e.id),t=document.getElementById(e.id+"i");e.id,n.addEventListener("click",(function(){E(e)})),t.addEventListener("click",(function(){e.check=!0,v(k)}))}}))};null!=localStorage.getItem("todos")&&(g=JSON.parse(localStorage.getItem("todos"))),null!=localStorage.getItem("lists")&&(h=JSON.parse(localStorage.getItem("lists"))),function(){let e=document.getElementById("add-new"),n=document.getElementById("newtask-form-container"),t=document.getElementById("newtask-form"),o=document.getElementById("addnew-img"),i=document.getElementById("newtask-submit"),r=document.getElementById("edittask-submit"),a=document.getElementById("newlist-button"),l=document.getElementById("newlist-form-container"),d=document.getElementById("newlist-form"),c=document.getElementById("newlist-submit"),s=document.getElementById("list-menu-container"),u=document.getElementById("list-menu"),p=document.getElementById("default"),m=document.getElementById("edittask-form-container"),f=document.getElementById("edittask-form"),E=document.getElementById("newlist-name");m.addEventListener("click",(function(e){f.contains(e.target)||b()})),p.addEventListener("click",(function(){k="default",b(),v(k)})),a.addEventListener("click",(function(){l.style.display="flex"})),l.addEventListener("click",(function(e){d.contains(e.target)||b()})),n.addEventListener("click",(function(n){t.contains(n.target)||(e.style.zIndex="0",o.style.transform="rotate(0deg)",b())})),s.addEventListener("click",(function(e){u.contains(e.target)||b()})),document.getElementById("complete-button").addEventListener("click",(function(){k="complete",v(k)})),document.getElementById("lists-button").addEventListener("click",(function(){s.style.display="flex",h.forEach((function(e){document.getElementById(e.id).addEventListener("click",(function(){k=e.name,v(k),b()}))}))}));let I=document.getElementById("newtask-error");e.addEventListener("click",(function(){"flex"==n.style.display?(e.style.zIndex="0",b(),o.style.transform="rotate(0deg)"):"none"==n.style.display&&(e.style.zIndex="100",n.style.display="flex",o.style.transform="rotate(45deg)")})),E.addEventListener("keyup",(function(){document.getElementById("list-name-length").innerText=`${E.value.length}/10`})),c.addEventListener("click",(function(e){e.preventDefault();let n=[],t=document.getElementById("newlist-error"),o=document.getElementById("newlist-name").value,i=document.getElementById("newlist-color").value;for(var r=0;r<h.length;r++)if(h[r].name.toLowerCase()==o.toLowerCase()){n.push("Name is Already Taken.");break}""===o&&n.push("List Name is Required."),o.length>10&&n.push(`List Name is too long. ${o.length}/10`),n.length>0?(e.preventDefault(),t.style.display="block",t.innerText=n.join("\n")):(function(e,n){let t=function(e,n){return{name:e,color:n,id:n+x(1e6)}}(e,n);h.push(t),y()}(o,i),w(),b())})),r.addEventListener("click",(function(e){e.preventDefault();let n=[],t=document.getElementById("edittask-error"),o=document.getElementById("edit-task-description").value,i="Due by "+document.getElementById("edit-task-date").value,r=document.getElementById("edit-list-select").value,a=document.getElementById("todo-id").value;""===o&&n.push("Task Description Required."),"none"===r&&n.push("List Required."),"Due by "===i&&n.push("Due Date Required."),n.length>0?(e.preventDefault(),t.style.display="block",t.innerText=n.join("\n")):(function(e,n,t,o,i){i.forEach((function(i){i.id===o&&(i.task=e,i.date=n,i.list=t)}))}(o,i,r,a,g),b(),v(k))})),i.addEventListener("click",(function(n){n.preventDefault();let t=[],i=document.getElementById("task-description").value,r="Due by "+document.getElementById("task-date").value,a=document.getElementById("list-select").value;""===i&&t.push("Task Description Required."),"none"===a&&t.push("List Required."),"Due by "===r&&t.push("Due Date Required."),t.length>0?(n.preventDefault(),I.style.display="block",I.innerText=t.join("\n")):(function(e,n,t){let o=function(e,n,t){let o=e.substring(0,2)+n.substring(15,17)+t.substring(0,2)+x(1e3);return{task:e,date:n,list:t,id:o,check:!1}}(e,n,t);g.push(o),y()}(i,r,a),b(),v(k),e.style.zIndex="0",o.style.transform="rotate(0deg)")}))}(),w(),v("default")})()})();