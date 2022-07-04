import style from "./CardMedium.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sellerAction } from "../../config/redux/actions/sellerAction";
import { useEffect } from "react";

const CardMedium = () => {
  const { dataProductSeller } = useSelector(
    (globalStore) => globalStore.sellerReducer
  );
  console.log(dataProductSeller);

  const dispatch = useDispatch();
  const { dataLogin } = useSelector((state) => state.auth);
  const token = `${dataLogin.dataLogin.token}`;

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
          <Link to={`/seller-product/${products.id}`}>
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

export default CardMedium;
