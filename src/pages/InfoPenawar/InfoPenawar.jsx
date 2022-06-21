import style from "./InfoPenawar.module.css";
import Navbar from "../../components/NavbarTitle/NavbarTitle";

const InfoPenawar = () => {
  return (
    <>
      <div className={style.infoPenawarPageContainer}>
        <Navbar title="Info Penawar" className={style.navbar} />
        <div className={style.navbarMobile}>
          <img src="icons/fi_arrow-left.svg" alt="left arrow" />
          <h3>Info Penawar</h3>  
        </div>
        <div className={style.penawarPageContainer}>
          <img src="icons/fi_arrow-left.svg" alt="left arrow" className={style.leftArrow} />
          <div className={style.infoPenawarContainer}>
            <div className={style.cardPenawar}>
              <img src="images/profilPenawar.png" alt="profil penawar" />
              <div className={style.detailProfil}>
                <h2>Nama Pembeli</h2>
                <p>Kota</p>
              </div>    
            </div>
            <h3>Daftar Produkmu yang Ditawar</h3>
            <div className={style.itemCard}>
              <div className={style.topCard}>
                <img src="/images/itemPenawar.png" alt="item" />
                <div className={style.itemDesc}>
                  <div className={style.itemDetail}>
                    <p>Penawaran produk</p>
                    <h5>Jam Tangan Casio</h5>
                    <h5>Rp 250.000</h5>
                    <h5>Ditawar Rp 200.000</h5>
                  </div>
                  <p>20 Apr, 14:04</p>
                </div>
              </div>
              <div className={style.bottomCard}>
                <button className={style.buttonTolak}>Tolak</button>
                <button className={style.buttonTerima}>Terima</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoPenawar;