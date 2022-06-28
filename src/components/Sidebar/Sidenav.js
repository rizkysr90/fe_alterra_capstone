import React from "react";
// import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidenav = ({sidenav}) => {
    // const navigate = useNavigate();

    return (
        <div className={sidenav?"sidenav sidenav--open":"sidenav"}>
            <p><b>Second Hand</b></p>
            <li>Notifikasi</li>
            <li>Daftar Jual</li>
            <li>Akun Saya</li>
        </div>
    )
}

export default Sidenav;