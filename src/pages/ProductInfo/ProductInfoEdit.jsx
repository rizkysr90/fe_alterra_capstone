import Navbar from "../../components/NavbarTitle/NavbarTitle";
import style from "./ProductInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { orderSellerAlert } from "../../config/redux/actions/sellerAction";

const ProductInfoEdit = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);

  const { idProductSeller } = useParams();

  const [category, setCategory] = useState([]);

  const [ProductPicture, setProductPicture] = useState([]);

  const [pictureSubmit, setPictureSubmit] = useState([]);

  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getCategory = async () => {
    const { data } = await axios.get(
      "https://bealterracapstone-production.up.railway.app/api/v1/categories?page=1"
    );
    setCategory(data.data);
  };

  const getDetailProduct = async () => {
    const { data } = await axios.get(
      `https://bealterracapstone-production.up.railway.app/api/v1/myproducts/${idProductSeller}`,
      { headers: { Authorization: `Bearer ${dataLogin.dataLogin.token}` } }
    );
    setProduct(data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formProduct = new FormData();
    formProduct.append("name", product.name);
    formProduct.append("price", product.price);
    formProduct.append("description", product.description);
    formProduct.append("id_category", product.id_category);

    try {
      //eslint-disable-next-line
      const { data } = await axios({
        method: "put",
        url: `https://bealterracapstone-production.up.railway.app/api/v1/myproducts/${idProductSeller}`,
        data: formProduct,
        headers: {
          Authorization: `Bearer ${dataLogin.dataLogin.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(orderSellerAlert(true));
    } catch (err) {}
    navigate(`/daftar-jual`);
  };

  const handleChange = (e) => {
    setProduct({ ...product, id_category: e.target.value });
  };

  const handleFile = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setProductPicture((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));

      setPictureSubmit([...pictureSubmit, e.target.files[0]]);
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <div className={style.preview}>
          <div className={style.column}>
            <img src={photo} alt="" key={photo} />
            <span onClick={() => delImage(index)}>&times;</span>
          </div>
        </div>
      );
    });
  };

  const delImage = (e) => {
    const s = ProductPicture.filter((photo, index) => index !== e);
    setProductPicture(s);
  };

  const handlePreview = async (e) => {
    e.preventDefault();
    product.isActive = false;
    product.status = false;
    product.id_user = dataLogin.dataLogin.id;
    const formdata = new FormData();
    pictureSubmit.map((data) => formdata.append("gambar", data));
    formdata.append("name", product.name);
    formdata.append("price", product.price);
    formdata.append("description", product.description);
    formdata.append("isActive", product.isActive);
    formdata.append("status", product.status);
    formdata.append("id_user", product.id_user);
    formdata.append("id_category", product.id_category);
    try {
      //eslint-disable-next-line
      const { data } = await axios({
        method: "post",
        url: `https://bealterracapstone-production.up.railway.app/api/v1/myproducts`,
        data: formdata,
        headers: {
          Authorization: `Bearer ${dataLogin.dataLogin.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate(`/seller-product/${idProductSeller}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
    getDetailProduct();
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
          <h1 data-testid="produk" className={style.titleRes}>
            Lengkapi Detail Produk
          </h1>
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
                <select
                  className={style.inputBox}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" disabled selected>
                    Pilih Kategori
                  </option>
                  {category?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
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
                  multiple
                  alt="Box Tambah Gambar"
                  onChange={(e) => handleFile(e)}
                />
                {renderPhotos(ProductPicture)}
              </label>
            </div>

            <div className={style.btn}>
              <button
                className={style.btnForm}
                onClick={(e) => handlePreview(e)}
              >
                Preview
              </button>
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

export default ProductInfoEdit;
