import style from "./InfoPenawar.module.css";
import Navbar from "../../components/NavbarTitle/NavbarTitle";

const InfoPenawar = () => {
  return (
    <>
      <Navbar title="Info Penawar" />
      <div className={style.container}>
        <div className={style.content}>
          <img
            src="icons/fi_arrow-left.svg"
            alt="left arrow"
            className={style.leftArrow}
          />
          <h1 className={style.titleRes}>Info Penawar</h1>
        </div>
        <div className={style.content}>
          <div className={style.cardPenawar}>
            <div className={style.cardContent}>
              <img className={style.imgProfile} src="images/profilPenawar.png" alt="profil penawar" />
            </div>
            <div className={style.cardContent}>
              <h1>Nama Pembeli</h1>
              <p>Kota</p>
            </div>
          </div>
          <h1 className={style.titleContent}>Daftar Produkmu yang Ditawar</h1>
          <div className={style.cardProduct}>
            <div className={style.cardContent}>
              <img className={style.imgProduct} src="/images/itemPenawar.png" alt="item" />
            </div>
            <div className={style.cardContent}>
              <p>Penawaran produk</p>
              <h2>Jam Tangan Casio</h2>
              <h2>Rp 250.000</h2>
              <h2>Ditawar Rp 200.000</h2>
            </div>
            <div className={style.cardContent}>
              <p>20 Apr, 14:04</p>
            </div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btn}>Tolak</button>
            <button className={style.btn}>Terima</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default InfoPenawar;
