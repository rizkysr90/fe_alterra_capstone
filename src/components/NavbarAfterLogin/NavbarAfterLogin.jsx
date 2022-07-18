import style from "./NavbarAfterLogin.module.css";
import Logo from "../Logo/logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarAfterLogin = () => {
  const [search, setSearch] = useState("");
  // const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    console.log(search);
  };

  // const handleActive = () => {
  //   setIsActive(current => !current);
  // }

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
              // style={{ stroke: isActive ? "#7126B5" : "" }}
              className={style.iconList}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              // onClick={handleActive}
            >
              <path d="M8 18H21" />
              <path d="M3 18H3.01" />
              <path d="M8 12H21" />
              <path d="M3 12H3.01" />
              <path d="M8 6H21" />
              <path d="M3 6H3.01" />
            </svg>
          </Link>
          <Link to={"/riwayat-pembelian"}>
            <svg
              className={style.iconCart}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" />
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" />
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" />
            </svg>
          </Link>
          <Link to={"/notifikasi"}>
            <svg
              // style={{ stroke: isActive ? "#7126B5" : "" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconBell}
              // onClick={handleActive}
            >
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" />
            </svg>
          </Link>
          <Link to={"/profile"}>
            <svg
              // style={{ stroke: isActive ? "#7126B5" : "" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconUser}
              // onClick={handleActive}
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
