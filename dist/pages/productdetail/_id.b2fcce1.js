(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{635:function(t,o,n){var content=n(651);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("73dc3f34",content,!0,{sourceMap:!1})},650:function(t,o,n){"use strict";n(635)},651:function(t,o,n){(o=n(47)(!1)).push([t.i,'.productdetail-wrap[data-v-63b528b1]{width:1190px;margin:0 auto}.productdetail-wrap .crumbs[data-v-63b528b1]{margin-top:20px}.productdetail-wrap .shop-box[data-v-63b528b1]{display:flex;margin:26px 0 42px}.productdetail-wrap .shop-box .shop-img[data-v-63b528b1]{width:400px;height:294px;background:#fff;border:1px solid #e5e5e5;position:relative}.productdetail-wrap .shop-box .shop-img img[data-v-63b528b1]{height:244px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.productdetail-wrap .shop-box .shop-detail[data-v-63b528b1]{margin-left:47px}.productdetail-wrap .shop-box .shop-detail--title[data-v-63b528b1]{font-size:20px;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;color:#3f3f3f;line-height:28px}.productdetail-wrap .shop-box .shop-detail--subtitle[data-v-63b528b1]{font-size:14px;font-family:PingFangSC,PingFangSC-Regular;font-weight:400;color:#3f3f3f;line-height:20px;padding:10px 0 30px}.productdetail-wrap .shop-box .shop-detail--info__item span[data-v-63b528b1]{font-size:14px;font-family:PingFangSC,PingFangSC-Regular;font-weight:400;color:#a4a4a4}.productdetail-wrap .shopintr-box[data-v-63b528b1]{width:850px}.productdetail-wrap .shopintr-box .shopintr-info[data-v-63b528b1]{border:1px solid #e5e5e5;margin-top:30px}.productdetail-wrap .shopintr-box .shopintr-info--item[data-v-63b528b1]{display:flex;font-family:PingFangSC,PingFangSC-Regular;font-weight:400;font-size:14px}.productdetail-wrap .shopintr-box .shopintr-info--item[data-v-63b528b1]:not(:last-child){border-bottom:1px solid #e5e5e5}.productdetail-wrap .shopintr-box .shopintr-info--item__title[data-v-63b528b1]{width:141px;padding:12px 0;color:#323232;text-align:center;background:#f7f7f7;border-right:1px solid #e5e5e5}.productdetail-wrap .shopintr-box .shopintr-info--item__text[data-v-63b528b1]{width:709px;color:#666;padding:12px 0 12px 23px}.productdetail-wrap .instr-box[data-v-63b528b1]{margin-top:46px;margin-bottom:100px}.productdetail-wrap .instr-box .instr-list[data-v-63b528b1]{margin-top:30px}.productdetail-wrap .instr-box .instr-list p[data-v-63b528b1]{font-size:14px;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;color:#666}.productdetail-wrap .instr-box .instr-list img[data-v-63b528b1]{width:100%;display:block}.productdetail-wrap .product-title[data-v-63b528b1]{font-size:16px;font-family:PingFangSC,PingFangSC-Medium;font-weight:500;color:#0063cb;line-height:22px;position:relative}.productdetail-wrap .product-title[data-v-63b528b1]:after{position:absolute;left:0;bottom:-8px;content:"";width:63px;height:3px;background:#0063cb}',""]),t.exports=o},664:function(t,o,n){"use strict";n.r(o);n(36);var data=n(624),e={data:function(){return{detail:{}}},created:function(){this.detail=Object(data.ProductData)()[this.$route.params.id].detail},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))}},d=(n(650),n(53)),component=Object(d.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"productdetail-wrap"},[t.detail.detailInfo?n("div",{staticClass:"crumbs"},[t._v("\n    产品中心 > "+t._s(t.detail.detailInfo.title)+"\n  ")]):t._e(),t._v(" "),t.detail.detailInfo?n("div",{staticClass:"shop-box"},[n("div",{staticClass:"shop-img"},[n("img",{attrs:{src:t.detail.detailInfo.img,alt:t.detail.detailInfo.title}})]),t._v(" "),n("div",{staticClass:"shop-detail"},[n("div",{staticClass:"shop-detail--title"},[t._v(t._s(t.detail.detailInfo.title))]),t._v(" "),n("div",{staticClass:"shop-detail--subtitle"},[t._v("\n        "+t._s(t.detail.detailInfo.subtitle)+"\n      ")]),t._v(" "),n("div",{staticClass:"shop-detail--info"},[n("p",{staticClass:"shop-detail--info__item"},[n("span",[t._v("通用名称：")]),t._v(t._s(t.detail.detailInfo.productname)+"\n        ")]),t._v(" "),n("p",{staticClass:"shop-detail--info__item"},[n("span",[t._v("产品编号：")]),t._v(t._s(t.detail.detailInfo.productnum)+"\n        ")]),t._v(" "),n("p",{staticClass:"shop-detail--info__item"},[n("span",[t._v("批准文号：")]),t._v(t._s(t.detail.detailInfo.productdnum)+"\n        ")]),t._v(" "),n("p",{staticClass:"shop-detail--info__item"},[n("span",[t._v("产品规格：")]),t._v(t._s(t.detail.detailInfo.productspec)+"\n        ")]),t._v(" "),n("p",{staticClass:"shop-detail--info__item"},[n("span",[t._v("生产厂家：")]),t._v(t._s(t.detail.detailInfo.productmanu)+"\n        ")])])])]):t._e(),t._v(" "),n("div",{staticClass:"shopintr-box"},[n("div",{staticClass:"product-title"},[t._v("商品介绍")]),t._v(" "),n("div",{staticClass:"shopintr-info"},[n("div",{staticClass:"shopintr-info--item"},[n("div",{staticClass:"shopintr-info--item__title"},[t._v("产品名称")]),t._v(" "),n("div",{staticClass:"shopintr-info--item__text"},[t._v("\n          "+t._s(t.detail.productintr.name)+"\n        ")])]),t._v(" "),n("div",{staticClass:"shopintr-info--item"},[n("div",{staticClass:"shopintr-info--item__title"},[t._v("主要原料")]),t._v(" "),n("div",{staticClass:"shopintr-info--item__text"},[t._v("\n          "+t._s(t.detail.productintr.raw)+"\n        ")])]),t._v(" "),n("div",{staticClass:"shopintr-info--item"},[n("div",{staticClass:"shopintr-info--item__title"},[t._v("主要作用")]),t._v(" "),n("div",{staticClass:"shopintr-info--item__text"},[t._v("\n          "+t._s(t.detail.productintr.effect)+"\n        ")])]),t._v(" "),n("div",{staticClass:"shopintr-info--item"},[n("div",{staticClass:"shopintr-info--item__title"},[t._v("产品规格")]),t._v(" "),n("div",{staticClass:"shopintr-info--item__text"},[t._v("\n          "+t._s(t.detail.productintr.dnum)+"\n        ")])]),t._v(" "),n("div",{staticClass:"shopintr-info--item"},[n("div",{staticClass:"shopintr-info--item__title"},[t._v("用法用量")]),t._v(" "),n("div",{staticClass:"shopintr-info--item__text"},[t._v("\n          "+t._s(t.detail.productintr.cons)+"\n        ")])]),t._v(" "),n("div",{staticClass:"shopintr-info--item"},[n("div",{staticClass:"shopintr-info--item__title"},[t._v("生产企业")]),t._v(" "),n("div",{staticClass:"shopintr-info--item__text"},[t._v("\n          "+t._s(t.detail.productintr.enterprise)+"\n        ")])])])]),t._v(" "),n("div",{staticClass:"instr-box"},[n("div",{staticClass:"product-title"},[t._v("说 明 书")]),t._v(" "),n("div",{staticClass:"instr-list"},["text"==t.detail.instructions.type?t._l(t.detail.instructions.list,(function(o,e){return n("p",{key:e},[t._v("\n          "+t._s(o)+"\n        ")])})):t._l(t.detail.instructions.list,(function(t,o){return n("img",{key:o,attrs:{src:t,alt:"product_"+o}})}))],2)])])}),[],!1,null,"63b528b1",null);o.default=component.exports}}]);