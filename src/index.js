import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteApp from './routes';
import { Provider } from 'react-redux';
import { store, persistor } from './config/redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouteApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);