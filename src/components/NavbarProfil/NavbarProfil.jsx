import style from './NavbarProfil.module.css';
import Logo from '../Logo/logo';

const NavbarProfil = () => {
  return (
    <>
        <nav>
            <div className={style.leftNavbar}>
                <Logo />
                <h1 className={style.com}>Lengkapi Info Akun</h1>
            </div>
        </nav>
    </>
  )
}

export default NavbarProfil;