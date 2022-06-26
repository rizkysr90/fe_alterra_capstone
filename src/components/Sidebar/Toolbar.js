import React from "react";
import "./Sidebar.css";

const Toolbar = ({ openSidenav }) => {
    return (
        <div className="toolbar">
            <img src="/icons/fi_menu.svg" onClick={openSidenav} alt="Icon Menu" />
        </div>
    )
}

export default Toolbar;