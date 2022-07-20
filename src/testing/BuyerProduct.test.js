import BuyerProduct from "../pages/BuyerProduct/BuyerProduct";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test BuyerProduct Page', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <BuyerProduct CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('cek apakah ada text deskripsi', () => {
        const textDesc = screen.getByTestId('buyer');
        expect(textDesc).toBeInTheDocument();  
        expect(textDesc).toHaveTextContent('Deskripsi');  
    }); 
});