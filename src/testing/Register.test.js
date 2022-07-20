import Register from "../pages/Register/Register";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test Register Page', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <Register CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('cek apakah ada text register', () => {
        const textRegis = screen.getByTestId('regis');
        expect(textRegis).toBeInTheDocument();  
        expect(textRegis).toHaveTextContent('Daftar');  
    }); 
});