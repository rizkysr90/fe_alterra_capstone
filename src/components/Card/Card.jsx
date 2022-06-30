import style from "./Card.module.css";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  // const { dataProductBuyer } = useSelector((globalStore) => globalStore.productReducer);
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get(
        "https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1"
      )
      .then((response) => {
        console.log(response);
        const myProduct = response.data.data;
        setProduct(myProduct);
      });
  };

  useEffect(() => getProduct(), []);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      {/* {dataProductBuyer?.map((data) => (
      <ul key={data.id}>
        <li>{data.name}</li>
      </ul>
    ))} */}
      {product?.map((products) => (
        <div key={products.id} className={style.cardContainer}>
          <img src="images/img-card.png" alt="card" />
          <div className={style.cardDesc}>
            <h5>{products.name}</h5>
            <p>Aksesoris</p>
            <h5>{`${rupiah(products.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
