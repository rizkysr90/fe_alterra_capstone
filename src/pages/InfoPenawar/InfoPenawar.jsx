import style from "./InfoPenawar.module.css";
import Navbar from "../../components/NavbarTitle/NavbarTitle";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const InfoPenawar = () => {
  const { dataLogin } = useSelector((state) => state.auth);
  const [status, setStatus] = useState("");
  const [modalTerima, setModalTerima] = useState(false);
  const { idOrderSeller } = useParams();
  const { dataOrderSeller } = useSelector(
    (globalStore) => globalStore.sellerReducer
  );
  console.log(dataOrderSeller);

  const token = `${dataLogin.dataLogin.token}`

  const handleTerima = async () => {
    const { data } = await axios.put(
        `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/sales/orders/${idOrderSeller}`,
        { headers: { Authorization: `Bearer ${token}` } },
        { status: { status } }
      )
      setStatus(data)
  };


  let i = -1;
  for (let j = 0; j < dataOrderSeller.length; j++) {
    //eslint-disable-next-line
    if (dataOrderSeller[j].id == idOrderSeller) {
      i = j;
    }
  }

  const toggleModalTerima = () => {
    setModalTerima(!modalTerima);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    handleTerima()
    //eslint-disable-next-line
  }, [])

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
                src={dataOrderSeller[i].Buyers.profile_picture}
                alt="profil penawar"
              />
            </div>
            <div className={style.cardContent}>
              <h1>{dataOrderSeller[i].Buyers.name}</h1>
              <p>{dataOrderSeller[i].Buyers.City.name}</p>
            </div>
          </div>
          <h1 className={style.titleContent}>Daftar Produkmu yang Ditawar</h1>
          <div className={style.cardProduct}>
            <div className={style.cardContent}>
              <img
                className={style.imgProduct}
                src={dataOrderSeller[i].Product.Product_images[0].url_image}
                alt="Foto Produk"
              />
            </div>
            <div className={style.cardContent}>
              <p>Penawaran produk</p>
              <h2>{dataOrderSeller[i].Product.name}</h2>
              <h2>{`${rupiah(dataOrderSeller[i].Product.price)}`}</h2>
              <h2>Ditawar {`${rupiah(dataOrderSeller[i].price)}`}</h2>
            </div>
            <div className={style.cardContent}>
              <p>20 Apr, 14:04</p>
            </div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btn}>Tolak</button>
            <button className={style.btn} onClick={handleTerima}>
              Terima
            </button>
          </div>
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
                    src={dataOrderSeller[i].Buyers.profile_picture}
                    alt="Foto Pembeli"
                  />
                </div>
                <div className={style.cardContent}>
                  <h1 className={style.namePembeli}>
                    {dataOrderSeller[i].Buyers.name}
                  </h1>
                  <p className={style.cityPembeli}>
                    {dataOrderSeller[i].Buyers.City.name}
                  </p>
                </div>
              </div>
              <div className={style.modalCardContent}>
                <div className={style.cardContent}>
                  <img
                    src={dataOrderSeller[i].Product.Product_images[0].url_image}
                    alt="Foto Produk"
                  />
                </div>
                <div className={style.cardContent}>
                  <h2>{dataOrderSeller[i].Product.name}</h2>
                  <h2>
                    <s>{`${rupiah(dataOrderSeller[i].Product.price)}`}</s>
                  </h2>
                  <h2>Ditawar {`${rupiah(dataOrderSeller[i].price)}`}</h2>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/08123456789/"
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
    </>
  );
};

export default InfoPenawar;
