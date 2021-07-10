import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import postReducer from "./post/postReducer";
import themeReducer from "./theme/themeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
