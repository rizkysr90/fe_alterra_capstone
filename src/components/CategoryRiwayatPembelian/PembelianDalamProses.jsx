// import { Link } from "react-router-dom";
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
        <div key={history.id} className={style.cardContainer}>
          {/* <Link to={`/info-penawar/${history.id}`}> */}
            <img src={history.Product.Product_images[0].url_image} alt="card" />
          {/* </Link> */}
          <div className={style.cardDesc}>
            <h5>{`${history.Product.name.slice(0, 15)}...`}</h5>
            <div className={style.textCon}>
              <p>{history.Buyers.name}</p>
              <p style={{ color: "purple", paddingLeft: "8px" }}>
                Dalam Proses
              </p>
            </div>
            <h5>{`${rupiah(history?.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default PembelianDalamProses;
