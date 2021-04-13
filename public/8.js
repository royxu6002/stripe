(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Token.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Token.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Token',
  data: function data() {
    return {
      customer: {
        email: this.$route.params.email,
        password: '',
        password_confirmation: '',
        token: this.$route.params.token
      }
    };
  },
  methods: {
    resetPassword: function resetPassword() {
      _api_User__WEBPACK_IMPORTED_MODULE_0__["default"].reset(this.customer).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Token.vue?vue&type=template&id=358da274&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Token.vue?vue&type=template&id=358da274& ***!
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
    _c("h4", [_vm._v("this is email token page")]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "" } }, [_vm._v("email")]),
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
        attrs: { type: "text" },
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
      _c("label", { attrs: { for: "" } }, [_vm._v("Password")]),
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
        attrs: { type: "password" },
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
      _c("label", { attrs: { for: "" } }, [_vm._v("Password Confirmation")]),
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
        attrs: { type: "password" },
        domProps: { value: _vm.customer.password_confirmation },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.customer, "password_confirmation", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "button",
      { staticClass: "btn btn-primary", on: { click: _vm.resetPassword } },
      [_vm._v("Submit")]
    ),
    _vm._v(" "),
    _c(
      "p",
      { staticClass: "mt-3" },
      [
        _c("span", [_vm._v("I would like drop the operation")]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/login" } }, [_vm._v("Login")])
      ],
      1
    )
  ])
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
  login: function login() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', data);
  },
  loginSocial: function loginSocial() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/".concat(social), data);
  },
  forgot: function forgot() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/password/email', data);
  },
  reset: function reset() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/password/reset', data);
  }
});

/***/ }),

/***/ "./resources/js/views/User/Token.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/User/Token.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Token_vue_vue_type_template_id_358da274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Token.vue?vue&type=template&id=358da274& */ "./resources/js/views/User/Token.vue?vue&type=template&id=358da274&");
/* harmony import */ var _Token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Token.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Token_vue_vue_type_template_id_358da274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Token_vue_vue_type_template_id_358da274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Token.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Token.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/User/Token.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Token.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Token.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Token_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Token.vue?vue&type=template&id=358da274&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/User/Token.vue?vue&type=template&id=358da274& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Token_vue_vue_type_template_id_358da274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Token.vue?vue&type=template&id=358da274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Token.vue?vue&type=template&id=358da274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Token_vue_vue_type_template_id_358da274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Token_vue_vue_type_template_id_358da274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);