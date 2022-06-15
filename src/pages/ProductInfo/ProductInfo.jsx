import Productioninfo from "./ProductionInfo";
import NavbarProduct from "../../components/NavbarProduct/NavbarProduct"
import style from './ProductInfo.module.css'

const ProductInfo = () => {
  return (
    <>
      <NavbarProduct />
      <Productioninfo />
      <div className={style.trel}>
        <button className={style.buton}>Preview</button>
        <button className={style.botun}>Terbitkan</button>
      </div> 
    </>
  )
}

export default ProductInfo;