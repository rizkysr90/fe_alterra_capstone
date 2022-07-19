import { useState } from "react";
import React from "react";
import Sidenav from "./SidenavBeforeLogin";
import Backdrop from "../Sidebar/Backdrop";
import Toolbar from "../Sidebar/Toolbar";

const Sidebar = () => {
	const [sidenav, setSidenav] = useState(false);
	const toggleSidenav = () => {
		setSidenav((prevState) => !prevState);
	};

	return (
		<>
			<Toolbar openSidenav={toggleSidenav} />
			<Backdrop sidenav={sidenav} closeSidenav={toggleSidenav} />
			<Sidenav sidenav={sidenav} />
		</>
	);
};

export default Sidebar;
