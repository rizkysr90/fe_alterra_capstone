import RiwayatPembelian from "../pages/Riwayat/RiwayatPembelian";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test RiwayatPembelian Page', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <RiwayatPembelian CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('cek apakah ada text riwayat pembelian', () => {
        const textRiwayatBeli = screen.getByTestId('riwayatbeli');
        expect(textRiwayatBeli).toBeInTheDocument();  
        expect(textRiwayatBeli).toHaveTextContent('Riwayat Pembelian');  
    }); 
});