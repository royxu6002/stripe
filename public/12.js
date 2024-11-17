(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      skuId: null,
      skuIndex: null,
      skuPrice: null,
      skuImage: null,
      position: 0
    };
  },
  computed: {
    product: function product() {
      var _this = this;

      return this.$store.state.products.filter(function (p) {
        return p.slug == _this.$route.params.slug;
      });
    }
  },
  methods: {
    formatCurrency: function formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    selectSku: function selectSku(sku, index) {
      this.skuId = sku.id;
      this.skuPrice = sku.price;
      this.skuIndex = index;
      this.skuImage = sku.image[0];
    },
    addToCart: function addToCart(sku, name, price) {
      if (!this.skuId) {
        alert('Please select a SKU to add to cart');
        return;
      }

      this.$store.commit('addToCart', {
        'sku': sku,
        'name': name
      });
    },
    changeThumbnail: function changeThumbnail(i) {
      this.position = i;
    }
  } // 这是用 swiper来
  // mounted() {
  //     var mySwiper = new Swiper('.swiper-container',{
  //         loop : true,
  //         pagination: {
  //             el: '.swiper-pagination',
  //         },
  //         navigation: {
  //             nextEl: '.swiper-button-next',
  //             prevEl: '.swiper-button-prev',
  //             disabledClass: 'my-button-disabled',
  //         },
  //     })
  // },
  // watch: {
  //     product(value) {
  //         this.$nextTick(() => {
  //             var mySwiper = new Swiper('.swiper-container',{
  //                 loop : true,
  //                 pagination: {
  //                     el: '.swiper-pagination',
  //                 },
  //                 navigation: {
  //                     nextEl: '.swiper-button-next',
  //                     prevEl: '.swiper-button-prev',
  //                     disabledClass: 'my-button-disabled',
  //                 },
  //             })
  //         })
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.active[data-v-a872d34e] {\n    background-color: #3490dc !important;\n    border-color: #3490dc !important;\n}\n.price-wrap[data-v-a872d34e] {\n    border: 1px solid #ccc;\n    /* background-color: #3490dc;;\n    color: white; */\n}\n.price-label[data-v-a872d34e] {\n    font-weight: 700;\n    font-size: 26px;\n}\n.swiper-button-prev.swiper-button-next[data-v-a872d34e] {\n    height: 24px !important;\n}\n.carousel-inner .carousel-item[data-v-a872d34e]{\n    height: 100%;\n    display: block;\n}\n.carousel-item img[data-v-a872d34e] {\n    width: 100%;\n    height: auto;\n}\n.carousel-indicators[data-v-a872d34e]  {\n    position: relative;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n.carousel-thumbnail[data-v-a872d34e] {\n     border: 1px solid rgb(244, 244,244);\n}\n.carousel-thumbnail img[data-v-a872d34e]{\n    width:  60px;\n    height: 60px;\n    float: left;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=template&id=a872d34e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Show.vue?vue&type=template&id=a872d34e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mx-auto mt-5" }, [
    _c(
      "div",
      { staticClass: "row mb-3" },
      [
        _c(
          "span",
          { staticClass: "mr-2" },
          [_c("router-link", { attrs: { to: "/home" } }, [_vm._v("Home ")])],
          1
        ),
        _vm._v(" "),
        _c("span", { staticClass: "mr-2" }, [_vm._v("/")]),
        _vm._v(" "),
        _vm._l(_vm.product[0].categories, function(category) {
          return _c(
            "span",
            { key: category.id, staticClass: "mr-2" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "category",
                      params: { category: category.slug }
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(category.name) +
                      "\n                "
                  )
                ]
              )
            ],
            1
          )
        }),
        _vm._v(" "),
        _c("span", { staticClass: "mr-2" }, [_vm._v("/")]),
        _vm._v(" "),
        _c("span", { domProps: { textContent: _vm._s(_vm.product[0].name) } })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6" }, [
        _c("div", { staticClass: "carousel col-12" }, [
          _c("div", { staticClass: "carousel-inner  col-12" }, [
            _c("div", { staticClass: "carousel-item col-12" }, [
              _c("a", { attrs: { href: "" } }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src:
                      _vm.GLOBAL.baseUrl + _vm.product[0].images[_vm.position],
                    alt: ""
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "carousel-indicators col-12" },
            _vm._l(_vm.product[0].images, function(image, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "carousel-thumbnail",
                  on: {
                    mouseenter: function($event) {
                      return _vm.changeThumbnail(index)
                    }
                  }
                },
                [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", {
                      attrs: { src: _vm.GLOBAL.baseUrl + image, alt: "" }
                    })
                  ])
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6" }, [
        _c("p", { domProps: { textContent: _vm._s(_vm.product[0].name) } }),
        _vm._v(" "),
        _c("div", { staticClass: "price-label" }, [
          _vm.skuPrice
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.formatCurrency(_vm.skuPrice))
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.skuPrice
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.formatCurrency(_vm.product[0].price))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-3" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.product[0].skus, function(sku, ind) {
              return _c(
                "div",
                {
                  key: ind,
                  staticClass: "mr-2 btn mt-2 price-wrap",
                  class: { active: _vm.skuId === sku.id },
                  on: {
                    click: function($event) {
                      return _vm.selectSku(sku, ind)
                    }
                  }
                },
                [_vm._v(_vm._s(sku.title) + "\n                ")]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-3" }, [
          _vm.skuPrice
            ? _c("div", [
                _c("img", {
                  attrs: {
                    src: _vm.GLOBAL.baseUrl + _vm.skuImage,
                    alt: "",
                    width: "180px"
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block add-cart btn-lg",
              on: {
                click: function($event) {
                  return _vm.addToCart(
                    _vm.product[0].skus[_vm.skuIndex],
                    _vm.product[0].name
                  )
                }
              }
            },
            [_vm._v("\n                        ADD TO CART\n                ")]
          )
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", [
          _c("strong", [_vm._v("Descriptions:")]),
          _vm._v(" "),
          _c("p", {
            staticClass: "mt-3",
            domProps: { innerHTML: _vm._s(_vm.product[0].description) }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [
        _vm._v("\n                        Options:\n                    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Products/Show.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Products/Show.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_a872d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=a872d34e&scoped=true& */ "./resources/js/views/Products/Show.vue?vue&type=template&id=a872d34e&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/Products/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Show_vue_vue_type_style_index_0_id_a872d34e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css& */ "./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_a872d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_a872d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a872d34e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Products/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_a872d34e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=style&index=0&id=a872d34e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_a872d34e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_a872d34e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_a872d34e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_a872d34e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Products/Show.vue?vue&type=template&id=a872d34e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Products/Show.vue?vue&type=template&id=a872d34e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a872d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=a872d34e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Show.vue?vue&type=template&id=a872d34e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a872d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a872d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);