(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Order.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'UserOrder',
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    userOrders: 'auth/userOrders',
    productsFilteredBySku: 'productsFilteredBySku'
  })), {}, {
    orderTotal: function orderTotal() {
      return this.userOrders.reduce(function (acc, order) {
        return acc + order.total;
      }, 0);
    },
    orderQuantity: function orderQuantity() {
      return this.userOrders.length;
    }
  }),
  filters: {
    myCurrency: function myCurrency(value) {
      return 'US$' + value / 100;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-body-order-detail[data-v-15c7bd49] {\n    display: flex;\n    align-content: space-between;\n}\n.card-body-header[data-v-15c7bd49] {\n    display: flex;\n    justify-content: space-between;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=template&id=15c7bd49&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Order.vue?vue&type=template&id=15c7bd49&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h5", { staticClass: "mt-3" }, [_vm._v("My Order")]),
      _vm._v(" "),
      _vm.userOrders
        ? _c("span", [
            _vm._v(
              "Total \n        \n            Goods value (Other cost is excluded, E.g: Shipping Cost If)\n        of " +
                _vm._s(_vm._f("myCurrency")(_vm.orderTotal)) +
                ","
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.userOrders
        ? _c("span", [_vm._v("Total " + _vm._s(_vm.orderQuantity) + " orders")])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.userOrders, function(order, index) {
        return _c("div", { key: index, staticClass: "card mb-3" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c(
                "div",
                { staticClass: "card-body-header" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "OrderReview",
                          params: { order: order.id, user: order.user_id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(order.id) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  order.delivery_date
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "Proforma",
                              params: { order: order.id, user: order.user_id }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Invoice\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "OrderPacking",
                          params: { order: order.id, user: order.user_id }
                        }
                      }
                    },
                    [_vm._v("\n                    Packing\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._l(order.skus, function(sku, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "card-body-order-detail" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-3 col-sm-4 col-md-3 col-lg-2" },
                      [
                        sku.image
                          ? _c("img", {
                              attrs: {
                                src: _vm.GLOBAL.baseUrl + sku.image[0],
                                alt: "",
                                width: "100%"
                              }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-9 col-sm-8 col-md-9 col-lg-10" },
                      [
                        _c("h6", {
                          domProps: {
                            textContent: _vm._s(
                              _vm.productsFilteredBySku(sku.product_id)[0]
                                .name + sku.title
                            )
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm._f("myCurrency")(sku.pivot.price)))
                        ]),
                        _vm._v(" "),
                        _c("span", [_vm._v("x")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(sku.pivot.quantity))])
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "card-body-order-detail" }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-9 col-sm-8 col-md-9 col-lg-10" },
                  [
                    _c("h6", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm._f("myCurrency")(order.total)) +
                          "\n                        "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              order.plus_charges.length > 0
                ? _c(
                    "div",
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _vm._l(order.plus_charges, function(charge, i) {
                        return _c(
                          "div",
                          { staticClass: "card-body-order-detail" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "col-3 col-sm-4 col-md-3 col-lg-2"
                              },
                              [_c("span", [_vm._v(_vm._s(charge.name))])]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-9 col-sm-8 col-md-9 col-lg-10"
                              },
                              [
                                _c("h6", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm._f("myCurrency")(charge.value)
                                      ) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e()
            ],
            2
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 col-sm-4 col-md-3 col-lg-2" }, [
      _c("span", [_vm._v("Goods")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/User/Order.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/User/Order.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_vue_vue_type_template_id_15c7bd49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=15c7bd49&scoped=true& */ "./resources/js/views/User/Order.vue?vue&type=template&id=15c7bd49&scoped=true&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Order_vue_vue_type_style_index_0_id_15c7bd49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css& */ "./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_15c7bd49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_15c7bd49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15c7bd49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/User/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_15c7bd49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=style&index=0&id=15c7bd49&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_15c7bd49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_15c7bd49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_15c7bd49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_15c7bd49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/User/Order.vue?vue&type=template&id=15c7bd49&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/User/Order.vue?vue&type=template&id=15c7bd49&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_15c7bd49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=15c7bd49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Order.vue?vue&type=template&id=15c7bd49&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_15c7bd49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_15c7bd49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);