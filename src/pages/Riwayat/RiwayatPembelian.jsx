import Navbar from "../../components/NavbarAfterLogin/NavbarAfterLogin";
import NavbarStyle from "../../components/NavbarAfterLogin/NavbarAfterLogin.module.css";
import Sidebar from "../../components/Sidebar";
import style from "./RiwayatPembelian.module.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const RiwayatPembelian = () => {
  useEffect(() => {
    document.title = "SecondHand | Riwayat Pembelian";
    document.getElementsByClassName(NavbarStyle.iconClock)[0].style.stroke =
      "#7126B5";
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={style.container}>
        <div className={style.content}>
          <h1 data-testid="riwayatbeli" className={style.titleRes}>Riwayat Pembelian</h1>
          <div className={style.outletContainer}>
            <div className={style.buttonOutlet}>
              <Link
                style={{ textDecoration: "none" }}
                to="/riwayat-pembelian/pembelian-berhasil"
              >
                <button>Berhasil</button>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/riwayat-pembelian/pembelian-dalam-proses"
              >
                <button>Dalam Proses</button>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/riwayat-pembelian/pembelian-dibatalkan"
              >
                <button>Ditolak</button>
              </Link>
            </div>
            <div className={style.outletContent}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiwayatPembelian;
