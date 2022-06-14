import Logo from "../Logo/logo";
import style from './NavbarHome.module.css';
import BtnPrimary from "../Button/BtnPrimary";

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
            <div className={style.buttonContainer}>
              <BtnPrimary>
                <img src="/icons/fi_log-in.svg" alt="log in" />
                Masuk
              </BtnPrimary>
            </div>
        </nav>
    </>
  )
}

export default NavbarHome;