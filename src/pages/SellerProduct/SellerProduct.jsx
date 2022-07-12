import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import style from "./SellerProduct.module.css";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axios from "axios"

const SellerProduct = () => {
  const { dataLogin } = useSelector((state) => state.auth);

  const { idProductSeller } = useParams();

  const [Product, setProduct] = useState({})

  const token = `${dataLogin.dataLogin.token}`

  const getDetailProduct = async () => { 
    const { data } = await axios.get(
      `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts/${idProductSeller}`, 
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setProduct(data.data);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  useEffect(() => {
    getDetailProduct()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Navbar /> 
      <Carousel className={style.use}>
        {Product.Product_images?.map((data, key) => {
          return (
            <Carousel.Item key={key}>
              <img
                className="" 
                src={data?.url_image}
                alt="First slide"
              /> 
            </Carousel.Item> 
          )
        })}
      </Carousel>  

      <div className={style.card}>
        <h5 className={style.tha}>{Product?.name}</h5>
        <p className={style.tri}>{Product.Category?.name}</p>
        <h5 className={style.pro}>{`${rupiah(Product?.price)}`}</h5>
        <button className={style.sob}>Terbitkan</button>
        <button className={style.man}>Edit</button>
      </div>
      
      

      <div className={style.cardPenjual}>
        <div className={style.par}>
          <img src={Product.User?.profile_picture} alt="Foto Penjual" />
          <div className={style.tup}>
            <h5 className={style.dea}>{Product.User?.name}</h5>
            <p className={style.sun}>{Product.User?.address}</p>
          </div>
        </div>
      </div>

      <div className={style.cardContainer}>
        <h5 className={style.kri}>Deskripsi</h5>
        <div className={style.ips}>
          <p>{Product?.description}</p>
        </div>
      </div>
    </>
  )
}

export default SellerProduct;