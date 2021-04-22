(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Consigneeaddress/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Consigneeaddress/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/User */ "./resources/js/api/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      customer: {},
      errors: ''
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/user/' + this.$route.params.user + '/consigneeaddress/' + this.$route.params.address + '/show').then(function (res) {
      var _nameGroup$, _nameGroup$2;

      _this.customer = res.data;

      var nameGroup = _this.customer.name.split(' ');

      _this.customer.first_name = (_nameGroup$ = nameGroup[0]) !== null && _nameGroup$ !== void 0 ? _nameGroup$ : null;
      _this.customer.last_name = (_nameGroup$2 = nameGroup[1]) !== null && _nameGroup$2 !== void 0 ? _nameGroup$2 : null;
    })["catch"](function (err) {
      return console.error(err);
    });
  },
  methods: {
    submit: function submit() {
      var _this2 = this;

      axios.put('/api/user/' + this.$route.params.user + '/consigneeaddress/' + this.$route.params.address + '/update', this.customer).then(function (res) {
        if (res.data.errors) _this2.errors = res.data.errors; // 改变 state中的数据 只能通过 commit

        if (res.data.status === 'succ') {
          var index = _this2.$store.state.auth.userInfo.consigneeaddresses.findIndex(function (value) {
            return value.id == _this2.$route.params.address;
          });

          var address = res.data.address;

          _this2.$store.commit('auth/updateUserConsigneeAddressData', {
            index: index,
            address: address
          });

          _this2.$router.push({
            name: 'UserAddress',
            params: {
              user: _this2.$route.params.user
            }
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Consigneeaddress/Edit.vue?vue&type=template&id=3f353275&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Consigneeaddress/Edit.vue?vue&type=template&id=3f353275& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "container register-page col-lg-8 col-md-8 col-sm-12 col-xs-12"
    },
    [
      _c("h4", { staticClass: "mt-3 mb-3 ml-3" }, [
        _vm._v("Whom to receive the goods")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "billing-details-wrap" }, [
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.first_name, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "first_name", name: "first_name" },
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
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.last_name, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "last_name", name: "last_name" },
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
        _c("div", { staticClass: "form-group col-12" }, [
          _c("label", { attrs: { for: "company_name" } }, [
            _vm._v("Company name")
          ]),
          _vm._v(" "),
          _c("span", [_vm._v("(Optional)")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.company_name,
                expression: "customer.company_name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "company_name", name: "company_name" },
            domProps: { value: _vm.customer.company_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "company_name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(2),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.phone, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "phone", name: "phone" },
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
            _vm._v("Need phone contact for goods collection")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(3),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.address, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "address", name: "address" },
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
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(4),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.city, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "city", name: "city" },
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
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(5),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.state, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "state", name: "state" },
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
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(6),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.zip_code, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "zip_code", name: "zip_code" },
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
        _c("div", { staticClass: "form-group col-12" }, [
          _vm._m(7),
          _vm._v(" "),
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors.country, function(err, index) {
                  return _c(
                    "p",
                    { key: index, staticClass: "alert alert-warning" },
                    [
                      _vm._v(
                        "\n                      " +
                          _vm._s(err) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
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
            attrs: { type: "text", id: "country", name: "country" },
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-12" }, [
          _c(
            "button",
            {
              staticClass: "form-control btn btn-primary",
              on: { click: _vm.submit }
            },
            [_vm._v("Submit")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("First Name "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "last_name" } }, [
      _vm._v("Last name "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "phone" } }, [
      _vm._v("Phone "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "address" } }, [
      _vm._v("Address "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "city" } }, [
      _vm._v("City "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "state" } }, [
      _vm._v("State "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "zip_code" } }, [
      _vm._v("Zip Code "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "country" } }, [
      _vm._v("Country "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/User.js":
/*!**********************************!*\
  !*** ./resources/js/api/User.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all() {
    // 不支持分页
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/users');
  },
  find: function find() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/".concat(id));
  },
  update: function update() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/".concat(id), data);
  },
  login: function login(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', data);
  },
  logout: function logout() {
    window.sessionStorage.removeItem('cle_store_token');
  },
  loginSocial: function loginSocial(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/".concat(social), data);
  },
  register: function register(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/register', data);
  },
  forgot: function forgot(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/password/email', data);
  },
  reset: function reset(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/password/reset', data);
  },
  confirm: function confirm(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/password/confirm', data);
  }
});

/***/ }),

/***/ "./resources/js/views/Consigneeaddress/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Consigneeaddress/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_3f353275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=3f353275& */ "./resources/js/views/Consigneeaddress/Edit.vue?vue&type=template&id=3f353275&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Consigneeaddress/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_3f353275___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_3f353275___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Consigneeaddress/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Consigneeaddress/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Consigneeaddress/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Consigneeaddress/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Consigneeaddress/Edit.vue?vue&type=template&id=3f353275&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Consigneeaddress/Edit.vue?vue&type=template&id=3f353275& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3f353275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=3f353275& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Consigneeaddress/Edit.vue?vue&type=template&id=3f353275&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3f353275___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3f353275___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);