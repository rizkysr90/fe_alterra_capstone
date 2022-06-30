const initialState = {
    dataProductSeller: null,
};

const sellerReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_DATAPRODUCT_SELLER":
            return {
                ...state,
                dataProductSeller: action.payload
            };
        default:
            return state;
    }
}

export default sellerReducer