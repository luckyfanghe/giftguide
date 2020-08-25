import types from "./types";

export const updateUser = userInfo => ({
  type: types.USER.UPDATE,
  userInfo: userInfo
});

export const loginUser = userInfo => ({
  type: types.USER.LOGIN,
  userInfo: userInfo
});

export const signupUser = userInfo => ({
  type: types.USER.SIGNUP,
  userInfo: userInfo
});

export const loginUserSuccess = state => ({
  type: types.USER.LOGINSUCCESS,
  state: state
});

export const loginUserFailed = state => ({
  type: types.USER.LOGINFAILED,
  state: state
});

export const signupUserSuccess = state => ({
  type: types.USER.SIGNUPSUCCESS,
  state: state
});

export const signupUserFailed = state => ({
  type: types.USER.SIGNUPFAILED,
  state: state
});
