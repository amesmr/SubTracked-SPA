webpackJsonp([1],{"3EqR":function(e,t){},"4EDL":function(e,t){},BjyU:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r=s("Sazm"),i=s.n(r),n={name:"Navbar",data:function(){return{user:null}},created:function(){var e=this;i.a.auth().onAuthStateChanged(function(t){e.user=t||null})},methods:{logout:function(){var e=this;i.a.auth().signOut().then(function(){e.$router.push({name:"Login"})})}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navbar"},[s("nav",{staticClass:"navbar-color"},[s("div",{staticClass:"container"},[e.user?s("li",{staticClass:"brand-logo left"},[s("router-link",{attrs:{to:{name:"Subscript",params:{id:e.user.uid}}}},[e._v("Subtracked")])],1):e._e(),e._v(" "),e.user?e._e():s("li",{staticClass:"brand-logo left"},[s("router-link",{attrs:{to:{name:"Login"}}},[e._v("Subtracked")])],1),e._v(" "),s("ul",{staticClass:"right"},[e.user?e._e():s("li",[s("router-link",{attrs:{to:{name:"Signup"}}},[e._v("Signup")])],1),e._v(" "),e.user?e._e():s("li",[s("router-link",{attrs:{to:{name:"Login"}}},[e._v("Login")])],1),e._v(" "),e.user?s("li",[e._v(e._s(e.user.email))]):e._e(),e._v(" "),e.user?s("li",[s("a",{on:{click:e.logout}},[e._v("Logout")])]):e._e()])])])])},staticRenderFns:[]};var u=s("VU/8")(n,o,!1,function(e){s("RIvD")},null,null).exports,l=s("mtWM"),c=s.n(l),d={name:"Footer",data:function(){return{results:[]}},mounted:function(){var e=this;c.a.get("/Github").then(function(t){e.results=t.data,console.log(t.data)})}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"page-footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[e._m(0),e._v(" "),s("div",{staticClass:"col l4 offset-l2 s12"},[s("h5",{staticClass:"footer-github white-text"},[e._v("Github Links")]),e._v(" "),s("ul",{staticClass:"footer-github"},[s("li",[s("a",{staticClass:"footer-github grey-text text-lighten-3",attrs:{href:this.results[0].link}},[e._v(" "+e._s(this.results[0].name)+" ")])]),e._v(" "),s("li",[s("a",{staticClass:"footer-github grey-text text-lighten-3",attrs:{href:this.results[1].link}},[e._v(" "+e._s(this.results[1].name)+" ")])]),e._v(" "),s("li",[s("a",{staticClass:"footer-github grey-text text-lighten-3",attrs:{href:this.results[2].link}},[e._v(" "+e._s(this.results[2].name)+" ")])]),e._v(" "),s("li",[s("a",{staticClass:"footer-github grey-text text-lighten-3",attrs:{href:this.results[3].link}},[e._v(" "+e._s(this.results[3].name)+" ")])])])])])]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col l6 s12"},[t("h5",{staticClass:"white-text"},[this._v("About SubTracked")]),this._v(" "),t("p",{staticClass:"footer-text grey-text text-lighten-4"},[this._v("Overwhelmed by subscriptions and free trials? SubTracked keeps track of all your online subscriptions in one convenient app. We monitor your monthly charges and notify you when your free trials are about to expire. Save time. Save money.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer-copyright"},[t("div",{staticClass:"container"},[this._v("\n      © 2018 SubTracked\n        ")])])}]};var v={name:"App",components:{Navbar:u,Footer:s("VU/8")(d,m,!1,function(e){s("cif7")},null,null).exports}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("router-view"),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var f=s("VU/8")(v,p,!1,function(e){s("BjyU")},null,null).exports,g=s("/ocq"),h=(s("3VHS"),i.a.initializeApp({apiKey:"AIzaSyCT-cxaeL9QVljaDNXrDY1KhEdSCYDZ_Po",authDomain:"subtrack-fb-db.firebaseapp.com",databaseURL:"https://subtrack-fb-db.firebaseio.com",projectId:"subtrack-fb-db",storageBucket:"subtrack-fb-db.appspot.com",messagingSenderId:"1044549477444"}).firestore()),b=s("ORum"),_=s.n(b),y=s("+cKO"),j={name:"Signup",data:function(){return{email:null,password:null,repeatPassword:null,alias:null,feedback:null,slug:null}},validations:{email:{email:y.email,required:y.required},password:{required:y.required,minLength:Object(y.minLength)(6)},repeatPassword:{sameAsPassword:Object(y.sameAs)("password")}},methods:{signup:function(){var e=this;if(this.alias&&this.email&&this.password){this.feedback=null,this.slug=_()(this.alias,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0});var t=h.collection("users").doc(this.slug);t.get().then(function(s){s.exists?e.feedback="This alias already exists":i.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(s){return t.set({alias:e.alias,user_id:s.uid}),s}).then(function(t){e.$router.push({name:"Subscript",params:{id:t.uid}})}).catch(function(t){e.feedback=t.message})})}else this.feedback="Please fill in all fields"}}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signup container"},[s("form",{staticClass:"card-panel",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[s("h2",{staticClass:"center signup-text"},[e._v("Signup")]),e._v(" "),s("div",{staticClass:"field",class:{invalid:e.$v.email.$error}},[s("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email"},domProps:{value:e.email},on:{blur:function(t){e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e.$v.email.email?e._e():s("p",[e._v("You must provide a vaild email address")]),e._v(" "),e.$v.email.required?e._e():s("p",[e._v("The email field cannot be empty")])]),e._v(" "),s("div",{staticClass:"field",class:{invalid:e.$v.password.$error}},[s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{blur:[function(t){e.$v.password.$touch()},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.password=t.target.value.trim())}}})]),e.$v.password.required?e._e():s("span",{staticClass:"form-group__message"},[e._v("Password is required.")]),e.$v.password.minLength?e._e():s("span",{staticClass:"form-group__message"},[e._v("Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" letters.")]),e._v(" "),s("div",{staticClass:"field",class:{invalid:e.$v.repeatPassword.$error}},[s("label",{attrs:{for:"password"}},[e._v("Re-Enter Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.repeatPassword,expression:"repeatPassword",modifiers:{trim:!0}}],attrs:{id:"repeatPassword",type:"password"},domProps:{value:e.repeatPassword},on:{blur:[function(t){e.$v.repeatPassword.$touch()},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.repeatPassword=t.target.value.trim())}}})]),e.$v.repeatPassword.sameAsPassword?e._e():s("span",{staticClass:"form-group__message"},[e._v("Passwords must be identical.")]),e._v(" "),s("div",{staticClass:"field"},[s("label",{attrs:{for:"name"}},[e._v("Alias")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.alias,expression:"alias"}],attrs:{id:"name",type:"text"},domProps:{value:e.alias},on:{input:function(t){t.target.composing||(e.alias=t.target.value)}}})]),e._v(" "),e.feedback?s("p",{staticClass:"red-text center"},[e._v(e._s(e.feedback))]):e._e(),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"field center"},[s("button",{staticClass:"btn signup-btn",attrs:{disabled:e.$v.$invalid}},[e._v("Signup")])])])])},staticRenderFns:[]};var x=s("VU/8")(j,C,!1,function(e){s("m8se")},null,null).exports,w={name:"Login",data:function(){return{email:null,password:null,feedback:null}},methods:{login:function(){var e=this;this.email&&this.password?(i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){console.log(t),e.$router.push({name:"Subscript",params:{id:t.uid}})}).catch(function(t){e.feedback=t.message}),this.feedback=null):this.feedback="Please fill out both fields"}}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login container"},[s("form",{staticClass:"card-panel",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("h2",{staticClass:"center login-text"},[e._v("Login")]),e._v(" "),s("div",{staticClass:"field"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),e.feedback?s("p",{staticClass:"red-text center"},[e._v(e._s(e.feedback))]):e._e(),e._v(" "),s("br"),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field center"},[t("button",{staticClass:"btn login-btn :hover"},[this._v("Login")])])}]};var q=s("VU/8")(w,k,!1,function(e){s("3EqR")},null,null).exports,P=s("bOdI"),S=s.n(P),$=s("gRE1"),F=s.n($),E=s("fZjL"),D=s.n(E),R={name:"Total",data:function(){return{subTotal:"",annualTotal:""}},created:function(){var e=this;h.collection("subscriptions").where("to","==",i.a.auth().currentUser.uid).onSnapshot(function(t){t.docChanges.forEach(function(s){if("added"==s.type||"modified"==s.type||"removed"==s.type){var a=0,r=0,i=0;t.forEach(function(e){"Monthly"!==e.data().frequency&&"monthly"!==e.data().frequency||(a+=parseFloat(e.data().price)),"Annually"!==e.data().frequency&&"annually"!==e.data().frequency||(r+=parseFloat(e.data().price),console.log(r)),"Quarterly"!==e.data().frequency&&"quarterly"!==e.data().frequency||(i+=parseFloat(e.data().price),console.log(i)),console.log(e.data().frequency),console.log(r)});var n=r/12;console.log(n);var o=a+n+i/4,u=12*o;console.log(o),e.subTotal=o.toFixed(2).toString(),e.annualTotal=u.toFixed(2).toString()}})})}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("Monthly Expenses: $"+this._s(this.subTotal)+" ")]),this._v(" "),t("p",[this._v("Annual Expenses: $"+this._s(this.annualTotal)+" ")])])},staticRenderFns:[]};var N={name:"Subscript",components:{PieChart:{extends:s("UlOv").a,created:function(){var e=this;h.collection("subscriptions").where("to","==",i.a.auth().currentUser.uid).onSnapshot(function(t){t.docChanges.forEach(function(s){if("added"==s.type||"modified"==s.type||"removed"==s.type){var a={};t.forEach(function(e){var t=e.data().category,s=parseFloat(e.data().price);"Annually"!==e.data().frequency&&"annually"!==e.data().frequency||(s=parseFloat(e.data().price)/12,console.log(s)),"Quarterly"!==e.data().frequency&&"quarterly"!==e.data().frequency||(s=parseFloat(e.data().price)/4,console.log(s)),a[t]?(console.log(a),a[t]+=parseFloat(s.toFixed(2))):a[t]=parseFloat(s.toFixed(2))}),console.log(a),e.renderChart({labels:D()(a),datasets:[{backgroundColor:["#31708E","#5085A5","#8FC1E3","#687864","#31708E","#5085A5","#8FC1E3","#687864"],data:F()(a)}]},{responsive:!0,maintainAspectRatio:!1})}}).catch(function(e){console.log("Error getting documents: ",e)})})}},Total:s("VU/8")(R,z,!1,function(e){s("4EDL")},null,null).exports},data:function(){return{messages:[],messageText:"",nickname:"",subCategory:"",catOptions:[{text:"Food",value:"Food"},{text:"Entertainment",value:"Entertainment"},{text:"Games",value:"Games"},{text:"Books",value:"Shopping"},{text:"Music",value:"Music"},{text:"Miscellaneous",value:"Miscellaneous"}],subPrice:"",subFrequency:"",subStartDate:"",subReminder:"",editingMessage:null,user:null}},validations:S()({nickname:{required:y.required},subCategory:{required:y.required},subPrice:{required:y.required},subFrequency:{required:y.required},subStartDate:{required:y.required}},"subStartDate",{required:y.required}),created:function(){var e=this,t=h.collection("users");t.where("user_id","==",i.a.auth().currentUser.uid).get().then(function(t){t.forEach(function(t){e.user=t.data(),e.user.id=t.id})}),t.doc(this.$route.params.id).get().then(function(t){e.user=t.data()}),h.collection("subscriptions").where("to","==",this.$route.params.id).onSnapshot(function(t){t.docChanges.forEach(function(t){if("added"==t.type)e.messages.push({id:t.doc.id,text:t.doc.data().text,nickname:t.doc.data().nickname,price:t.doc.data().price,category:t.doc.data().category,frequency:t.doc.data().frequency,date:t.doc.data().date,reminder:t.doc.data().reminder});else if("removed"==t.type){var s=e.messages.indexOf(t.doc.data().id);e.messages.splice(s,1),console.log(s)}else if("modified"==t.type){console.log("FINDING");var a=e.messages.find(function(e){return e.id===t.doc.id}),r=e.messages.indexOf(a);console.log(r),e.messages[r].text=t.doc.data().text,e.messages[r].category=t.doc.data().category,e.messages[r].price=t.doc.data().price,e.messages[r].frequency=t.doc.data().frequency,e.messages[r].date=t.doc.data().date,e.messages[r].reminder=t.doc.data().reminder,console.log(t.doc.data())}})})},methods:{storeMessage:function(){h.collection("subscriptions").add({to:this.$route.params.id,text:this.messageText,nickname:this.nickname,price:this.subPrice,category:this.subCategory,frequency:this.subFrequency,date:this.subStartDate,reminder:this.subReminder}),this.messageText="",this.nickname="",this.subCategory="",this.subPrice="",this.subFrequency="",this.subStartDate="",this.subReminder=""},deleteMessage:function(e){h.collection("subscriptions").doc(e.id).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)}),console.log(e.id)},editMessage:function(e){this.editingMessage=e,this.messageText=e.text,this.subCategory=e.category,this.subPrice=e.price,this.subFrequency=e.frequency,this.subStartDate=e.date,this.subReminder=e.reminder},cancelEditing:function(){this.editingMessage=null,this.messageText="",this.subCategory="",this.subPrice="",this.subFrequency="",this.subStartDate="",this.subReminder=""},updateMessage:function(){h.collection("subscriptions").doc(this.editingMessage.id).update({text:this.messageText,category:this.subCategory,price:this.subPrice,frequency:this.subFrequency,date:this.subStartDate,reminder:this.subReminder}),this.cancelEditing()}}},M={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("br"),e._v(" "),s("PieChart"),e._v(" "),s("Total"),e._v(" "),s("div",{staticClass:"container",attrs:{id:"subscription"}},[e._l(e.messages,function(t,a){return s("div",{key:a,staticClass:"card subcard"},[s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(t.nickname))]),e._v(" "),t!==e.editingMessage?s("p",{staticClass:"card-text"},[e._v("Category: "+e._s(t.category))]):s("div",[s("p",[e._v("Category:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.subCategory,expression:"subCategory"}],staticClass:"form-control",domProps:{value:e.subCategory},on:{input:function(t){t.target.composing||(e.subCategory=t.target.value)}}})]),e._v(" "),t!==e.editingMessage?s("p",{staticClass:"card-text"},[e._v("Price: $"+e._s(t.price))]):s("div",[s("p",[e._v("Price:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.subPrice,expression:"subPrice"}],staticClass:"form-control",domProps:{value:e.subPrice},on:{input:function(t){t.target.composing||(e.subPrice=t.target.value)}}})]),e._v(" "),t!==e.editingMessage?s("p",{staticClass:"card-text"},[e._v("Frequency: "+e._s(t.frequency))]):s("div",[s("p",[e._v("Frequency:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.subFrequency,expression:"subFrequency"}],staticClass:"form-control",domProps:{value:e.subFrequency},on:{input:function(t){t.target.composing||(e.subFrequency=t.target.value)}}})]),e._v(" "),t!==e.editingMessage?s("p",{staticClass:"card-text"},[e._v("Start Date: "+e._s(t.date))]):s("div",[s("p",[e._v("Start Date:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.subStartDate,expression:"subStartDate"}],staticClass:"form-control",domProps:{value:e.subStartDate},on:{input:function(t){t.target.composing||(e.subStartDate=t.target.value)}}})]),e._v(" "),t!==e.editingMessage?s("p",{staticClass:"card-text"},[e._v("Reminder: "+e._s(t.reminder))]):s("div",[s("p",[e._v("Reminder:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.subReminder,expression:"subReminder"}],staticClass:"form-control",domProps:{value:e.subReminder},on:{input:function(t){t.target.composing||(e.subReminder=t.target.value)}}})]),e._v(" "),t!==e.editingMessage?s("p",{staticClass:"card-text"},[e._v("Message: "+e._s(t.text))]):s("div",[s("p",[e._v("Message:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageText,expression:"messageText"}],staticClass:"form-control",domProps:{value:e.messageText},on:{input:function(t){t.target.composing||(e.messageText=t.target.value)}}})]),e._v(" "),t!==e.editingMessage?s("div",[s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),e.deleteMessage(t)}}},[e._v("Delete")]),e._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),e.editMessage(t)}}},[e._v("Edit")])]):s("div",[s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.cancelEditing(t)}}},[e._v("Cancel")]),e._v(" "),s("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.updateMessage(t)}}},[e._v("Update")])])])])}),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"card card-outer"},[e.editingMessage?e._e():s("form",{on:{submit:function(t){return t.preventDefault(),e.storeMessage(t)}}},[s("div",{staticClass:"form-group",class:{invalid:e.$v.nickname.$error}},[s("label",[e._v("Subscription:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.nickname,expression:"nickname",modifiers:{trim:!0}}],staticClass:"form-control",domProps:{value:e.nickname},on:{blur:[function(t){e.$v.nickname.$touch()},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.nickname=t.target.value.trim())}}}),e._v(" "),e.$v.nickname.required?e._e():s("p",[e._v("You must enter a subscription")])]),e._v(" "),s("div",{staticClass:"form-group",class:{invalid:e.$v.subCategory.$error}},[s("label",[e._v("Category:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.subCategory,expression:"subCategory",modifiers:{trim:!0}}],staticClass:"form-control",domProps:{value:e.subCategory},on:{blur:[function(t){e.$v.subCategory.$touch()},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.subCategory=t.target.value.trim())}}}),e._v(" "),e.$v.subCategory.required?e._e():s("p",[e._v("You must select a valid category")])]),e._v(" "),s("div",{staticClass:"form-group",class:{invalid:e.$v.subPrice.$error}},[s("label",[e._v("Price:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.subPrice,expression:"subPrice",modifiers:{number:!0}}],staticClass:"form-control",domProps:{value:e.subPrice},on:{blur:[function(t){e.$v.subPrice.$touch()},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.subPrice=e._n(t.target.value))}}}),e._v(" "),e.$v.subPrice.required?e._e():s("p",[e._v("You must enter a valid price")])]),e._v(" "),s("div",{staticClass:"form-group",class:{invalid:e.$v.subFrequency.$error}},[s("label",[e._v("Frequency:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subFrequency,expression:"subFrequency"}],staticClass:"form-control",domProps:{value:e.subFrequency},on:{blur:function(t){e.$v.subFrequency.$touch()},input:function(t){t.target.composing||(e.subFrequency=t.target.value)}}}),e._v(" "),e.$v.subFrequency.required?e._e():s("p",[e._v("You must enter the subscription frequency")])]),e._v(" "),s("div",{staticClass:"form-group",class:{invalid:e.$v.subStartDate.$error}},[s("label",[e._v("Start Date:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subStartDate,expression:"subStartDate"}],staticClass:"form-control",domProps:{value:e.subStartDate},on:{blur:function(t){e.$v.subStartDate.$touch()},input:function(t){t.target.composing||(e.subStartDate=t.target.value)}}}),e._v(" "),e.$v.subStartDate.required?e._e():s("p",[e._v("You must enter a valid start date for your subscription")])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Reminder:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subReminder,expression:"subReminder"}],staticClass:"form-control",domProps:{value:e.subReminder},on:{input:function(t){t.target.composing||(e.subReminder=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Message:")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageText,expression:"messageText"}],staticClass:"form-control",domProps:{value:e.messageText},on:{input:function(t){t.target.composing||(e.messageText=t.target.value)}}})]),e._v(" "),s("br"),e._v(" "),s("button",{staticClass:"btn btn-primary btn-send",attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Add Subscription")])])])],2),e._v(" "),s("br"),e._v(" "),s("br")],1)},staticRenderFns:[]};var T=s("VU/8")(N,M,!1,function(e){s("h17X")},null,null).exports;a.a.use(g.a);var U=new g.a({routes:[{path:"/",name:"Login",component:q},{path:"/signup",name:"Signup",component:x},{path:"/subscript/:id",name:"Subscript",component:T,meta:{requiresAuth:!0}}]});U.beforeEach(function(e,t,s){e.matched.some(function(e){return e.meta.requiresAuth})?i.a.auth().currentUser?s():s({name:"Login"}):s()});var L=U,O=s("ESwS"),A=s.n(O);a.a.use(A.a),a.a.config.productionTip=!1;i.a.auth().onAuthStateChanged(function(){new a.a({el:"#app",router:L,components:{App:f},template:"<App/>"})})},RIvD:function(e,t){},cif7:function(e,t){},h17X:function(e,t){},m8se:function(e,t){},uslO:function(e,t,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return s(i(e))}function i(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.7df9e97eac243fd61370.js.map