(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{305:function(t,e,r){var content=r(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("72001130",content,!0,{sourceMap:!1})},306:function(t,e,r){var content=r(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("19dc1ee0",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r(305)},316:function(t,e,r){(e=r(20)(!1)).push([t.i,".cart-page__title{text-align:center}",""]),t.exports=e},317:function(t,e,r){t.exports=r.p+"img/remove.ef51e8a.svg"},318:function(t,e,r){"use strict";r(306)},319:function(t,e,r){(e=r(20)(!1)).push([t.i,"@media screen and (max-width:750px){.cart-page .cart__list{font-size:14px}}.cart-page .cart__remove{border:none;background:none;cursor:pointer}.cart-page .cart__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #ebebeb;padding:1.25em 0}.cart-page .cart__item:first-child{border-top:1px solid #ebebeb}.cart-page .cart__row{width:7.8125em}.cart-page .cart__row_first{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:1.25em}@media screen and (max-width:750px){.cart-page .cart__row_first{padding-right:0}}.cart-page .cart__row_last{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width:750px){.cart-page .cart__row_calories{display:none}}.cart-page .cart__img{width:6.875em;margin-right:1.25em}@media screen and (max-width:750px){.cart-page .cart__title{display:none}}.cart-page .total{text-align:right;margin:1.25em 0}.cart-page .total__row{margin:.5em 0}",""]),t.exports=e},347:function(t,e,r){"use strict";r.r(e);var c={name:"CartList",mixins:[r(152).a]},n=(r(318),r(9)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"cart__wrapper cart-page"},[c("div",{staticClass:"cart__list"},t._l(t.cartList,(function(e,n){return c("div",{staticClass:"cart__item"},[c("div",{staticClass:"cart__row cart__row_first"},[n?c("img",{staticClass:"cart__img",attrs:{src:r(176)("./"+n+".jpg"),alt:e.title}}):t._e(),t._v(" "),c("div",{staticClass:"cart__title"},[t._v(t._s(e.title))])]),t._v(" "),c("div",{staticClass:"cart__row cart__row_calories"},[c("div",{staticClass:"cart__calories"},[t._v(t._s(e.calories*e.count)+" кКал")])]),t._v(" "),c("div",{staticClass:"cart__row"},[c("Counter",{attrs:{dishName:n}})],1),t._v(" "),c("div",{staticClass:"cart__row cart__row_last"},[c("div",{staticClass:"cart__price"},[t._v(t._s(e.price*e.count)+" ₽")]),t._v(" "),c("button",{staticClass:"cart__remove",on:{click:function(e){return t.removeDish(n)}}},[c("img",{staticClass:"cart__image",attrs:{src:r(317)}})])])])})),0),t._v(" "),c("div",{staticClass:"total"},[c("div",{staticClass:"total__row"},[t._v("Сумма: "+t._s(this.total)+" ₽")]),t._v(" "),c("div",{staticClass:"total__row"},[t._v("Калории: "+t._s(this.calories)+" кКал")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Counter:r(177).default})},354:function(t,e,r){"use strict";r.r(e);var c=r(7),n=r(8);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"cart",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({cartList:"cart/cartList"}))},_=(r(315),r(9)),component=Object(_.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cart-page"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"cart-page__title"},[this._v("Корзина")]),this._v(" "),e("CartList")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CartList:r(347).default})}}]);