webpackJsonp([5],{Holf:function(t,e){},xCET:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mrl8"),a={data:function(){return{id:this.$route.query.id,vedio:s.a.data[this.$route.query.id-1]}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"title"},[i("b",[t._v(t._s(t.vedio.title))]),t._v(" "),i("div",[i("b",[t._v("作者：")]),t._v(t._s(t.vedio.teacher)+"\n          "),i("b",[t._v("时间：")]),t._v(t._s(t.vedio.time)+"\n          "),i("b",[t._v("售价：")]),t._v(t._s(t.vedio.price)+"\n        ")])])]),t._v(" "),i("div",[i("share",{attrs:{config:t.config,"data-disabled":"google,twitter,facebook,linkedin,douban,tencent,diandian","data-qq-title":"好的源码，大家分享"}}),t._v(" "),i("div",{staticClass:"introduce"},[i("b",[t._v("介绍 ")]),t._v(t._s(t.vedio.remark)+"\n      ")]),t._v(" "),t._l(t.vedio.json,function(e){return i("div",{key:e},["img"===e.type?i("div",{staticClass:"img"},[i("img",{attrs:{src:e.content}})]):t._e(),t._v(" "),"img_small"===e.type?i("div",{staticClass:"img_small"},[i("el-row",{attrs:{gutter:24}},t._l(e.content,function(t){return i("div",{key:t},[i("el-col",{attrs:{span:8}},[i("img",{attrs:{src:t}})])],1)}),0)],1):t._e(),t._v(" "),"img_big"===e.type?i("div",{staticClass:"img_big"},[i("el-row",{attrs:{gutter:24}},t._l(e.content,function(t){return i("div",{key:t},[i("el-col",{attrs:{span:24}},[i("img",{attrs:{src:t}})])],1)}),0)],1):t._e(),t._v(" "),"text"===e.type?i("div",{staticClass:"text"},[t._v("\n          "+t._s(e.content)+"\n        ")]):t._e(),t._v(" "),"vedio"===e.type?i("div",{staticClass:"vedio"},[t._v("\n          百度网盘地址："),i("a",{attrs:{href:e.url,target:"_Blank"}},[i("span",[t._v(t._s(e.url))])]),t._v(" "),i("br"),t._v("\n          密码："),i("span",[t._v(t._s(e.password))]),t._v(" "),i("br"),t._v(" "),i("img",{attrs:{src:t.vedio.img}})]):t._e()])})],2),t._v(" "),i("div",{staticClass:"introduce"},[i("b",[t._v("声明：")]),t._v(" 版权所有，盗版必究。\n    ")])])],1)},staticRenderFns:[]};var n=i("VU/8")(a,r,!1,function(t){i("Holf")},"data-v-2291cc89",null);e.default=n.exports}});
//# sourceMappingURL=5.4bbeb42e023c11892983.js.map