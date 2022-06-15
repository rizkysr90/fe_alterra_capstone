import style from "./Register.module.css";
import ButtonRegister from "../../components/Button/BtnPrimary";
import { Link } from "react-router-dom";

const Register = () => {
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
          <form className={style.formRegister}>
            <h1 className={style.title}>Daftar</h1>
            <label htmlFor="aname">Nama</label>
            <input
              className={style.inputForm}
              type="text"
              name="aname"
              placeholder="Nama Lengkap"
            />
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
            <ButtonRegister>Daftar</ButtonRegister>
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
