import React, { useState } from 'react';
import '../styles/reportes.css';  // Ajusta la ruta según la estructura


// Datos simulados para reportes
const reportesData = [
  { id: 1, nombre: 'Visita industrial a fábrica de papel', estado: 'Pendiente', fecha: '28/08/2025' },
  { id: 2, nombre: 'Asistencia al concurso de robótica', estado: 'Aprobado', fecha: '06/11/2025' },
  { id: 3, nombre: 'Curso de Farmacovigilancia', estado: 'Rechazado', fecha: '13/06/2024' },
  { id: 4, nombre: 'Viaje de estudios', estado: 'Devuelto', fecha: '21/11/2024' },
];

const Reportes = () => {
  // Estado para los reportes y el filtro
  const [reportes, setReportes] = useState(reportesData);
  const [filtro, setFiltro] = useState('Todos');

  // Filtrar los reportes por estado
  const filtrarReportes = (estado) => {
    if (estado === 'Todos') return reportesData;
    return reportesData.filter((reporte) => reporte.estado === estado);
  };

  // Manejar cambio de filtro
  const manejarFiltro = (evento) => {
    const estado = evento.target.value;
    setFiltro(estado);
    setReportes(filtrarReportes(estado));
  };

  return (
    <main className="container">
      <div className="grid">
        <section>
          <hgroup>
            <h2>Mis Reportes</h2>
            <h3>Consulta y crea tus reportes de comisiones académicas</h3>
          </hgroup>
          
          <div className="filter-section">
            <label htmlFor="estado">Filtrar por estado: </label>
            <select id="estado" value={filtro} onChange={manejarFiltro}>
              <option value="Todos">Todos</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Aprobado">Aprobado</option>
              <option value="Rechazado">Rechazado</option>
              <option value="Devuelto">Devuelto</option>
            </select>
          </div>

          <div className="report-list">
            <h3>Lista de Reportes</h3>
            <table>
              <thead>
                <tr>
                  <th>Nombre del Reporte</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {reportes.map((reporte) => (
                  <tr key={reporte.id}>
                    <td>{reporte.nombre}</td>
                    <td>{reporte.estado}</td>
                    <td>{reporte.fecha}</td>
                    <td>
                      <button>Ver Detalles</button>
                      <button>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="create-report">
            <h3>Crear Nuevo Reporte</h3>
            <form>
              <div>
                <label htmlFor="nombre">Nombre del Reporte:</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>
              <div>
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" id="fecha" name="fecha" required />
              </div>
              <div>
                <label htmlFor="estado">Estado:</label>
                <select id="estado" name="estado" required>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Aprobado">Aprobado</option>
                  <option value="Rechazado">Rechazado</option>
                  <option value="Devuelto">Devuelto</option>
                </select>
              </div>
              <button type="submit">Crear Reporte</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Reportes;
