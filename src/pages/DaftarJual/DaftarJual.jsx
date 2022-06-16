import Navbar from "../../components/NavbarNotHome/NavbarNotHome";
import style from "./DaftarJual.module.css";
import BtnEdit from "../../components/Button/BtnSecondary";
import BtnEditStyle from "../../components/Button/BtnSecondary.module.css";
import CategoryMenu from "../../components/CardCategory/CardCategory";
import CardCategoryStyle from "../../components/CardCategory/CardCategory.module.css";
import CardMedium from "../../components/Card/CardMedium";
// import CardStyle from "../../components/Card/Card.module.css";
import { useEffect } from "react";

const DaftarJual = () => {
  useEffect(() => {
    document.getElementsByClassName(CardCategoryStyle.card)[0].style.marginTop = "24px";
    document.getElementsByClassName(CardCategoryStyle.pText)[0].style.cssText = "color: #7126B5; font-weight: 500";
    document.getElementsByClassName(CardCategoryStyle.iconBox)[0].style.stroke = "#7126B5";
    document.getElementsByClassName(CardCategoryStyle.iconArrow)[0].style.stroke = "#7126B5";
    document.getElementsByClassName(BtnEditStyle.btnSecondary)[0].style.cssText = "width: 47px; height: 26px; padding: 0; border-radius: 8px; font-weight: 500";
  }, []);
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1 className={style.titlePage}>Daftar Jual Saya</h1>
        <div className={style.boxProfile}>
          <div className={style.profileContent}>
            <img src="/images/profilPenjual.png" alt="Foto Profil" />
          </div>
          <div className={style.profileContent}>
            <h1 className={style.nameProfile}>Nama Penjual</h1>
            <p>Kota</p>
          </div>
          <div className={style.profileContent}>
            <BtnEdit>Edit</BtnEdit>
          </div>
        </div>
        <div className={style.boxMain}>
          <div className={style.mainContent}>
            <CategoryMenu />
          </div>
          <div className={style.mainContent}>
            <label className={style.inputBox} htmlFor="inputImage">
              <img className={style.inputIcon} src="/icons/fi_plus.svg" alt="Icon Plus" />
              Tambah Produk
              <input className={style.inputImage} type="file" alt="Box Tambah Gambar" />
            </label>
            <CardMedium />
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarJual;
