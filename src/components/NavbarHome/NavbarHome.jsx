import Logo from "../Logo/logo";
import style from "./NavbarHome.module.css";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <>
      <nav>
        <div className={style.leftNavbar}>
          <Logo />
          <div className={style.inputContainer}>
            <input type="search" placeholder="Cari di sini ..." />
            <img src="icons/fi_search.svg" alt="search" />
          </div>
        </div>
        <Link to="/login" className={style.buttonLoginContainer}>
          <button className={style.btnMasuk}>
            <img src="/icons/fi_log-in.svg" alt="log in" />
            Masuk
          </button>
        </Link>
      </nav>
    </>
  );
};

export default NavbarHome;
