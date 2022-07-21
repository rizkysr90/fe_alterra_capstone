// import CardMedium from "../Card/CardMedium";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { buyerAction } from "../../config/redux/actions/buyerAction";
import style from "./Category.module.css";
import { useState } from "react";
import axios from "axios";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  const { dataProductBuyer } = useSelector(
    (globalStore) => globalStore.buyerReducer
  );

  const dispatch = useDispatch();

  const getAllProduct = async () => {
    const { data } = await axios.get(
      "https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1&row=12"
    );
    setProduct(data.data);
  };

  const getCategory = async () => {
    const { data } = await axios.get(
      "https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/categories?page=1"
    );
    setCategory(data.data);
  };

  const getProductByCategory = async (idCategory) => {
    const { data } = await axios.get(
      `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/products?page=1&row=12&category=${idCategory}`
    );
    setProduct(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    dispatch(buyerAction());
    getCategory();
    setProduct(dataProductBuyer);
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
      <div className={style.container}>
        <h2 data-testid="kategori-value">Telusuri Kategori</h2>
        <div className={style.btnContainer}>
          <button
            onClick={() => getAllProduct()}
            className={style.btnCategory}>
            <img src="/icons/fi_search_white.svg" alt="search" />
            semua
          </button>
          {category?.map((category) => (
            <button
              className={style.btnCategory}
              key={category.id}
              onClick={() => getProductByCategory(category.id)}
            >
              <img src="/icons/fi_search_white.svg" alt="search" />
              {category.name}
            </button>
          ))}
        </div>
        <div className={style.cardContainer}>
          {product?.map((products) => (
            <div key={products.id} className={style.boxCard}>
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
        </div>
      </div>
    </>
  );
};

export default Category;
