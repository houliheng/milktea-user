webpackJsonp([8],{JoIB:function(e,t){},"NTb/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("hpcr"),s("62KO");var o=s("Y52p"),n=(s("rGqP"),s("7Ah8"),s("odqc"),s("Znkm"),s("ALGc"),s("gHqA")),i=(new n.a,o.a,null),r=new n.a,a={name:"register",data:function(){return{holdPhone:this.$t("register.holdPhone"),holdPassword:this.$t("register.holdPassword"),inputVerificationCode:this.$t("register.inputVerificationCode"),isMsgShow:!1,countDown:120,sjtLogo:"../../../static/images/mine/sjtLogin.jpg",sjtLogo2:"../../../static/images/mine/sjtLogo1.jpg",iconType:"",register:{telephone:null,identifyCode:null,passwords:null},isUserInsert:!0,comparePollCodeData:null,userNo:null}},components:{XImg:o.a},mounted:function(){this.initData()},methods:{initData:function(){},open:function(e){this.$router.openPage(e)},getMsgCode:function(){var e=this;this.register.telephone?(this.isMsgShow=!0,i=setInterval(function(){e.countDown--,e.countDown<=0&&(clearInterval(i),e.isMsgShow=!1,e.countDown=120)},1e3),console.log(r.getItem("weixinOpenid").toString()),console.log("DB.getItem(weixinOpenid).toString()"),r.getItem("weixinOpenid").toString()?this.findUserByTelephoneInWx():this.findUserByTelephoneInWeb()):this.$vux.toast.show({text:this.$t("reminder.writePhoneNumber"),type:"text"})},userRegister:function(){console.log(this.register.telephone),console.log(this.register.passwords),console.log(this.register.identifyCode),this.register.telephone&&this.register.passwords&&this.register.identifyCode?this.comparePollCode():this.$vux.toast.show({text:this.$t("reminder.correctInformation"),type:"text"})},findUserByTelephoneInWeb:function(){var e=this;this.$http.get("/userRegister/findUserByTelephone",{params:{telephone:this.register.telephone}}).then(function(t){if(200==t.status&&"00000"==t.data.rspCode){if(console.log(t.data.data),console.log("根据手机号码查找用户移动端"),t.data.data)return e.$vux.toast.show({text:e.$t("reminder.pleaseLogout"),type:"text"}),clearInterval(i),e.isMsgShow=!1,e.countDown=120,!1;e.isUserInsert=!0,e.createPollCode()}}).catch(function(e){console.log(e)})},findUserByTelephoneInWx:function(){var e=this;this.$http.get("/userRegister/findUserByTelephone",{params:{telephone:this.register.telephone}}).then(function(t){if(200==t.status&&"00000"==t.data.rspCode)if(console.log(t.data.data),console.log("根据手机号码查找用户微商城端"),t.data.data){if(t.data.data.weixinOpenid)return e.$vux.toast.show({text:"该手机号已经绑定过微信，请使用是其他手机号绑定!",type:"text"}),clearInterval(i),e.isMsgShow=!1,e.countDown=120,!1;e.isUserInsert=!1,e.createPollCode()}else e.isUserInsert=!0,e.createPollCode()}).catch(function(e){console.log(e)})},createPollCode:function(){var e=this;this.$http.get("/userRegister/createPollCode",{params:{telephone:this.register.telephone}}).then(function(t){console.log("发送短信成功"),200==t.status&&(console.log(t.data),t.data&&e.$vux.toast.show({text:e.$t("reminder.pleaseCheckInfo"),type:"text"}))}).catch(function(e){console.log(e)})},comparePollCode:function(){var e=this;this.comparePollCodeData=null,this.$http.post("/userRegister/comparePollCode",{telephone:this.register.telephone,identifyCode:this.register.identifyCode}).then(function(t){if(console.log("比较验证码成功"),console.log(t.data),200==t.status){if("en"==r.getItem("localLang").toString())var s=t.data.usErrorMsg;else s=t.data.cnErrorMsg;switch(t.data.rspCode){case"00000":e.comparePollCodeData=1;break;case"00008":e.$vux.toast.show({text:s,type:"text"});break;default:e.$vux.toast.show({text:"server error！",type:"text"})}console.log(e.comparePollCodeData),e.comparePollCodeData&&(e.isUserInsert?e.insertTel():e.bindOpenidTel())}}).catch(function(e){console.log(e)})},bindOpenidTel:function(){var e=this;this.$http.post("/userRegister/bindOpenidTel",{userNo:r.getItem("userNo").toString(),telephone:this.register.telephone,userPassword:this.register.passwords,weixinOpenid:r.getItem("weixinOpenid").toString()}).then(function(t){console.log(t),200==t.status&&"00000"==t.data.rspCode&&(e.$vux.toast.show({text:e.$t("reminder.loginSucc"),type:"text"}),e.findUserByTelephoneEnd(),setTimeout(function(){e.$router.openPage("/closeAccount")},1e3))}).catch(function(e){console.log(e)})},insertTel:function(){var e=this;this.$http.post("/userRegister/insert",{telephone:this.register.telephone,userPassword:this.register.passwords,weixinOpenid:r.getItem("weixinOpenid").toString(),userName:this.register.telephone}).then(function(t){console.log(t),200==t.status&&"00000"==t.data.rspCode&&(e.$vux.toast.show({text:e.$t("reminder.loginSucc"),type:"text"}),e.findUserByTelephoneEnd(),setTimeout(function(){e.$router.openPage("/closeAccount")},1e3))}).catch(function(e){console.log(e)})},findUserByTelephoneEnd:function(){this.$http.get("/userRegister/findUserByTelephone",{params:{telephone:this.register.telephone}}).then(function(e){if(200==e.status&&"00000"==e.data.rspCode&&(console.log("根据手机号码查找用户,确定用户已经存在了，存储userNo,telephone"),console.log(e.data.data),e.data.data)){var t={telephone:e.data.data.telephone,userNo:e.data.data.userNo,weixinOpenid:e.data.data.weixinOpenid};console.log("telUserNo"),console.log(t),r.setItem("telUserNo",t)}}).catch(function(e){console.log(e)})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-init"},[s("x-img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.sjtLogo,expression:"sjtLogo"}],staticClass:"sjtLogin-bImg"}),e._v(" "),s("div",{staticClass:"sjtLogin-cont"},[s("div",{staticClass:"sjtlc-logo"},[s("x-img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.sjtLogo2,expression:"sjtLogo2"}],staticClass:"sjtlcl-img"}),e._v(" "),s("div",[e._v("素匠·泰茶")])],1),e._v(" "),s("div",{staticClass:"sjtlc-title"},[e._v("\n\t\t\t"+e._s(e.$t("register.usersRegister"))+"\n\t\t")]),e._v(" "),s("div",{staticClass:"sjtlc-cont"},[s("group",{staticClass:"sjtlc-group"},[s("x-input",{staticClass:"gInput",attrs:{placeholder:e.holdPhone,"placeholder-align":"left"},model:{value:e.register.telephone,callback:function(t){e.$set(e.register,"telephone",t)},expression:"register.telephone"}})],1),e._v(" "),s("group",{staticClass:"sjtlc-group"},[s("x-input",{staticClass:"gInput",attrs:{placeholder:e.inputVerificationCode,"placeholder-align":"left"},model:{value:e.register.identifyCode,callback:function(t){e.$set(e.register,"identifyCode",t)},expression:"register.identifyCode"}},[e.isMsgShow?s("x-button",{staticClass:"countDown",attrs:{slot:"right",type:"default",mini:"",disabled:""},slot:"right"},[e._v("\n\t\t\t\t\t\t"+e._s(e.$t("register.regain"))+"("+e._s(e.countDown)+")\n\t\t\t\t\t")]):s("x-button",{attrs:{slot:"right",type:"primary",mini:""},nativeOn:{click:function(t){return e.getMsgCode(t)}},slot:"right"},[e._v(e._s(e.$t("register.getCode")))])],1)],1),e._v(" "),s("group",{staticClass:"sjtlc-group"},[s("x-input",{staticClass:"gInput",attrs:{placeholder:e.holdPassword},model:{value:e.register.passwords,callback:function(t){e.$set(e.register,"passwords",t)},expression:"register.passwords"}})],1),e._v(" "),s("div",{staticClass:"sjtlc-foot"},[s("div",{on:{click:function(t){e.open("/login")}}},[e._v(e._s(e.$t("register.RegisteredTologin")))])])],1),e._v(" "),s("div",{staticClass:"sjtlc-btn"},[s("x-button",{staticClass:"login-btn",attrs:{type:"primary"},nativeOn:{click:function(t){e.userRegister()}}},[e._v(e._s(e.$t("login.login")))])],1)])],1)},staticRenderFns:[]};var c=s("VU/8")(a,l,!1,function(e){s("JoIB")},null,null);t.default=c.exports}});
//# sourceMappingURL=8.0e41a474bdcb3aab0beb.js.map