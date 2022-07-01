import Navbar from "../../components/NavbarTitle/NavbarTitle";
import style from "./ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <>
      <Navbar title="Lengkapi Detail Produk"/>
      <div className={style.container}>
        <div className={style.content}>
          <img src="/icons/arrow-left.svg" alt="Icon Back" />
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
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="hargaProduk">Harga Produk</label>
              <input
                className={style.inputBox}
                type="text"
                name="produk"
                placeholder="Rp 0,00"
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="kategori">Kategori</label>
              <select defaultValue="0" className={style.inputBox}>
                <option value="0" disabled>
                  Pilih Kategori
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className={style.inputForm}>
              <label htmlFor="deskripsi">Deskripsi</label>
              <textarea
                className={style.inputDesc}
                type="text"
                name="deskripsi"
                placeholder="Contoh: Jalan Ikan Hiu 33"
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
              <button className={style.btnForm}>Terbitkan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
