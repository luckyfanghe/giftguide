// @flow
import types from "../actions/types";

const initialState = {
  user: null,
  userState: "",
  userStateDes: ""
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER.UPDATE:
      return {
        ...state,
        user: action.userInfo
      };
    case types.USER.LOGINFAILED:
      return {
        ...state,
        userState: "login failed",
        userStateDes: action.state
      };
    case types.USER.LOGINSUCCESS:
      return {
        ...state,
        userState: "login success",
        userStateDes: ""
      };
    case types.USER.SIGNUPFAILED:
      return {
        ...state,
        userState: "signup failed",
        userStateDes: action.state
      };
    case types.USER.SIGNUPSUCCESS:
      return {
        ...state,
        userState: "signup success",
        userStateDes: ""
      };
    default:
      return {
        ...state
      };
  }
}

export default userReducer;
