(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Show.vue?vue&type=script&lang=js& ***!
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
  name: 'OrderReview',
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    userOrders: 'auth/userOrders',
    productsFilteredBySku: 'productsFilteredBySku'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('auth', ['userInfo'])), {}, {
    order: function order() {
      var _this = this;

      return this.userOrders.filter(function (order) {
        return order.id == _this.$route.params.order;
      });
    }
  }),
  methods: {
    lineTotal: function lineTotal(item) {
      return item.pivot.price * item.pivot.quantity / 100;
    },
    orderQuantity: function orderQuantity(p) {
      return p.reduce(function (acc, item) {
        return acc + item.pivot.quantity;
      }, 0);
    },
    orderTotal: function orderTotal(p) {
      return p.reduce(function (acc, item) {
        return acc + item.pivot.quantity * item.pivot.price / 100;
      }, 0);
    },
    invoiceAddress: function invoiceAddress(id) {
      return this.userInfo.invoiceaddresses.filter(function (add) {
        return add.id == id;
      });
    },
    consigneeAddress: function consigneeAddress(id) {
      return this.userInfo.consigneeaddresses.filter(function (add) {
        return add.id == id;
      });
    },
    grandTotal: function grandTotal(p) {
      var total = p.total;
      total += p.plus_charges.reduce(function (acc, charge) {
        return acc + Number(charge.value);
      }, 0);
      return total / 100;
    }
  },
  filters: {
    myCurrency: function myCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Show.vue?vue&type=template&id=07cd2ec6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Show.vue?vue&type=template&id=07cd2ec6& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "container row mx-auto" }, [
      _vm.order[0].invoice_address_id
        ? _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
            _c("h4", { staticClass: "mt-3" }, [_vm._v("Bill To:")]),
            _vm._v(" "),
            _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
              ? _c("div", [
                  _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                    .company_name
                    ? _c("div", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.invoiceAddress(
                                _vm.order[0].invoice_address_id
                              )[0].company_name
                            ) +
                            "\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .address
                      ) +
                      ", " +
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .city
                      ) +
                      ", " +
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .state
                      ) +
                      ", " +
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .zip_code
                      ) +
                      ", " +
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .country
                      ) +
                      "\n                "
                  ),
                  _c("div", [
                    _vm._v(
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .name
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      _vm._s(
                        _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                          .phone
                      )
                    )
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order[0].consignee_address_id
        ? _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
            _c("h4", { staticClass: "mt-3" }, [_vm._v("Ship to:")]),
            _vm._v(" "),
            _vm.consigneeAddress(_vm.order[0].consignee_address_id)[0]
              ? _c("div", [
                  _vm.consigneeAddress(_vm.order[0].consignee_address_id)[0]
                    .company_name
                    ? _c("div", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.consigneeAddress(
                                _vm.order[0].consignee_address_id
                              )[0].company_name
                            ) +
                            "\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].address
                      ) +
                      ", " +
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].city
                      ) +
                      ", " +
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].state
                      ) +
                      ", " +
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].zip_code
                      ) +
                      ", " +
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].country
                      ) +
                      "\n                "
                  ),
                  _c("div", [
                    _vm._v(
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].name
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      _vm._s(
                        _vm.consigneeAddress(
                          _vm.order[0].consignee_address_id
                        )[0].phone
                      )
                    )
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-4" }, [
      _c("strong", [_vm._v("Reference: ")]),
      _vm._v(" "),
      _c("small", [_vm._v(_vm._s(_vm.order[0].transaction_id))]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.order[0].skus, function(sku, index) {
            return _c("tr", { key: index }, [
              _c("td", [
                _vm._v(
                  _vm._s(
                    _vm.productsFilteredBySku(sku.product_id)[0].name +
                      sku.title
                  )
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(_vm.productsFilteredBySku(sku.product_id)[0].hs_code)
                )
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(sku.pivot.quantity))]),
              _vm._v(" "),
              _c("td", { attrs: { align: "right" } }, [
                _vm._v(_vm._s(_vm._f("myCurrency")(_vm.lineTotal(sku))))
              ])
            ])
          }),
          _vm._v(" "),
          _c("tr", [
            _c("td", { attrs: { colspan: "2" } }, [
              _vm._v("\n                    Sub Total\n                ")
            ]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n                    " +
                  _vm._s(
                    _vm._f("myCurrency")(_vm.orderTotal(_vm.order[0].skus))
                  ) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.order[0].plus_charges, function(charge, inx) {
            return _vm.order[0].plus_charges.length > 0
              ? _c("tr", { key: inx }, [
                  _c("td", { domProps: { textContent: _vm._s(charge.name) } }),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }),
                  _vm._v(" "),
                  _c("td", { attrs: { align: "right" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm._f("myCurrency")(charge.value / 100)) +
                        "\n                "
                    )
                  ])
                ])
              : _vm._e()
          }),
          _vm._v(" "),
          _c("tr", { staticClass: "font-weight-bold" }, [
            _c("td", [_vm._v("Grand Total")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                     " +
                  _vm._s(_vm.orderQuantity(_vm.order[0].skus)) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(_vm._s(_vm._f("myCurrency")(_vm.grandTotal(_vm.order[0]))))
            ])
          ])
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container row mx-auto" }, [
      _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
        _c("h5", [
          _vm._v(
            "Dear  " + _vm._s(_vm.userInfo.name) + ", Thanks for your order."
          )
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("Purchase order ID:  " + _vm._s(_vm.order[0].id))]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "Total invoice value of " +
              _vm._s(_vm._f("myCurrency")(_vm.grandTotal(_vm.order[0]))) +
              ","
          )
        ]),
        _vm._v(" "),
        _c("div", [_vm._v(" Dated on " + _vm._s(_vm.order[0].created_at))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [
        _c("h5", [_vm._v("Our Bank Details:")]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        Number(_vm.order[0].total / 100) <= 1000
          ? _c("div", [
              _c("h5", [_vm._v("\n                PayPal\n            ")]),
              _vm._v(" "),
              _vm._m(3)
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "font-weight": "bold" } }, [
      _c("td", [_vm._v("Item")]),
      _vm._v(" "),
      _c("td", [_vm._v("HS Code")]),
      _vm._v(" "),
      _c("td", [_vm._v("Qty")]),
      _vm._v(" "),
      _c("td", { attrs: { align: "right" } }, [_vm._v("Price")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("small", [
        _c("strong", [
          _vm._v(
            " Please refer Order ID as a payment note.\n                   "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "wc-bacs-bank-details order_details bacs_details" },
      [
        _c("li", { staticClass: "bank_name" }, [
          _vm._v("BENEFICIARY NAME: "),
          _c("strong", [_vm._v("COMLIBRA ELECTRONIC CO., LTD.")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "account_number" }, [
          _vm._v("ACCOUNT NUMBER: "),
          _c("strong", [
            _vm._v("\n                    77729999990003740\n                ")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "sort_code" }, [
          _vm._v(" BENEFICIARY BANK: "),
          _c("strong", [
            _vm._v(
              "\n                    CITIBANK N.A. New York Branch\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "bank_address" }, [
          _vm._v("ADDRESS: "),
          _c("strong", [
            _vm._v(
              "\n                    388 Greenwich Street New York, NY 10013,\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "bank_swift_bank" }, [
          _vm._v("\n                    SWIFT/BIC CODE: "),
          _c("strong", [
            _vm._v(
              "\n                        CITIUS33XXX\n                    "
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v("Paypal Account: \n                        "),
        _c("strong", [
          _vm._v(
            "\n                            export@comlibra.com\n                        "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Order/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Order/Show.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_07cd2ec6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=07cd2ec6& */ "./resources/js/views/Order/Show.vue?vue&type=template&id=07cd2ec6&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/Order/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_07cd2ec6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_07cd2ec6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Order/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order/Show.vue?vue&type=template&id=07cd2ec6&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Order/Show.vue?vue&type=template&id=07cd2ec6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_07cd2ec6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=07cd2ec6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Show.vue?vue&type=template&id=07cd2ec6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_07cd2ec6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_07cd2ec6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);