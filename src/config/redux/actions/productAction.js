import axios from "axios";

export const productBuyer = () => {
    return (dispatch) => {
        axios.get('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1')
        .then((result) => {
            dispatch({ type: "SET_PRODUCT_BUYER", payload: { dataProductBuyer: result.data.data } })
            console.log(result)
        })
    }
}