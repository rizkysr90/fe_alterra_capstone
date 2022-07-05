import NavbarHome from "../../components/NavbarHome/NavbarHome";
import style from "./SearchResult.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const SearchResult = () => {
	const { searchResult } = useParams();

	const [searchData, setSearchData] = useState();

	const getProductBySearch = async () => {
		const { data } = await axios.get(
			`https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1&row=12&search=${searchResult}`
		);
		setSearchData(data.data);
		console.log(data.data);
	};

	useEffect(() => {
		getProductBySearch();
	}, []);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

	return (
		<>
			<div className={style.homeContainer}>
				<NavbarHome />
				<div className={style.heroContainer}>
					<div className={style.leftBox}></div>
					<div className={style.middleBox}>
						<div className={style.heroDesc}>
							<h1>HASIL PENCARIAN {searchResult}</h1>
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
				{searchData?.map((products) => (
					<div key={products.id} className={style.cardContainer}>
						<Link to={`/buyer-product/${products.id}`}>
							<img src={products.Product_images[0].url_image} alt="card" />
						</Link>
						<div className={style.cardDesc}>
							<h5>{`${products.name.slice(0, 15)}...`}</h5>
							<p>{products.Category.name}</p>
							<h5>{`${rupiah(products.price)}`}</h5>
						</div>
					</div>
				))}
				<div className={style.buttonJualContainer}>
					<button className={style.buttonJual}>
						<img src="icons/fi_plus_white.svg" alt="plus" />
						Jual
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchResult;