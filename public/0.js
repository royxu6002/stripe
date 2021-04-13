(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _paypal_paypal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @paypal/paypal-js */ "./node_modules/@paypal/paypal-js/dist/paypal.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        phone: '',
        address: '',
        city: '',
        country: '',
        state: '',
        zip_code: ''
      },
      paymentProcessing: false,
      stripe: {},
      cardElement: {},
      paypal: {},
      paymentMethod: ''
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
              return Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])("pk_test_51IVTBVEYiecg7wKpgyt9EYmbg3wvSti26D7VGxVa5sqQtS6tGqFcCtk9I0fxBiL4YVcL6pNnF8aiinh1eQ6jWrId005nFg8Vz1");

            case 2:
              _this.stripe = _context.sent;
              elements = _this.stripe.elements();
              _this.cardElement = elements.create('card', {
                classes: {
                  base: 'form-control'
                }
              });

              _this.cardElement.mount('#cardelement');

              _this.paypal = Object(_paypal_paypal_js__WEBPACK_IMPORTED_MODULE_2__["loadScript"])({
                'client-id': 'ARGvGYQJqTPeIGweb2kuhzefstiR98ZHm8qeaXjppCDgYWwvUrf4gui01o3qUPwSI-N4vsyQjUcfuN5c'
              });

              _this.paypal.then(_this.loadPaypalButton)["catch"](function (err) {
                return console.error('failed to load paypal js sdk script', err);
              });

            case 8:
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
                      postal_code: _this2.customer.zip_code,
                      country: _this2.customer.country
                    },
                    phone: _this2.customer.phone
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
                  _this2.customer.payment_method_id = paymentMethod.id;
                  _this2.customer.amount = _this2.$store.state.cart.reduce(function (acc, item) {
                    return acc + item.price * item.quantity;
                  }, 0);
                  _this2.customer.cart = JSON.stringify(_this2.$store.state.cart);
                  axios.post('/api/stripe', _this2.customer).then(function (response) {
                    _this2.paymentProcessing = false;

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
    },
    loadPaypalButton: function loadPaypalButton() {
      var _this3 = this;

      paypal.Buttons({
        // 必须使用 =>函数 
        createOrder: function createOrder(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this3.$store.state.cart.reduce(function (acc, item) {
                  return acc + item.price * item.quantity;
                }, 0) / 100,
                currency_code: 'USD',
                "breakdown": {
                  "item_total": {
                    "currency_code": "USD",
                    "value": _this3.$store.state.cart.reduce(function (acc, item) {
                      return acc + item.price * item.quantity;
                    }, 0) / 100
                  }
                }
              },
              // 重构 cart 数组
              items: _this3.$store.state.cart.map(function (item) {
                return {
                  "name": item.name,
                  "unit_amount": {
                    "value": item.price / 100,
                    "currency_code": "USD"
                  },
                  "tax": {
                    "currency_code": "USD",
                    "value": 0
                  },
                  "quantity": item.quantity,
                  "sku": item.id
                };
              })
            }]
          });
        },
        onApprove: function onApprove(data, actions) {
          actions.order.capture().then(function (details) {
            // call server to capture the transation
            return fetch('/api/paypal', {
              method: 'post',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(details)
            }).then(function (res) {
              return res.json();
            }).then(function (data) {
              console.log(data);

              _this3.$store.commit('updateOrder', data);

              _this3.$store.dispatch('clearCart');

              _this3.$router.push({
                name: 'order.summary'
              });
            })["catch"](function (error) {
              return console.error('Error:', error);
            });
          });
        }
      }).render('#paypalbutton');
    },
    bankTransfer: function bankTransfer() {
      this.customer.cart = JSON.stringify(this.$store.state.cart);
      this.customer.amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      axios.post('/api/bank', this.customer).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.payment_method[data-v-8482eb34] {\n    display: flex;\n    justify-content: space-around;\n}\n.payment_method_name[data-v-8482eb34] {\n    margin-right: 20px;\n}\n.tabpaymentcontent[data-v-8482eb34] {\n    display: none;\n}\n.active[data-v-8482eb34] {\n        display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=template&id=8482eb34&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Checkout.vue?vue&type=template&id=8482eb34&scoped=true& ***!
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
      _c("div", { staticClass: "form-group col-lg-3" }, [
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
      _c("div", { staticClass: "form-group col-lg-3" }, [
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
      _c("div", { staticClass: "form-group col-lg-3" }, [
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
      _c("div", { staticClass: "form-group col-lg-3" }, [
        _c("label", { attrs: { for: "phone" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.phone,
              expression: "customer.phone"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "email",
            id: "phone",
            name: "phone",
            disabled: _vm.paymentProcessing,
            placeholder: "+8700998888"
          },
          domProps: { value: _vm.customer.phone },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "phone", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "form-text text-muted" }, [
          _vm._v("Mandatory for goods collection")
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-lg-2" }, [
        _c("label", { attrs: { for: "country" } }, [_vm._v("Country")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.country,
              expression: "customer.country"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "country",
            name: "country",
            disabled: _vm.paymentProcessing,
            placeholder: "USA"
          },
          domProps: { value: _vm.customer.country },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "country", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "form-group col-12 payment_method" }, [
        _c("div", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.paymentMethod,
                expression: "paymentMethod"
              }
            ],
            attrs: { type: "radio", value: "paypal" },
            domProps: { checked: _vm._q(_vm.paymentMethod, "paypal") },
            on: {
              change: function($event) {
                _vm.paymentMethod = "paypal"
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "payment_method_name", attrs: { for: "paypal" } },
            [_vm._v("Paypal")]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.paymentMethod,
                expression: "paymentMethod"
              }
            ],
            attrs: { type: "radio", value: "stripe" },
            domProps: { checked: _vm._q(_vm.paymentMethod, "stripe") },
            on: {
              change: function($event) {
                _vm.paymentMethod = "stripe"
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "payment_method_name", attrs: { for: "stripe" } },
            [_vm._v("Stripe")]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.paymentMethod,
                expression: "paymentMethod"
              }
            ],
            attrs: { type: "radio", value: "bank" },
            domProps: { checked: _vm._q(_vm.paymentMethod, "bank") },
            on: {
              change: function($event) {
                _vm.paymentMethod = "bank"
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "payment_method_name",
              attrs: { for: "banktransfer" }
            },
            [_vm._v("Banktransfer")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form-group col-12 tabpaymentcontent",
          class: { active: _vm.paymentMethod == "paypal" }
        },
        [_c("div", { attrs: { id: "paypalbutton" } })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form-group col-12 tabpaymentcontent",
          class: { active: _vm.paymentMethod == "stripe" }
        },
        [
          _c("div", {
            staticClass: "form-control",
            attrs: { id: "cardelement" }
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
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form-group col-12 tabpaymentcontent",
          class: { active: _vm.paymentMethod == "bank" }
        },
        [
          _c(
            "button",
            {
              staticClass:
                "form-control button button-primary mx-auto text-large mt-3",
              attrs: { disabled: _vm.paymentProcessing },
              on: { click: _vm.bankTransfer }
            },
            [_vm._v("\n                Place the order\n            ")]
          )
        ]
      )
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

/***/ "./resources/js/views/Order/Checkout.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Order/Checkout.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_8482eb34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=8482eb34&scoped=true& */ "./resources/js/views/Order/Checkout.vue?vue&type=template&id=8482eb34&scoped=true&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Checkout_vue_vue_type_style_index_0_id_8482eb34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css& */ "./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_8482eb34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_8482eb34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8482eb34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_8482eb34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=style&index=0&id=8482eb34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_8482eb34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_8482eb34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_8482eb34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_8482eb34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Order/Checkout.vue?vue&type=template&id=8482eb34&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Order/Checkout.vue?vue&type=template&id=8482eb34&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_8482eb34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=8482eb34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=template&id=8482eb34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_8482eb34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_8482eb34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);