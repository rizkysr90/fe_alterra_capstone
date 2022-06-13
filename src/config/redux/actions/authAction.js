export const RegisterEmail = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "SET_DATA_REGISTER", payload: { email, password } });
    };
};

export const LoginEmail = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "SET_DATA_LOGIN", payload: { email, password } });
    };
};