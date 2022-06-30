import { combineReducers } from "redux";
import authReducer from "./authReducer";
import buyerReducer from "./buyerReducer";
import sellerReducer from "./sellerReducer";

const rootReducer = combineReducers({
    auth: authReducer, sellerReducer, buyerReducer,
});

export default rootReducer;