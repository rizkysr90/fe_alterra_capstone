import Logo from "../Logo/logo";
import style from "./NavbarHome.module.css";

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

        <button className={style.btnMasuk}>
          <img src="/icons/fi_log-in.svg" alt="log in" />
          Masuk
        </button>
      </nav>
    </>
  );
};

export default NavbarHome;
