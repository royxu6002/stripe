(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Pdf.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Products.pdf',
  data: function data() {
    return {
      skuId: null,
      skuIndex: null,
      skuPrice: null,
      skuImage: null
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
    }
  },
  mounted: function mounted() {
    var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  },
  watch: {
    product: function product(value) {
      this.$nextTick(function () {
        var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.active[data-v-eea05a74] {\n    background-color: #3490dc !important;\n    border-color: #3490dc !important;\n}\n.price-wrap[data-v-eea05a74] {\n    border: 1px solid #ccc;\n    /* background-color: #3490dc;;\n    color: white; */\n}\n.products-show[data-v-eea05a74] {\n    display: flex;\n    align-items: center;\n}\n.products-more-show[data-v-eea05a74] {\n    display: flex;\n    flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=template&id=eea05a74&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products/Pdf.vue?vue&type=template&id=eea05a74&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "container" },
        _vm._l(_vm.product[0].categories, function(category) {
          return _c("div", { key: category.id }, [
            _c("h2", {
              domProps: {
                textContent: _vm._s(category.name + " | " + _vm.product[0].name)
              }
            })
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row products-show" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "swiper-container" }, [
          _c(
            "div",
            { staticClass: "swiper-wrapper" },
            _vm._l(_vm.product[0].images, function(image, index) {
              return _c(
                "div",
                { key: index, staticClass: "swiper-slide center" },
                [
                  _c("img", {
                    staticStyle: { width: "100%", "max-width": "456px" },
                    attrs: { src: _vm.GLOBAL.baseUrl + image, alt: "" }
                  })
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-pagination" }),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-button-prev" }),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-button-next" })
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-6 products-more-show" },
        _vm._l(_vm.product[0].images, function(image, i) {
          return _c("div", { key: i }, [
            _c("img", {
              attrs: { src: _vm.GLOBAL.baseUrl + image, width: "128", alt: "" }
            })
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "col-12" }, [
        _c("p", {
          staticClass: "mt-3",
          domProps: { innerHTML: _vm._s(_vm.product[0].description) }
        }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          _vm._l(_vm.product[0].skus, function(sku, ind) {
            return _c(
              "div",
              {
                key: ind,
                staticClass: "mr-2 btn mt-2 price-wrap center",
                class: { active: _vm.skuId === sku.id }
              },
              [
                _c("img", {
                  attrs: {
                    src: _vm.GLOBAL.baseUrl + sku.image[0],
                    alt: "",
                    width: "180px"
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  "\n                    " +
                    _vm._s(sku.title) +
                    "\n                    "
                ),
                _c("br"),
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.formatCurrency(sku.price)) +
                    "\n                "
                )
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("strong", [
        _vm._v("\n                   SKU Options:\n                ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Products/Pdf.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Products/Pdf.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pdf_vue_vue_type_template_id_eea05a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pdf.vue?vue&type=template&id=eea05a74&scoped=true& */ "./resources/js/views/Products/Pdf.vue?vue&type=template&id=eea05a74&scoped=true&");
/* harmony import */ var _Pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pdf.vue?vue&type=script&lang=js& */ "./resources/js/views/Products/Pdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pdf_vue_vue_type_style_index_0_id_eea05a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css& */ "./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pdf_vue_vue_type_template_id_eea05a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pdf_vue_vue_type_template_id_eea05a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eea05a74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products/Pdf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products/Pdf.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Products/Pdf.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pdf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_style_index_0_id_eea05a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=style&index=0&id=eea05a74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_style_index_0_id_eea05a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_style_index_0_id_eea05a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_style_index_0_id_eea05a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_style_index_0_id_eea05a74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Products/Pdf.vue?vue&type=template&id=eea05a74&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Products/Pdf.vue?vue&type=template&id=eea05a74&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_template_id_eea05a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pdf.vue?vue&type=template&id=eea05a74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products/Pdf.vue?vue&type=template&id=eea05a74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_template_id_eea05a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_template_id_eea05a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);