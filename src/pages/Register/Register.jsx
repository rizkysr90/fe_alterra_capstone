import style from "./Register.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RegisterEmail } from "../../config/redux/actions/authAction";
import { orderSellerAlert } from "../../config/redux/actions/sellerAction";

const Register = () => {
  const { dataRegister } = useSelector((state) => state.auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterEmail = (e) => {
    e.preventDefault()
    dispatch(RegisterEmail(email, password, name));
    dispatch(orderSellerAlert(true));
    navigate("/login");
  };

  useEffect(() => {
    if (dataRegister?.email === dataRegister && dataRegister?.password === dataRegister) navigate('/login');
    if (dataRegister?.email !== dataRegister && dataRegister?.password !== dataRegister && dataRegister !== null) navigate('/register');
    console.log(dataRegister);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={style.container}>
      <div className={style.contentOne}>
          <img src="/images/loginRegister.png" alt="bg"/>
          <div className={style.bigText}>
            Second
            <br />
            Hand.
          </div>
          <div className={style.linear}></div>
        </div>
        <div className={style.contentTwo}>
          <form className={style.formRegister}>
            <img
              className={style.iconForm}
              src="/icons/fi_arrow-left.svg"
              alt="Icon Back"
            />
            <h1 data-testid="regis" className={style.title}>Daftar</h1>
            <label htmlFor="aname">Nama</label>
            <input
              className={style.inputForm}
              type="text"
              name="aname"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              className={style.inputForm}
              type="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <div className={style.inputGroup}>
              <input
                className={style.inputForm}
                type="password"
                name="password"
                placeholder="Masukkan password"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              {/* <img
                className={style.iconInput}
                src="/icons/fi_eye.svg"
                alt="Icon Password"
              /> */}
            </div>
            <button className={style.btnRegister} onClick={(e) => handleRegisterEmail(e)}>Daftar</button>
            <p>
              Sudah punya akun?{" "}
              <Link className={style.link} to={"/login"}>
                Masuk di sini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
