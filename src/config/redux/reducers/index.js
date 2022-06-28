import { combineReducers } from "redux";
import authReducer from "./authReducer";
import watchReducer from "./watchReducer";

const rootReducer = combineReducers({
    auth: authReducer, watchReducer,
});

export default rootReducer;