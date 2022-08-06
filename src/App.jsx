import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const MainLayout = lazy(() => import('./layout/mainLayout'));
const AuthLayout = lazy(() => import('./layout/authLayout'));

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading....</div>}>
          <MainLayout />
        </Suspense>
      }
    >
      <Route index element={<Home />} />
    </Route>
    <Route
      path="/auth"
      element={
        <Suspense fallback={<div>Loading....</div>}>
          <AuthLayout />
        </Suspense>
      }
    >
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
);

export default App;
