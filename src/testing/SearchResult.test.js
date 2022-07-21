import SearchResult from '../pages/SearchResult/SearchResult';
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test SearchResult Page', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <SearchResult CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('cek apakah ada text diskon hingga', () => {
        const textDiskon = screen.getByTestId('diskon');
        expect(textDiskon).toBeInTheDocument();  
        expect(textDiskon).toHaveTextContent('Diskon Hingga');  
    }); 
});