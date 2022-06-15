import Navbar from '../../components/NavbarNotHome/NavbarNotHome';
import style from './DaftarJual.module.css';

const DaftarJual = () => {
  return (
    <>
        <Navbar />
        <div className={style.container}>
          <h1 className={style.titlePage}>Daftar Jual Saya</h1>
          <div className={style.boxProfile}>
            <div className={style.profileContent}></div>
            <div className={style.profileContent}></div>
            <div className={style.profileContent}></div>
          </div>
        </div>
    </>
  )
}

export default DaftarJual;