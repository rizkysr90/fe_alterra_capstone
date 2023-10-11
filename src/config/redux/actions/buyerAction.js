import axios from "axios";

export const buyerAction = () => (dispatch) => {
  axios
    .get(
      "https://bealterracapstone-production.up.railway.app/api/v1/products?page=1"
    )
    .then((res) => {
      dispatch({ type: "SET_PRODUCT_BUYER", payload: res.data.data });
    })
    .catch((err) => console.log(err));
};

export const tawarHarga = (token, price) => (dispatch) => {
  let tawar = { price };
  axios
    .post(
      "https://bealterracapstone-production.up.railway.app/api/v1/purchases/orders",
      { headers: { Authorization: `Bearer ${token}` } },
      tawar
    )
    .then((res) => {
      dispatch({ type: "SET_DATA_TAWAR", payload: res.data.data });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const historyBuyerBerhasil = (token) => (dispatch) => {
  axios
    .get(
      "https://bealterracapstone-production.up.railway.app/api/v1/purchases?page=1&row=12&done=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      dispatch({ type: "SET_HISTORY_BERHASIL", payload: res.data.data });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const historyBuyerDalamProses = (token) => (dispatch) => {
  axios
    .get(
      "https://bealterracapstone-production.up.railway.app/api/v1/purchases?page=1&row=12&status=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      dispatch({ type: "SET_HISTORY_DIPROSES", payload: res.data.data });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const historyBuyerDibatalkan = (token) => (dispatch) => {
  axios
    .get(
      "https://bealterracapstone-production.up.railway.app/api/v1/purchases?page=1&row=12&done=0",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      dispatch({ type: "SET_HISTORY_DIBATALKAN", payload: res.data.data });
      console.log(res);
    })
    .catch((err) => console.log(err));
};
