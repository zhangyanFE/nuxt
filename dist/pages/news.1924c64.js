(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{624:function(t,e,n){var content=n(626);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("4dd219c0",content,!0,{sourceMap:!1})},625:function(t,e,n){"use strict";n(624)},626:function(t,e,n){(e=n(47)(!1)).push([t.i,".gutter-wrap[data-v-39e9a5d6]{width:1190px;margin:0 auto}.gutter-wrap .title[data-v-39e9a5d6]{width:56px;height:20px;font-size:14px;font-family:PingFangSC,PingFangSC-Medium;font-weight:700;text-align:left;color:#3f3f3f;line-height:20px;margin-bottom:26px}.gutter-wrap .ant-row[data-v-39e9a5d6]{margin-left:0!important;margin-right:0!important}.gutter-wrap .ant-row .gutter-row[data-v-39e9a5d6]{padding-left:0!important;padding-right:30px!important;margin-bottom:30px}.gutter-wrap .gutter-box[data-v-39e9a5d6]{position:relative;background:#fff;border:1px solid #e5e5e5;padding:23px 0 13px}.gutter-wrap .gutter-box .row-title[data-v-39e9a5d6]{font-size:20px;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;color:#3f3f3f;line-height:28px;padding:0 15px;margin-bottom:16px}.gutter-wrap .gutter-box .desc[data-v-39e9a5d6]{color:#3f3f3f;line-height:24px;padding:0 15px}.gutter-wrap .gutter-box .desc[data-v-39e9a5d6],.gutter-wrap .gutter-box .time[data-v-39e9a5d6]{font-size:14px;font-family:PingFangSC,PingFangSC-Regular;font-weight:400}.gutter-wrap .gutter-box .time[data-v-39e9a5d6]{color:#b0b0b0;line-height:20px;position:absolute;bottom:-5px;left:15px}.gutter-wrap[data-v-39e9a5d6] .ant-row>div{background:transparent;border:0}",""]),t.exports=e},627:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"标题"},styles:{type:Object,default:function(){return{height:"287px",margin:""}}},list:{type:Array,default:function(){return[]}}},methods:{toDetail:function(t,e){t.isJump&&this.$router.push("newsdetail/".concat(e))}}},o=(n(625),n(71)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gutter-wrap"},[t.title?n("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("a-row",{attrs:{gutter:16}},t._l(t.list,(function(e,r){return n("a-col",{key:r,staticClass:"gutter-row",attrs:{span:8},on:{click:function(n){return t.toDetail(e,r)}}},[n("div",{staticClass:"gutter-box",style:t.styles},[n("div",{staticClass:"row-title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n          "+t._s(e.desc)+"\n        ")]),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(e.date))])])])})),1)],1)}),[],!1,null,"39e9a5d6",null);e.default=component.exports},630:function(t,e,n){var content=n(641);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("463c6da5",content,!0,{sourceMap:!1})},640:function(t,e,n){"use strict";n(630)},641:function(t,e,n){(e=n(47)(!1)).push([t.i,".news-wrap[data-v-6acb902b]{margin-top:40px}",""]),t.exports=e},656:function(t,e,n){"use strict";n.r(e);n(36);var r=n(623),o={data:function(){return{list:Object(r.NewsData)()}},head:function(){return{title:"新闻中心"}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))}},l=(n(640),n(71)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"news-wrap"},[e("Card",{attrs:{title:"新闻中心",list:this.list}})],1)}),[],!1,null,"6acb902b",null);e.default=component.exports;installComponents(component,{Card:n(627).default})}}]);