import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { 
    LOAD_USER_SUCCESS, 
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_OUT_SUCCESS, 
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS 
} from '../reducers/user';

axios.defaults.baseURL = 'http://localhost:3065/api';

// login pattern

function logInAPI(logInData) {
    // 서버에 요청을 보내는 부분
    console.log('server login ~');
    return axios.post('/user/login', logInData, {
        withCredentials: true,
    });
}

function* logIn(action) {
    try {
        console.log(action.data);
        const result = yield call(logInAPI, action.data);
        console.log(result.data);
        yield put({ //디스패치와 동일
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        });
    }
}

function* watchLogIn() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
}

// signUp pattern

function signUpAPI(signUpData) {
    console.log('signUpAPI');
    return axios.post('/user', signUpData);
}

function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        //throw new Error('에러에러에러');
        yield put({ // put은 dispatch 동일
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) { // signup 실패
        console.log('!!!!');
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

// logOut pattern
function logOutAPI() {
    console.log('logOutAPI');
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({ // put은 dispatch 동일
            type: LOG_OUT_SUCCESS,
        });
    } catch (e) { // logOut 실패
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e,
        });
    }
}

function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

// loadUser pattern
function loadUserAPI(userId) {
    console.log('loadUserAPI');
    return axios.get(userId ? `/user/${userId}` : '/user/', {
        withCredentials: true,
    });
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({ // put은 dispatch 동일
            type: LOAD_USER_SUCCESS,
            data: result.data,
            me: !action.data,
        });
    } catch (e) { // logOut 실패
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e,
        });
    }
}

function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

export default function* userSagar() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
    ]);
}
