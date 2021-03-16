(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [{
  path: '/',
  name: 'products.index',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./routes/Products/Index.vue */ "./resources/js/routes/Products/Index.vue"));
  }
}, {
  path: '/products/:slug',
  name: 'products.show',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./routes/Products/Show.vue */ "./resources/js/routes/Products/Show.vue"));
  }
}, {
  path: '/checkout',
  name: 'order.checkout',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./routes/Order/Checkout.vue */ "./resources/js/routes/Order/Checkout.vue"));
  }
}, {
  path: '/summary',
  name: 'order.summary',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./routes/Order/Summary.vue */ "./resources/js/routes/Order/Summary.vue"));
  }
}];

/***/ })

}]);