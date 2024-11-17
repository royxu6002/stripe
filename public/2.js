(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@paypal/paypal-js/dist/paypal.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@paypal/paypal-js/dist/paypal.esm.js ***!
  \***********************************************************/
/*! exports provided: loadCustomScript, loadScript, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomScript", function() { return loadCustomScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScript", function() { return loadScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/*!
 * paypal-js v3.1.6 (2021-04-02T19:09:10.301Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function findScript(url, attributes) {
  var currentScript = document.querySelector("script[src=\"".concat(url, "\"]"));
  if (currentScript === null) return null;
  var nextScript = createScriptElement(url, attributes); // ignore the data-uid-auto attribute that gets auto-assigned to every script tag

  var currentScriptDataset = Object.assign({}, currentScript.dataset);
  delete currentScriptDataset.uidAuto; // check if the new script has the same number of data attributes

  if (Object.keys(currentScriptDataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }

  var isExactMatch = true; // check if the data attribute values are the same

  Object.keys(currentScriptDataset).forEach(function (key) {
    if (currentScriptDataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_ref) {
  var url = _ref.url,
      attributes = _ref.attributes,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
  var sdkBaseURL = "https://www.paypal.com/sdk/js";

  if (options.sdkBaseURL) {
    sdkBaseURL = options.sdkBaseURL;
    delete options.sdkBaseURL;
  }

  var processedMerchantIDAttributes = processMerchantID(options["merchant-id"], options["data-merchant-id"]);
  var newOptions = Object.assign({}, options, processedMerchantIDAttributes);

  var _Object$keys$filter$r = Object.keys(newOptions).filter(function (key) {
    return typeof newOptions[key] !== "undefined" && newOptions[key] !== null && newOptions[key] !== "";
  }).reduce(function (accumulator, key) {
    var value = newOptions[key].toString();

    if (key.substring(0, 5) === "data-") {
      accumulator.dataAttributes[key] = value;
    } else {
      accumulator.queryParams[key] = value;
    }

    return accumulator;
  }, {
    queryParams: {},
    dataAttributes: {}
  }),
      queryParams = _Object$keys$filter$r.queryParams,
      dataAttributes = _Object$keys$filter$r.dataAttributes;

  return {
    url: "".concat(sdkBaseURL, "?").concat(objectToQueryString(queryParams)),
    dataAttributes: dataAttributes
  };
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function (key) {
    if (queryString.length !== 0) queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}

function createScriptElement(url) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function (key) {
    newScript.setAttribute(key, attributes[key]);

    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}

function processMerchantID(merchantID, dataMerchantID) {
  var newMerchantID = "";
  var newDataMerchantID = "";

  if (Array.isArray(merchantID)) {
    if (merchantID.length > 1) {
      newMerchantID = "*";
      newDataMerchantID = merchantID.toString();
    } else {
      newMerchantID = merchantID.toString();
    }
  } else if (typeof merchantID === "string" && merchantID.length > 0) {
    newMerchantID = merchantID;
  } else if (typeof dataMerchantID === "string" && dataMerchantID.length > 0) {
    newMerchantID = "*";
    newDataMerchantID = dataMerchantID;
  }

  return {
    "merchant-id": newMerchantID,
    "data-merchant-id": newDataMerchantID
  };
}

/**
 * Load the Paypal JS SDK script asynchronously.
 *
 * @param {Object} options - used to configure query parameters and data attributes for the JS SDK.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<Object>} paypalObject - reference to the global window PayPal object.
 */

function loadScript(options) {
  var PromisePonyfill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultPromiseImplementation();
  validateArguments(options, PromisePonyfill); // resolve with null when running in Node

  if (typeof window === "undefined") return PromisePonyfill.resolve(null);

  var _processOptions = processOptions(options),
      url = _processOptions.url,
      dataAttributes = _processOptions.dataAttributes;

  var namespace = dataAttributes["data-namespace"] || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace); // resolve with the existing global paypal namespace when a script with the same params already exists

  if (findScript(url, dataAttributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }

  return loadCustomScript({
    url: url,
    attributes: dataAttributes
  }, PromisePonyfill).then(function () {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);

    if (newWindowNamespace) {
      return newWindowNamespace;
    }

    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
/**
 * Load a custom script asynchronously.
 *
 * @param {Object} options - used to set the script url and attributes.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<void>} returns a promise to indicate if the script was successfully loaded.
 */

function loadCustomScript(options) {
  var PromisePonyfill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultPromiseImplementation();
  validateArguments(options, PromisePonyfill);
  var url = options.url,
      attributes = options.attributes;

  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }

  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }

  return new PromisePonyfill(function (resolve, reject) {
    // resolve with undefined when running in Node
    if (typeof window === "undefined") return resolve();
    insertScriptElement({
      url: url,
      attributes: attributes,
      onSuccess: function onSuccess() {
        return resolve();
      },
      onError: function onError() {
        return reject(new Error("The script \"".concat(url, "\" failed to load.")));
      }
    });
  });
}

function getDefaultPromiseImplementation() {
  if (typeof Promise === "undefined") {
    throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");
  }

  return Promise;
}

function getPayPalWindowNamespace(namespace) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return window[namespace];
}

