const initialState = {
    dataProductBuyer: null,
    dataTawar: null,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT_BUYER":
            return {
                ...state,
                dataProductBuyer: action.payload
            }
        case "SET_DATA_TAWAR":
            return {
                ...state,
                dataTawar: action.payload
            }
        default: return state
    }
}

export default productReducer;