import NavbarHome from "../../components/NavbarHome/NavbarHome";
import style from "./BuyerProduct.module.css";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import axios from "axios";
import { useEffect } from "react";

const BuyerProduct = () => {
	const [modalTawar, setModalTawar] = useState(false);
	const { dataLogin } = useSelector((globalStore) => globalStore.auth);
	const [price, setPrice] = useState();
	const { idProductBuyer } = useParams();
	const [prosesPenawaran, setProsesPenawaran] = useState(0);

	const [dataProductBuyer, setDataProductBuyer] = useState({});
	console.log(dataProductBuyer);
	console.log(dataLogin);

	const getProcessPenawaran = async () => {
		const { data } = await axios({
			method: "get",
			url: `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products/onProcess/${idProductBuyer}`,
			headers: {
				Authorization: `Bearer ${dataLogin.dataLogin.token}`,
			},
		});
		setProsesPenawaran(data.data.onProcess);
	};

	const getProductById = async () => {
		const { data } = await axios.get(
			`https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products/${idProductBuyer}`
		);
		setDataProductBuyer(data.data);
	};

	const toggleModalTawar = () => {
		setModalTawar(!modalTawar);
	};

	const handleTawar = async (e) => {
		e.preventDefault();
		//eslint-disable-next-line
		const { data } = await axios({
			method: "post",
			url: `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/purchases/orders`,
			data: {
				buyer_id: dataLogin.dataLogin.id,
				seller_id: dataProductBuyer.id_user,
				price: price,
				product_id: dataProductBuyer.id,
			},
			headers: {
				Authorization: `Bearer ${dataLogin.dataLogin.token}`,
			},
		});
	};

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	useEffect(() => {
		getProductById();
		if (dataLogin !== null) {
			getProcessPenawaran();
		}
		//eslint-disable-next-line
	}, []);

	console.log(prosesPenawaran);

	return (
		<>
			{dataLogin?.dataLogin.token ? <NavbarAfterLogin /> : <NavbarHome />}
			<Carousel className={style.carouselContainer}>
				{dataProductBuyer.Product_images?.map((data, key) => {
					return (
						<Carousel.Item key={key}>
							<img src={data?.url_image} alt="Foto Produk" />
						</Carousel.Item>
					);
				})}
			</Carousel>
			<div className={style.cardProduct}>
				<h1 className={style.titleProduct}>{dataProductBuyer?.name}</h1>
				<p className={style.categoryProduct}>
					{dataProductBuyer.Category?.name}
				</p>
				<h1 className={style.priceProduct}>{`${rupiah(
					dataProductBuyer?.price
				)}`}</h1>
				{prosesPenawaran === 0 && (
					<button onClick={toggleModalTawar} className={style.btnProduct}>
						Saya tertarik dan ingin nego
					</button>
				)}{prosesPenawaran === 1 && (
          <button
            className={style.btnProduct}
            disabled="true"
            style={{
              background: "#D0D0D0",
              border: "1px solid #D0D0D0" 
            }}>
						Menunggu respon penjual
					</button>
        )}
			</div>

			<div className={style.cardPenjual}>
				<div className={style.penjualContent}>
					<img
						src={dataProductBuyer.User?.profile_picture}
						alt="Foto Penjual"
					/>
				</div>
				<div className={style.penjualContent}>
					<h1 className={style.namePenjual}>{dataProductBuyer.User?.name}</h1>
					<p className={style.addressPenjual}>
						{dataProductBuyer.User?.address}
					</p>
				</div>
			</div>

			<div className={style.cardDesc}>
				<h1 data-testid="buyer" className={style.titleDesc}>Deskripsi</h1>
				<div className={style.textDesc}>
					<p>{dataProductBuyer?.description}</p>
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
									src={dataProductBuyer.Product_images[0]?.url_image}
									alt="Foto Product"
								></img>
							</div>
							<div className={style.modalCardContent}>
								<h1 className={style.titleModalCard}>
									{dataProductBuyer?.name}
								</h1>
								<p className={style.priceModalCard}>{`${rupiah(
									dataProductBuyer?.price
								)}`}</p>
							</div>
						</div>
						<p className={style.textModalTawar2}>Harga Tawar</p>
						<input
							className={style.inputModalCard}
							placeholder="Rp 0,00"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
						<button
							className={style.btnModalCard}
							onClick={(e) => handleTawar(e)}
						>
							Kirim
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default BuyerProduct;
