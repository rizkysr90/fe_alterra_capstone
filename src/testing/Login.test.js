import { render, screen } from '@testing-library/react';
import Login from '../pages/Login/Login';
import { Provider } from "react-redux";
import { store } from '../config/redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test Login Page', () => {
    const MOCK_FUNCTION = jest.fn();

    beforeEach(() => {
        //eslint-disable-next-line
        render(
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <Login CALL_FUNCTION={MOCK_FUNCTION} />
                    </BrowserRouter>
                </Provider>
            </>
        )
    });
    test('cek apakah ada text heading', () => {
        const textHeading = screen.getByTestId('title');
        expect(textHeading).toBeInTheDocument();
    });
})