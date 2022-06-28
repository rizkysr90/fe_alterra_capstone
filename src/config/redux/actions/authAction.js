import axios from 'axios';

export const RegisterEmail = (email, password) => {
    return (dispatch) => {
        axios.post('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/register')
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        dispatch({ type: "SET_DATA_REGISTER", payload: { email, password } });
    };
};

export const LoginEmail = (email, password) => {
    return (dispatch) => {
        axios.post('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/login')
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        }) 
        dispatch({ type: "SET_DATA_LOGIN", payload: { email, password } });
    };
};
