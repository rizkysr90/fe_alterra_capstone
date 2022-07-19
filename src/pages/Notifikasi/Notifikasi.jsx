import style from "./Notifikasi.module.css";
import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import NavbarStyle from "../../components/NavbarAfterLogin/NavbarAfterLogin.module.css";
import Sidebar from "../../components/Sidebar/";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

const Notifikasi = () => {
	const { dataLogin } = useSelector((globalStore) => globalStore.auth);
	const [dataNotif, setDataNotif] = useState([]);

	const getNotif = async () => {
		//eslint-disable-next-line
		const { data } = await axios({
			method: "get",
			url: "https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/notifications",
			headers: {
				Authorization: `Bearer ${dataLogin.dataLogin.token}`,
			},
		});
		setDataNotif(data.data);
	};

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	const formatDateTime = (createdAt) => {
		const date = new Date(createdAt);
		const time = new Date(createdAt);
		const formattedDate = time.toLocaleDateString("id-ID", {
			day: "numeric",
			month: "short",
		});

		const formattedTime = date.toLocaleTimeString("id-ID", {
			hour: "2-digit",
			minute: "2-digit",
		});

    return (formattedDate + ', ' + formattedTime);
	};

	useEffect(() => {
		getNotif();
		document.getElementsByClassName(NavbarStyle.iconBell)[0].style.stroke =
			"#7126B5";
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<Navbar />
			<Sidebar />
			<div className={style.container}>
				<div className={style.content}>
					<h1 className={style.titleRes}>Notifikasi</h1>
					{dataNotif.map((data, key) => (
						<div className={style.cardNotifikasi}>
							<div className={style.cardContent}>
								{data.Notification_object.Notification_type.id === 1 && (
									<img
										className={style.imgNotifikasi}
										src={
											data?.Notification_object?.Product.Product_images[0]
												.url_image
										}
										alt="Foto Produk"
									/>
								)}
								{(data.Notification_object.Notification_type.id === 2 ||
									data.Notification_object.Notification_type.id === 3) && (
									<img
										className={style.imgNotifikasi}
										src={
											data?.Notification_object?.Order.Product.Product_images[0]
												.url_image
										}
										alt="Foto Produk"
									/>
								)}
							</div>
							<div className={style.cardContent}>
								{data.Notification_object.Notification_type.id === 1 && (
									<>
										<p>Berhasil diterbitkan</p>
										<h2>{data?.Notification_object?.Product.name}</h2>
										<h2>{`${rupiah(
											data?.Notification_object?.Product.price
										)}`}</h2>
									</>
								)}
								{data.Notification_object.Notification_type.id === 2 && (
									<>
										<p>Penawaran produk</p>
										<h2>{data.Notification_object.Order.Product.name}</h2>
										<h2>{`${rupiah(data.Notification_object.Order.price)}`}</h2>
										<h2>
											Ditawar{" "}
											{`${rupiah(
												data.Notification_object.Order.Product.price
											)}`}
										</h2>
									</>
								)}
								{data.Notification_object.Notification_type.id === 3 && (
									<>
										<p>Penawaran produk</p>
										<h2>{data.Notification_object.Order.Product.name}</h2>
										<h2>{`${rupiah(data.Notification_object.Order.price)}`}</h2>
										<h2>
											Berhasil Ditawar{" "}
											{`${rupiah(
												data.Notification_object.Order.Product.price
											)}`}
										</h2>
										<p>Kamu akan segera dihubungi penjual via whatsapp</p>
									</>
								)}
							</div>
							<div className={style.cardContent}>
								<p>
                  {formatDateTime(data.createdAt)}
                </p>
								<div className={style.elipse}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Notifikasi;
