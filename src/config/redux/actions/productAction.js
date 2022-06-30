import axios from "axios";

export const productBuyer = (id, name) => {
    let product = { id, name}
    return (dispatch) => {
        axios.get('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1', product)
        .then((result) => {
            dispatch({ type: "SET_PRODUCT_BUYER", payload: result.data.product })
            console.log(result)
        })
    }
}