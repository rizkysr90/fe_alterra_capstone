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
            <button className={style.btnCategory}><img src="/icons/fi_search_white.svg" alt="search" />Semua</button>
            <button className={style.btnCategory}><img src="/icons/fi_search_black.svg" alt="search" />Hobi</button>
            <button className={style.btnCategory}><img src="/icons/fi_search_black.svg" alt="search" />Kendaraan</button>
            <button className={style.btnCategory}><img src="/icons/fi_search_black.svg" alt="search" />Baju</button>
            <button className={style.btnCategory}><img src="/icons/fi_search_black.svg" alt="search" />Elektronik</button>
            <button className={style.btnCategory}><img src="/icons/fi_search_black.svg" alt="search" />Kesehatan</button>
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
        <div className={style.buttonJualContainer}>
          <button className={style.buttonJual}>
            <img src="icons/fi_plus_white.svg" alt="plus" />Jual
          </button>
        </div>
      </div>
    </>
  )
}

export default Home