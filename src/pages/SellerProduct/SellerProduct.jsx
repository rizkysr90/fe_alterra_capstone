import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import style from "./SellerProduct.module.css";
import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellerAction } from "../../config/redux/actions/sellerAction";

const SellerProduct = () => {
  const { dataProductSeller } = useSelector((state) => state.sellerReducer);
  console.log(dataProductSeller)

  const dispatch = useDispatch()
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJVY2hpaGEgSXRhY2hpIiwiaWF0IjoxNjU2NTc2MTAwLCJleHAiOjE2NTY2NjI1MDB9.RUVUhz1zZfeF-EcAvIaL4ZLiEQjToDa_WXGAYFnoI60"

  

  // const getSellerProduct = async () => {
  //   const { data } = await axios.get(`https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts?page=1`, {
  //     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJVY2hpaGEgSXRhY2hpIiwiaWF0IjoxNjU2NTc0MDk4LCJleHAiOjE2NTY2NjA0OTh9.ZqNAghNmX5F6q9lYGVeWo9WpiG3uOly92FTu6iLfBdQ` }
  //   })
  //   console.log(data);
  // };

  useEffect(() => {
    // getSellerProduct()
    dispatch(sellerAction(token))
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      {dataProductSeller?.map((seller) =>
       <div key={seller.id}>
      <Carousel className={style.use}>
        <Carousel.Item>
          <img
            className="" 
            src="/images/watch.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src="/images/watch.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="/images/watch.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="/images/watch.png"
            alt="Four slide"
          />
        </Carousel.Item>
      </Carousel> 

      

      <div className={style.card} >
            <h5 className={style.tha}>{seller.name}</h5>
            <p className={style.tri}>{seller.Category.name}</p>
            <h5 className={style.pro}>Rp {seller.price}</h5>
            <button className={style.sob}>Terbitkan</button>
            <button className={style.man}>Edit</button>
      </div>
      
       

      <div className={style.cardPenjual}>
        <div className={style.par}>
          <img src="/images/profilPenjual.png" alt="Foto Penjual" />
          <div className={style.tup}>
            <h5 className={style.dea}>{seller.User.name}</h5>
            <p className={style.sun}>{seller.User.address}</p>
          </div>
        </div>
      </div>

      <div className={style.cardContainer}>
        <h5 className={style.kri}>Deskripsi</h5>
        <div className={style.ips}>
          <p>{seller.description}</p>
        </div>
      </div>
      </div>
      )}
    </>
  )
}

export default SellerProduct;