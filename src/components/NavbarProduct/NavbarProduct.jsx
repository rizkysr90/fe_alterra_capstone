import Logo from "../Logo/logo";
import style from './NavbarProduct.module.css';

const NavbarProduct = () => {
  return (
    <>
        <nav>
            <div className={style.leftNavbar}>
                <Logo />
            </div>
        </nav>
    </>
  )
}

export default NavbarProduct;