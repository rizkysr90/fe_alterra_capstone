import style from "./NavbarAfterLogin.module.css";
import Logo from "../Logo/logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarAfterLogin = () => {
  const [search, setSearch] = useState("");
//   const [defaultcolor, setNewColor] = useState("#151515");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    console.log(search);
  };

  return (
    <>
      <nav>
        <div className={style.leftNavbar}>
          <Logo />
          <div className={style.inputContainer}>
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Cari di sini ..."
              />
              <img
                onClick={(e) => handleOnSubmit(e)}
                src="/icons/fi_search.svg"
                alt="search"
              />
            </form>
          </div>
        </div>
        <div className={style.rightNavbar}>
          <Link to={"/daftar-jual"}>
            <svg
            //   style={{ [stroke: defaultColor] }}
              className={style.iconList}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 18H21" />
              <path d="M3 18H3.01" />
              <path d="M8 12H21" />
              <path d="M3 12H3.01" />
              <path d="M8 6H21" />
              <path d="M3 6H3.01" />
            </svg>
          </Link>
          <Link to={"/notifikasi"}>
            <svg
              style={{ stroke: "#151515" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconBell}
            >
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" />
            </svg>
          </Link>
          <Link to={"/profile"}>
            <svg
              style={{ stroke: "#151515" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconUser}
            >
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarAfterLogin;
