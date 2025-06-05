import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Reportes from './components/Reportes';
import Perfil from './components/Perfil';
import PrivateRoute from './components/PrivateRoute';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && (
          <Sidebar setIsAuthenticated={setIsAuthenticated} />
        )}

        <main className={`flex-1 p-8 bg-gray-100 ${isAuthenticated ? 'ml-64' : ''}`}>
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <LoginPage setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard setIsAuthenticated={setIsAuthenticated} />
                </PrivateRoute>
              }
            />
            <Route
              path="/reportes"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Reportes />
                </PrivateRoute>
              }
            />
            <Route
              path="/perfil"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Perfil />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