function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }

  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}

var version = "3.1.6";




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @paypal/paypal-js */ "./node_modules/@paypal/paypal-js/dist/paypal.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {
        iav: '',
        cav: '',
        paymentMethod: 'bank'
      },
      errors: '',
      messages: ''
    };
  },
  created: function created() {
    if (this.userInfo && this.userInfo.invoiceaddresses.length > 0) this.customer.iav = this.recentIavId;
    if (this.userInfo && this.userInfo.consigneeaddresses.length > 0) this.customer.cav = this.recentCavId;
    return;
  },
  computed: _objectSpread(_objectSpread({
    cartQuantity: function cartQuantity() {
      return this.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var amount = this.cart.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
      });
    },
    cartTotalBoxQuantity: function cartTotalBoxQuantity() {
      var amount = this.cart.reduce(function (acc, item) {
        return acc + item.quantity / item.pcs_in_carton;
      }, 0);
      return Math.round(amount * 100) / 100;
    },
    cartSpace: function cartSpace() {
      var amount = this.cart.reduce(function (acc, item) {
        return acc + item.length * item.width * item.height * (item.quantity / item.pcs_in_carton);
      }, 0);
      return Math.round(amount / 1000000000 * 100) / 100;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    cart: function cart(state) {
      return state.cart;
    },
    userInfo: function userInfo(state) {
      return state.auth.userInfo;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    recentIavId: 'auth/recentInvoiceAddressId',
    recentCavId: 'auth/recentConsigneeAddressId'
  })),
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.quantity;
      amount = amount / 100;
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    updateCartItemQuantity: function updateCartItemQuantity(index, $e) {
      var quantity = Number($e.target.value);
      var data = {
        index: index,
        quantity: quantity
      };
      this.$store.dispatch('setQuantity', data);
    },
    cartLineBoxQuantity: function cartLineBoxQuantity(index) {
      return this.cart[index].quantity / this.cart[index].pcs_in_carton;
    },
    bankTransfer: function bankTransfer() {
      var _this = this;

      if (!this.$store.state.auth.userInfo) {
        alert('Please login before placing the order');
      } else {
        if (!this.$store.state.cart.length) {
          alert('The cart is empty');
        } else {
          if (!this.customer.iav) {
            alert('please select or create an address for invoice&goods collection');
            return;
          } else {
            this.customer.cart = JSON.stringify(this.$store.state.cart);
            this.customer.amount = this.$store.state.cart.reduce(function (acc, item) {
              return acc + item.price * item.quantity;
            }, 0);
            axios.post('/api/user/' + this.$store.state.auth.userInfo.id + '/bank', this.customer).then(function (res) {
              _this.$store.dispatch('clearCart');

              _this.$store.commit('auth/addUserOrderData', res.data);

              _this.$router.push({
                name: 'UserOrder'
              });
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }
      }
    },
    selectIav: function selectIav(id) {
      this.customer.iav = id;
    },
    selectCav: function selectCav(id) {
      this.customer.cav = id;
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
exports.push([module.i, "\n.payment_method_name[data-v-8482eb34] {\n    margin-right: 20px;\n}\n/* .tabpaymentcontent {\n    display: none;\n} */\n.active[data-v-8482eb34] {\n        display: block;\n        border: 2px solid #4889f3;\n        color: 000;\n        background-color: #4889f3;\n}\n\n", ""]);

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
    _c("div", { staticClass: "row mt-3" }, [
      _vm.$store.state.auth.userInfo
        ? _c(
            "div",
            { staticClass: "col-lg-4 col-md-4 col-sm-12 col-xs-12" },
            [
              _c("div", { staticClass: "mb-3" }, [
                _c("div", [
                  _vm._v(
                    "\n                    Welcome " +
                      _vm._s(_vm.userInfo.name) +
                      ", Your email is  " +
                      _vm._s(_vm.userInfo.email) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.userInfo.invoiceaddresses
                ? _c("p", [
                    _c("b", [_vm._v("Bill To:")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        "\n                    Please create your business/person info as recipient of this Invoice.\n                "
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "p",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "AddressCreate",
                          params: { user: _vm.userInfo.id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Create New Recipient for Invoice\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.userInfo.invoiceaddresses, function(address, index) {
                return _vm.userInfo.invoiceaddresses
                  ? _c(
                      "div",
                      {
                        key: index,
                        staticClass: "card mb-3",
                        staticStyle: {
                          display: "block",
                          border: "1px solid #ccc"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectIav(address.id)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "p-3",
                            class: { active: _vm.customer.iav === address.id }
                          },
                          [
                            address.company_name
                              ? _c("div", [
                                  _vm._v(
                                    _vm._s(address.company_name) +
                                      "\n                    "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                _vm._s(address.address) +
                                  ", " +
                                  _vm._s(address.city) +
                                  ", " +
                                  _vm._s(address.state) +
                                  ", " +
                                  _vm._s(address.zip_code) +
                                  "," +
                                  _vm._s(address.country)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(address.name) +
                                  ", " +
                                  _vm._s(address.phone) +
                                  "\n                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              }),
              _vm._v(" "),
              _vm.userInfo.consigneeaddresses
                ? _c("p", [
                    _c("b", [_vm._v("Ship To:")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "p",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "CaddressCreate",
                          params: { user: _vm.userInfo.id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                   Ship to Another Place\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.userInfo.consigneeaddresses, function(address, index) {
                return _vm.userInfo.consigneeaddresses
                  ? _c(
                      "div",
                      {
                        key: address.id,
                        staticClass: "card mb-3",
                        staticStyle: {
                          display: "block",
                          border: "1px solid #ccc"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectCav(address.id)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "p-3",
                            class: { active: _vm.customer.cav === address.id }
                          },
                          [
                            address.company_name
                              ? _c("div", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(address.company_name) +
                                      "\n                    "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                _vm._s(address.address) +
                                  ", " +
                                  _vm._s(address.city) +
                                  ", " +
                                  _vm._s(address.state) +
                                  ", " +
                                  _vm._s(address.zip_code) +
                                  "," +
                                  _vm._s(address.country)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(address.name) +
                                  ", " +
                                  _vm._s(address.phone) +
                                  "\n                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.$store.state.auth.userInfo
        ? _c(
            "div",
            { staticClass: "col-lg-4 col-md-4 col-sm-12 col-xs-12" },
            [
              _c("h6", [_vm._v("Please login in to place the order")]),
              _vm._v(" "),
              _c("router-link", { attrs: { to: "/login" } }, [
                _vm._v("\n                Login\n           ")
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-8 col-md-8 col-sm-12 col-xs-12" }, [
        _c(
          "table",
          {
            staticClass: "table table-striped",
            staticStyle: { width: "100%" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.cart, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            display: "flex",
                            "justify-content": "space-between"
                          }
                        },
                        [
                          _c("div", [
                            _c("img", {
                              attrs: {
                                src: item.image[0],
                                alt: "",
                                width: "44"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "ml-2" }, [
                            _vm._v(
                              "\n                                     " +
                                _vm._s(
                                  item.name +
                                    ", " +
                                    item.title +
                                    ", " +
                                    item.pcs_in_carton +
                                    "pcs/carton"
                                ) +
                                "\n                                "
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        staticStyle: { width: "100%", height: "100%" },
                        attrs: { type: "text", min: "1" },
                        domProps: { value: item.quantity },
                        on: {
                          blur: function($event) {
                            return _vm.updateCartItemQuantity(index, $event)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.cartLineBoxQuantity(index) + " cartons"
                          )
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.cartLineTotal(item)))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.$store.commit("removeFromCart", index)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    x\n                                "
                          )
                        ]
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("tr", { staticStyle: { "font-weight": "bold" } }, [
                  _c("td", [_vm._v("TOTAL")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.cartTotalBoxQuantity) +
                        "CARTONS\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v("  " + _vm._s(_vm.cartSpace) + "M³")]),
                  _vm._v(" "),
                  _c("td")
                ]),
                _vm._v(" "),
                _c("tr", { staticStyle: { "font-weight": "bold" } }, [
                  _c("td"),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.cartQuantity) +
                        "PCS\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.cartTotal))]),
                  _vm._v(" "),
                  _c("td")
                ])
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-12 payment_method" }, [
          _c("h4", { staticClass: "mt-3 mb-3" }, [
            _vm._v("Currently we only below options to pay ")
          ]),
          _vm._v(" "),
          _c("div", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.paymentMethod,
                  expression: "customer.paymentMethod"
                }
              ],
              attrs: { type: "radio", value: "bank", checked: "" },
              domProps: { checked: _vm._q(_vm.customer.paymentMethod, "bank") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.customer, "paymentMethod", "bank")
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "payment_method_name ml-3",
                attrs: { for: "banktransfer" }
              },
              [
                _vm._v(
                  "\n                        Direct Bank Transfer\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "For small batch orders, total Invoice value less than US$1,000, You can pay through Paypal."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-12 tabpaymentcontent" }, [
            _c(
              "button",
              {
                staticClass:
                  "form-control btn btn-primary btn-lg mx-auto text-large mt-3",
                on: { click: _vm.bankTransfer }
              },
              [
                _vm._v(
                  "\n                        Place the order\n                    "
                )
              ]
            )
          ])
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
    return _c("span", [
      _vm._v(
        "Not mandatory, you can ignore this option if the consignee information is same as \n                    "
      ),
      _c("strong", [
        _vm._v("\n                        Bill To\n                    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { "font-weight": "bold" } }, [
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
    return _c("p", [
      _c("span", [
        _vm._v(
          "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
        )
      ])
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