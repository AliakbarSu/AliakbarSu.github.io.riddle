(function(t){function e(e){for(var i,r,a=e[0],u=e[1],c=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,a=1;a<o.length;a++){var u=o[a];0!==n[u]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=i,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/AliakbarSu.github.io.riddle/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("85ec"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"content"},[t.started?t._e():o("div",{staticClass:"start"},[o("div",{staticClass:"start__wrapper"},[t.allowed?o("p",{staticClass:"info"},[t._v(" This is not an easy riddle! so read the questions carefully to get them right ")]):t._e(),t.allowed?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"pass__input",attrs:{placeholder:"Type in your name",name:"pass",type:"text"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),t.allowed?o("button",{staticClass:"start-btn",on:{click:t.start}},[t._v("Start")]):t._e(),t.allowed?t._e():o("button",{staticClass:"start-btn",on:{click:t.checkPass}},[t._v(" Enter ")])])]),t.isCompleted?o("h1",{staticClass:"thankyou"},[t._v(" Thank you! the riddle is completed ")]):t._e(),!t.isCompleted&&t.started?o("p",{staticClass:"hint"},[o("span",[t._v("Hint: ")]),t._v("The correct answer is the one your heart says not your rational mind ")]):t._e(),!t.isCompleted&&t.started?o("div",{staticClass:"question"},[o("div",{staticClass:"question__container",class:{animationStart:t.currentQuestion.isRomance}},[t.currentQuestion.text?o("p",{staticClass:"question__text",class:{"question__text--large":t.currentQuestion.isLarge}},[t._v(" "+t._s(t.currentQuestion.text)+" ")]):t._e()])]):t._e(),!t.isCompleted&&t.started?o("ul",{staticClass:"options"},t._l(t.currentQuestion.options,(function(e){return o("li",{key:e.id,staticClass:"options__items",class:{active:t.isActive(e.id)},on:{click:function(o){return t.select(e)}}},[t._v(" "+t._s(e.text)+" ")])})),0):t._e(),!t.isCompleted&&t.started?o("div",{staticClass:"question__actions"},[o("button",{staticClass:"question__btn",on:{click:function(e){return t.next(t.currentQuestion.id)}}},[t._v(" Next ")])]):t._e()])])},s=[],r=(o("7db0"),o("c740"),o("d3b7"),o("bc3a")),a=o.n(r),u={name:"App",data:function(){return{questions:[{id:"QuestionOne",text:"What has to be broken before you can use it?",options:[{id:"optionOne",text:"A jewelry",isCorrect:!0},{id:"optionTwo",text:"An egg",isCorrect:!0},{id:"optionThree",text:"An apple",isCorrect:!0},{id:"optionFour",text:"A water bottle",isCorrect:!0}]},{id:"QuestionTwo",text:"I'm tall when I'm young, and I'm short when I'm old. What am I?",options:[{id:"optionTwo",text:"A person",isCorrect:!0},{id:"optionOne",text:"A candle",isCorrect:!0},{id:"optionThree",text:"A car",isCorrect:!0},{id:"optionFour",text:"A tree",isCorrect:!0}]},{id:"QuestionThree",text:"What month of the year has 28 days?",start:!0,options:[{id:"optionOne",text:"August",isCorrect:!0},{id:"optionTwo",text:"January",isCorrect:!0},{id:"optionThree",text:"March",isCorrect:!0},{id:"optionFour",text:"All of them",isCorrect:!0}]},{id:"QuestionFour",text:"What can you break, even if you never pick it up or touch it?",isRomance:!0,options:[{id:"optionTwo",text:"A glass",isCorrect:!0},{id:"optionOne",text:"A promise",isCorrect:!0},{id:"optionThree",text:"A phone",isCorrect:!0},{id:"optionFour",text:"A bone",isCorrect:!0}]},{id:"QuestionFive",text:"What would you say if someone said that I loved you?",isRomance:!0,isLarge:!0,options:[{id:"optionOne",text:"I love you too",isCorrect:!0},{id:"optionTwo",text:"I don't know",isCorrect:!1},{id:"optionThree",text:"I am not ready",isCorrect:!1}]},{id:"QuestionSix",text:"What if someone said that I love you?",isRomance:!0,isLarge:!0,options:[{id:"optionOne",text:"I love him too",isCorrect:!0},{id:"optionTwo",text:"Something else",isCorrect:!1}]}],currentQuestion:{},selectedOption:{},isCompleted:!1,audio:null,started:!1,won:!1,pass:"",allowed:!1}},components:{},methods:{checkPass:function(){a.a.post("https://us-central1-riddle-6991d.cloudfunctions.net/notify",{name:this.pass}).then((function(){console.log("Notified Successfully!")})).catch((function(t){console.log("Something went wrong while notifying!"),console.log(t)})),this.allowed=!0},start:function(){this.started=!0,this.currentQuestion=this.questions[0],this.playRiddle()},playRiddle:function(){this.audio&&this.audio.pause(),this.audio=new Audio(o("f1ef")),this.audio.play()},playRomantic:function(){this.audio&&this.audio.pause(),this.audio=new Audio(o("6555")),this.audio.play()},isActive:function(t){return this.selectedOption.id===t},next:function(t){var e=this;if(this.selectedOption.id){var o=this.questions.findIndex((function(e){return e.id==t}));o==this.questions.length-1?this.process().then((function(t){var o=t.value;o?e.$swal({title:"May he give you a big hug?",text:"🤗🤗🤗🤗🤗",confirmButtonText:"Yes he may"}).then((function(){e.won=!0,e.isCompleted=!0})):e.isCompleted=!0})):this.process().then((function(t){var i=t.value;i&&(e.currentQuestion=e.questions[o+1])})),this.currentQuestion.start&&this.playRomantic(),this.selectedOption={}}else this.$swal("No Option Selected","please select on option first","OK")},select:function(t){this.selectedOption=t},process:function(){var t=this,e=this.currentQuestion.options.find((function(e){return e.id==t.selectedOption.id}))||{},o=this.questions.findIndex((function(e){return e.id==t.currentQuestion.id}));return e.isCorrect||o===this.questions.length-1?e.isCorrect||o!=this.questions.length-1?Promise.resolve({value:!0}):Promise.resolve({value:!1}):this.$swal({title:"Are you sure?",text:"You may break someones' heart",type:"warning",showCancelButton:!0,confirmButtonText:"Yes I'm sure",cancelButtonText:"No, changed my mind",showCloseButton:!0,showLoaderOnConfirm:!0})}}},c=u,l=(o("034f"),o("2877")),d=Object(l["a"])(c,n,s,!1,null,null,null),p=d.exports,h=o("5886");o("4413");i["a"].config.productionTip=!1,i["a"].use(h["a"]),new i["a"]({render:function(t){return t(p)}}).$mount("#app")},6555:function(t,e,o){t.exports=o.p+"media/you_are_the_reason.c89df941.mp3"},"85ec":function(t,e,o){},f1ef:function(t,e,o){t.exports=o.p+"media/kahoot.cee11374.mp3"}});
//# sourceMappingURL=app.e1b2018f.js.map