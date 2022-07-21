import style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LoginEmail } from "../../config/redux/actions/authAction";

const Login = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginEmail = (e) => {
    e.preventDefault()
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }

  useEffect(() => {
    if (dataLogin?.email === dataLogin && dataLogin?.password === dataLogin) navigate('/');
    if (dataLogin?.email !== dataLogin && dataLogin?.password !== dataLogin && dataLogin !== null) navigate('/login');
    console.log(dataLogin);
    //eslint-disable-next-line
  }, []);

  console.log(dataLogin);

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
          <form method="post" className={style.formLogin}>
            <img
              className={style.iconForm}
              src="/icons/fi_arrow-left.svg"
              alt="Icon Back"
            />
            <h1 data-testid="title" className={style.title}>Masuk</h1>
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
            <button className={style.btnLogin} onClick={(e) => handleLoginEmail(e)}>Masuk</button>
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
