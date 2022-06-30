import style from "./Card.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [productBuyer, setProductBuyer] = useState([]);

  const getProductBuyer = () => {
    axios
      .get(
        "https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1"
      )
      .then((response) => {
        console.log(response);
        const dataProductBuyer = response.data.data;
        setProductBuyer(dataProductBuyer);
      });
  };

  useEffect(() => {
    getProductBuyer();
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
      {productBuyer?.map((products) => (
        <div key={products.id} className={style.cardContainer}>
          <img src={products.Category.image} alt="card" />
          <div className={style.cardDesc}>
            <h5>{`${(products.name).slice(0, 15)}...`}</h5>
            <p>Aksesoris</p>
            <h5>{`${rupiah(products.price)}`}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
