webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
var _jsxFileName = "/Users/kakao/Desktop/dev/node_bird/nodebird_front/components/AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Node Bird"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Profile"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, isLoggedIn ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, '')));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.da72fc0f6a4381a13df9.hot-update.js.map