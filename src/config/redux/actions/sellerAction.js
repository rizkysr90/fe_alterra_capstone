import axios from 'axios';

export const sellerAction = (token) => (dispatch) => {
  axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts?page=1",
    { headers: { Authorization: `Bearer ${token}` } }
  ).then((res) => {
    dispatch({ type: "SET_PRODUCT_SELLER", payload: res.data.data });
    console.log(res)
  })
    .catch((err) => console.log(err));
}

export const orderSellerDiminati = (token) => (dispatch) => {
  axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/sales?page=1",
    { headers: { Authorization: `Bearer ${token}` } }
  ).then((res) => {
    dispatch({ type: "SET_ORDER_SELLER", payload: res.data.data });
    console.log(res)
  })
    .catch((err) => console.log(err));
}

export const orderSellerTerjual = (token) => (dispatch) => {
  axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts?page=1&row=10&status=false",
    { headers: { Authorization: `Bearer ${token}` } }
  ).then((res) => {
    dispatch({ type: "SET_SELLER_TERJUAL", payload: res.data.data });
    console.log(res)
  })
    .catch((err) => console.log(err));
}

export const orderSellerAlert = (statusAlert) => (dispatch) => {
  dispatch({ type: "SET_ALERT", payload: statusAlert });
};