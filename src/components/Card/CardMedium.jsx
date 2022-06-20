import style from './CardMedium.module.css';

const CardMedium = () => {
  return (
    <>
        <div className={style.cardContainer}>
            <img src='images/img-card.png' alt="card" />
            <div className={style.cardDesc}>
                <h5>Jam Tangan Casio</h5>
                <p>Aksesoris</p>
                <h5>Rp 250.000</h5>
            </div>
        </div>
    </>
  )
}

export default CardMedium;