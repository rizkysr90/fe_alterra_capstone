import React from 'react';
import style from './NavbarTitle.module.css';
import Logo from '../Logo/logo';

const NavbarTitle = (props) => {
  return (
    <>
        <nav>
            <div className={style.leftNavbar}>
                <Logo />
            </div>
            <p className={style.navTitle}>{props.title}</p>
        </nav>
    </>
  )
}

NavbarTitle.defaultProps = {
  title: "add title here"
}

export default NavbarTitle;