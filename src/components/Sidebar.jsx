import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login', {
      state: { message: 'Sesión cerrada exitosamente' }
    });
  };

  return (
    <div className="sidebar">
      <h2>SGCA</h2>
      <ul>
        <li><Link to="/dashboard">Comisiones</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Sidebar;
