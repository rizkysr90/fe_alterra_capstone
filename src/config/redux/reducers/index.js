import { combineReducers } from "redux";
import authReducer from "./authReducer";
import buyerReducer from "./buyerReducer";
import sellerReducer from "./sellerReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    auth: authReducer, sellerReducer, buyerReducer, productReducer,
});

export default rootReducer;