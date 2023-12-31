import Navbar from "../../components/NavbarTitle/NavbarTitle";
// import NavbarCSS from "../../components/NavbarTitle/NavbarTitle.module.css";
import style from "./ProfileInfo.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";
import AlertSuccess from "../../components/Alert/AlertSuccess";

const ProfileInfo = () => {
  const { dataLogin } = useSelector((globalStore) => globalStore.auth);
  const [dataUser, setDataUser] = useState({});
  const [city, setCity] = useState([]);
  const [inputValue, setValue] = useState("");
  const [newProfilePicture, setProfilePicture] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);

  const toggleAlertSuccess = () => {
    setTimeout(() => {
      setAlertSuccess(!alertSuccess);
    }, 500);
  };

  const toggleStopAlert = () => {
    setAlertSuccess(!alertSuccess);
  };

  const getUserDetail = async () => {
    const { data } = await axios.get(
      `https://bealterracapstone-production.up.railway.app/api/v1/profile/${dataLogin.dataLogin.id}`,
      {
        headers: { Authorization: `Bearer ${dataLogin.dataLogin.token}` },
      }
    );
    if (!data.data.City) {
      const { data: dataCity } = await axios.get(
        `https://bealterracapstone-production.up.railway.app/api/v1/cities?page=1&row=10&name=`,
        {
          headers: { Authorization: `Bearer ${dataLogin.dataLogin.token}` },
        }
      );
      setCity(dataCity.data);
    } else {
      const newOptionsCity = [];
      newOptionsCity.push(data.data.City);
      setCity(newOptionsCity);
    }
    setDataUser(data.data);
  };
  const getCityDetail = async () => {
    if (inputValue !== "") {
      const { data } = await axios.get(
        `https://bealterracapstone-production.up.railway.app/api/v1/cities?page=1&row=10&name=${inputValue}`,
        {
          headers: { Authorization: `Bearer ${dataLogin.dataLogin.token}` },
        }
      );
      //eslint-disable-next-line
      setValue("");
      setCity(data.data);
    }
  };
  const handleInputChange = (value) => {
    if (value !== "") {
      setValue(value);
    }
  };
  const handleChange = (value) => {
    setDataUser({ ...dataUser, City: value, city_id: value.id });
  };

  const textToDisplay = (value) => {
    return "Jika data tidak ditemukan klik cari,lalu buka kembali dan jika tetap tidak ada berarti tidak ada";
  };
  const handleFile = (e) => {
    // let file = e.target.files[0];
    // setProfilePicture(file);
    if (e.target.files && e.target.files.length > 0) {
      setProfilePicture(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("profile_picture", newProfilePicture);
    formData.append("name", dataUser.name);
    formData.append("phone_number", dataUser.phone_number);
    formData.append("city_id", dataUser.city_id);
    formData.append("address", dataUser.address);
    try {
      const { data } = await axios({
        method: "put",
        url: `https://bealterracapstone-production.up.railway.app/api/v1/profile/${dataUser.id}`,
        data: formData,
        headers: {
          Authorization: `Bearer ${dataLogin.dataLogin.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toggleAlertSuccess();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetail();
    document.title = "SecondHand | Profil";
    //eslint-disable-next-line
  }, []);
  console.log(dataUser);
  return (
    <>
      <Navbar title="Lengkapi Info Akun" />
      <div className={style.container}>
        <div className={style.content}>
          <Link to={"/"}>
            <img src="/icons/arrow-left.svg" alt="Icon Back" />
          </Link>
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
                  onChange={(e) => handleFile(e)}
                />
              </label>
              {newProfilePicture !== "" && (
                <div className={style.preview}>
                  <div className={style.column}>
                    <img src={URL.createObjectURL(newProfilePicture)} alt="" />
                  </div>
                </div>
              )}
              {newProfilePicture === "" && (
                <div className={style.preview}>
                  <div className={style.column}>
                    <img src={dataUser?.profile_picture} alt="" />
                  </div>
                </div>
              )}
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaProfil">Nama*</label>
              <input
                className={style.inputBox}
                type="text"
                name="namaProfil"
                placeholder="Nama"
                value={dataUser.name}
                onChange={(e) =>
                  setDataUser({ ...dataUser, name: e.target.value })
                }
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaKota">Kota*</label>
              <div className={style.row}>
                <Select
                  className={style.colLeft}
                  getOptionLabel={(e) => e.name}
                  getOptionValue={(e) => e.id}
                  options={city}
                  onInputChange={handleInputChange}
                  onChange={handleChange}
                  value={dataUser.City}
                  noOptionsMessage={textToDisplay}
                />
                <div onClick={getCityDetail} className={style.colRight}>
                  Search
                </div>
              </div>
            </div>
            <div className={style.inputForm}>
              <label htmlFor="namaAlamat">Alamat*</label>
              <textarea
                className={style.inputAddress}
                type="text"
                name="namaAlamat"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                onChange={(e) =>
                  setDataUser({ ...dataUser, address: e.target.value })
                }
                value={dataUser.address}
              />
            </div>
            <div className={style.inputForm}>
              <label htmlFor="noHP">No Handphone*</label>
              <input
                className={style.inputBox}
                type="text"
                name="noHP"
                placeholder="Contoh: +628123456789"
                onChange={(e) =>
                  setDataUser({ ...dataUser, phone_number: e.target.value })
                }
                value={dataUser.phone_number}
              />
            </div>
            <button className={style.btnSave} onClick={(e) => handleSubmit(e)}>
              Simpan
            </button>
          </form>
        </div>
      </div>
      {alertSuccess && (
        <div style={{ margin: "auto" }} onClick={toggleStopAlert}>
          <AlertSuccess text="Profilmu berhasil diubah" />
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
