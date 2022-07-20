import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { orderSellerDibatalkan } from "../../config/redux/actions/sellerAction";
import style from "../../pages/Riwayat/RiwayatPenjualan.module.css";

const PenjualanDibatalkan = () => {
  const { dataSellerDibatalkan } = useSelector(
    (globalStore) => globalStore.sellerReducer
  );
  console.log(dataSellerDibatalkan);
  const dispatch = useDispatch();
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const token = `${dataLogin.dataLogin.token}`;

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(orderSellerDibatalkan(token));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {dataSellerDibatalkan?.length === 0 && (
        <div className={style.dataEmpty}>
          <img src="/images/dataEmpty.png" alt="Data Empty" />
          <p>Wah, belum ada transaksi penjualan kamu yang dibatalkan nih.</p>
        </div>
      )}

      {dataSellerDibatalkan?.map((products) => (
        <div key={products.id} className={style.cardContainer}>
          <Link to={`/info-penawar/${products.id}`}>
            <img
              src={products.Product.Product_images[0].url_image}
              alt="card"
            />
          </Link>
          <div className={style.cardDesc}>
            <h5>{`${products.Product.name.slice(0, 15)}...`}</h5>
            <div className={style.textCon}>
              <p>{products.Buyers.name}</p>
              <p style={{ color: "red", paddingLeft: "8px" }}>Dibatalkan</p>
            </div>
            <h5>{`${rupiah(products?.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default PenjualanDibatalkan;
