import BtnPrimary from "../../components/Button/BtnPrimary";
import BtnSecondary from '../../components/Button/BtnSecondary';
import Card from "../../components/Card/Card";
import NavbarHome from '../../components/NavbarHome/NavbarHome';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.homeContainer}>
        <NavbarHome />
        <div className={style.heroContainer}>
          <div className={style.leftBox}></div>
          <div className={style.middleBox}>
            <div className={style.heroDesc}>
              <h1>Bulan Ramadhan Banyak diskon!</h1>
              <h5>Diskon Hingga</h5>
              <h3>60%</h3>
            </div>
            <img 
              src="images/png_gift_88837.png" 
              alt="gift"
              className={style.giftImage}/>
            <div className={style.backgroundImageContainer}>
              <img
                src="images/background_hero.png"
                alt="background"
                className={style.backgroundImage}/>
              <div className={style.background}></div>
            </div>
          </div>
          <div className={style.rightBox}></div>
        </div>
        <div className={style.categoryContainer}>
          <h2>Telusuri Kategori</h2>
          <div className={style.categoryButtonContainer}>
            <BtnPrimary><img src="/icons/fi_search_white.svg" alt="search" />Semua</BtnPrimary>
            <BtnSecondary><img src="/icons/fi_search_black.svg" alt="search" />Hobi</BtnSecondary>
            <BtnSecondary><img src="/icons/fi_search_black.svg" alt="search" />Kendaraan</BtnSecondary>
            <BtnSecondary><img src="/icons/fi_search_black.svg" alt="search" />Baju</BtnSecondary>
            <BtnSecondary><img src="/icons/fi_search_black.svg" alt="search" />Elektronik</BtnSecondary>
            <BtnSecondary><img src="/icons/fi_search_black.svg" alt="search" />Kesehatan</BtnSecondary>
          </div>
        </div>
        <div className={style.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Home