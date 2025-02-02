import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import CartPage from './views/CartPage';
import PizzaPage from './views/PizzaPage'; 
import NotFoundPage from './views/NotFoundPage';
import ProfilePage from './views/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizza/:id" element={<PizzaPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;


