import Navbar from "../../components/NavbarTitle/NavbarTitle";
import style from "./ProductInfo.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const ProductInfo = () => {
  const { dataLogin } = useSelector((state) => state.auth);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    isActive: "",
    status: "",
    id_user: "",
    id_category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", product.name);
    formdata.append("price", product.price);
    formdata.append("description", product.description);
    formdata.append("isActive", product.isActive);
    formdata.append("status", product.status);
    formdata.append("id_user", product.id_user);
    formdata.append("id_category", product.id_category);
    try {
      const { data } = await axios({
        method: "post",
        url: `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts`,
        data: formdata,
        headers: {
          Authorization: `Bearer ${dataLogin.dataLogin.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar title="Lengkapi Detail Produk" />
      <div className={style.container}>
        <div className={style.content}>
          <Link to={`/daftar-jual`} style={{ textDecoration: "none" }}>
            <img src="/icons/arrow-left.svg" alt="Icon Back" />
          </Link>
          <h1 className={style.titleRes}>Lengkapi Detail Produk</h1>
        </div>
        <div className={style.content}>
          <form>
            <div className={style.inputForm}>
              <label htmlFor="namaProduk">Nama Produk</label>
              <input
                className={style.inputBox}
                type="text"
                name="produk"
                placeholder="Nama Produk"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="hargaProduk">Harga Produk</label>
              <input
                className={style.inputBox}
                type="text"
                name="produk"
                placeholder="Rp 0,00"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="kategori">Kategori</label>
              <div className={style.row}>
                <Select className={style.colLeft} />
              </div>
            </div>
            <div className={style.inputForm}>
              <label htmlFor="deskripsi">Deskripsi</label>
              <textarea
                className={style.inputDesc}
                type="text"
                name="deskripsi"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </div>
            <div className={style.inputForm}>
              <p>Foto Produk</p>
              <label className={style.inputPhoto} htmlFor="inputImage">
                <img
                  className={style.inputIcon}
                  src="/icons/fi_plus.svg"
                  alt="Icon Plus"
                />
                <input
                  className={style.inputImage}
                  type="file"
                  alt="Box Tambah Gambar"
                />
              </label>
            </div>
            <div className={style.btn}>
              <button className={style.btnForm}>Preview</button>
              <button
                className={style.btnForm}
                onClick={(e) => handleSubmit(e)}
              >
                Terbitkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
