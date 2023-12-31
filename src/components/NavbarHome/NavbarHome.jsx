import Logo from "../Logo/logo";
import style from "./NavbarHome.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarHome = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleOnSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${search}`);
    console.log(search)
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
				<Link to="/login" className={style.buttonLoginContainer}>
					<button className={style.btnMasuk}>
						<img src="/icons/fi_log-in.svg" alt="log in" />
						Masuk
					</button>
				</Link>
			</nav>
		</>
	);
};

export default NavbarHome;
