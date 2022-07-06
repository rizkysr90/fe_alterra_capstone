import axios from 'axios';

export const  sellerAction = (token) => (dispatch) => { 
    axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts?page=1", 
     { headers: { Authorization: `Bearer ${token}` }} 
    ).then((res) => { 
      dispatch({ type: "SET_PRODUCT_SELLER", payload: res.data.data });
      console.log(res) 
    }) 
    .catch((err) => console.log(err)); 
}

export const orderSeller = (token) => (dispatch) => {
  axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/sales?page=1",
  { headers: { Authorization: `Bearer ${token}` }}
  ).then((res) => {
    dispatch({ type: "SET_ORDER_SELLER", payload: res.data.data });
    console.log(res)
  })
  .catch((err) => console.log(err));
}
