// import { render, screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// import Login from '../pages/Login/Login';
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

// describe('Test Login Page', () => {
//     const initialState = { dataLogin: null }
//     const mockConfigStore = configureStore();
//     const mockStore = mockConfigStore(initialState);
//     const MOCK_FUNCTION = jest.fn();

//     beforeEach(() => {
//         //eslint-disable-next-line
//         render(
//             <>
//                 <Provider store={mockStore}>
//                     <Login CALL_FUNCTION={MOCK_FUNCTION} />
//                 </Provider>
//             </>
//         )
//     });
//     test('cek apakah ada text heading', () => {
//         const textHeading = screen.getByTestId('title');
//         expect(textHeading).toBeInTheDocument();
//     });
// })