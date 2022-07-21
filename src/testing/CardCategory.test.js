import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import CardCategory from '../components/CardCategory/CardCategory';
import '@testing-library/jest-dom';

describe('Test CardCategory Component', () => {  
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <CardCategory CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider> 
            </> 
        )
    });
    test('renders kategori', () => {
        const textKategori = screen.getByTestId('category');
        expect(textKategori).toBeInTheDocument();   
    });  
}); 