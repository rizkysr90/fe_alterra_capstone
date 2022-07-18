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
    console.log(data.data);
	};

	const checkPenawaran = (data) => {
		return data.Notification_object.Notification_type.id === 2;
	};

	const checkPenawaranDiterima = (data) => {
		return data.Notification_object.Notification_type.id === 3;
	};

	const dataPenawaran = dataNotif.filter(checkPenawaran);
	const dataPenawaranDiterima = dataNotif.filter(checkPenawaranDiterima);
	console.log(dataNotif);

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
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
					{dataPenawaran.map((data) => (
						<div className={style.cardNotifikasi}>
							<div className={style.cardContent}>
								<img
									className={style.imgNotifikasi}
									src="/images/watch.png"
									alt="Foto Produk"
								/>
							</div>
							<div className={style.cardContent}>
								<p>Penawaran produk</p>
								<h2>{data.Notification_object.Order.Product.name}</h2>
								<h2>{`${rupiah(data.Notification_object.Order.price)}`}</h2>
								<h2>
									Ditawar{" "}
									{`${rupiah(data.Notification_object.Order.Product.price)}`}
								</h2>
							</div>
							<div className={style.cardContent}>
								<p>{data.createdAt}</p>
								<div className={style.elipse}></div>
							</div>
						</div>
					))}
					{dataPenawaranDiterima.map((data) => (
						<div className={style.cardNotifikasi}>
							<div className={style.cardContent}>
								<img
									className={style.imgNotifikasi}
									src="/images/watch.png"
									alt="Foto Produk"
								/>
							</div>
							<div className={style.cardContent}>
								<p>Penawaran produk</p>
								<h2>{data.Notification_object.Order.Product.name}</h2>
								<h2>{`${rupiah(data.Notification_object.Order.price)}`}</h2>
								<h2>
									Berhasil Ditawar{" "}
									{`${rupiah(data.Notification_object.Order.Product.price)}`}
								</h2>
                <p>Kamu akan segera dihubungi penjual via whatsapp</p>
							</div>
							<div className={style.cardContent}>
								<p>{data.createdAt}</p>
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
