(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      customer: {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip_code: ''
      },
      paymentProcessing: false,
      stripe: {},
      cardElement: {}
    };
  },
  computed: {
    cart: function cart() {
      return this.$store.state.cart;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var elements;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])("pk_test_51IWKjoFTDiNMhVuSBz8HdCyKmQAQqifcsE0HM4n571NsiBYHtCHYRaz7APdKEsoNxV4VGuBKxsxWSlmwNxdDhqbQ00qaaoi0o1");

            case 2:
              _this.stripe = _context.sent;
              elements = _this.stripe.elements();
              _this.cardElement = elements.create('card', {
                classes: {
                  base: 'form-control'
                }
              });

              _this.cardElement.mount('#card-element');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.quantity;
      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    processPayment: function processPayment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$_this2$stripe$, paymentMethod, error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.paymentProcessing = true;
                _context2.next = 3;
                return _this2.stripe.createPaymentMethod('card', _this2.cardElement, {
                  billing_details: {
                    name: _this2.customer.first_name + ' ' + _this2.customer.last_name,
                    email: _this2.customer.email,
                    address: {
                      line1: _this2.customer.address,
                      city: _this2.customer.city,
                      state: _this2.customer.state,
                      postal_code: _this2.customer.zip_code
                    }
                  }
                });

              case 3:
                _yield$_this2$stripe$ = _context2.sent;
                paymentMethod = _yield$_this2$stripe$.paymentMethod;
                error = _yield$_this2$stripe$.error;

                if (error) {
                  _this2.paymentProcessing = false;
                  console.error(error);
                } else {
                  console.log(paymentMethod);
                  console.log('i am looped');
                  _this2.customer.payment_method_id = paymentMethod.id;
                  _this2.customer.amount = _this2.$store.state.cart.reduce(function (acc, item) {
                    return acc + item.price * item.quantity;
                  }, 0);
                  _this2.customer.cart = JSON.stringify(_this2.$store.state.cart);
                  axios.post('/api/purchase', _this2.customer).then(function (response) {
                    _this2.paymentProcessing = false;
                    console.log(response);

                    _this2.$store.commit('updateOrder', response.data);

                    _this2.$store.dispatch('clearCart');

                    _this2.$router.push({
                      name: 'order.summary'
                    });
                  })["catch"](function (error) {
                    _this2.paymentProcessing = false;
                    console.error(error);
                  });
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mt-4" }, [
      _c("table", { staticClass: "table table-striped" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.cart, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", { domProps: { textContent: _vm._s(item.name) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(item.quantity) } }),
                _vm._v(" "),
                _c("td", {
                  domProps: { textContent: _vm._s(_vm.cartLineTotal(item)) }
                }),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.$store.commit("removeFromCart", index)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                           Remove\n                       "
                      )
                    ]
                  )
                ])
              ])
            }),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Total")]),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(_vm.cartQuantity) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(_vm.cartTotal) } }),
              _vm._v(" "),
              _c("td")
            ])
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "form-group col-lg-4" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.first_name,
              expression: "customer.first_name"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "first_name",
            name: "first_name",
            disabled: _vm.paymentProcessing,
            placeholder: "James"
          },
          domProps: { value: _vm.customer.first_name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "first_name", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-4" }, [
        _c("label", { attrs: { for: "last_name" } }, [_vm._v("Last name")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.last_name,
              expression: "customer.last_name"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "last_name",
            name: "last_name",
            disabled: _vm.paymentProcessing,
            placeholder: "Blunt"
          },
          domProps: { value: _vm.customer.last_name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "last_name", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-4" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.email,
              expression: "customer.email"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "email",
            id: "email",
            name: "email",
            disabled: _vm.paymentProcessing,
            placeholder: "example@example.com"
          },
          domProps: { value: _vm.customer.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "email", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "form-text text-muted" }, [
          _vm._v("We'll never shall your details")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-4" }, [
        _c("label", { attrs: { for: "address" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.address,
              expression: "customer.address"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "address",
            name: "address",
            disabled: _vm.paymentProcessing,
            placeholder: "Room 43, Suit Job. Street 129"
          },
          domProps: { value: _vm.customer.address },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "address", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-4" }, [
        _c("label", { attrs: { for: "address" } }, [_vm._v("City")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.city,
              expression: "customer.city"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "city",
            name: "city",
            disabled: _vm.paymentProcessing,
            placeholder: "New York"
          },
          domProps: { value: _vm.customer.city },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "city", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-2" }, [
        _c("label", { attrs: { for: "address" } }, [_vm._v("State")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.state,
              expression: "customer.state"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "state",
            name: "state",
            disabled: _vm.paymentProcessing,
            placeholder: "California"
          },
          domProps: { value: _vm.customer.state },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "state", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-2" }, [
        _c("label", { attrs: { for: "zip_code" } }, [_vm._v("Zip Code")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.zip_code,
              expression: "customer.zip_code"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "zip_code",
            name: "zip_code",
            disabled: _vm.paymentProcessing,
            placeholder: "786EJ"
          },
          domProps: { value: _vm.customer.zip_code },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "zip_code", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "form-group col-12" }, [
        _c("label", { attrs: { for: "card-element" } }, [
          _vm._v("Credit Card Info")
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "form-control",
          attrs: { id: "card-element" }
        }),
        _vm._v(" "),
        _c("button", {
          staticClass:
            "form-control button button-primary mx-auto text-large mt-3",
          attrs: { disabled: _vm.paymentProcessing },
          domProps: {
            textContent: _vm._s(
              _vm.paymentProcessing ? "Processing" : "Pay Now"
            )
          },
          on: { click: _vm.processPayment }
        })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("Item")]),
        _vm._v(" "),
        _c("td", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("td", [_vm._v("Price")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("First Name "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue":
/*!************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=b4c63204& */ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*******************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=b4c63204& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);