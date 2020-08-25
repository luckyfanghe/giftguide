import { all, spawn } from "redux-saga/effects";
import userSagas from "./userSagas";
import authSagas from "./authSagas";

export default function* rootSaga(getState) {
  yield all([spawn(userSagas)]);
  yield all([spawn(authSagas)]);
}
