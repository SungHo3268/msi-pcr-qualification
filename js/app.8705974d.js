(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],u=0,_=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&_.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(_.length)_.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/msi-pcr-qualification/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0609":function(t,e,a){"use strict";a("3953")},"33a8":function(t,e,a){"use strict";a("a19b")},3953:function(t,e,a){},"560d":function(t,e,a){t.exports=a.p+"img/both.46523563.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[t._m(0),n("hr",{staticClass:"mx-auto",staticStyle:{border:"2px double #6385ce","max-width":"1073px"}}),n("nav",[n("div",{staticClass:"nav nav-pills nav-fill",attrs:{id:"nav-tab",role:"tablist"}},[n("a",{staticClass:"nav-item nav-link",class:{active:t.show_tab_introduction},on:{click:function(e){return t.switch_tab("introduction")}}},[n("span",{staticStyle:{"font-size":"23px"}},[t._v("Introduction")])]),n("a",{staticClass:"nav-item nav-link",class:{active:t.show_tab_overview},on:{click:function(e){return t.switch_tab("overview")}}},[n("span",{staticStyle:{"font-size":"23px"}},[t._v("Overview")])]),n("a",{staticClass:"nav-item nav-link",class:{active:t.show_tab_qualification_learning},on:{click:function(e){return t.switch_tab("qualification-training")}}},[n("span",{staticStyle:{"font-size":"23px"}},[t._v("Training")])]),n("a",{staticClass:"nav-item nav-link",class:{active:t.show_tab_qualification_test},on:{click:function(e){return t.switch_tab("qualification-test")}}},[n("span",{staticStyle:{"font-size":"23px"}},[t._v("Qualification Test")])])])]),t.show_tab_introduction?n("div",{staticClass:"container"},[n("Introduction")],1):t._e(),t.show_tab_overview?n("div",{staticClass:"container"},[n("div",{staticClass:"card-body",staticStyle:{"text-align":"left","margin-top":"10px"}},[t._v(" Welcome! Thank you for participating in our project. To construct the dataset, you will need to create your own questions and answers. "),n("br"),t._v(" Therefore, prior to the actual data production, we would like to deepen your understanding towards our project by giving this Qualification task. "),n("br"),t._v(" The Qualification consists of "),n("B",[t._v("TWO sections")]),t._v(". You will first get to learn about physical knowledge in "),n("B",[t._v("Training section")]),t._v(", then follow by the "),n("B",[t._v("Qualification Test section")]),t._v(" to test for your level of understanding. The details of each process are as follows:"),n("br"),n("br")],1),n("img",{staticStyle:{"margin-left":"20px"},attrs:{alt:"qualification",src:a("82fa"),width:"100%"}}),n("br"),n("br"),n("hr",{staticClass:"mx-auto",staticStyle:{border:"2px double #6385ce","max-width":"1073px"}}),n("button",{staticClass:"btn btn-info btn-lg",staticStyle:{float:"right","background-color":"steelblue",color:"white"},attrs:{type:"button",onclick:"window.scrollTo(0,0)"},on:{click:function(e){return t.switch_tab("qualification-training")}}},[t._v("Start Training ")])]):t._e(),t.show_tab_qualification_learning?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card-body",staticStyle:{"text-align":"left","margin-top":"10px","margin-bottom":"20px"}},[n("div",{staticClass:"card-text"},[t._v(" In this Training section, you will learn about "),n("B",[t._v("1) Physical Knowledge")]),t._v(" and "),n("B",[t._v("2) Definitions of Goal, Correct (answer), and Incorrect (answer)")]),t._v("."),n("br"),t._v(" Please read the following explanations and examples carefully and thoroughly before moving on to the "),n("B",[t._v("Qualification Test section")]),t._v("."),n("br")],1)])])]),n("Training_Explanation"),n("br"),n("br"),n("br"),t._m(1),n("br"),n("Br"),n("div",{staticClass:"collapse show",attrs:{id:"collapseTrainingEvent"}},[n("p",{staticStyle:{"text-align":"left","margin-bottom":"10px"}},[t._v(" Before getting into the Qualification Test section, let's first review the above concepts with some Training Examples. In each example, "),n("B",[t._v("2 multiple-choice questions")]),t._v(" are given with reference to "),n("B",[t._v("a single preliminary QA dataset")]),t._v(". You are allowed for unlimited attempts, reason for inappropriate choice will be explained when you pick wrong answer. Due to limited attempts (3 Times) for the Qualification Test, "),n("B",[t._v("please ensure that you have learned all the necessary knowledge in details")]),t._v(". Once you are ready, you could proceed the Test section. ")],1),t._l(t.example_training,(function(t,e){return n("question",{key:e,attrs:{index:e.toString(),annotation:t}})})),n("div",{staticClass:"row"},[n("div",{staticClass:"col-8"}),n("div",{staticClass:"col-4"},[n("button",{staticClass:"btn btn-primary btn-lg ",staticStyle:{float:"right","background-color":"steelblue",color:"white"},attrs:{type:"button",onclick:"window.scrollTo(0,0)",disabled:!t.training_passed,"data-balloon-pos":"left","aria-label":"Make sure all answers to the interactive training are checked."},on:{click:function(e){return t.switch_tab("qualification-test")}}},[t._v("Take the Qualification Test ")])])])],2)],1):t._e(),t.show_tab_qualification_test?n("div",{staticClass:"container"},[n("br"),t.training_passed||!t.can_continue||t.error_occurred?t.training_passed&&t.can_continue&&!t.error_occurred?n("div",[t.submit?t._e():n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" You have completed all training! ")])]):t._e():n("div",[n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" You haven't completed all the learning steps yet. "),n("br"),t._v(" Please check to see if there are questions that are not answered in Training section. "),n("br"),n("br"),n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.switch_tab("qualification-training")}}},[t._v(" Go back to the training phase and check it out.")])])]),t.loading&&!t.error_occurred?n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" LOADING...If this message persists, you can refresh this page and see. ")]):t._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[t.training_passed&&t.can_continue&&!t.submit&&!t.error_occurred?n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-text",staticStyle:{"text-align":"left"}},[t._v(" Through the Training, you have learned "),n("strong",[t._v("1)Physical Commonsense")]),t._v(" and the "),n("strong",[t._v("2)Definitions of Question, Correct and Incorrect")]),t._v("."),n("br"),t._v(" Test is the process of checking what you have learned in Training. The evaluation is made by solving the problems presented in the test below."),n("br"),n("br"),n("strong",[t._v("※")]),t._v(" You can submit the answer to check "),n("strong",[t._v("up to three times.")]),n("br"),n("strong",[t._v("※")]),t._v(" Results will only tell you whether you passed or not, and your score will not be disclosed."),n("br"),n("strong",[t._v("※")]),t._v(" You must pass a "),n("strong",[t._v("certain score ")]),t._v(" to proceed with the next step, "),n("B",[t._v("Data Creation")]),t._v("."),n("br"),n("br"),t._v(" Let's start the Test now. Please read the questions below and answer the following questions."),n("br"),n("hr")],1)]):t._e()])]),t.loading||t.error_occurred||!t.training_passed||!t.can_continue||t.submit?t._e():n("div",[n("br"),t._m(2),t._l(t.example_test,(function(t,e){return n("question",{key:e,attrs:{index:e.toString(),annotation:t}})}))],2),t.error_occurred?n("div",[n("br"),t._m(3)]):t._e(),!t.training_passed||t.qualified||t.blacklisted||t.submit||t.error_occurred?t._e():n("a",{staticClass:"material-icons",staticStyle:{"background-color":"darkslateblue",color:"white","font-size":"36px",cursor:"pointer",float:"right","margin-bottom":"20px"},attrs:{onclick:"window.scrollTo(0,0)"}},[t._v("arrow_upward ")]),n("br"),n("br"),t.tried&&t.can_continue&&!t.submit?n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[n("strong",[t._v("You failed to pass the test. You have "),n("span",{staticStyle:{color:"tomato"}},[t._v(" "+t._s(this.errors_qid.length)+" mistakes")]),t._v(". But you have "),n("span",{staticStyle:{color:"blue"}},[t._v(t._s(this.remainingAttempts)+" more chances")]),t._v(" to attempt the check your answer."),n("br"),t._v(" You can either modify your answers above and re-evaluate it. "),n("br"),t._v(" If you want to stop here, you can submit this hit using the wide blue <Click here to submit HIT> button below. ")])]):t.tried&&t.blacklisted&&3===t.attempts&&!t.submit?n("div",{staticClass:"alert alert-danger",staticStyle:{"font-size":"18px"},attrs:{role:"alert"}},[n("strong",[t._v("You have reached the maximum number of attempts. You cannot try this hit anymore. Please submit your response by using the wide blue <Click here to submit HIT> button below. Thank you :)")])]):t.blacklisted&&!t.tried||t.blacklisted&&t.submit?n("div",{staticClass:"alert alert-danger",staticStyle:{"font-size":"18px"},attrs:{role:"alert"}},[n("strong",[t._v("Sorry. You finally failed to pass the test. Thank you :)")])]):t._e(),t.tried&&t.qualified&&!t.submit?n("div",{staticClass:"alert alert-success",staticStyle:{"font-size":"16px"},attrs:{role:"alert"}},[t._m(4)]):t._e(),t.qualified?n("div",{staticClass:"alert alert-success",staticStyle:{"font-size":"18px","text-align":"left"},attrs:{role:"alert"}},[t._m(5)]):t._e(),t.qualified&&0!==this.errors_qid.length&&!t.submit?n("div",[n("br"),n("br"),n("br"),n("span",{staticStyle:{"text-align":"center","font-size":"40px",color:"darkgreen"}},[t._v(" Review the wrong questions ")]),t._l(t.error_samples,(function(t,e){return n("question",{key:e,attrs:{index:e.toString(),annotation:t}})}))],2):t._e(),t.training_passed&&t.can_continue&&!t.submit&&!t.error_occurred?n("div",[t.training_passed&&t.can_continue?n("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{color:"white","background-color":"darkgreen"},attrs:{type:"button",disabled:!this.all_answered||t.blacklisted&&t.tried||t.qualified||t.submit,"aria-label":"Make sure all exam questions are checked.","data-balloon-pos":"up"},on:{click:function(e){return t.submitTestResultToUs(t.example_test)}}},[n("strong",[t._v("Check the answers (please wait a second)")])]):t._e()]):t._e(),n("br"),t.tried&&!t.submit?n("div",[n("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{color:"white"},attrs:{type:"button",disabled:t.submit||t.qualified&&!t.all_reviewed},on:{click:function(e){return t.submitHit()}}},[n("strong",[t._v("Click here to submit HIT")])])]):t._e(),n("br"),n("br"),n("div",[n("form",{attrs:{method:"post",name:"mturk_form",id:"mturk-external-submit-form",action:t.mturk_params.turkSubmitTo,type:"hidden"}},[n("input",{attrs:{type:"hidden",name:"assignmentId",id:"assignmentId"},domProps:{value:t.mturk_params.assignmentId}}),n("input",{attrs:{type:"hidden",name:"pay",id:"pay"},domProps:{value:t.pay}}),n("input",{attrs:{type:"hidden",name:"qualified",id:"qualified"},domProps:{value:t.qualified}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.generated_answers.answers,expression:"generated_answers.answers"}],attrs:{type:"hidden",name:"generated_answers"},domProps:{value:t.generated_answers.answers},on:{input:function(e){e.target.composing||t.$set(t.generated_answers,"answers",e.target.value)}}})]),t.show_submission_alert?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" There's an error in submission. ")]):t._e()])]):t._e(),n("br"),n("br")])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-2"},[a("span",{staticClass:"col",staticStyle:{"text-align":"center","font-size":"40px",color:"#2c3e50","margin-top":"30px"}},[t._v(" Qualification ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{"data-toggle":"collapse",href:"#collapseTrainingEvent","aria-expanded":"true","aria-controls":"collapseTrainingEvent"}},[a("span",{staticStyle:{color:"mediumblue","font-size":"40px"}},[t._v(" Training Examples")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{color:"darkgreen","font-size":"40px"}},[a("strong",[t._v(" Test ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" Sorry. Something unexpected has happened. Please refresh this page and see. If the problem isn't resolved, please contact the owner of this task."),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("strong",[t._v(" \"Congratulations. You've passed the Test and can get $1 for reward at follow up HIT submission."),a("br"),t._v(" Please do check your mistakes below because that will increase your chance of passing the new task. "),a("br"),t._v(" If you have any questions, please take a screenshot of your mistakes and send an email to us. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("strong",[t._v(" You've passed this qualification task. Please go to "),a("br"),a("strong",[t._v("https://www.mturk.com/mturk/preview?groupId=3LAWS9V4CMNYYA0B5LMISADPDI38YM")]),a("br"),t._v(" and continue working on it, so catch the chance to earn bonus upto $35! (Be sure to make a copy of this address before submitting your HIT!)"),a("br"),t._v(" We will take a look at your submission there and then contact you with substantially more hits."),a("br"),t._v(" If everything looks good, you can submit this hit using the wide blue <Click here to submit HIT> button below."),a("br")])}],r=a("1da1"),o=(a("96cf"),a("b680"),a("b64b"),a("ac1f"),a("841c"),a("d81d"),a("4de4"),a("07ac"),a("caad"),a("2532"),a("4989"),a("ab8b"),a("72bf")),l=a.n(o),c=a("2ef0"),d=a.n(c),u=a("369b"),_=a.n(u),p=a("bc3a"),h=a.n(p),v=(a("68c8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Explanation"}},[n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("a",{staticClass:"card-header",staticStyle:{"text-align":"left","font-size":"22px"},attrs:{"data-toggle":"collapse",href:"#collapseEvent","aria-expanded":"true","aria-controls":"collapseEvent"}},[n("B",[t._v("Physical Commonsense")])],1),n("div",{staticClass:"collapse show",attrs:{id:"collapseEvent"}},[n("div",{staticClass:"card-body",staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"text-align":"left","margin-bottom":"10px","margin-left":"20px","margin-top":"10px"}},[t._v(" Physical Commonsense, the focus of this project, "),n("B",[t._v("usually refers to the knowledge that people generally acknowledged for an object")]),t._v(". For each object, it can be considered through its "),n("B",[t._v("attribute")]),t._v(" and "),n("B",[t._v("usage")]),t._v(" as shown in the table below. ")],1),t._m(0),n("div",{staticStyle:{"text-align":"left","margin-left":"20px","margin-bottom":"10px"}},[n("B",[t._v("The knowledge that people generally know about the properties and uses of objects is called 'physical commonsense'.")])],1)])])])])]),n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("a",{staticClass:"card-header",staticStyle:{"text-align":"left","font-size":"22px"},attrs:{"data-toggle":"collapse",href:"#collapseEvent2","aria-expanded":"true","aria-controls":"collapseEvent2"}},[n("B",[t._v("Question, Correct, and Incorrect")])],1),n("div",{staticClass:"collapse show",attrs:{id:"collapseEvent2"}},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-text",staticStyle:{"text-align":"left"}},[t._v(" Three types of data are being introduced in this project."),n("br"),n("v-card",{staticStyle:{"margin-top":"10px","padding-top":"10px","padding-bottom":"10px","background-color":"white"},attrs:{"max-width":"750",elevation:"2",tile:""}},[n("ul",{staticStyle:{"text-align":"left","margin-left":"40px","margin-top":"10px","line-height":"180%","font-size":"18px"}},[n("li",[n("strong",[t._v("Question")]),t._v(" : A goal to be achieved or something you want to be explained. ")]),n("li",[n("strong",[t._v("Correct")]),t._v(" : An appropriate choice to situation with physical commonsense. ")]),n("li",[n("strong",[t._v("Incorrect")]),t._v(" : An inappropriate choice to the situation under physical commonsense. ")])])]),n("br"),n("strong",[t._v(" For each QA dataset, the most appropriate approach among candidate choices regarding to the situation in the Question would be considered as Correct, otherwise as Incorrect. ")]),n("br"),t._m(1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("img",{staticStyle:{float:"left"},attrs:{alt:"explanation_img_for_table",src:a("560d"),width:"45%"}}),n("br"),n("br"),t._m(2)],1)])]),n("br")])])])])}),b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticStyle:{"margin-left":"20px","line-height":"140%"}},[a("tr",{staticStyle:{"background-color":"aliceblue","border-bottom":"2px solid lightslategray"}},[a("td",{staticStyle:{"text-align":"center"}},[t._v(" Object ")]),a("td",{staticStyle:{"text-align":"center"}},[t._v(" Attribute (Appearance/Property) ")]),a("td",{staticStyle:{"text-align":"center"}},[t._v(" Usage ")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(" Tape ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - Sticky on one side ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - It can be used to bond objects together."),a("br"),t._v(" - It can be used to fill the joints. ")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(" Pen ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - Long and pointed "),a("br"),t._v(" - Contains Ink ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - It can be used to write on paper."),a("br"),t._v(" - It can be used as a long stick. ")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(" Sugar ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - White fine granules"),a("br"),t._v(" - Sweet taste "),a("br"),t._v(" - Water-soluble ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - It can sweeten the food. ")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(" Glasses ")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - Two lenses set in frames"),a("br"),t._v(" - Frame are usually made of plastic or iron"),a("br")]),a("td",{staticStyle:{"padding-left":"15px"}},[t._v(" - It can be used to correct defects of vision. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticStyle:{float:"left","margin-top":"10px"}},[a("tbody",[a("tr",{staticStyle:{"background-color":"lavender"}},[a("td",{staticStyle:{"text-align":"center"}},[t._v("Question")]),a("td",[t._v("Make a balloon")])]),a("tr",{staticStyle:{"background-color":"ghostwhite"}},[a("td",{staticStyle:{"text-align":"center"}},[t._v("candidate1")]),a("td",[t._v("Blow into a "),a("span",{staticStyle:{color:"tomato"}},[t._v("tin can")]),t._v(" and tie with rubber band")])]),a("tr",{staticStyle:{"background-color":"ghostwhite"}},[a("td",{staticStyle:{"text-align":"center"}},[t._v("candidate2")]),a("td",[t._v("Blow into a "),a("span",{staticStyle:{color:"royalblue"}},[t._v("trash bag")]),t._v(" and tie with rubber band")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-left":"500px"}},[t._v(" Looking into the above example, regarding to the situation in the Question (To make a balloon), air can only be trapped by tying the opening of a "),a("strong",{staticStyle:{color:"royalblue"}},[t._v("trash bag (candidate 2)")]),t._v(" with a rubber band, but not considered a "),a("strong",{staticStyle:{color:"tomato"}},[t._v("tin can (candidate 1)")]),t._v(". Therefore, "),a("strong",{staticStyle:{color:"royalblue"}},[t._v("trash bag (candidate 2) would be as Correct")]),t._v(", while "),a("strong",{staticStyle:{color:"tomato"}},[t._v("tin-can (candidate 1) as Incorrect in this case")]),t._v(". ")])}],f={name:"Train_Explanation",components:{},props:{},filters:{currency:function(t){return t.toFixed(2)}}},m=f,g=(a("0609"),a("2877")),w=a("6544"),y=a.n(w),k=a("b0af"),x=Object(g["a"])(m,v,b,!1,null,"5f327c04",null),q=x.exports;y()(x,{VCard:k["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 question-card"},[a("div",{staticClass:"card mt-2",class:{"is-training-card":t.is_qualification_training,"is-test-card":t.is_qualification_test,"is-error-card":t.is_qualification_error}},[t.is_qualification_training?a("a",{staticClass:"card-header",staticStyle:{color:"mediumblue","background-color":"aliceblue","text-align":"left"}},[a("span",{staticStyle:{"font-size":"24px"}},[a("strong",[t._v(" Training "+t._s(t.index)+" ")])])]):t._e(),t.is_qualification_error?a("a",{staticClass:"card-header",staticStyle:{color:"darkgreen","background-color":"lightgoldenrodyellow","text-align":"left"}},[a("span",{staticStyle:{"font-size":"24px"}},[a("strong",[t._v(" Review the Error "+t._s(t.index)+" ")])])]):t._e(),t.is_qualification_test?a("a",{staticClass:"card-header",staticStyle:{color:"darkgreen","background-color":"lightgoldenrodyellow","text-align":"left"}},[a("span",{staticStyle:{"font-size":"24px"}},[a("strong",[t._v(" Test "+t._s(t.index)+" ")])])]):t._e(),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title annotation-passage",staticStyle:{"text-align":"left"}},[a("span",[a("strong",[t._v("Question : ")]),t._v(t._s(t.annotation.goal)),a("br"),a("br"),a("strong",[t._v("candidate1 : ")]),t._v(t._s(t.annotation.can1)),a("br"),a("strong",[t._v("candidate2 : ")]),t._v(t._s(t.annotation.can2)+" ")])]),a("div",{staticClass:"card-text",staticStyle:{"text-align":"left"}},[a("v-divider"),a("br"),a("div",[t._m(0),t._l(t.annotation.candidates1,(function(e,n){return a("p",{key:n,staticClass:"form-check form-check-inline d-flex",staticStyle:{"margin-left":"25px"}},[""!==t.annotation.Q1_ans?a("input",{directives:[{name:"model",rawName:"v-model",value:t.annotation.picked1,expression:"annotation.picked1"}],staticClass:"form-check-input",class:{"is-valid":t.is_correct_answer_q1&&t.has_correct_answer_q1&&t.has_picked_answer1,"is-invalid":t.is_wrong_answer_q1&&t.has_correct_answer_q1&&t.has_picked_answer1},attrs:{id:"q1-"+e+t.index,type:"radio",name:"q1-"+t.index},domProps:{value:e,checked:t._q(t.annotation.picked1,e)},on:{change:function(a){return t.$set(t.annotation,"picked1",e)}}}):t._e(),""===t.annotation.Q1_ans?a("input",{directives:[{name:"model",rawName:"v-model",value:t.annotation.picked1,expression:"annotation.picked1"}],staticClass:"form-check-input",attrs:{id:"q1-"+e+t.index,type:"radio",name:"q1-"+t.index},domProps:{value:e,checked:t._q(t.annotation.picked1,e)},on:{change:function(a){return t.$set(t.annotation,"picked1",e)}}}):t._e(),a("label",{staticClass:"form-check-label",attrs:{for:"q1-"+e+t.index}},[t._v(t._s(t.render_radio_q1(e)))])])})),""!==t.annotation.Q1_explanation?a("div",[t.is_wrong_answer_q1&&t.has_correct_answer_q1&&t.has_picked_answer1?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" Incorrect. "+t._s(t.annotation.Q1_explanation)+" ")]):!t.is_wrong_answer_q1&&t.has_correct_answer_q1&&t.has_picked_answer1?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Correct. Good job! ")]):t._e()]):t._e()],2),a("br"),a("br"),a("div",[t._m(1),t._l(t.annotation.candidates2,(function(e,n){return a("p",{key:n,staticClass:"form-check form-check-inline d-flex",staticStyle:{"margin-left":"25px"}},[""!==t.annotation.Q2_ans?a("input",{directives:[{name:"model",rawName:"v-model",value:t.annotation.picked2,expression:"annotation.picked2"}],staticClass:"form-check-input",class:{"is-valid":t.is_correct_answer_q2&&t.has_correct_answer_q2&&t.has_picked_answer2,"is-invalid":t.is_wrong_answer_q2&&t.has_correct_answer_q2&&t.has_picked_answer2},attrs:{id:"q2-"+e+t.index,type:"radio",name:"q2-"+t.index},domProps:{value:e,checked:t._q(t.annotation.picked2,e)},on:{change:function(a){return t.$set(t.annotation,"picked2",e)}}}):t._e(),""===t.annotation.Q2_ans?a("input",{directives:[{name:"model",rawName:"v-model",value:t.annotation.picked2,expression:"annotation.picked2"}],staticClass:"form-check-input",attrs:{id:"q2-"+e+t.index,type:"radio",name:"q2-"+t.index},domProps:{value:e,checked:t._q(t.annotation.picked2,e)},on:{change:function(a){return t.$set(t.annotation,"picked2",e)}}}):t._e(),a("label",{staticClass:"form-check-label",attrs:{for:"q2-"+e+t.index}},[t._v(t._s(t.render_radio_q2(e)))])])})),""!==t.annotation.Q2_explanation?a("div",[t.is_wrong_answer_q2&&t.has_picked_answer2&&t.has_correct_answer_q2?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" Incorrect. "+t._s(t.annotation.Q2_explanation)+" ")]):!t.is_wrong_answer_q2&&t.has_picked_answer2&&t.has_correct_answer_q2?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Correct. Good job! ")]):t._e()]):t._e()],2)],1)])]),a("br")])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",{staticStyle:{"font-size":"18px"}},[t._v(" 1. Which option (candidate1, candidate2) is the most appropriate answer to the Question? ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",{staticStyle:{"font-size":"18px"}},[t._v(" 2. Which of the following questions best suits the Incorrect? ")])])}],T={name:"Question",props:{annotation:{type:Object,required:!0},index:{type:String,required:!0}},computed:{is_qualification_training:function(){return"y"!==this.annotation.isTest&&""!==this.annotation.Q1_ans&&""!==this.annotation.Q2_ans},is_qualification_test:function(){return""===this.annotation.Q1_ans&&""===this.annotation.Q2_ans},is_qualification_error:function(){return"y"===this.annotation.isTest&&""!==this.annotation.Q1_ans&&""!==this.annotation.Q2_ans},has_picked_answer1:function(){return null!==this.annotation.picked1},has_picked_answer2:function(){return null!==this.annotation.picked2},is_wrong_answer_q1:function(){return this.annotation.picked1!==this.annotation.Q1_ans},is_wrong_answer_q2:function(){return this.annotation.picked2!==this.annotation.Q2_ans},is_correct_answer_q1:function(){return this.annotation.picked1===this.annotation.Q1_ans},is_correct_answer_q2:function(){return this.annotation.picked2===this.annotation.Q2_ans},has_correct_answer_q1:function(){return null!==this.annotation.Q1_ans&&""!==this.annotation.Q1_ans},has_correct_answer_q2:function(){return null!==this.annotation.Q2_ans&&""!==this.annotation.Q2_ans}},watch:{annotation:function(){this.$emit("input",this.annotation)}},methods:{render_radio_q1:function(t){return"1"===t?"candidate1":"2"===t?"candidate2":void 0},render_radio_q2:function(t){return"1"===t?this.annotation.noise1:"2"===t?this.annotation.noise2:"3"===t?this.annotation.noise3:"4"===t?"None of the above":void 0}}},I=T,Q=(a("33a8"),a("ce7e")),j=Object(g["a"])(I,S,C,!1,null,null,null),E=j.exports;y()(j,{VDivider:Q["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Introduction_page"}},[n("br"),n("br"),n("div",{staticClass:"container",staticStyle:{"max-width":"1100px","text-align":"left"}},[n("div",{staticClass:"card",attrs:{id:"About_Project"}},[n("div",{staticClass:"card-header",staticStyle:{"text-align":"left","font-size":"22px"}},[n("B",[t._v(" What is the project about? ")])],1),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-text",staticStyle:{color:"black"}},[t._v(" Hello, we are researching on "),n("B",[t._v("physical knowledge")]),t._v(" about the world."),n("br"),t._v(" To begin with,we would like to first introduce what is physical knowledge by giving an example. "),n("div",{staticStyle:{"margin-top":"10px","margin-bottom":"10px","margin-left":"10px"}},[n("B",[t._v("Q. To pick a lock, should I use a paperclip or a toothpick?”")])],1),t._v(" These questions are easy for human beings but hard for machines. AI systems don’t know : "),t._m(0),t._v(" We want to collect Question and Answer (QA) dataset from participants to treat these flaws."),n("br")],1)])]),n("br"),n("div",{staticClass:"card",attrs:{id:"Whole_Architecture"}},[n("div",{staticClass:"card-header",staticStyle:{"text-align":"left","font-size":"22px"}},[n("B",[t._v(" How is the project going? ")])],1),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-text",staticStyle:{color:"black"}},[t._v(" In this project, we want to collect physical knowledge, which is hard for AI systems, through a QA dataset. "),n("br"),t._v(" As the most important goal of the project is to collect accurate data, we'd like to provide you with an "),n("B",[t._v("Qualification")]),t._v(" section to make sure you understand our project to the fullest. "),n("br"),t._v(" After passing the Qualification Test, you will be able to proceed to the actual data creation process. "),n("br"),n("img",{staticStyle:{"max-width":"80%","margin-left":"90px","margin-top":"15px","margin-bottom":"15px"},attrs:{alt:"Whole architecture",src:a("6409")}})],1)])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"10px","margin-left":"10px"}},[a("strong",[a("li",[t._v(" What an object looks like ")]),a("li",[t._v(" What it can do ")]),a("li",[t._v(" How it can be used ")])])])}],B={name:"Introduction",components:{},methods:{}},$=B,O=Object(g["a"])($,A,P,!1,null,null,null),z=O.exports;document.title="Qualification";var Y={name:"app",components:{Introduction:z,Question:E,Training_Explanation:q},data:function(){return{active_tab:"introduction",example_training:{},example_test:{},gold_samples:{},error_samples:{},mturk_params:{assignmentId:"",hitId:"",turkSubmitTo:"",workerId:"",isPreview:!1},generated_answers:{answers:""},show_submission_alert:!1,number_of_test_questions:8,score:0,tried:!1,blacklisted:!1,qualified:!1,submit:!1,remainingAttempts:3,attempts:0,verify_response:{},basepay:.01,passpay:1,pay:0,errors_qid:[],backend_endpoint:"",host_name:"",loading:!1,error_occurred:!1}},filters:{currency:function(t){return t.toFixed(2)}},computed:{training_passed:function(){return d.a.every(this.example_training,(function(t){return null!==t.picked1&&null!==t.picked2}))},all_answered:function(){return d.a.every(this.example_test,(function(t){return null!==t.picked1&&null!==t.picked2}))},all_reviewed:function(){return d.a.every(this.error_samples,(function(t){return null!==t.picked1&&null!=t.picked2}))},show_tab_introduction:function(){return"introduction"===this.active_tab},show_tab_overview:function(){return"overview"===this.active_tab},show_tab_qualification_learning:function(){return"qualification-training"===this.active_tab},show_tab_qualification_test:function(){return"qualification-test"===this.active_tab},local_debug_mode:function(){return"127.0.0.1:9050"===this.backend_endpoint||"localhost"===this.host_name},protocol:function(){return this.local_debug_mode,"https://"},has_response:function(){return Object.keys(this.verify_response).length>0},can_continue:function(){return!this.qualified&&!this.blacklisted}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s,r,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=l.a.parse(window.location.search),console.log(a),n=window.location,t.host_name=n.hostname,t.local_debug_mode&&console.log("This is the local test mode."),i=a.assignmentId,null!==i&&void 0!==i||(i="TestAssignmentId"),"ASSIGNMENT_ID_NOT_AVAILABLE"===i&&(console.log("Preview mode."),t.mturk_params.isPreview=!0),t.backend_endpoint="backend_endpoint"in a?a.backend_endpoint:"127.0.0.1:9050",t.basepay="basepay"in a?parseFloat(a.basepay):.01,t.passpay="passpay"in a?parseFloat(a.passpay):1,t.remainingAttempts="remainingAttempts"in a?parseFloat(a.remainingAttempts):3,t.attempts="attempts"in a?parseFloat(a.attempts):0,t.active_tab="tab"in a?a.tab:"introduction","introduction"!==t.active_tab&&"overview"!==t.active_tab&&"qualification-training"!==t.active_tab&&"qualification-test"!==t.active_tab&&(t.active_tab="introduction"),s=a.hitId,r=a.turkSubmitTo,o=a.workerId,null!==o&&void 0!==o||(o="TestUser"),t.mturk_params.turkSubmitTo=r+"/mturk/externalSubmit",t.mturk_params.workerId=o,t.mturk_params.hitId=s,t.mturk_params.assignmentId=i,console.log("mturk_params: ",t.mturk_params),c=t,u=t.protocol+t.backend_endpoint+"/can_work",console.log("checking eligibility at: "+u),h.a.get(u,{params:{worker:o}}).then((function(t){c.blacklisted=t.data.blacklisted,c.qualified=t.data.qualified,c.attempts=t.data.attempts,c.qualified?c.pay=c.passpay:c.pay=c.basepay,console.log("Check user can_work: ",t.data)})).catch((function(t){console.log(t),c.error_occurred=!0}));try{_.a.parse(" ./qualification_training.csv",{download:!0,header:!0,complete:function(t){var e=t.data;d.a.each(e,(function(t,e){t.question_id="qualification-training-"+e,t.candidates1=["1","2"],t.candidates2=["1","2","3","4"],t.picked1=null,t.picked2=null,c.$set(c.example_training,e+1,t)})),console.log("Complete to load",t.data.length,"Training Data.")}}),t.load_test_csvs(),t.load_gold_csvs()}catch(p){console.log(p)}case 29:case"end":return e.stop()}}),e)})))()},methods:{switch_tab:function(t){this.active_tab=t},load_test_csvs:function(){var t=this;t.example_test={},_.a.parse("./qualification_test.csv",{download:!0,header:!0,error:function(){t.error_occurred=!0},complete:function(e){var a=d.a.map(e.data,(function(t){return null===t.question_id||void 0===t.question_id?null:(""!==t.workerId&&null!==t.workerId&&void 0!==t.workerId&&""!==t.workerId||(t.workerId="TestUser"),t.candidates1=["1","2"],t.candidates2=["1","2","3","4"],t.picked1=null,t.picked2=null,t)}));a=d.a.filter(a,(function(t){return null!==t})),console.log("Complete to load",a.length,"Test Data."),d.a.each(a,(function(e,a){t.$set(t.example_test,a+1,e)}))}})},load_gold_csvs:function(){var t=this;t.gold_samples={},_.a.parse("./test-gold-label.csv",{download:!0,header:!0,error:function(){t.error_occurred=!0},complete:function(e){var a=d.a.map(e.data,(function(t){return null===t.question_id||void 0===t.question_id?null:(""!==t.workerId&&null!==t.workerId&&void 0!==t.workerId&&""!==t.workerId||(t.workerId="TestUser"),t.candidates1=["1","2"],t.candidates2=["1","2","3","4"],t.picked1=null,t.picked2=null,t)}));a=d.a.filter(a,(function(t){return null!==t})),console.log("Complete to load",a.length,"Gold Labels"),d.a.each(a,(function(e,a){t.$set(t.gold_samples,a+1,e)}))}})},submitTestResultToUs:function(t){var e=this;this.tried=!0,this.generated_answers.answers=JSON.stringify(t);var a={answers:this.generated_answers.answers,workerId:this.mturk_params.workerId,assignmentId:this.mturk_params.assignmentId,turkSubmitTo:this.mturk_params.turkSubmitTo},n={headers:{"Access-Control-Allow-Origin":"*"}},i=this.protocol+this.backend_endpoint+"/verify";this.loading=!0;var s=this;h.a.post(i,a,n).then((function(t){console.log(t.data),s.verify_response=t.data,s.qualified="1"===s.verify_response["qualified"],s.blacklisted="1"===s.verify_response["blacklisted"],s.remainingAttempts=parseInt(s.verify_response["remainingAttempts"]),s.attempts=parseInt(s.verify_response["attempts"]),s.score=parseInt(s.verify_response["acc"]),s.errors_qid=s.verify_response["errors_qid"],e.qualified?(s.pay=s.passpay,e.make_error_samples(s.errors_qid),scroll(0,0)):s.pay=s.basepay})).catch((function(t){s.error_occurred=!0,console.log(t)})),this.loading=!1,window.scrollTo(0,document.body.scrollHeight)},submitHit:function(){if(this.submit=!0,this.attempts>0&&!this.qualified){this.blacklisted=!0;var t=this.protocol+this.backend_endpoint+"/give_up";h.a.get(t,{params:{worker:this.mturk_params.workerId,turkSubmitTo:this.mturk_params.turkSubmitTo}}).then((function(t){self.blacklisted=t.data.blacklisted,self.pay=self.basepay,console.log("User Give up")})).catch((function(t){console.log(t),self.error_occurred=!0}))}this.local_debug_mode?console.log("Local testing mode. Not submitting to mturk."):n["a"].nextTick((function(){document.getElementById("mturk-external-submit-form").submit()}))},make_error_samples:function(t){var e=this;this.error_samples={},Object.values(this.gold_samples).map((function(a,n){t.includes(a.question_id)&&(a.question_id="error-id-"+n,a.candidates1=["1","2"],a.candidates2=["1","2","3","4"],a.picked1=null,a.picked2=null,e.$set(e.error_samples,n+1,a))})),console.log("Complete to generate",this.error_samples.length,"review samples")}}},W=Y,N=(a("034f"),Object(g["a"])(W,i,s,!1,null,null,null)),H=N.exports,D=a("f309");n["a"].use(D["a"]);var M=new D["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(t){return t(H)}}).$mount("#app")},6409:function(t,e,a){t.exports=a.p+"img/whole_architecture.881ffb55.png"},"82fa":function(t,e,a){t.exports=a.p+"img/qualification.2eb3c30c.png"},"85ec":function(t,e,a){},a19b:function(t,e,a){}});
//# sourceMappingURL=app.8705974d.js.map