import { render, screen } from '@testing-library/react';
import ProductInfo from '../pages/ProductInfo/ProductInfo';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test ProductInfo Page', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <ProductInfo CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('cek apakah ada text lengkapi detail produk', () => {
        const textName = screen.getByTestId('produk');
        expect(textName).toBeInTheDocument();  
        expect(textName).toHaveTextContent('Lengkapi Detail Produk');  
    }); 
});