const initialState = {
    watchs: [],
}

const watchReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_WATCHS":
            return {
                ...state,
                watchs: action.payload,
            }
            default: {
                return state;
            }
    }
}

export default watchReducer
