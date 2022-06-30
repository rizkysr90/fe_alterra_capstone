import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";

const rootReducer = combineReducers({
    auth: authReducer, sellerReducer, productReducer,
});

export default rootReducer;