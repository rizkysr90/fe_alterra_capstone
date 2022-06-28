import axios from 'axios';

export const RegisterEmail = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "SET_DATA_REGISTER", payload: { email, password } });
    };
};

export const LoginEmail = () => {
    return async (dispatch) => {
        const { data } = await axios.post('https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/login')
        dispatch({ type: 'SET_DATA_LOGIN', payload: data })
    }
}