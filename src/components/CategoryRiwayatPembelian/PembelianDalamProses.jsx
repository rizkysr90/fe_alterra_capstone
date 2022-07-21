import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { historyBuyerDalamProses } from "../../config/redux/actions/buyerAction";
import style from "../../pages/Riwayat/RiwayatPembelian.module.css";

const PembelianDalamProses = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const token = `${dataLogin.dataLogin.token}`;
  const { dataHistoryDiproses } = useSelector(
    (globalStore) => globalStore.buyerReducer
  );
  console.log(dataHistoryDiproses);
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
    dispatch(historyBuyerDalamProses(token));
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {dataHistoryDiproses?.length === 0 && (
        <div className={style.dataEmpty}>
          <img src="/images/dataEmpty.png" alt="Data Empty" />
          <p>Wah, belum ada transaksi pembelian kamu yang diproses nih.</p>
        </div>
      )}

      {dataHistoryDiproses?.map((history) => (
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
            <p>Sedang Menunggu Respon Penjual</p>
            <h2>{history.Product?.name}</h2>
            <h2>Ditawar dengan harga {`${rupiah(history?.price)}`}</h2>
          </div>
          <div className={style.cardContent}>
            <p>{formatDateTime(history.updatedAt)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PembelianDalamProses;
