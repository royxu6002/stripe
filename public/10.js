(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Proforma.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Proforma',
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
    totalCartonQuantity: function totalCartonQuantity(p) {
      var s = p.reduce(function (acc, sku) {
        return acc + sku.pivot.quantity / sku.pcs_in_carton;
      }, 0);
      return Math.round(s * 100) / 100;
    },
    totalGrossWeight: function totalGrossWeight(p) {
      var s = p.reduce(function (acc, sku) {
        return acc + sku.pivot.quantity / sku.pcs_in_carton * sku.gross_weight / 100;
      }, 0);
      return Math.round(s * 100) / 100;
    },
    totalSpace: function totalSpace(p) {
      var s = p.reduce(function (acc, sku) {
        return acc + sku.pivot.quantity / sku.pcs_in_carton * sku.length * sku.width * sku.height / 1000000000;
      }, 0);
      return Math.round(s * 100) / 100;
    },
    totalIncome: function totalIncome(p) {
      if (p.transaction && p.transaction.income != null) {
        var i = p.transaction.income.reduce(function (acc, income) {
          return acc + Number(income.value);
        }, 0);
        return i / 100;
      } else {
        return 0;
      }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.proforma-brief[data-v-69e385b0]{\n    display: flex;\n    justify-content: space-between;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=template&id=69e385b0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Proforma.vue?vue&type=template&id=69e385b0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "proforma-brief" }, [
        _c("div", { staticClass: "left" }, [
          _c("small", [
            _vm._v("Proforma Invoice #: " + _vm._s(_vm.order[0].invoice_no))
          ]),
          _vm._v(" "),
          _c("div", [
            _c("small", [
              _vm._v("Date issued: " + _vm._s(_vm.order[0].updated_at))
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("small", [_vm._v("Due Date: " + _vm._s(_vm.order[0].due_date))])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "right" }, [
          _c("small", [_vm._v("Invoice Total")]),
          _vm._v(" "),
          _c("div", { staticClass: "invoice-value" }, [
            _vm._v(_vm._s(_vm._f("myCurrency")(_vm.grandTotal(_vm.order[0]))))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row proforma-header container" }, [
        _vm.order[0].invoice_address_id
          ? _c(
              "div",
              { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
              [
                _c("h6", { staticClass: "mt-3" }, [_vm._v("Bill To:")]),
                _vm._v(" "),
                _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                  ? _c("div", [
                      _vm.invoiceAddress(_vm.order[0].invoice_address_id)[0]
                        .company_name
                        ? _c("h4", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.invoiceAddress(
                                    _vm.order[0].invoice_address_id
                                  )[0].company_name
                                ) +
                                "\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].address
                          ) +
                          ", " +
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].city
                          ) +
                          ", " +
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].state
                          ) +
                          ", " +
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].zip_code
                          ) +
                          ", " +
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].country
                          ) +
                          "\n                    "
                      ),
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].name
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.invoiceAddress(
                              _vm.order[0].invoice_address_id
                            )[0].phone
                          )
                        )
                      ])
                    ])
                  : _vm._e()
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "proforma-header-right col-lg-6 col-md-6 col-sm-12 col-xs-12"
          },
          [
            _c("div", [
              _c("h6", { staticClass: "mt-3" }, [_vm._v("Bill From:")]),
              _vm._v(" "),
              _c("h4", { staticClass: "mt-2" }, [
                _vm._v(_vm._s(_vm.BILLFROM.company))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "align-right" }, [
                _vm._v(" " + _vm._s(_vm.BILLFROM.address))
              ]),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(_vm.BILLFROM.phone))]),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(_vm.BILLFROM.email))])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-4" }, [
      _c("strong", [
        _vm._v(
          "The aforementioned parties hereby agree and conclude an order as below:"
        )
      ]),
      _vm._v(" "),
      _c("small", [
        _vm._v("Order reference " + _vm._s(_vm.order[0].transaction_id))
      ]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table" },
        [
          _vm._m(1),
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
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "font-weight-bold" }, [
            _c("td", {
              staticStyle: { "border-bottem": "none !important" },
              attrs: { colspan: "2" }
            }),
            _vm._v(" "),
            _c("td", [_vm._v("Paid to date")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                _vm._s(_vm._f("myCurrency")(_vm.totalIncome(_vm.order[0])))
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "font-weight-bold" }, [
            _c("td", {
              staticStyle: { "border-top": "none" },
              attrs: { colspan: "2" }
            }),
            _vm._v(" "),
            _c("td", [
              _vm._v("\n                    BALANCE\n                ")
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n                    " +
                  _vm._s(
                    _vm._f("myCurrency")(
                      _vm.grandTotal(_vm.order[0]) -
                        _vm.totalIncome(_vm.order[0])
                    )
                  ) +
                  "\n                "
              )
            ])
          ])
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "invoice-terms" }, [
      _c("table", { attrs: { align: "center", cellpadding: "10px" } }, [
        _c("tr", [
          _c(
            "td",
            {
              staticStyle: { "font-weight": "bold" },
              attrs: { valign: "top" }
            },
            [_vm._v("TERMS OF PACKING:")]
          ),
          _vm._v(" "),
          _c("td", { attrs: { colspan: "3", valign: "top" } }, [
            _c(
              "div",
              _vm._l(_vm.order[0].skus, function(sku, index) {
                return _c("div", { key: index }, [
                  _vm._v(
                    " \n                            ART. \n                            " +
                      _vm._s(
                        _vm.productsFilteredBySku(sku.product_id)[0].name +
                          sku.title
                      ) +
                      " \n                            TO BE PACKED IN CARTONS OF \n                            " +
                      _vm._s(sku.pcs_in_carton) +
                      "\n                            PCS EACH ONLY, SUBTOTAL \n                               " +
                      _vm._s(sku.pivot.quantity / sku.pcs_in_carton) +
                      "\n                            CARTONS. \n                        "
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                " TOTAL \n                        " +
                  _vm._s(_vm.totalCartonQuantity(_vm.order[0].skus)) +
                  "\n                        CARTONS, \n                        " +
                  _vm._s(_vm.totalSpace(_vm.order[0].skus)) +
                  "\n                        CUBIC METERS, \n                        " +
                  _vm._s(_vm.totalGrossWeight(_vm.order[0].skus)) +
                  "\n                        KILOGRAMMES. \n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c(
            "td",
            {
              staticStyle: { "font-weight": "bold" },
              attrs: { valign: "top" }
            },
            [_vm._v("TERMS OF SHIPMENT:")]
          ),
          _vm._v(" "),
          _c("td", { attrs: { colspan: "3", valign: "top" } }, [
            _vm._v(" \n                    FROM: " + _vm._s(_vm.order[0].from)),
            _c("br"),
            _vm._v(" \n                    TO: " + _vm._s(_vm.order[0].to)),
            _c("br"),
            _vm._v(
              " \n                    TO BE EFFECTED BEFORE " +
                _vm._s(_vm.order[0].delivery_date) +
                " "
            ),
            _c("br"),
            _vm._v(
              "\n                    WITH PARTIAL SHIPMENTS AND TRANSSHIPMENT NOT ALLOWED \n                "
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("tr", [
          _c(
            "td",
            {
              staticStyle: { "font-weight": "bold" },
              attrs: { valign: "top" }
            },
            [
              _vm._v(
                "\n                    TERMS OF PAYMENT:\n                "
              )
            ]
          ),
          _vm._v(" "),
          _c("td", { attrs: { colspan: "3", valign: "top" } }, [
            _vm._v(
              " \n                    PRICE TERMS: " +
                _vm._s(_vm.order[0].price_term)
            ),
            _c("br"),
            _vm._v(
              " \n                    PAYMENT TERMS: " +
                _vm._s(_vm.order[0].payment_term) +
                " "
            ),
            _c("br"),
            _vm._v(
              " \n                    Please kindly remit the payment to following beneficiary's account:"
            ),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticStyle: { "font-weight": "500" } }, [
              _vm.grandTotal(_vm.order[0]) <= 1000
                ? _c("div", [
                    _vm._v(
                      "\n                            Paypal account: \n                            "
                    ),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("br")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(4)
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _vm._m(7),
        _vm._m(8),
        _vm._v(" "),
        _vm._m(9),
        _vm._v(" "),
        _vm._m(10),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _vm._m(12),
        _vm._v(" "),
        _vm._m(13),
        _vm._v(" "),
        _vm._m(14)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "proforma-title", attrs: { align: "center" } },
      [_c("h2", [_vm._v("PROFORMA INVOICE")])]
    )
  },
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
    return _c("tr", [
      _c(
        "td",
        { staticStyle: { "font-weight": "bold" }, attrs: { valign: "top" } },
        [_vm._v("DOCUMENTS:")]
      ),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "3", valign: "top" } }, [
        _vm._v(
          " \n                    DIGITAL COMMERCIAL INVOICE AND PACKING LIST ORIGINAL BILL OF LADING OR TELEX-RELEASED B/L COPIES \n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("strong", [_vm._v("export@comlibra.com")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [_vm._v("Bank account:")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("BENEFICIARY NAME: "),
        _c("strong", [_vm._v("COMLIBRA ELECTRONIC CO., LTD.")])
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("A/C NO. FOR USD: "),
        _c("strong", [_vm._v("NRA1-5623-1420-1050-0000-153")])
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("BENEFICIARY BANK: "),
        _c("strong", [_vm._v("ZHEJIANG CHOUZHOU COMMERCIAL BANK")])
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("ADDRESS: "),
        _c("strong", [
          _vm._v("YIWULEYUAN EAST, JIANGBIN RD, YIWU, ZHEJIANG, CHINA")
        ])
      ]),
      _vm._v(" "),
      _c("div", [_vm._v("SWIFT BIC: "), _c("strong", [_vm._v("CZCBCN2X")])]),
      _vm._v(" "),
      _c("div", [
        _vm._v("CORRESPONDENT BANK: "),
        _c("strong", [_vm._v("BANK OF AMERICA N.A.NEW YORK BRANCH")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", [_vm._v("SWIFT BIC: "), _c("strong", [_vm._v("BOFAUS3N")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticStyle: { "font-weight": "bold" }, attrs: { valign: "top" } },
        [_vm._v("TERMS OF INSURANCE:")]
      ),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "3", valign: "top" } }, [
        _vm._v(
          " FOR TRANSACTIONS CONCLUDED ON C.I.F. BASIS, IT IS UNDERSTOOD THAT THE INSURANCE AMOUND WILL BE FOR 110% OF THE INVOICE VALUE AGAINST THE RISKS SPECIFIED IN THE INVOICE. IF ADDITIONAL INSURANCE OR COVERAGE REQUIRED, THE BUYER MUST HAVE THE CONSENT OF THE SELLER BEFORE SHIPMENT. AND THE ADDITIONAL PREMIUM IS TO BE BORND BY THE BUYER. "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [_vm._v("Hereby confirmed by:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { attrs: { align: "center" } }, [
      _c(
        "td",
        {
          staticStyle: {
            "font-weight": "bold",
            "background-image":
              "url(http://shop.comlibra.com/images/forSignature.png)",
            "background-size": "contain",
            "background-repeat": "no-repeat",
            "background-position": "center center"
          },
          attrs: { colspan: "2" }
        },
        [
          _vm._v(" \n                    THE SELLER:"),
          _c("br"),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src:
                "http://shop.comlibra.com/images/9846c88128d7f88f5a943e080b1023a8.png",
              alt: ""
            }
          }),
          _vm._v(" "),
          _vm._v("\n                    Signature & Stamp ")
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            "font-weight": "bold",
            "background-image": 'url("")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
            "background-position": "center center"
          },
          attrs: { colspan: "2" }
        },
        [
          _vm._v(" \n                        THE BUYER:"),
          _c("br"),
          _c("br"),
          _c("br"),
          _c("br"),
          _vm._v("Signature & Stamp ")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { attrs: { align: "center" } }, [
      _c("td", { attrs: { colspan: "2" } }),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "2" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { width: "25%" } }),
      _c("td", { attrs: { width: "25%" } }),
      _c("td", { attrs: { width: "25%" } }),
      _c("td", { attrs: { width: "25%" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { width: "25%" } }),
      _c("td", { attrs: { width: "25%" } }),
      _c("td", { attrs: { width: "25%" } }),
      _c("td", { attrs: { width: "25%" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticStyle: { "font-weight": "bold" }, attrs: { colspan: "4" } },
        [_vm._v("REMARKS")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticStyle: { "font-weight": "bold" }, attrs: { valign: "top" } },
        [_vm._v(" Claims:")]
      ),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "3", valign: "top" } }, [
        _vm._v(
          " In case of any discrepancy in quality, claims should be filed by the Buyer within 30 days after the arrival of the goods at port of destination; while for quantity discrepancy, claims should be filed by the buyer within 15 days after the arrival of the goods at port of destination. "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticStyle: { "font-weight": "bold" }, attrs: { valign: "top" } },
        [_vm._v(" Force Majeure: ")]
      ),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "3", valign: "top" } }, [
        _vm._v(
          " The seller shall not hold riable to non-delivery or delay in the delivery of the entire lot or a portion of the goods hereunder by reason of natural disasters, war or other causes of Force Majeure. However, the Seller shall notify the Buyer as soon as possible and furnish the Buyer within 15 days by registered airmail with a certificate issued by the China Council of the Promotion of International Trade attesting such event(s). "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticStyle: { "font-weight": "bold" }, attrs: { valign: "top" } },
        [_vm._v(" Arbitration: ")]
      ),
      _vm._v(" "),
      _c("td", { attrs: { colspan: "3", valign: "top" } }, [
        _vm._v(
          " All deputes arising out of the performance of, or relating to this Invoice, shall be settled through negotiation. In case of no settlement can be reached through negotiation, the case shall then be submitted to the China International Economic and Trade Arbitration Commission for arbitration in accordance with its arbitral rules. The arbitration shall take place in China. The arbitral award is final and binding upon both partes. "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Order/Proforma.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Order/Proforma.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Proforma_vue_vue_type_template_id_69e385b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proforma.vue?vue&type=template&id=69e385b0&scoped=true& */ "./resources/js/views/Order/Proforma.vue?vue&type=template&id=69e385b0&scoped=true&");
/* harmony import */ var _Proforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proforma.vue?vue&type=script&lang=js& */ "./resources/js/views/Order/Proforma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Proforma_vue_vue_type_style_index_0_id_69e385b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css& */ "./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Proforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Proforma_vue_vue_type_template_id_69e385b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Proforma_vue_vue_type_template_id_69e385b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69e385b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order/Proforma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order/Proforma.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Order/Proforma.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Proforma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_style_index_0_id_69e385b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=style&index=0&id=69e385b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_style_index_0_id_69e385b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_style_index_0_id_69e385b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_style_index_0_id_69e385b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_style_index_0_id_69e385b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Order/Proforma.vue?vue&type=template&id=69e385b0&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Order/Proforma.vue?vue&type=template&id=69e385b0&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_template_id_69e385b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Proforma.vue?vue&type=template&id=69e385b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Proforma.vue?vue&type=template&id=69e385b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_template_id_69e385b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Proforma_vue_vue_type_template_id_69e385b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);