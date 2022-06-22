import style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LoginEmail } from "../../config/redux/actions/authAction";

const Login = () => {
  const { dataLogin } = useSelector((state) => state.auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  }

  useEffect(() => {
    if (dataLogin?.email === dataLogin) navigate('/profile');
    if (dataLogin?.email !== dataLogin && dataLogin !== null) navigate('/register');
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.contentOne}>
          <div className={style.linear}></div>
          <div className={style.bigText}>
            Second
            <br />
            Hand.
          </div>
        </div>
        <div className={style.contentTwo}>
          <form className={style.formLogin}>
            <img
              className={style.iconForm}
              src="/icons/fi_arrow-left.svg"
              alt="Icon Back"
            />
            <h1 className={style.title}>Masuk</h1>
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
            <button className={style.btnLogin} onClick={handleLoginEmail}>Masuk</button>
            <p>
              Belum punya akun?{" "}
              <Link className={style.link} to={"/register"}>
                Daftar di sini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
