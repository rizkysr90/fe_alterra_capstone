import style from "./Card.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyerAction } from "../../config/redux/actions/buyerAction";

const Card = () => {
  const { dataProductBuyer } = useSelector((globalStore) => globalStore.buyerReducer);
  console.log(dataProductBuyer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buyerAction());
    //eslint-disable-next-line
  }, [])

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      {dataProductBuyer?.map((products) => (
        <div key={products.id} className={style.cardContainer}>
          <img src={products.Category.image} alt="card" />
          <div className={style.cardDesc}>
            <h5>{`${(products.name).slice(0, 15)}...`}</h5>
            <p>{products.Category.name}</p>
            <h5>{`${rupiah(products.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
