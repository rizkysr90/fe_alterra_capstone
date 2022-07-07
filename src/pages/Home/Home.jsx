import NavbarHome from "../../components/NavbarHome/NavbarHome";
import style from "./Home.module.css";
import Category from "../../components/Category/Category";
import { useSelector } from "react-redux";
import NavbarAfterLogin from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
	const { dataLogin } = useSelector((state) => state.auth);

	return (
		<>
			<div className={style.homeContainer}>
				{dataLogin?.dataLogin.token ? <NavbarAfterLogin /> : <NavbarHome />}
				<div className={style.heroContainer}>
					<div className={style.leftBox}></div>
					<div className={style.middleBox}>
						<div className={style.heroDesc}>
							<h1>Bulan Ramadhan Banyak diskon!</h1>
							<h5>Diskon Hingga</h5>
							<h3>60%</h3>
						</div>
						<img
							src="images/png_gift_88837.png"
							alt="gift"
							className={style.giftImage}
						/>
						<div className={style.backgroundImageContainer}>
							<img
								src="images/background_hero.png"
								alt="background"
								className={style.backgroundImage}
							/>
							<div className={style.background}></div>
						</div>
					</div>
					<div className={style.rightBox}></div>
				</div>
				<div className={style.containerMobile}>
					<form>
						<Sidebar />
						<div className={style.inputContainer}>
							<input type="search" placeholder="Cari di sini ..." />
							<img src="/icons/fi_search.svg" alt="search" />
						</div>
					</form>
					<div className={style.heroContainerMobile}>
						<div className={style.heroDescMobile}>
							<h1>Bulan Ramadhan Banyak diskon!</h1>
							<h5>Diskon Hingga</h5>
							<h3>60%</h3>
						</div>
						<img
							src="images/png_gift_88837.png"
							alt="gift mobile"
							className={style.giftImageMobile}
						/>
					</div>
				</div>
			</div>
			<Category />
			<div className={style.buttonJualContainer}>
				<Link to={"/product-info"} style={{ textDecoration: "none" }}>
					<button className={style.buttonJual}>
						<img src="icons/fi_plus_white.svg" alt="plus" />
						Jual
					</button>
				</Link>
			</div>
		</>
	);
};

export default Home;
