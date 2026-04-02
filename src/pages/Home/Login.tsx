import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../context/useUserStore';

import logoPng from '../../assets/logo-nodd.png';

import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState(''); // solo usuario
  const [password, setPassword] = useState('');
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullEmail = `${email}@pascualbravo.edu.co`;

    if (email && password) {
      login({
        id: '1',
        name: email,
        email: fullEmail,
        career: 'Ingeniería de Sistemas',
        semester: 5
      });
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex bg-sky-50 font-sans text-slate-900">
      
      {/* LADO IZQUIERDO */}
      <div className="hidden lg:flex lg:w-1/2 bg-sky-50 flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center mb-2">
            <img src={logoPng} alt="Nodd Logo" className="w-96 h-auto drop-shadow-2xl" />
          </div>
          <h2 className="text-6xl font-black text-sky-900 tracking-tighter mt-2">
            NODD
          </h2>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg">
          
          <div className="text-center mb-10">
            <div className="flex lg:hidden justify-center mb-1">
              <img src={logoPng} alt="Nodd Logo" className="w-32 h-auto drop-shadow-md" />
            </div>

            <h1 className="text-4xl font-extrabold text-sky-800 mb-2 leading-tight">
              Conecta en tiempo real
            </h1>
            <p className="text-4xl font-extrabold text-sky-700">
              Empieza a Nodear
            </p>
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* INPUT CORREO MODIFICADO */}
            <div className="flex">
              <input 
                type="text"
                placeholder="usuario"
                className="w-full p-4 border border-slate-300 rounded-l-xl focus:ring-2 focus:ring-sky-400 outline-none text-black"
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <span className="flex items-center px-3 bg-slate-100 border border-l-0 border-slate-300 rounded-r-xl text-slate-600 text-sm">
                @pascualbravo.edu.co
              </span>
            </div>
            
            {/* PASSWORD */}
            <div>
              <input 
                type="password" 
                placeholder="Contraseña"
                className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-400 outline-none text-black placeholder:text-slate-400"
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            {/* BOTÓN */}
            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30">
              Ingresar
            </button>
          </form>

          {/* SEPARADOR */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-slate-300"></div>
            <span className="flex-shrink mx-4 text-slate-500 font-medium">O</span>
            <div className="flex-grow h-px bg-slate-300"></div>
          </div>

          {/* REDES */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 border border-slate-300 py-3 rounded-full hover:bg-slate-100 transition">
              <FcGoogle className="text-2xl" />
              <span className="font-semibold text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-black text-white py-3 rounded-full hover:bg-slate-800 transition">
              <AiFillApple className="text-2xl" />
              <span className="font-semibold">Apple</span>
            </button>
          </div>

          {/* REGISTRO */}
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