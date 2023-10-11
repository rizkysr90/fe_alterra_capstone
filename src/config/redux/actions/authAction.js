import axios from "axios";

export const RegisterEmail = (email, password, name) => {
  let register = { email, password, name };
  return (dispatch) => {
    axios
      .post(
        "https://bealterracapstone-production.up.railway.app/api/v1/register",
        register
      )
      .then((result) => {
        console.log(result);
        dispatch({
          type: "SET_DATA_REGISTER",
          payload: { dataRegister: result.data.register },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const LoginEmail = (email, password) => {
  let data = {
    email,
    password,
  };
  return (dispatch) => {
    axios
      .post(
        "https://bealterracapstone-production.up.railway.app/api/v1/login",
        data
      )
      .then((result) => {
        dispatch({
          type: "SET_DATA_LOGIN",
          payload: { dataLogin: result.data.data },
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
