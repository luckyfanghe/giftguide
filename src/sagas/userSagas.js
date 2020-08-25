// @flow
import axios from "axios";
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";

import fetchJSON from "../utils/Api";
import types from "../actions/types";
import * as URL from "../constants/api_url";
import {
  loginUserFailed,
  loginUserSuccess,
  signupUserFailed,
  signupUserSuccess,
  updateUser
} from "../actions/userActions";

import { doingAuth } from "../actions/authActions";
/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */

export function* watchLoginUser() {
  yield takeEvery(types.USER.LOGINUSER, loginUser);
}

function* loginUser(payload) {
  var type = payload.type;
  var userInfo = payload.userInfo;
  var config = JSON.parse(
    JSON.stringify(require("../config/" + process.env.NODE_ENV + ".json"))
  );
  var url = config.apiUrl + "user/";
  var options = {
    data: { email: userInfo.email, password: userInfo.password },
    method: "POST"
  };
  try {
    var result = yield call(fetchJSON, url, options);

    if (result.msg == "success" && result.data.length != 0) {
      yield put(doingAuth(""));
      yield put(loginUserSuccess("login sucess"));
      yield put(updateUser(result.data[0]));
    } else if (result.msg == "success" && result.data.length == 0) {
      yield put(doingAuth(""));
      yield put(loginUserFailed("email and password are wrong"));
    } else {
      yield put(doingAuth(""));
      yield put(loginUserFailed("server error"));
    }
  } catch (error) {
    yield put(doingAuth(""));
    yield put(loginUserFailed("server error"));
  }
}

export function* watchSignupUser() {
  yield takeEvery(types.USER.SIGNUPUSER, signupUser);
}

function* signupUser(payload) {
  var type = payload.type;
  var userInfo = payload.userInfo;
  var config = JSON.parse(
    JSON.stringify(require("../config/" + process.env.NODE_ENV + ".json"))
  );
  var url = config.apiUrl + "user/add";
  var options = {
    data: { email: userInfo.email, password: userInfo.password },
    method: "POST"
  };
  try {
    var result = yield call(fetchJSON, url, options);
    if (result.msg == "success") {
      yield put(doingAuth(""));
      yield put(signupUserSuccess("signup success"));
      yield put(updateUser(result.data));
    } else if (result.msg == "already user") {
      yield put(doingAuth(""));
      yield put(signupUserFailed("already user"));
    }
  } catch (error) {
    yield put(doingAuth(""));
    yield put(signupUserFailed("server error"));
  }
}

function* userSaga() {
  yield takeLatest(types.USER.LOGIN, loginUser);
  yield takeLatest(types.USER.SIGNUP, signupUser);
}

export default userSaga;
