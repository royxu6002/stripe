(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      messages: '',
      errors: ''
    };
  },
  methods: {
    submitRegister: function submitRegister() {
      var _this = this;

      this.messages = '';
      this.errors = '';
      _api_User__WEBPACK_IMPORTED_MODULE_0__["default"].register(this.customer).then(function (res) {
        if (res.data.errors) _this.errors = res.data.errors;
        _this.messages = res.data.msg;
        if (res.data.cle_store_token) window.sessionStorage.setItem('cle_store_token', res.data.cle_store_token);
      })["catch"](function (err) {
        alert(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Register.vue?vue&type=template&id=0ddbbe78&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Register.vue?vue&type=template&id=0ddbbe78& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("h4", { staticClass: "mt-4 mb-4" }, [
        _vm._v("Welcome to register as a member!")
      ]),
      _vm._v(" "),
      _vm.messages
        ? _c("div", [
            _c("p", { staticClass: "alert alert-success" }, [
              _vm._v(_vm._s(_vm.messages))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "first_name" } }, [_vm._v("First Name")]),
        _vm._v(" "),
        _vm.errors
          ? _c(
              "div",
              _vm._l(_vm.errors.first_name, function(err, index) {
                return _c(
                  "p",
                  { key: index, staticClass: "alert alert-warning" },
                  [_vm._v("\n        " + _vm._s(err) + "\n      ")]
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
          attrs: { type: "text", name: "customer.first_name", required: "" },
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
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "last_name" } }, [_vm._v("Last Name")]),
        _vm._v(" "),
        _vm.errors
          ? _c(
              "div",
              _vm._l(_vm.errors.last_name, function(err, index) {
                return _c(
                  "p",
                  { key: index, staticClass: "alert alert-warning" },
                  [_vm._v("\n        " + _vm._s(err) + "\n      ")]
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
          attrs: { type: "text", name: "last_name", required: "" },
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
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _vm.errors
          ? _c(
              "div",
              _vm._l(_vm.errors.email, function(err, index) {
                return _c(
                  "p",
                  { key: index, staticClass: "alert alert-warning" },
                  [_vm._v("\n        " + _vm._s(err) + "\n      ")]
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
              value: _vm.customer.email,
              expression: "customer.email"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", name: "email", required: "" },
          domProps: { value: _vm.customer.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "email", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
        _vm._v(" "),
        _vm.errors
          ? _c(
              "div",
              _vm._l(_vm.errors.password, function(err, index) {
                return _c(
                  "p",
                  { key: index, staticClass: "alert alert-warning" },
                  [_vm._v("\n        " + _vm._s(err) + "\n      ")]
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
              value: _vm.customer.password,
              expression: "customer.password"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "password", name: "password", required: "" },
          domProps: { value: _vm.customer.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.customer, "password", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "confirm_password" } }, [
          _vm._v("Confirm Password")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.customer.password_confirmation,
              expression: "customer.password_confirmation"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "password", name: "confirm_password", required: "" },
          domProps: { value: _vm.customer.password_confirmation },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(
                _vm.customer,
                "password_confirmation",
                $event.target.value
              )
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "form-control btn btn-primary",
          on: { click: _vm.submitRegister }
        },
        [_vm._v("Submit")]
      )
    ]
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/views/User/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/User/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_0ddbbe78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=0ddbbe78& */ "./resources/js/views/User/Register.vue?vue&type=template&id=0ddbbe78&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_0ddbbe78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_0ddbbe78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/User/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Register.vue?vue&type=template&id=0ddbbe78&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/User/Register.vue?vue&type=template&id=0ddbbe78& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0ddbbe78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=0ddbbe78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Register.vue?vue&type=template&id=0ddbbe78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0ddbbe78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0ddbbe78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);