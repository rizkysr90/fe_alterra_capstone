import axios from "axios";

export const watchsAction = () => {
    return async (dispatch) => {
        const {data} = await axios.post(
            `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts`
        );
        dispatch({
            type: "SET_WATCHS",
            payload: data
        })
    } 
}