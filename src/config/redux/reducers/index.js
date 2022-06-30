import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sellerReducer from "./sellerReducer";

const rootReducer = combineReducers({
    auth: authReducer, sellerReducer
});

export default rootReducer;