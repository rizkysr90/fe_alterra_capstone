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

  const formatDateTime = (createdAt) => {
    const date = new Date(createdAt);
    const time = new Date(createdAt);
    const formattedDate = time.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
    });

    const formattedTime = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedDate + ", " + formattedTime;
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
        <div className={style.cardProduct} key={history.id}>
          <div className={style.cardContent}>
            <Link to={`/buyer-product/${history?.Product?.id}`}>
              <img
                src={history.Product.Product_images[0].url_image}
                alt="card"
              />
            </Link>
          </div>
          <div className={style.cardContent}>
            <p>Transaksi Pembelian Berhasil</p>
            <h2>{history.Product?.name}</h2>
            <h2>Dibeli dengan harga {`${rupiah(history?.price)}`}</h2>
          </div>
          <div className={style.cardContent}>
            <p>{formatDateTime(history.updatedAt)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PembelianBerhasil;
