import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { total } = useCart();
  const formattedTotal = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  // Simulación de autenticación (puedes cambiar esto por un estado real de autenticación)
  const isAuthenticated = false; // Esto puede ser true si el usuario está logueado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* LOGO */}
        <Link to="/" className="navbar-brand">🍕 Pizzería Mamma Mia!</Link>

        {/* BOTÓN PARA MÓVILES */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">🏠 Home</Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">📝 Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">🔑 Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">👤 Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2">🚪 Logout</button>
                </li>
              </>
            )}
          </ul>

          {/* CARRITO */}
          <Link to="/cart" className="btn btn-outline-info text-info border-info">
            🛒 Total: {formattedTotal}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

