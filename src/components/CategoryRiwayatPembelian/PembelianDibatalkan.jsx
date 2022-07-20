// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { historyBuyerDibatalkan } from "../../config/redux/actions/buyerAction";
import style from "../../pages/Riwayat/RiwayatPembelian.module.css";

const PembelianDibatalkan = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const token = `${dataLogin.dataLogin.token}`;
  const { dataHistoryDibatalkan } = useSelector(
    (globalStore) => globalStore.buyerReducer
  );
  console.log(dataHistoryDibatalkan);
  const dispatch = useDispatch();

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(historyBuyerDibatalkan(token));
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {dataHistoryDibatalkan?.length === 0 && (
        <div className={style.dataEmpty}>
          <img src="/images/dataEmpty.png" alt="Data Empty" />
          <p>Wah, belum ada transaksi pembelian kamu yang ditolak nih.</p>
        </div>
      )}
      {dataHistoryDibatalkan?.map((history) => (
        <div key={history?.id} className={style.cardRiwayat}>
          <div className={style.cardContent}>
            <img
              className={style.imgRiwayat}
              src="/images/watch.png"
              alt="Foto Produk"
            />
          </div>
          <div className={style.cardContent}>
            <p>Penawaran produk</p>
            <h2>Jam Casio</h2>
            <h2>Rp 250.000,00</h2>
            <h2>Ditawar {`${rupiah(history?.price)}`}</h2>
          </div>
          <div className={style.cardContent}>
            <p>20 Apr, 14:04</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PembelianDibatalkan;
