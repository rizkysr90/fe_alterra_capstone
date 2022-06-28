import axios from 'axios';

export const RegisterEmail = (email, password, name) => {
    let register = { email, password, name}
    return (dispatch) => {
        axios.post('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/register', register)
        .then((result) => {
            console.log(result)
            dispatch({ type: "SET_DATA_REGISTER", payload: { dataRegister: result.register.data } });
        })
        .catch((error) => {
            console.log(error)
        })
    };
};

export const LoginEmail = (email, password) => {
    let login = {
        email, password
    }
    return (dispatch) => {
        axios.post('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/login', login)
        .then((result) => {
            dispatch({ type: "SET_DATA_LOGIN", payload: { dataLogin: result.login.data } });
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        }) 
    };
};
