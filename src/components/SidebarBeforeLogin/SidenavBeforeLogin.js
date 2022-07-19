import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";

const SidenavBeforeLogin = ({ sidenav }) => {

    return (
        <div className={sidenav ? "sidenav sidenav--open" : "sidenav"}>
            <Link to={"/"}>
                <p><b>Second Hand</b></p>
            </Link>
            <Link to={"/login"}>
                <li>Masuk</li>
            </Link>
        </div>
    )
}

export default SidenavBeforeLogin;