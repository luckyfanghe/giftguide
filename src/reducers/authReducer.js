// @flow
import types from "../actions/types";

const initialState = {
  sidebarOpened: true,
  sidebarStyle: "login",
  authState: ""
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH.OPENSIDEBAR:
      return {
        ...state,
        sidebarOpened: true,
        sidebarStyle: action.sidebarStyle
      };
    case types.AUTH.CLOSESIDEBAR:
      return {
        ...state,
        sidebarOpened: false,
        sidebarStyle: action.sidebarStyle
      };
    case types.AUTH.DOINGAUTH:
      return {
        ...state,
        authState: action.state
      };
    default:
      return {
        ...state
      };
  }
}

export default authReducer;
