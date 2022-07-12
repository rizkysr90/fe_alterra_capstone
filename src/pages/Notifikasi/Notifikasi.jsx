import style from "./Notifikasi.module.css";
import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import Sidebar from "../../components/Sidebar/";

const Notifikasi = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={style.container}>
        <div className={style.content}>
            <h1 className={style.titleRes}>Notifikasi</h1>
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
              <h2>Jam Casio</h2>
              <h2>Rp 250.000,00</h2>
              <h2>Ditawar Rp 200.000,00</h2>
            </div>
            <div className={style.cardContent}>
              <p>20 Apr, 14:04</p>
              <div className={style.elipse}></div>
            </div>
          </div>

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
              <h2>Jam Casio</h2>
              <h2>Rp 250.000,00</h2>
              <h2>Ditawar Rp 200.000,00</h2>
            </div>
            <div className={style.cardContent}>
              <p>20 Apr, 14:04</p>
              <div className={style.elipse}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifikasi;
