import Productioninfo from "./ProductionInfo";
import NavbarProduct from "../../components/NavbarProduct/NavbarProduct";
import BtnPrimary from "../../components/Button/BtnPrimary";
import BtnSecondary from "../../components/Button/BtnSecondary";
import style from './ProductInfo.module.css'

const ProductInfo = () => {
  return (
    <>
      <NavbarProduct />
      <Productioninfo />
      <div className={style.trel}>
        <BtnSecondary className={style.secondary}>Preview</BtnSecondary>
        <BtnPrimary>Terbitkan</BtnPrimary>
      </div>
    </>
  )
}

export default ProductInfo;