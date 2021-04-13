(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//


var getUsers = function getUsers(page, callback) {
  var params = {
    page: page
  };
  axios.get('api/users', {
    params: params
  }).then(function (res) {
    callback(null, res.data);
  })["catch"](function (err) {
    callback(err, err.response.data);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      error: null,
      users: null,
      links: {
        first: null,
        last: null,
        next: null,
        prev: null
      },
      meta: null
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getUsers(to.query.page, function (err, data) {
      next(function (vm) {
        return vm.setData(err, data);
      });
    }); // axios.get('/api/users', {
    //     params: {
    //         page: to.query.page
    //     }
    // }).then(res => {
    //     // 因为不好判断取得数据是成功还是失败, 所以放两个键, 第一放失败数据, 第二个放成功数据;
    //     next(vm => vm.setData(null,res.data));
    // }).catch(err => {
    //     next(vm => vm.setData(err.response.data, null));
    // })
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this = this;

    this.users = this.links = this.meta = null;
    getUsers(to.query.page, function (err, data) {
      _this.setData(err, data);

      next();
    });
  },
  methods: {
    setData: function setData(err, _ref) {
      var users = _ref.data,
          links = _ref.links,
          meta = _ref.meta;
      if (err) this.error = err.toString();
      this.users = users;
      this.links = links;
      this.meta = meta;
    },
    goToNext: function goToNext() {
      this.$router.push({
        query: {
          page: this.nextPage
        }
      });
    },
    goToPrev: function goToPrev() {
      this.$router.push({
        name: 'Users.Index',
        query: {
          page: this.prevPage
        }
      });
    }
  },
  computed: {
    nextPage: function nextPage() {
      if (!this.meta || this.meta.current_page === this.meta.last_page) return;
      return this.meta.current_page + 1;
    },
    prevPage: function prevPage() {
      if (!this.meta || this.meta.current_page === 1) return;
      return this.meta.current_page - 1;
    },
    paginationCount: function paginationCount() {
      if (!this.meta) return;
      var _this$meta = this.meta,
          current_page = _this$meta.current_page,
          last_page = _this$meta.last_page; // return `${current_page} of ${last_page}`;

      return current_page + 'of' + last_page;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Index.vue?vue&type=template&id=06060666&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Index.vue?vue&type=template&id=06060666& ***!
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
  return _c("div", { staticClass: "container col-8 offset-2" }, [
    _c("h4", [_vm._v("this is user index page")]),
    _vm._v(" "),
    _vm.loading
      ? _c("div", { staticClass: "loading" }, [
          _vm._v(" \n        loading data...\n    ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.error
      ? _c("div", { staticClass: "error" }, [
          _c("p", [
            _vm._v("oops, sorry, it seems that something has go wrong")
          ]),
          _vm._v(" "),
          _c("span", { domProps: { textContent: _vm._s(_vm.error) } })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", [
      _vm.users
        ? _c(
            "ul",
            _vm._l(_vm.users, function(user, index) {
              return _c("li", { key: index }, [
                _c("span", { domProps: { textContent: _vm._s(user.name) } }),
                _vm._v(" "),
                _c("span", { domProps: { textContent: _vm._s(user.email) } })
              ])
            }),
            0
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "pagination" }, [
      _c(
        "button",
        {
          attrs: { disabled: !_vm.prevPage },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.goToPrev($event)
            }
          }
        },
        [_vm._v("Previous\n        ")]
      ),
      _vm._v("\n        " + _vm._s(_vm.paginationCount) + "\n        "),
      _c(
        "button",
        {
          attrs: { disabled: !_vm.nextPage },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.goToNext($event)
            }
          }
        },
        [_vm._v("Next\n        ")]
      )
    ])
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

/***/ "./resources/js/views/User/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/User/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_06060666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=06060666& */ "./resources/js/views/User/Index.vue?vue&type=template&id=06060666&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_06060666___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_06060666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/User/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Index.vue?vue&type=template&id=06060666&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/User/Index.vue?vue&type=template&id=06060666& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06060666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=06060666& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Index.vue?vue&type=template&id=06060666&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06060666___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_06060666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);