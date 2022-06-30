import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProfileInfo from './pages/ProfileInfo/ProfileInfo';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import SellerProduct from './pages/SellerProduct/SellerProduct';
import BuyerProduct from './pages/BuyerProduct/BuyerProduct';
import DaftarJual from './pages/DaftarJual/DaftarJual';
import InfoPenawar from './pages/InfoPenawar/InfoPenawar';

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<ProfileInfo />} />
                <Route path='/product-info' element={<ProductInfo />} />
                <Route path='/seller-product' element={<SellerProduct />} />
                <Route path='/buyer-product/:idProductBuyer' element={<BuyerProduct />} />
                <Route path='/daftar-jual' element={<DaftarJual />} />
                <Route path='/info-penawar' element={<InfoPenawar />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;