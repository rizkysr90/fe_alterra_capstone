import style from "./InfoPenawar.module.css";
import Navbar from "../../components/NavbarTitle/NavbarTitle";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InfoPenawar = () => {
  const { idOrderSeller } = useParams();
  const { dataOrderSeller } = useSelector(
    (globalStore) => globalStore.sellerReducer
  );
  console.log(dataOrderSeller);
  let i = -1;
  for (let j = 0; j < dataOrderSeller.length; j++) {
    //eslint-disable-next-line
    if (dataOrderSeller[j].id == idOrderSeller) {
      i = j;
    }
  }

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <Navbar title="Info Penawar" />
      <div className={style.container}>
        <div className={style.content}>
          <Link to={`/daftar-jual-diminati`} style={{ textDecoration: "none" }}>
            <img
              src="/icons/fi_arrow-left.svg"
              alt="left arrow"
              className={style.leftArrow}
            />
          </Link>
          <h1 className={style.titleRes}>Info Penawar</h1>
        </div>
        <div className={style.content}>
          <div className={style.cardPenawar}>
            <div className={style.cardContent}>
              <img
                className={style.imgProfile}
                src={dataOrderSeller[i].Buyers.profile_picture}
                alt="profil penawar"
              />
            </div>
            <div className={style.cardContent}>
              <h1>{dataOrderSeller[i].Buyers.name}</h1>
              <p>{dataOrderSeller[i].Buyers.City.name}</p>
            </div>
          </div>
          <h1 className={style.titleContent}>Daftar Produkmu yang Ditawar</h1>
          <div className={style.cardProduct}>
            <div className={style.cardContent}>
              <img
                className={style.imgProduct}
                src={dataOrderSeller[i].Product.Product_images[0].url_image}
                alt="Foto Produk"
              />
            </div>
            <div className={style.cardContent}>
              <p>Penawaran produk</p>
              <h2>{dataOrderSeller[i].Product.name}</h2>
              <h2>{`${rupiah(dataOrderSeller[i].Product.price)}`}</h2>
              <h2>Ditawar {`${rupiah(dataOrderSeller[i].price)}`}</h2>
            </div>
            <div className={style.cardContent}>
              <p>20 Apr, 14:04</p>
            </div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btn}>Tolak</button>
            <button className={style.btn}>Terima</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default InfoPenawar;
