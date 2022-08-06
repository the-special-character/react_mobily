import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/authLayout';
import MainLayout from './layout/mainLayout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="/auth" element={<AuthLayout />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
);

export default App;
