import style from './NavbarTitle.module.css';
import Logo from '../Logo/logo';

const NavbarTitle = () => {
  return (
    <>
        <nav>
            <div className={style.leftNavbar}>
                <Logo />
                <p id="navTitle"></p>
            </div>
        </nav>
    </>
  )
}

export default NavbarTitle;