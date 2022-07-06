import axios from "axios";

export const  buyerAction = () => (dispatch) => { 
    axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1", 
    ).then((res) => { 
      dispatch({ type: "SET_PRODUCT_BUYER", payload: res.data.data });
    }) 
    .catch((err) => console.log(err)); 
}