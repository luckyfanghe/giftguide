import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import userReducer from "./userReducer";
import authReducer from "./authReducer";

export default combineReducers({
  userReducer,
  authReducer
});
