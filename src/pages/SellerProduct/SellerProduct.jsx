import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import style from "./SellerProduct.module.css";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axios from "axios"

const SellerProduct = () => {
  const { idProductSeller } = useParams();

  const [Product, setProduct] = useState({})

  const { dataProductSeller } = useSelector((globalStore) => globalStore.sellerReducer);
  console.log(dataProductSeller)

  const getAllProduct = async () => {
    const { data } = await axios.get(
      `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts/${idProductSeller}`
    );
    console.log(data);
    setProduct(data.data);
  };

  let i = -1;
  for(let j = 0; j < dataProductSeller.length; j++) {
    //eslint-disable-next-line
    if(dataProductSeller[j].id == idProductSeller) {
      i = j;
    }
  }

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  useEffect(() => {
    getAllProduct()

    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Navbar />
      <Carousel className={style.use}>
        <Carousel.Item>
          <img
            className="" 
            src={Product.Product_images[0].url_image}
            alt="First slide"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className=""
            src={Product.Product_images[1].url_image}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel> 

      <div className={style.card}>
        <h5 className={style.tha}>{Product.name}</h5>
        <p className={style.tri}>{Product.Category.name}</p>
        <h5 className={style.pro}>{`${rupiah(Product.price)}`}</h5>
        <button className={style.sob}>Terbitkan</button>
        <button className={style.man}>Edit</button>
      </div>
      
       

      <div className={style.cardPenjual}>
        <div className={style.par}>
          <img src={Product.User.profile_picture} alt="Foto Penjual" />
          <div className={style.tup}>
            <h5 className={style.dea}>{dataProductSeller[i].User.name}</h5>
            <p className={style.sun}>{dataProductSeller[i].User.address}</p>
          </div>
        </div>
      </div>

      <div className={style.cardContainer}>
        <h5 className={style.kri}>Deskripsi</h5>
        <div className={style.ips}>
          <p>{dataProductSeller[i].description}</p>
        </div>
      </div>
    </>
  )
}

export default SellerProduct;