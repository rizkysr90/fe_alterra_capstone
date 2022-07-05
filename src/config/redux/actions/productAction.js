import axios from 'axios';

export const  productAction = (token) => (dispatch) => { 
    axios.post("https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts", 
     { headers: { Authorization: `Bearer ${token}` }} 
    ).then((res) => { 
      dispatch({ type: "ADD_PRODUCT", payload: res.data.data });
      console.log(res) 
    }) 
    .catch((err) => console.log(err)); 
}
