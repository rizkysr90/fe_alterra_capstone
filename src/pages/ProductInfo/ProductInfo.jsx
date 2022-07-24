import Navbar from "../../components/NavbarTitle/NavbarTitle";
import style from "./ProductInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { orderSellerAlert } from "../../config/redux/actions/sellerAction";

const ProductInfo = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const [category, setCategory] = useState([]);
  const [ProductPicture, setProductPicture] = useState([]);
  const [pictureSubmit, setPictureSubmit] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCategory = async () => {
    const { data } = await axios.get(
      "https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/categories?page=1"
    );
    setCategory(data.data);
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

  const handleChange = (e) => {
    setProduct({ ...product, id_category: e.target.value });
  };

  const handlePreview = async (e) => {
    e.preventDefault();
    product.isActive = false;
    product.status = false;
    product.id_user = dataLogin?.dataLogin?.id;
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
      const { data } = await axios({
        method: "post",
        url: `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts`,
        data: formdata,
        headers: {
          Authorization: `Bearer ${dataLogin?.dataLogin?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(orderSellerAlert(true));
      navigate(`/seller-product/${data.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    isActive: "",
    status: "",
    id_user: "",
    id_category: "",
    gambar: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    product.isActive = true;
    product.status = true;
    product.id_user = dataLogin?.dataLogin?.id;
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
      // eslint-disable-next-line
      const { data } = await axios({
        method: "post",
        url: `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/myproducts`,
        data: formdata,
        headers: {
          Authorization: `Bearer ${dataLogin?.dataLogin?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {}
    dispatch(orderSellerAlert(true));
    navigate(`/daftar-jual`);
  };

  const getUserDetail = async () => {
    const { data } = await axios.get(
      `https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/profile/${dataLogin?.dataLogin?.id}`,
      {
        headers: { Authorization: `Bearer ${dataLogin?.dataLogin?.token}` },
      }
    );
    setUserDetail(data.data);
  };

  useEffect(() => {
    getCategory();
    getUserDetail();
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
                placeholder="Contoh: Ini motor bekas"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </div>
            {userDetail?.City === null && userDetail?.phone_number === null && (
              <Link to={`/profile`} style={{ color: "red" }}>
                <p style={{ color: "red" }}>Lengkapi profil terlebih dahulu</p>
              </Link>
            )}
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

export default ProductInfo;
