const initialState = {
    dataProductSeller: null,
    dataOrderSeller: null,
    dataSellerTerjual: null,
};

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT_SELLER":
            return {
                ...state,
                dataProductSeller: action.payload
            };
        case "SET_ORDER_SELLER":
            return {
                ...state,
                dataOrderSeller: action.payload
            };
        case "SET_SELLER_TERJUAL":
            return {
                ...state,
                dataSellerTerjual: action.payload
            };
        default:
            return state;
    }
}

export default sellerReducer