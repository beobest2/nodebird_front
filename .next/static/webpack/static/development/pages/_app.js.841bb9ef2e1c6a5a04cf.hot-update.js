webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSagar; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked8 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked9 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSagar);




axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = 'http://localhost:3065/api'; // login pattern

function logInAPI(logInData) {
  // 서버에 요청을 보내는 부분
  console.log('server login ~');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', logInData, {
    withCredentials: true
  });
}

function logIn(action) {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(action.data);
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);

        case 4:
          result = _context.sent;
          console.log(result.data);
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            //디스패치와 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 8:
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"]
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function watchLogIn() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} // signUp pattern


function signUpAPI(signUpData) {
  console.log('signUpAPI');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', signUpData);
}

function signUp(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

        case 5:
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context3.next = 15;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          // signup 실패
          console.log('!!!!');
          console.error(_context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context3.t0
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function watchSignUp() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
} // logOut pattern


function logOutAPI() {
  console.log('logOutAPI');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout', {}, {
    withCredentials: true
  });
}

function logOut(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI, action.data);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

        case 5:
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          // logOut 실패
          console.error(_context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context5.t0
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

function watchLogOut() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
} // loadUser pattern


function loadUserAPI() {
  console.log('loadUserAPI');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout', {}, {
    withCredentials: true
  });
}

function loadUser(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);

        case 3:
          _context7.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

        case 5:
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 7:
          _context7.next = 14;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          // logOut 실패
          console.error(_context7.t0);
          _context7.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context7.t0
          });

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 9]]);
}

function watchLoadUser() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function userSagar() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSagar$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

/***/ })

})
//# sourceMappingURL=_app.js.841bb9ef2e1c6a5a04cf.hot-update.js.map