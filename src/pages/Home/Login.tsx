import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../context/useUserStore';

import logoPng from '../../assets/logo-nodd.png';

import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login({
        id: '1',
        name: email.split('@')[0], 
        email: email,
        career: 'Ingeniería de Sistemas',
        semester: 5
      });
      navigate('/home');
    }
  };

  return (
    // Contenedor principal: pantalla completa, flexbox para dividir en dos
    <div className="min-h-screen flex bg-sky-900 font-sans text-slate-900">
      
      {/* LADO IZQUIERDO: Branding y Logo */}
      {/* Se oculta en móviles (`hidden`), se muestra en desktop (`lg:flex`) */}
      <div className="hidden lg:flex lg:w-1/2 bg-sky-900 flex-col justify-center items-center p-12 relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 text-center text-white">
          {/* Tu logo PNG */}
          <div className="flex justify-center mb-8">
            <img src={logoPng} alt="Nodd Logo" className="w-72 h-auto drop-shadow-2xl" />
          </div>
          <h2 className="text-6xl font-black text-sky-950 tracking-tighter mt-2">
            NODD
          </h2>
        </div>
      </div>

      {/* LADO DERECHO: Tarjeta de Formulario */}
      {/* Ocupa todo el ancho en móvil, la mitad en desktop */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        
        {/* La tarjeta blanca */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg">
          
          {/* Títulos y Subtítulos */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-sky-500 mb-2 leading-tight">
              Conecta en tiempo real
            </h1>
            <p className="text-2xl font-bold text-slate-800">
              Empieza a Nodear
            </p>
          </div>

          {/* Formulario de Login */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input de Correo */}
            <div>
              <input 
                type="email" 
                placeholder="Correo electrónico"
                className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 outline-none text-black placeholder:text-slate-400"
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            {/* Input de Contraseña */}
            <div>
              <input 
                type="password" 
                placeholder="Contraseña"
                className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 outline-none text-black placeholder:text-slate-400"
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            {/* Botón Ingresar */}
            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30">
              Ingresar
            </button>
          </form>

          {/* Separador "O" */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-slate-300"></div>
            <span className="flex-shrink mx-4 text-slate-500 font-medium">O</span>
            <div className="flex-grow h-px bg-slate-300"></div>
          </div>

          {/* Botones de Redes Sociales */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google */}
            <button className="flex items-center justify-center gap-3 border border-slate-300 py-3 rounded-full hover:bg-slate-100 transition">
              <FcGoogle className="text-2xl" />
              <span className="font-semibold text-slate-700">Google</span>
            </button>
            {/* Apple */}
            <button className="flex items-center justify-center gap-3 bg-black text-white py-3 rounded-full hover:bg-slate-800 transition">
              <AiFillApple className="text-2xl" />
              <span className="font-semibold">Apple</span>
            </button>
          </div>

          {/* Enlace para Registrarse */}
          <div className="mt-10 text-center">
            <p className="text-slate-600">
              ¿No tienes una cuenta?{' '}
              <button onClick={() => navigate('/registro')} className="text-sky-500 hover:text-sky-600 font-semibold transition">
                Regístrate aquí
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;