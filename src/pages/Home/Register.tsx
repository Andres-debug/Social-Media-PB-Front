import { useNavigate } from 'react-router-dom';

import logoPng from '../../assets/logo-nodd.png';

import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-sky-50 text-slate-900 
                    dark:bg-gray-900 dark:text-white font-sans">
      
      {/* LADO IZQUIERDO */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 relative overflow-hidden
                      bg-sky-50 dark:bg-gray-900">
        
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-2">
            <img src={logoPng} alt="Nodd Logo" className="w-96 h-auto drop-shadow-2xl" />
          </div>
          <h2 className="text-6xl font-black text-sky-900 dark:text-sky-400 tracking-tighter mt-2">
            NODD
          </h2>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg
                        dark:bg-gray-800 transition-colors">
          
          {/* HEADER */}
          <div className="text-center mb-10">
            
            <div className="flex lg:hidden justify-center mb-1">
              <img src={logoPng} alt="Nodd Logo" className="w-32 h-auto drop-shadow-md" />
            </div>

            <h1 className="text-4xl font-bold text-sky-800 dark:text-sky-400 mb-2">
              Conecta en tiempo real
            </h1>
            <p className="text-4xl font-bold text-sky-700 dark:text-sky-300">
              Empieza a Nodear
            </p>
          </div>

          {/* BOTONES GOOGLE / APPLE */}
          <div className="space-y-4">
            
            <button className="flex w-full items-center justify-center gap-3 border border-slate-300 py-4 rounded-xl 
                               hover:bg-slate-50 transition shadow-sm
                               dark:border-gray-600 dark:hover:bg-gray-700">
              <FcGoogle className="text-2xl" />
              <span className="font-semibold text-slate-700 dark:text-white">
                Continuar con Google
              </span>
            </button>

            <button className="flex w-full items-center justify-center gap-3 bg-black text-white py-4 rounded-xl 
                               hover:bg-slate-800 transition shadow-sm">
              <AiFillApple className="text-2xl" />
              <span className="font-semibold">
                Continuar con Apple
              </span>
            </button>
          </div>

          {/* SEPARADOR */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-sky-200 dark:bg-gray-600"></div>
            <span className="mx-4 text-sky-800 dark:text-gray-400 font-medium">o</span>
            <div className="flex-grow h-px bg-sky-200 dark:bg-gray-600"></div>
          </div>

          {/* BOTONES FINALES */}
          <div className="space-y-6">
            
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold 
                               transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30">
              Crear cuenta
            </button>

            <div className="text-center pt-2">
              <p className="text-sky-700 dark:text-gray-400 font-medium mb-4">
                ¿Ya tienes una cuenta?
              </p>
              
              <button 
                onClick={() => navigate('/')} 
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold 
                           transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30"
              >
                Iniciar sesión
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;