import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidenav = ({sidenav}) => {
    // const navigate = useNavigate();

    return (
        <div className={sidenav?"sidenav sidenav--open":"sidenav"}>
            <Link to={"/"}>
                <p><b>Second Hand</b></p>
            </Link>
            <li>Notifikasi</li>
            <Link to={"/daftar-jual"}>
                <li>Daftar Jual</li>
            </Link>
            <Link to={"/profile"}>
                <li>Akun Saya</li>
            </Link>
        </div>
    )
}

export default Sidenav;