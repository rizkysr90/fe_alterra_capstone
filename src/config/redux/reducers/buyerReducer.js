const initialState = {
    dataProductBuyer: null,
    dataTawar: null,
    dataHistoryBerhasil: null,
    dataHistoryDiproses: null,
    dataHistoryDibatalkan: null,
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
        case "SET_HISTORY_BERHASIL":
            return {
                ...state,
                dataHistoryBerhasil: action.payload
            }
        case "SET_HISTORY_DIPROSES":
            return {
                ...state,
                dataHistoryDiproses: action.payload
            }
        case "SET_HISTORY_DIBATALKAN":
            return {
                ...state,
                dataHistoryDibatalkan: action.payload
            }
        default: return state
    }
}

export default productReducer;