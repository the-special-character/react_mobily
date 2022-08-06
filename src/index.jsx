import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { AuthProvider } from './context/authContext';
import { ThemeProvider } from './context/themeContext';
import './main.css';
import store from './store';

const domContainer = document.getElementById('root');

const root = ReactDOM.createRoot(domContainer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
