import Navbar from "../../components/NavbarTitle/NavbarTitle";
// import NavbarCSS from "../../components/NavbarTitle/NavbarTitle.module.css";
import style from "./ProfileInfo.module.css";
// import { useState } from "react";
// import ReactDOM from 'react-dom';

const ProfileInfo = () => {

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.content}>
          <img src="/icons/arrow-left.svg" alt="Icon Back" />
        </div>
        <div className={style.content}>
          <form>
            <div className={style.inputForm}>
              <label className={style.inputPhoto} htmlFor="inputImage">
                <img
                  className={style.inputIcon}
                  src="/icons/camera.svg"
                  alt="Icon Camera"
                />
                <input
                  className={style.inputImage}
                  type="file"
                  alt="Box Tambah Gambar"
                />
              </label>
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaProfil">Nama*</label>
              <input
                className={style.inputBox}
                type="text"
                name="namaProfil"
                placeholder="Nama"
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaKota">Kota*</label>
              <select defaultValue="0" className={style.inputBox}>
                <option value="0" disabled>
                  Pilih Kota
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaAlamat">Alamat*</label>
              <textarea
                className={style.inputAddress}
                type="text"
                name="namaAlamat"
                placeholder="Contoh: Jalan Ikan Hiu 33"
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="noHP">No Handphone*</label>
              <input
                className={style.inputBox}
                type="text"
                name="noHP"
                placeholder="Contoh: +628123456789"
              />
            </div>
            <button className={style.btnSave}>Simpan</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
