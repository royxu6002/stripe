(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Products/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    formatCurrency: function formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocalString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Index.vue?vue&type=template&id=0e48cf84&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Products/Index.vue?vue&type=template&id=0e48cf84& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { "data-name": "portfolio-three-column" } }, [
      _c("div", { staticClass: "container" }, [
        _c("h1", { staticClass: "my-4" }, [
          _vm._v("Page Heading\n    "),
          _c("small", [_vm._v("Secondary Text")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4 col-sm-6 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: "http://placehold.it/700x400", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Project One")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-sm-6 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: "http://placehold.it/700x400", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Project Two")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-sm-6 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: "http://placehold.it/700x400", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Project Three")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-sm-6 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: "http://placehold.it/700x400", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Project Four")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-sm-6 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: "http://placehold.it/700x400", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Project Five")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-sm-6 mb-4" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: "http://placehold.it/700x400", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Project Six")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse."
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "pagination justify-content-center" }, [
          _c("li", { staticClass: "page-item" }, [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { href: "#", "aria-label": "Previous" }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("«")]),
                _vm._v(" "),
                _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v("1")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v("2")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v("3")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { href: "#", "aria-label": "Next" }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("»")]),
                _vm._v(" "),
                _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/routes/Products/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/routes/Products/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0e48cf84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0e48cf84& */ "./resources/js/routes/Products/Index.vue?vue&type=template&id=0e48cf84&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/routes/Products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0e48cf84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0e48cf84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Products/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Products/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/routes/Products/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Products/Index.vue?vue&type=template&id=0e48cf84&":
/*!*******************************************************************************!*\
  !*** ./resources/js/routes/Products/Index.vue?vue&type=template&id=0e48cf84& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0e48cf84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0e48cf84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Products/Index.vue?vue&type=template&id=0e48cf84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0e48cf84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0e48cf84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);