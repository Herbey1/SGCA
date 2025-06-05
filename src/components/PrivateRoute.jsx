import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Si no está autenticado, redirige al Login
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, permite acceder a la ruta protegida
  return children;
};

export default PrivateRoute;
