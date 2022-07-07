import NavbarHome from "../../components/NavbarHome/NavbarHome";
import style from "./BuyerProduct.module.css";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin/NavbarAfterLogin";

const BuyerProduct = () => {
  const [modalTawar, setModalTawar] = useState(false);
  const { dataLogin } = useSelector((state) => state.auth);
  const { idProductBuyer } = useParams();
  const { dataProductBuyer } = useSelector((globalStore) => globalStore.buyerReducer);

  const toggleModalTawar = () => {
    setModalTawar(!modalTawar)
  }

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };

  let i = -1;

  for(let j = 0; j < dataProductBuyer.length; j++) {
    //eslint-disable-next-line
    if(dataProductBuyer[j].id == idProductBuyer) {
      i = j;
    }
  };

  return (
    <>
      {dataLogin?.dataLogin.token ? <NavbarAfterLogin /> : <NavbarHome />}
      <Carousel className={style.use}>
        <Carousel.Item>
          <img
            className=""
            src={dataProductBuyer[i].Product_images[0]?.url_image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={dataProductBuyer[i].Product_images[1]?.url_image}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={dataProductBuyer[i].Product_images[2]?.url_image}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={dataProductBuyer[i].Product_images[3]?.url_image}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <div className={style.card}>
        <h5 className={style.tha}>{dataProductBuyer[i].name}</h5>
        <p className={style.tri}>{dataProductBuyer[i].Category.name}</p>
        <h5 className={style.pro}>{`${rupiah(dataProductBuyer[i].price)}`}</h5>
        <button onClick={toggleModalTawar} className={style.sob}>Saya tertarik dan ingin nego</button>
      </div>

      <div className={style.cardPenjual}>
        <div className={style.par}>
          <img src={dataProductBuyer[i].User.profile_picture} alt="Foto Penjual" />
          <div className={style.tup}>
            <h5 className={style.dea}>{dataProductBuyer[i].User.name}</h5>
            <p className={style.sun}>{dataProductBuyer[i].User.address}</p>
          </div>
        </div>
      </div>

      <div className={style.cardContainer}>
        <h5 className={style.titleCard}>Deskripsi</h5>
        <div className={style.descCard}>
          <p>{dataProductBuyer[i].description}</p>
        </div>
      </div>

      {modalTawar && (
        <div className={style.modalTawar}>
          <div className={style.overlay} onClick={toggleModalTawar}></div>
          <div className={style.modalTawarContent}>
            <h2>Hello Modal Tawar</h2>
            <p>Ini adalah Modal Tawar</p>
          </div>
        </div>
      )}
    </>
  )
}

export default BuyerProduct;