import NavbarProfil from "../../components/NavbarProfil/NavbarProfil";
import ProfilInfo from "./ProfilInfo";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <NavbarProfil />
      <ProfilInfo />
      <div className={style.trel}>
        <button className={style.botun}>Simpan</button>
      </div>
    </>
  )
}

export default ProfileInfo;