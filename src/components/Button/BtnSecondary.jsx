import style from './BtnSecondary.module.css';

const BtnSecondary = ({
    children
}) => {
    return (
        <button className={style.btnSecondary}>{children}</button>
    );
};

export default BtnSecondary;