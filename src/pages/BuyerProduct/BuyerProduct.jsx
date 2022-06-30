import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import style from "./BuyerProduct.module.css";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BuyerProduct = () => {
  const { idProductBuyer } = useParams();
  const { dataProductBuyer } = useSelector((globalStore) => globalStore.buyerReducer);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  let i = -1;
  for(let j = 0; j < dataProductBuyer.length; j++) {
    //eslint-disable-next-line
    if(dataProductBuyer[j].id == idProductBuyer) {
      i = j;
    }
  }

  return (
    <>
      <Navbar />

      <Carousel className={style.use}>
        <Carousel.Item>
          <img
            className=""
            src={dataProductBuyer[i].Product_images[0].url_image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={dataProductBuyer[i].Product_images[1].url_image}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <div className={style.card}>
        <h5 className={style.tha}>{dataProductBuyer[i].name}</h5>
        <p className={style.tri}>{dataProductBuyer[i].Category.name}</p>
        <h5 className={style.pro}>{`${rupiah(dataProductBuyer[i].price)}`}</h5>
        <button className={style.sob}>Saya tertarik dan ingin nego</button>
      </div>

      <div className={style.cardPenjual}>
        <div className={style.par}>
          <img src="/images/profilPenjual.png" alt="Foto Penjual" />
          <div className={style.tup}>
            <h5 className={style.dea}>{dataProductBuyer[i].User.name}</h5>
            <p className={style.sun}>Kota</p>
          </div>
        </div>
      </div>

      <div className={style.cardContainer}>
        <h5 className={style.titleCard}>Deskripsi</h5>
        <div className={style.descCard}>
          <p>{dataProductBuyer[i].description}</p>
        </div>
      </div>
    </>
  )
}

export default BuyerProduct;