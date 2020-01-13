webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var _jsxFileName = "/Users/kakao/Desktop/dev/node_bird/nodebird_front/pages/signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var TextInput = function TextInput(_ref) {
  var value = _ref.value;

  __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, value);
};

TextInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var hander = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setter(e.target.value);
  }, []);
  return [value, hander];
};

var Signup = function Signup() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      passwordCheck = _useState2[0],
      setPasswordCheck = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordError = _useState4[0],
      setPasswordError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      termError = _useState5[0],
      setTermError = _useState5[1];

  var _useInput = useInput(''),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = useInput(''),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nick = _useInput4[0],
      onChangeNick = _useInput4[1];

  var _useInput5 = useInput(''),
      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      isSigningUp = _useSelector.isSigningUp,
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (me) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [me && me.id]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log({
      id: id,
      nick: nick,
      password: password,
      passwordCheck: passwordCheck,
      term: term
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP_REQUEST"],
      data: {
        userId: id,
        password: password,
        nickname: nick
      }
    });
  }, [password, passwordCheck, term]);
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "ID"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-nick",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "NickName"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-pass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Password"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-pass",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Password Check"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password-check",
    type: "password",
    required: true,
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "miss match password")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    name: "user-term",
    value: term,
    onChange: onChangeTerm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "I agree that term!"), termError && __jsx("div", {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "you have to agree!!")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("div", {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isSigningUp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Sign up"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.874e577b265ab7dbb39f.hot-update.js.map