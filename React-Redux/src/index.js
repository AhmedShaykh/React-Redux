import React from 'react';
import ReactDOM from 'react-dom/client.js';
import App from './Components/App.jsx';
import { Provider } from 'react-redux';
import store from './Components/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);