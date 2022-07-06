import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProfileInfo from './pages/ProfileInfo/ProfileInfo';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import SellerProduct from './pages/SellerProduct/SellerProduct';
import BuyerProduct from './pages/BuyerProduct/BuyerProduct';
import DaftarJual from './pages/DaftarJual/DaftarJual';
import DaftarJualDiminati from './pages/DaftarJual/DaftarJualDiminati';
import DaftarJualTerjual from './pages/DaftarJual/DaftarJualTerjual';
import InfoPenawar from './pages/InfoPenawar/InfoPenawar';
import SearchResult from './pages/SearchResult/SearchResult';

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<ProfileInfo />} />
                <Route path='/product-info' element={<ProductInfo />} />
                <Route path='/seller-product/:idProductSeller' element={<SellerProduct />} />
                <Route path='/buyer-product/:idProductBuyer' element={<BuyerProduct />} />
                <Route path='/daftar-jual' element={<DaftarJual />} />
                <Route path='/daftar-jual-diminati' element={<DaftarJualDiminati />} />
                <Route path='/daftar-jual-terjual' element={<DaftarJualTerjual />} />
                <Route path='/info-penawar' element={<InfoPenawar />} />
                <Route path='/search/:searchResult' element={<SearchResult />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;