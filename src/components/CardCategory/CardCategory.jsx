import style from "./CardCategory.module.css";
import { Link } from "react-router-dom";

const CardCategory = () => {
  return (
    <div className={style.card}>
      <p className={style.titleCard}>Kategori</p>
      <div className={style.cardContent}>
        <svg
          className={style.iconBox}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z" />
          <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" />
          <path d="M12 22.08V12" />
        </svg>

        <Link to={`/daftar-jual`} style={{ textDecoration: "none" }}>
          <p className={style.pText}>Semua Produk</p>
        </Link>

        <svg
          className={style.iconArrow}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18L15 12L9 6" />
        </svg>
      </div>
      <div className={style.cardContent}>
        <svg
          className={style.iconHeart}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z" />
        </svg>

        <Link to={`/daftar-jual-diminati`} style={{ textDecoration: "none" }}>
          <p className={style.pText}>Diminati</p>
        </Link>

        <svg
          className={style.iconArrow}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18L15 12L9 6" />
        </svg>
      </div>
      <div className={style.cardContent}>
        <svg
          className={style.iconDollar}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1V23" />
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" />
        </svg>

        <Link to={`/daftar-jual-terjual`} style={{ textDecoration: "none" }}>
          <p className={style.pText}>Terjual</p>
        </Link>

        <svg
          className={style.iconArrow}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18L15 12L9 6" />
        </svg>
      </div>
      <div className={style.cardContent}>
        <svg
          className={style.iconBag}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" />
          <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" />
          <path d="M3 6H21" />
        </svg>

        <Link to={`/riwayat-penjualan`} style={{ textDecoration: "none" }}>
          <p className={style.pText}>Riwayat Penjualan</p>
        </Link>

        <svg
          className={style.iconArrow}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18L15 12L9 6" />
        </svg>
      </div>
    </div>
  );
};

export default CardCategory;
