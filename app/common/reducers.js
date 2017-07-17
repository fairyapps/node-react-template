import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";
import authReducer from "./auth/reducer";
import configReducer from "./config/reducer";
import deviceReducer from "./device/reducer";
import usersReducer from "./users/reducer";

export default combineReducers({
  auth: authReducer,
  config: configReducer,
  device: deviceReducer,
  users: usersReducer,
  routing: routerReducer
});
