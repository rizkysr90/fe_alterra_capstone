import Category from "../components/Category/Category";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test Category Component', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <Category CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('renders telusuri kategori', () => {
        const textCategory = screen.getByTestId('kategori-value');
        expect(textCategory).toBeInTheDocument();  
        expect(textCategory).toHaveTextContent('Telusuri Kategori');  
    }); 
}); 