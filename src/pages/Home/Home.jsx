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
            <img
              src="images/background_hero.png"
              alt="background"
              className={style.backgroundImage}/>
          </div>
          <div className={style.rightBox}></div>
        </div>
        <div className={style.categoryContainer}>
          <h2>Telusuri Kategori</h2>
          <div className={style.categoryButtonContainer}>
            <button>Semua</button>
            <button>Hobi</button>
            <button>Kendaraan</button>
            <button>Baju</button>
            <button>Elektronik</button>
            <button>Kesehatan</button>
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