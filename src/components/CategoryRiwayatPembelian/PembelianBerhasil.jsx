import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { historyBuyerBerhasil } from "../../config/redux/actions/buyerAction";
import style from "../../pages/Riwayat/RiwayatPembelian.module.css";

const PembelianBerhasil = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const token = `${dataLogin.dataLogin.token}`;
  const { dataHistoryBerhasil } = useSelector(
    (globalStore) => globalStore.buyerReducer
  );
  console.log(dataHistoryBerhasil);
  const dispatch = useDispatch();

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(historyBuyerBerhasil(token));
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {dataHistoryBerhasil?.length === 0 && (
        <div className={style.dataEmpty}>
          <img src="/images/dataEmpty.png" alt="Data Empty" />
          <p>Wah, belum ada transaksi pembelian kamu yang berhasil nih.</p>
        </div>
      )}
      {dataHistoryBerhasil?.map((history) => (
        <div key={history.id} className={style.cardContainer}>
          <Link to={`/buyer-product/${history?.Product?.id}`}>
            <img src={history.Product.Product_images[0].url_image} alt="card" />
          </Link>
          <div className={style.cardDesc}>
            <h5>{`${history.Product.name.slice(0, 15)}...`}</h5>
            <div className={style.textCon}>
              <p>{history.Buyers.name}</p>
              <p style={{ color: "green", paddingLeft: "8px" }}>Berhasil</p>
            </div>
            <h5>{`${rupiah(history?.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default PembelianBerhasil;
