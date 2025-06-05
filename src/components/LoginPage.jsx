import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoBrochazos from '../assets/images/Logo brochazos.png';
import LogoUABC from '../assets/images/logo uabc.jpg';

export default function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('docente');
  const [mode, setMode] = useState('login'); // 'login' o 'register'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Por favor, completa todos los campos');
      return;
    }
    // Simular autenticación
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="flex h-screen w-full">
      {/* Izquierda: Logo UABC centrado */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img
          src={LogoUABC}
          alt="Logo UABC"
          className="max-w-xs object-contain"
        />
      </div>

      {/* Derecha: Formulario */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
        <img src={LogoBrochazos} alt="Brochazos" className="h-16 mb-6" />

        <h1 className="text-2xl font-bold mb-2">
          {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </h1>
        <p className="text-gray-600 mb-6">Selecciona tu rol y completa los datos</p>

        {/* Selector de rol */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6 w-full max-w-md">
          {['docente', 'administrador'].map(role => (
            <button
              key={role}
              onClick={() => setUserType(role)}
              className={`flex-1 py-2 rounded-full font-medium transition last:ml-1
                ${userType === role ? 'bg-green-600 text-white' : 'text-gray-700'}`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label className="block text-gray-700 mb-1">Correo</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-green-600"
              placeholder="usuario@uabc.edu.mx"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-green-600"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            {mode === 'login' ? 'Entrar' : 'Registrar'}
          </button>

          <div className="text-center text-sm text-gray-600">
            {mode === 'login' ? (
              <>¿No tienes cuenta?{' '}
              <button onClick={() => { setMode('register'); setError(''); }} className="text-green-600 font-medium">
                Regístrate
              </button>
              </>
            ) : (
              <>¿Ya tienes cuenta?{' '}
              <button onClick={() => { setMode('login'); setError(''); }} className="text-green-600 font-medium">
                Inicia sesión
              </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}