import style from './logo.module.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate("/");
    };

    return (
        <div className={style.logo} onClick={() => handleNavigateHome()}>
            <h1 className={style.logoTitle}>SecondHand.</h1>
        </div>
    );
};

export default Logo;