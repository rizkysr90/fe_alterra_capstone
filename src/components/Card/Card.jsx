import style from "./Card.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { buyerAction } from "../../config/redux/actions/buyerAction";

const Card = () => {
  const { dataProductBuyer } = useSelector(
    (globalStore) => globalStore.buyerReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buyerAction());
    //eslint-disable-next-line
  }, []);

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
          <Link to={`/buyer-product/${products.id}`}>
            <img src={products.Product_images[0].url_image} alt="card" />
          </Link>
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

export default Card;
