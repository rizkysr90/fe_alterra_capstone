import style from "./CardMedium.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sellerAction } from "../../config/redux/actions/sellerAction";
import { useEffect } from "react";

const CardMedium = () => {
  const { dataProductSeller } = useSelector((state) => state.sellerReducer);
  console.log(dataProductSeller);

  const dispatch = useDispatch();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJVY2hpaGEgSXRhY2hpIiwiaWF0IjoxNjU2NTc2MTAwLCJleHAiOjE2NTY2NjI1MDB9.RUVUhz1zZfeF-EcAvIaL4ZLiEQjToDa_WXGAYFnoI60";

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(sellerAction(token));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {dataProductSeller?.map((products) => (
        <div key={products.id} className={style.cardContainer}>
          <img src={products.Category.image} alt="card" />
          <div className={style.cardDesc}>
            <h5>{`${products.name.slice(0, 15)}...`}</h5>
            <p>{products.Category.name}</p>
            <h5>{`${rupiah(products.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMedium;
