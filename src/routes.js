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
import Notifikasi from './pages/Notifikasi/Notifikasi';
import RiwayatPenjualan from './pages/Riwayat/RiwayatPenjualan';
import RiwayatPembelian from './pages/Riwayat/RiwayatPembelian';
import PenjualanBerhasil from './components/CategoryRiwayatPenjualan/PenjualanBerhasil';
import PenjualanDalamProses from './components/CategoryRiwayatPenjualan/PenjualanDalamProses';
import PenjualanDibatalkan from './components/CategoryRiwayatPenjualan/PenjualanDibatalkan';
import PembelianBerhasil from './components/CategoryRiwayatPembelian/PembelianBerhasil';
import PembelianDalamProses from './components/CategoryRiwayatPembelian/PembelianDalamProses';
import PembelianDibatalkan from './components/CategoryRiwayatPembelian/PembelianDibatalkan';

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<h1 style={{marginTop: '20%', textAlign: 'center'}}>Halaman Tidak Tersedia</h1>} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<ProfileInfo />} />
                <Route path='/notifikasi' element={<Notifikasi />} />
                <Route path='/product-info' element={<ProductInfo />} />
                <Route path='/seller-product/:idProductSeller' element={<SellerProduct />} />
                <Route path='/buyer-product/:idProductBuyer' element={<BuyerProduct />} />
                <Route path='/daftar-jual' element={<DaftarJual />} />
                <Route path='/daftar-jual-diminati' element={<DaftarJualDiminati />} />
                <Route path='/daftar-jual-terjual' element={<DaftarJualTerjual />} />
                <Route path='/riwayat-penjualan' element={<RiwayatPenjualan />}>
                    <Route path='/riwayat-penjualan/penjualan-berhasil' element={<PenjualanBerhasil />} />
                    <Route path='/riwayat-penjualan/penjualan-dibatalkan' element={<PenjualanDibatalkan />} />
                    <Route path='/riwayat-penjualan/penjualan-dalam-proses' element={<PenjualanDalamProses />} />
                </Route>
                <Route path='/riwayat-pembelian' element={<RiwayatPembelian />}>
                    <Route path='/riwayat-pembelian/pembelian-berhasil' element={<PembelianBerhasil />} />
                    <Route path='/riwayat-pembelian/pembelian-dibatalkan' element={<PembelianDibatalkan />} />
                    <Route path='/riwayat-pembelian/pembelian-dalam-proses' element={<PembelianDalamProses />} />
                </Route>
                <Route path='/info-penawar/:idOrderSeller' element={<InfoPenawar />} />
                <Route path='/search/:searchResult' element={<SearchResult />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;