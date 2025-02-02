import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center mt-5">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, no pudimos encontrar lo que buscas.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
