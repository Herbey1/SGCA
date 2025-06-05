import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Asegúrate de importar Sidebar

export default function Dashboard({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Pendientes');
  const tabs = ['Pendientes', 'Aprobadas', 'Rechazadas', 'Devueltas'];

  // Datos de ejemplo
  const dummy = {
    Pendientes: [
      { id: 1, docente: 'Juana Pérez', fecha: '2025-05-20', tipo: 'Con Congreso' },
    ],
    Aprobadas: [
      { id: 2, docente: 'Luis Gómez', fecha: '2025-04-10', tipo: 'Sin Congreso' },
    ],
    Rechazadas: [
      { id: 3, docente: 'María López', fecha: '2025-03-15', tipo: 'Estadía' },
    ],
    Devueltas: [
      { id: 4, docente: 'Carlos Ruiz', fecha: '2025-05-01', tipo: 'Con Congreso' },
    ],
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-8 bg-gray-100 overflow-auto ml-64"> {/* Ajuste para no sobreponer con el Sidebar */}
        <h1 className="text-3xl font-semibold mb-6">Gestión de Comisiones</h1>

        {/* Pestañas */}
        <div className="mb-6 border-b border-gray-300">
          <ul role="tablist" className="flex space-x-4">
            {tabs.map(tab => (
              <li key={tab}>
                <button
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 font-medium transition
                    ${activeTab === tab
                      ? 'border-b-2 border-green-600 text-green-600'
                      : 'text-gray-600 hover:text-green-600'}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabla de datos */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-700 uppercase text-sm">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Docente</th>
                <th className="px-6 py-3">Fecha Solicitud</th>
                <th className="px-6 py-3">Tipo</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {dummy[activeTab].map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.docente}</td>
                  <td className="px-6 py-4">{item.fecha}</td>
                  <td className="px-6 py-4">{item.tipo}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button className="text-green-600 hover:underline">Ver</button>
                    <button className="text-red-600 hover:underline">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
