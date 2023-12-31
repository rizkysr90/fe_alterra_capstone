import style from "./InfoPenawar.module.css";
import Navbar from "../../components/NavbarTitle/NavbarTitle";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AlertSuccess from "../../components/Alert/AlertSuccess";
import axios from "axios";

const InfoPenawar = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const [modalTerima, setModalTerima] = useState(false);
  const [modalVerifikasi, setModalVerifikasi] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const { idOrderSeller } = useParams();
  const [dataOrderSeller, setDataOrderSeller] = useState({});
  const [verifikasi, setVerifikasi] = useState();
  console.log(dataOrderSeller);

  const handleVerifikasi = (e) => {
    setVerifikasi(e.target.value);
  };

  const handleStatus = async () => {
    //eslint-disable-next-line
    const { data } = await axios({
      method: "put",
      url: `https://bealterracapstone-production.up.railway.app/api/v1/sales/verify/${idOrderSeller}`,
      data: {
        is_done: verifikasi,
      },
      headers: {
        Authorization: `Bearer ${dataLogin.dataLogin.token}`,
      },
    });
    toggleAlertSuccess();
    getOrderById();
  };

  const handleTerima = async () => {
    //eslint-disable-next-line
    const { data } = await axios({
      method: "put",
      url: `https://bealterracapstone-production.up.railway.app/api/v1/sales/orders/${idOrderSeller}`,
      data: {
        status: 1,
      },
      headers: {
        Authorization: `Bearer ${dataLogin.dataLogin.token}`,
      },
    });
    getOrderById();
    setModalTerima(!modalTerima);
  };

  const handleTolak = async () => {
    //eslint-disable-next-line
    const { data } = await axios({
      method: "put",
      url: `https://bealterracapstone-production.up.railway.app/api/v1/sales/orders/${idOrderSeller}`,
      data: {
        status: 0,
      },
      headers: {
        Authorization: `Bearer ${dataLogin.dataLogin.token}`,
      },
    });
    getOrderById();
  };

  const getOrderById = async () => {
    const { data } = await axios.get(
      `https://bealterracapstone-production.up.railway.app/api/v1/sales/orders/${idOrderSeller}`,
      {
        headers: {
          Authorization: `Bearer ${dataLogin.dataLogin.token}`,
        },
      }
    );
    setDataOrderSeller(data.data);
  };

  const toggleModalTerima = () => {
    setModalTerima(!modalTerima);
  };

  const toggleModalVerifikasi = () => {
    setModalVerifikasi(!modalVerifikasi);
  };

  const toggleAlertSuccess = () => {
    toggleModalVerifikasi();
    setTimeout(() => {
      setAlertSuccess(!alertSuccess);
    }, 500);
  };

  const toggleStopAlert = () => {
    setAlertSuccess(!alertSuccess);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const date = new Date(dataOrderSeller?.createdAt);
  const time = new Date(dataOrderSeller?.createdAt);
  const formattedDate = time.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
  });

  const formattedTime = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    getOrderById();
    //eslint-disable-next-line
  }, []);

  console.log(verifikasi);

  return (
    <>
      <Navbar title="Info Penawar" />
      <div className={style.container}>
        <div className={style.content}>
          <Link to={`/daftar-jual-diminati`} style={{ textDecoration: "none" }}>
            <img
              src="/icons/fi_arrow-left.svg"
              alt="left arrow"
              className={style.leftArrow}
            />
          </Link>
          <h1 className={style.titleRes}>Info Penawar</h1>
        </div>
        <div className={style.content}>
          <div className={style.cardPenawar}>
            <div className={style.cardContent}>
              <img
                className={style.imgProfile}
                src={dataOrderSeller.Buyers?.profile_picture}
                alt="profil penawar"
              />
            </div>
            <div className={style.cardContent}>
              <h1>{dataOrderSeller.Buyers?.name}</h1>
              <p>{dataOrderSeller.Buyers?.City.name}</p>
            </div>
          </div>
          <h1 className={style.titleContent}>Daftar Produkmu yang Ditawar</h1>
          <div className={style.cardProduct}>
            <div className={style.cardContent}>
              <img
                className={style.imgProduct}
                src={dataOrderSeller.Product?.Product_images[0].url_image}
                alt="Foto Produk"
              />
            </div>
            <div className={style.cardContent}>
              <p>Penawaran produk</p>
              <h2>{dataOrderSeller.Product?.name}</h2>
              <h2>{`${rupiah(dataOrderSeller.Product?.price)}`}</h2>
              <h2>Ditawar {`${rupiah(dataOrderSeller?.price)}`}</h2>
            </div>
            <div className={style.cardContent}>
              <p>
                {formattedDate}
                {", "}
                {formattedTime}
              </p>
            </div>
          </div>
          {dataOrderSeller?.status === 1 &&
            dataOrderSeller?.is_done === null && (
              <div className={style.btnContainer}>
                <button className={style.btn} onClick={toggleModalVerifikasi}>
                  Status
                </button>
                <button className={style.btn}>
                  Hubungi di
                  <img src="/icons/fi_whatsapp.svg" alt="Icon WhatsApp" />
                </button>
              </div>
            )}{" "}
          {dataOrderSeller?.status === null &&
            dataOrderSeller?.is_done === null && (
              <div className={style.btnContainer}>
                <button className={style.btn} onClick={handleTolak}>
                  Tolak
                </button>
                <button className={style.btn} onClick={handleTerima}>
                  Terima
                </button>
              </div>
            )}{" "}
          {dataOrderSeller?.status === 0 &&
            dataOrderSeller?.is_done === null && (
              <div className={style.btnContainer}>
                <p>Pesanan Ditolak</p>
              </div>
            )}{" "}
          {dataOrderSeller?.is_done !== null && (
            <div className={style.btnContainer}>
              <p>Pesanan Selesai</p>
            </div>
          )}
          <hr />
        </div>
      </div>

      {modalTerima && (
        <div className={style.modalTerima}>
          <div className={style.overlay} onClick={toggleModalTerima}></div>
          <div className={style.modalTerimaContent}>
            <h1 className={style.titleModalTerima}>
              Yeay kamu berhasil mendapat harga yang sesuai
            </h1>
            <p className={style.textModalTerima}>
              Segera hubungi pembeli melalui whatsapp untuk transaksi
              selanjutnya
            </p>
            <div className={style.modalCard}>
              <h1 className={style.titleModalCard}>Product Match</h1>
              <div className={style.modalCardContent}>
                <div className={style.cardContent}>
                  <img
                    src={dataOrderSeller?.Buyers.profile_picture}
                    alt="Foto Pembeli"
                  />
                </div>
                <div className={style.cardContent}>
                  <h1 className={style.namePembeli}>
                    {dataOrderSeller?.Buyers.name}
                  </h1>
                  <p className={style.cityPembeli}>
                    {dataOrderSeller?.Buyers.City.name}
                  </p>
                </div>
              </div>
              <div className={style.modalCardContent}>
                <div className={style.cardContent}>
                  <img
                    src={dataOrderSeller?.Product.Product_images[0].url_image}
                    alt="Foto Produk"
                  />
                </div>
                <div className={style.cardContent}>
                  <h2>{dataOrderSeller?.Product.name}</h2>
                  <h2>
                    <s>{`${rupiah(dataOrderSeller?.Product.price)}`}</s>
                  </h2>
                  <h2>Ditawar {`${rupiah(dataOrderSeller?.price)}`}</h2>
                </div>
              </div>
            </div>
            <a
              href={`https://wa.me/${dataOrderSeller.Buyers?.phone_number}/`}
              style={{ textDecoration: "none" }}
            >
              <button className={style.btnModalCard}>
                Hubungi via WhatsApp
                <img src="/icons/fi_whatsapp.svg" alt="Icon WhatsApp" />
              </button>
            </a>
          </div>
        </div>
      )}

      {modalVerifikasi && (
        <div className={style.modalVerifikasi}>
          <div className={style.overlay} onClick={toggleModalVerifikasi}></div>
          <div className={style.modalVerifikasiContent}>
            <h1 className={style.titleModalVerifikasi}>
              Perbarui status penjualan produkmu
            </h1>
            <div className={style.optContainer}>
              <div className={style.optContent}>
                <input
                  type="radio"
                  name="verif"
                  value={1}
                  onChange={handleVerifikasi}
                />
              </div>
              <div className={style.optContent}>
                <label htmlFor="berhasil">Berhasil terjual</label>
              </div>
              <p>Kamu telah sepakat menjual produk ini kepada pembeli</p>
            </div>
            <div className={style.optContainer}>
              <div className={style.optContent}>
                <input
                  type="radio"
                  name="verif"
                  value={0}
                  onChange={handleVerifikasi}
                />
              </div>
              <div className={style.optContent}>
                <label htmlFor="batalkan">Batalkan transaksi</label>
              </div>
              <p>Kamu membatalkan transaksi produk ini dengan pembeli</p>
            </div>
            <button className={style.btnVerifikasi} onClick={handleStatus}>
              Kirim
            </button>
          </div>
        </div>
      )}

      {alertSuccess && (
        <div className={style.alertCon} onClick={toggleStopAlert}>
          <AlertSuccess text="Status produk berhasil diperbarui" />
        </div>
      )}
    </>
  );
};

export default InfoPenawar;
