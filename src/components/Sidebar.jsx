import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SGCA</h2>
      <ul>
        <li><Link to="/dashboard">Comisiones</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
      <button className="logout-btn">Cerrar Sesión</button>
    </div>
  );
};

export default Sidebar;
