import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import postReducer from "./post/postReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  theme: themeReducer,
});

export default rootReducer;
