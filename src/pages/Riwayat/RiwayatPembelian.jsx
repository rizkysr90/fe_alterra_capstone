import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import NavbarStyle from "../../components/NavbarAfterLogin/NavbarAfterLogin.module.css";
import Sidebar from "../../components/Sidebar";
import style from "./RiwayatPembelian.module.css";
import { useEffect } from "react";

const RiwayatPembelian = () => {
  useEffect(() => {
    document.getElementsByClassName(NavbarStyle.iconCart)[0].style.stroke =
      "#7126B5";
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.titleRes}>Riwayat Pembelian</h1>
          <div className={style.cardRiwayat}>
            <div className={style.cardContent}>
              <img
                className={style.imgRiwayat}
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

export default RiwayatPembelian;
