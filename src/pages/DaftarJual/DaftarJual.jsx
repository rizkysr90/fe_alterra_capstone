import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import style from "./DaftarJual.module.css";
import CategoryMenu from "../../components/CardCategory/CardCategory";
import CardCategoryStyle from "../../components/CardCategory/CardCategory.module.css";
import CardMedium from "../../components/Card/CardMedium";
// import CardStyle from "../../components/Card/Card.module.css";
import { useEffect } from "react";

export function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

export function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const DaftarJual = () => {
  useEffect(() => {
    document.getElementsByClassName(CardCategoryStyle.card)[0].style.marginTop =
      "24px";
    document.getElementsByClassName(CardCategoryStyle.pText)[0].style.cssText =
      "color: #7126B5; font-weight: 500";
    document.getElementsByClassName(CardCategoryStyle.iconBox)[0].style.stroke =
      "#7126B5";
    document.getElementsByClassName(
      CardCategoryStyle.iconArrow
    )[0].style.stroke = "#7126B5";
  }, []);
  return (
    <>
      <Navbar />
      <div id="mySidenav" class={style.sidenav}>
        {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          &times;
        </a> */}
        <p>Notifikasi</p>
        <p>Daftar Jual</p>
        <p>Akun Saya</p>
      </div>
      <div className={style.container}>
        <div className={style.titleBox}>
          <img
            className={style.menuIcon}
            src="/icons/fi_menu.svg"
            onClick="openNav()"
            alt="Icon Menu"
          />
          <h1 className={style.titlePage}>Daftar Jual Saya</h1>
        </div>
        <div className={style.boxProfile}>
          <div className={style.profileContent}>
            <img src="/images/profilPenjual.png" alt="Foto Profil" />
          </div>
          <div className={style.profileContent}>
            <h1 className={style.nameProfile}>Nama Penjual</h1>
            <p>Kota</p>
          </div>
          <div className={style.profileContent}>
            <button className={style.btnEdit}>Edit</button>
          </div>
        </div>
        <div className={style.boxCategory}>
          <button className={style.btnCategory}>
            <img src="/icons/fi_box.svg" alt="Icon Produk" />
            Produk
          </button>
          <button className={style.btnCategory}>
            <img src="/icons/fi_heart.svg" alt="Icon Diminati" />
            Diminati
          </button>
          <button className={style.btnCategory}>
            <img src="/icons/fi_dollar-sign.svg" alt="Icon Terjual" />
            Terjual
          </button>
        </div>
        <div className={style.boxMain}>
          <div className={style.mainContent}>
            <CategoryMenu />
          </div>
          <div className={style.mainContent}>
            <label className={style.inputBox} htmlFor="inputImage">
              <img
                className={style.inputIcon}
                src="/icons/fi_plus.svg"
                alt="Icon Plus"
              />
              Tambah Produk
              <input
                className={style.inputImage}
                type="file"
                alt="Box Tambah Gambar"
              />
            </label>
            <CardMedium />
            <CardMedium />
            <CardMedium />
            <CardMedium />
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarJual;
