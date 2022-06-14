import style from './BtnPrimary.module.css';

const BtnPrimary = ({
    children
}) => {
    return (
        <button className={style.btnPrimary}>{children}</button>
    );
};

export default BtnPrimary;