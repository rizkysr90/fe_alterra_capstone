import NavbarHome from "../../components/NavbarHome/NavbarHome";
import style from "./BuyerProduct.module.css";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin/NavbarAfterLogin";

const BuyerProduct = () => {
	const [modalTawar, setModalTawar] = useState(false);
	const { dataLogin } = useSelector((state) => state.auth);
	const { idProductBuyer } = useParams();
	const { dataProductBuyer } = useSelector(
		(globalStore) => globalStore.buyerReducer
	);

	const toggleModalTawar = () => {
		setModalTawar(!modalTawar);
	};

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	let i = -1;

	for (let j = 0; j < dataProductBuyer.length; j++) {
		//eslint-disable-next-line
		if (dataProductBuyer[j].id == idProductBuyer) {
			i = j;
		}
		console.log(dataProductBuyer[i]);
	}

	return (
		<>
			{dataLogin?.dataLogin.token ? <NavbarAfterLogin /> : <NavbarHome />}
			<Carousel className={style.carouselContainer}>
				{dataProductBuyer[i].Product_images.map((data) => {
					return (
						<Carousel.Item>
							<img
								src={data?.url_image}
								alt="First slide"
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
			<div className={style.cardProduct}>
				<h1 className={style.titleProduct}>{dataProductBuyer[i].name}</h1>
				<p className={style.categoryProduct}>
					{dataProductBuyer[i].Category.name}
				</p>
				<h1 className={style.priceProduct}>{`${rupiah(
					dataProductBuyer[i].price
				)}`}</h1>
				<button onClick={toggleModalTawar} className={style.btnProduct}>
					Saya tertarik dan ingin nego
				</button>
			</div>

			<div className={style.cardPenjual}>
				<div className={style.penjualContent}>
					<img
						src={dataProductBuyer[i].User.profile_picture}
						alt="Foto Penjual"
					/>
				</div>
				<div className={style.penjualContent}>
					<h1 className={style.namePenjual}>{dataProductBuyer[i].User.name}</h1>
					<p className={style.addressPenjual}>
						{dataProductBuyer[i].User.address}
					</p>
				</div>
			</div>

			<div className={style.cardDesc}>
				<h1 className={style.titleDesc}>Deskripsi</h1>
				<div className={style.textDesc}>
					<p>{dataProductBuyer[i].description}</p>
				</div>
			</div>

			{modalTawar && (
				<div className={style.modalTawar}>
					<div className={style.overlay} onClick={toggleModalTawar}></div>
					<div className={style.modalTawarContent}>
						<h1 className={style.titleModalTawar}>Masukkan Harga Tawarmu</h1>
						<p className={style.textModalTawar}>
							Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
							akan segera dihubungi penjual.
						</p>
						<div className={style.modalCard}>
							<div className={style.modalCardContent}>
								<img
									src={dataProductBuyer[i].Product_images[0]?.url_image}
									alt="Foto Product"
								></img>
							</div>
							<div className={style.modalCardContent}>
								<h1 className={style.titleModalCard}>
									{dataProductBuyer[i].name}
								</h1>
								<p className={style.priceModalCard}>{`${rupiah(
									dataProductBuyer[i].price
								)}`}</p>
							</div>
						</div>
						<p className={style.textModalTawar2}>Harga Tawar</p>
						<input className={style.inputModalCard} placeholder="Rp 0,00" />
						<button className={style.btnModalCard}>Kirim</button>
					</div>
				</div>
			)}
		</>
	);
};

export default BuyerProduct;
