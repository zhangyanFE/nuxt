(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{631:function(t,r,o){var content=o(643);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("24ba8604",content,!0,{sourceMap:!1})},642:function(t,r,o){"use strict";o(631)},643:function(t,r,o){(r=o(47)(!1)).push([t.i,".product-wrap[data-v-9c899b5e]{width:1190px;margin:0 auto}.product-wrap .product-title[data-v-9c899b5e]{font-size:14px;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;color:#3f3f3f;line-height:20px;margin-top:15px;margin-bottom:26px}.product-wrap .ant-row[data-v-9c899b5e]{margin-left:0!important;margin-right:0!important}.product-wrap .ant-row .gutter-row[data-v-9c899b5e]{padding-left:0!important;padding-right:30px!important;margin-bottom:30px}.product-wrap .gutter-box[data-v-9c899b5e]{position:relative;height:265px;background:#fff;border:1px solid #e5e5e5;padding:23px 0 13px;cursor:pointer}.product-wrap .gutter-box img[data-v-9c899b5e]{display:block;height:150px;margin:0 auto;background:#999}.product-wrap .gutter-box .title[data-v-9c899b5e]{font-size:20px;color:#3f3f3f;line-height:28px}.product-wrap .gutter-box .more[data-v-9c899b5e],.product-wrap .gutter-box .title[data-v-9c899b5e]{font-family:PingFangSC,PingFangSC-Medium;font-weight:500;text-align:center}.product-wrap .gutter-box .more[data-v-9c899b5e]{width:123px;height:31px;line-height:31px;border:1px solid #b2b2b2;margin:12px auto;font-size:14px;color:#387cff}.product-wrap .gutter-wrap[data-v-9c899b5e] .ant-row>div{background:transparent;border:0}",""]),t.exports=r},657:function(t,r,o){"use strict";o.r(r);o(36);var e=o(623),n=o(6).a.extend({data:function(){return{list:Object(e.ProductData)()}},head:function(){return{title:"产品中心"}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))},methods:{toDetail:function(t){this.$router.push("productdetail/".concat(t))}}}),c=(o(642),o(71)),component=Object(c.a)(n,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"product-wrap"},[o("div",{staticClass:"product-title"},[t._v("产品中心")]),t._v(" "),o("div",{staticClass:"product-card"},[o("a-row",{attrs:{gutter:16}},t._l(t.list,(function(r,e){return o("a-col",{key:e,staticClass:"gutter-row",attrs:{span:8},on:{click:function(r){return t.toDetail(e)}}},[o("div",{staticClass:"gutter-box"},[o("img",{attrs:{src:r.img,alt:r.title}}),t._v(" "),o("div",{staticClass:"title"},[t._v(t._s(r.title))]),t._v(" "),o("div",{staticClass:"more"},[t._v(t._s(r.more))])])])})),1)],1)])}),[],!1,null,"9c899b5e",null);r.default=component.exports}}]);