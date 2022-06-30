import axios from 'axios';

export const  sellerAction = (token) => (dispatch) => { 
    axios.get("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts?page=1", 
     { headers: { Authorization: `Bearer ${token}`   }} 
    ).then((res) => { 
      dispatch({ type: "SET_DATAPRODUCT_SELLER", payload: res.data.data });
      console.log(res) 
    }) 
    .catch((err) => console.log(err)); 
}
