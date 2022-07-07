import style from "./NavbarAfterLogin.module.css";
import Logo from "../Logo/logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarAfterLogin = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleOnSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${search}`);
		console.log(search);
	};

	return (
		<>
			<nav>
				<div className={style.leftNavbar}>
					<Logo />
					<div className={style.inputContainer}>
						<form onSubmit={(e) => handleOnSubmit(e)}>
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								type="search"
								placeholder="Cari di sini ..."
							/>
							<img
								onClick={(e) => handleOnSubmit(e)}
								src="/icons/fi_search.svg"
								alt="search"
							/>
						</form>
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
