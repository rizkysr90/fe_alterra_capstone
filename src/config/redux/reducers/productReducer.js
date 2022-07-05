const initialState = {
    dataproduct: null,
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return {
                ...state,
                dataProduct: action.payload
            };
        default:
            return state;
    }
}

export default productReducer