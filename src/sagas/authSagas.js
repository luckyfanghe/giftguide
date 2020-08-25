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

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */

function* authSaga() {}

export default authSaga;
