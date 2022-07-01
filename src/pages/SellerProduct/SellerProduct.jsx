import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import style from "./SellerProduct.module.css";
import { Carousel } from 'react-bootstrap';
import { useParams } from "react-router-dom";
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { sellerAction } from "../../config/redux/actions/sellerAction";

const SellerProduct = () => {
  const { idProductSeller } = useParams();
  const { dataProductSeller } = useSelector((state) => state.sellerReducer);
  console.log(dataProductSeller)

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

  // const { dataLogin } = useSelector((state) => state.auth);

  // const dispatch = useDispatch()

  // const token = `${dataLogin.dataLogin.token}`

  // const getSellerProduct = async () => {
  //   const { data } = await axios.get(`https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts?page=1`, {
  //     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJVY2hpaGEgSXRhY2hpIiwiaWF0IjoxNjU2NTc0MDk4LCJleHAiOjE2NTY2NjA0OTh9.ZqNAghNmX5F6q9lYGVeWo9WpiG3uOly92FTu6iLfBdQ` }
  //   })
  //   console.log(data);
  // };

  // useEffect(() => {
  //   // getSellerProduct()
  //   dispatch(sellerAction(token))
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <Navbar />
      
      <Carousel className={style.use}>
        <Carousel.Item>
          <img
            className="" 
            src={dataProductSeller[i].Product_images[0].url_image}
            alt="First slide"
          />
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className=""
            src={dataProductSeller[i].Product_images[1].url_image}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel> 

      <div className={style.card}>
        <h5 className={style.tha}>{dataProductSeller[i].name}</h5>
        <p className={style.tri}>{dataProductSeller[i].Category.name}</p>
        <h5 className={style.pro}>{`${rupiah(dataProductSeller[i].price)}`}</h5>
        <button className={style.sob}>Terbitkan</button>
        <button className={style.man}>Edit</button>
      </div>
      
       

      <div className={style.cardPenjual}>
        <div className={style.par}>
          <img src={dataProductSeller[i].User.profile_picture} alt="Foto Penjual" />
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