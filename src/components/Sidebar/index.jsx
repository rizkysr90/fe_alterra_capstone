import { useState } from "react";
import React from "react";
import Sidenav from "./Sidenav";
import Backdrop from "./Backdrop";
import Toolbar from "./Toolbar";

const Sidebar = () => {
    const [sidenav, setSidenav] = useState(false);
    const toggleSidenav = () => {
        setSidenav((prevState) => !prevState);
    }

    return (
        <>
        <Toolbar openSidenav={toggleSidenav} />
        <Backdrop sidenav={sidenav} closeSidenav={toggleSidenav}/>
        <Sidenav sidenav={sidenav}/>
        </>
    )
}

export default Sidebar;