webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/kakao/Desktop/dev/react_birld/ch1/frontend/components/UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var dummy = {
  nickname: "jaden",
  Postings: [],
  Followings: [1, 2, 3],
  Followers: [1, 2],
  isLogedin: false
};

var UserProfile = function UserProfile() {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "posting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "posting", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), dummy.Postings.length), __jsx("div", {
      key: "following",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "following", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), dummy.Followings.length), __jsx("div", {
      key: "follower",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "follower", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), dummy.Followers.length)],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(Avatar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, dummy.nickname[0]),
    title: dummy.nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=_app.js.f564f6063c14851d2ce9.hot-update.js.map