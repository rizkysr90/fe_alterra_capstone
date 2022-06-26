import "./Sidebar.css";

const Backdrop = ({sidenav, closeSidenav}) => {
    return (
        <div className={sidenav?"backdrop backdrop--open":"backdrop"} onClick={closeSidenav}></div>
    )
}

export default Backdrop;