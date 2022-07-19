import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidenav = ({ sidenav }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }

    return (
        <div className={sidenav ? "sidenav sidenav--open" : "sidenav"}>
            <Link to={"/"}>
                <p><b>Second Hand</b></p>
            </Link>
            <Link to={"/daftar-jual"}>
                <li>Daftar Jual</li>
            </Link>
            <Link to={"/notifikasi"}>
                <li>Notifikasi</li>
            </Link>
            <Link to={"/riwayat-pembelian"}>
                <li>Riwayat Pembelian</li>
            </Link>
            <Link to={"/profile"}>
                <li>Akun Saya</li>
            </Link>
            <li onClick={handleLogout}>Keluar</li>
        </div>
    )
}

export default Sidenav;