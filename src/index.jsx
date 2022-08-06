import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';

const domContainer = document.getElementById('root');

const root = ReactDOM.createRoot(domContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
