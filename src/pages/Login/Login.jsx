import style from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
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
            />
            <label htmlFor="password">Password</label>
            <div className={style.inputGroup}>
              <input
                className={style.inputForm}
                type="password"
                name="password"
                placeholder="Masukkan password"
              />
              {/* <img
                className={style.iconInput}
                src="/icons/fi_eye.svg"
                alt="Icon Password"
              /> */}
            </div>
            <button className={style.btnLogin}>Masuk</button>
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
