import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Todo from './Todo';
import './main.css';

const domContainer = document.getElementById('root');

const root = ReactDOM.createRoot(domContainer);

root.render(<Todo />);
