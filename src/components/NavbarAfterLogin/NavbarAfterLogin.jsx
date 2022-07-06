import style from "./NavbarAfterLogin.module.css";
import Logo from "../Logo/logo";
import { Link } from "react-router-dom";

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
					<Link to={"/daftar-jual"}>
						<img src="/icons/fi_list.svg" alt="list" />
					</Link>
					<Link to={"/"}>
						<img src="/icons/fi_bell.svg" alt="bell" />
					</Link>
					<Link to={"/profile"}>
						<img src="/icons/fi_user.svg" alt="user" />
					</Link>
				</div>
			</nav>
		</>
	);
};

export default NavbarAfterLogin;
