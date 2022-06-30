import Navbar from "../../components/NavbarTitle/NavbarTitle";
// import NavbarCSS from "../../components/NavbarTitle/NavbarTitle.module.css";
import style from "./ProfileInfo.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AsyncSelect from "react-select/async";


const ProfileInfo = () => {
  const { dataLogin } = useSelector((state) => state.auth);

  const [dataUser, setDataUser] = useState({});
  const [city, setCity] = useState({});
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const getUserDetail = async () => {
    const { data } = await axios.get(`https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/profile/${dataLogin.dataLogin.id}`, {
      headers: { Authorization: `Bearer ${dataLogin.dataLogin.token}` }
    });
    setDataUser(data.data);
  };

  const getCityDetail = async () => {
    const { data } = await axios.get(`https://secondhand-apibejs2-staging.herokuapp.com/api/v1.0/cities/search?name=${inputValue}`, {
      headers: { Authorization: `Bearer ${dataLogin.dataLogin.token}` }
    });
    //eslint-disable-next-line
    setCity((prevValue) => data.data);
    return(data.data);
  };

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    getUserDetail();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar title="Lengkapi Info Akun"/>
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
                value={dataUser.name}
                onChange={(e) => setDataUser({...dataUser, name:e.target.value})}
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaKota">Kota*</label>
              <AsyncSelect
                defaultOptions  
                className={style.inputBox}
                getOptionLabel={(e) => e.name}
                getOptionValue={(e) => e.id}
                loadOptions={getCityDetail}
                onInputChange={handleInputChange}
                onChange={handleChange}
                value={selectedValue}
              />
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
