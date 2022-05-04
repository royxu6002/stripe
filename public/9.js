(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Address.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserAddress',
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('auth', ['userInfo'])), {}, {
    consigneeaddresses: function consigneeaddresses() {
      return this.userInfo.consigneeaddresses;
    },
    invoiceaddresses: function invoiceaddresses() {
      return this.userInfo.invoiceaddresses;
    }
  }),
  methods: {
    deleteInvoiceAdd: function deleteInvoiceAdd(id) {
      var _this = this;

      axios["delete"]('/api/user/' + this.$route.params.user + '/invoiceaddress/' + id + '/delete').then(function (res) {
        if (res.data.msg) {
          _this.$store.dispatch('auth/deleteUserInvoiceAddressData', {
            id: id
          });
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    deleteConsigneeAdd: function deleteConsigneeAdd(id) {
      var _this2 = this;

      axios["delete"]('/api/user/' + this.$route.params.user + '/consigneeaddress/' + id + '/delete').then(function (res) {
        if (res.data.msg) {
          _this2.$store.dispatch('auth/deleteUserConsigneeAddressData', {
            id: id
          });
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nex\n.modal[data-v-4e7a022f] {\n    display: true;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=template&id=4e7a022f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Address.vue?vue&type=template&id=4e7a022f&scoped=true& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("h5", { staticClass: "mt-3" }, [_vm._v("My Address List")]),
    _vm._v(" "),
    _vm.userInfo.invoiceaddresses
      ? _c(
          "div",
          { staticClass: "mt-3" },
          [
            _c("h6", [_vm._v("Invoice Address\n        ")]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary mb-3",
                attrs: {
                  to: {
                    name: "AddressCreate",
                    params: {
                      user: _vm.userInfo.id
                    }
                  }
                }
              },
              [_vm._v("\n            New Invoice Address\n        ")]
            ),
            _vm._v(" "),
            _vm._l(_vm.invoiceaddresses, function(address, index) {
              return _c("div", { key: index, staticClass: "card mb-2" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    address.company_name
                      ? _c("div", [_vm._v(_vm._s(address.company_name))])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(address.name))]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(address.phone))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(address.address) +
                          "," +
                          _vm._s(address.city) +
                          "," +
                          _vm._s(address.state) +
                          "," +
                          _vm._s(address.zip_code) +
                          "," +
                          _vm._s(address.country)
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary mt-3",
                        attrs: {
                          to: {
                            name: "AddressEdit",
                            params: {
                              user: _vm.userInfo.id,
                              address: address.id
                            }
                          }
                        }
                      },
                      [_vm._v("\n                    Edit\n                ")]
                    )
                  ],
                  1
                )
              ])
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.userInfo.consigneeaddresses
      ? _c(
          "div",
          { staticClass: "mt-3" },
          [
            _c("h6", [_vm._v("Consignee Address\n        ")]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary mb-3",
                attrs: {
                  to: {
                    name: "CaddressCreate",
                    params: {
                      user: _vm.userInfo.id
                    }
                  }
                }
              },
              [_vm._v("\n            New Consignee Address\n        ")]
            ),
            _vm._v(" "),
            _vm._l(_vm.consigneeaddresses, function(address, index) {
              return _c("div", { key: index, staticClass: "card mb-2" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    address.company_name
                      ? _c("div", [_vm._v(_vm._s(address.company_name))])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(address.name))]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(address.phone))]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        _vm._s(address.address) +
                          "," +
                          _vm._s(address.city) +
                          "," +
                          _vm._s(address.state) +
                          "," +
                          _vm._s(address.zip_code) +
                          "," +
                          _vm._s(address.country)
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary mt-3",
                        attrs: {
                          to: {
                            name: "CaddressEdit",
                            params: {
                              user: _vm.userInfo.id,
                              address: address.id
                            }
                          }
                        }
                      },
                      [_vm._v("\n                    Edit\n                ")]
                    )
                  ],
                  1
                )
              ])
            })
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/User/Address.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/User/Address.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_vue_vue_type_template_id_4e7a022f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=4e7a022f&scoped=true& */ "./resources/js/views/User/Address.vue?vue&type=template&id=4e7a022f&scoped=true&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Address_vue_vue_type_style_index_0_id_4e7a022f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css& */ "./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_4e7a022f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Address_vue_vue_type_template_id_4e7a022f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e7a022f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Address.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/User/Address.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_4e7a022f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=style&index=0&id=4e7a022f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_4e7a022f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_4e7a022f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_4e7a022f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_4e7a022f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/User/Address.vue?vue&type=template&id=4e7a022f&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/User/Address.vue?vue&type=template&id=4e7a022f&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_4e7a022f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=template&id=4e7a022f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Address.vue?vue&type=template&id=4e7a022f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_4e7a022f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_4e7a022f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);