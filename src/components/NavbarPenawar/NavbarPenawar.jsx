import style from './NavbarPenawar.module.css';
import Logo from '../Logo/logo';

const NavbarProfil = () => {
  return (
    <>
        <nav>
            <div className={style.leftNavbar}>
                <Logo />
                <h1 className={style.com}>Info Penawar</h1>
            </div>
        </nav>
    </>
  )
}

export default NavbarProfil;