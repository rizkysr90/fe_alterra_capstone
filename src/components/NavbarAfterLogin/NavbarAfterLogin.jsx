import style from './NavbarAfterLogin.module.css';
import Logo from '../Logo/logo';

const NavbarAfterLogin = () => {
  return (
    <>
        <nav>
            <div className={style.leftNavbar}>
                <Logo />
                <div className={style.inputContainer}>
                    <input type="search" placeholder="Cari di sini ..." />
                    <img src="/icons/fi_search.svg" alt="search" />
                </div>
            </div>
            <div className={style.rightNavbar}>
                <img src="/icons/fi_list.svg" alt="list" />
                <img src="/icons/fi_bell.svg" alt="bell" />
                <img src="/icons/fi_user.svg" alt="user" />
            </div>
        </nav>
    </>
  )
}

export default NavbarAfterLogin;