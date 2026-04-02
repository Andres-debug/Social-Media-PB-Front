import { useNavigate } from 'react-router-dom';

// Importamos el logo
import logoPng from '../../assets/logo-nodd.png';

// Importamos los iconos
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

const Register = () => {
  const navigate = useNavigate();

  return (
    // Contenedor principal: pantalla completa, flexbox para dividir en dos
    <div className="min-h-screen flex bg-sky-50 font-sans text-slate-900">
      
      {/* LADO IZQUIERDO: Branding y Logo */}
      {/* Se oculta en móviles (`hidden`), se muestra en desktop (`lg:flex`) */}
      <div className="hidden lg:flex lg:w-1/2 bg-sky-50 flex-col justify-center items-center p-12 relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 text-center text-white">
          {/* Tu logo PNG */}
          <div className="flex justify-center mb-2">
            <img src={logoPng} alt="Nodd Logo" className="w-96 h-auto drop-shadow-2xl" />
          </div>
          <h2 className="text-6xl font-black text-sky-900 tracking-tighter mt-2">
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

            {/* LOGO VERSIÓN MÓVIL (Solo se ve en pantallas pequeñas) */}
            <div className="flex lg:hidden justify-center mb-1">
              <img src={logoPng} alt="Nodd Logo" className="w-32 h-auto drop-shadow-md" />
            </div>

            {/* OJO: Aquí le bajé un poquito el peso de la fuente para igualar tu mockup mobile */}
            <h1 className="text-4xl font-bold text-sky-800 mb-2 leading-tight">
              Conecta en tiempo real
            </h1>
            <p className="text-4xl font-bold text-sky-700">
              Empieza a Nodear
            </p>
          </div>

          {/* Botones de Registro con Terceros */}
          <div className="space-y-4">
            {/* Google */}
            <button className="flex w-full items-center justify-center gap-3 bg-white border border-slate-300 py-4 rounded-xl hover:bg-slate-50 transition shadow-sm">
              <FcGoogle className="text-2xl" />
              <span className="font-semibold text-slate-700">Continuar con Google</span>
            </button>
            {/* Apple */}
            <button className="flex w-full items-center justify-center gap-3 bg-black text-white py-4 rounded-xl hover:bg-slate-800 transition shadow-sm">
              <AiFillApple className="text-2xl" />
              <span className="font-semibold">Continuar con Apple</span>
            </button>
          </div>

          {/* Separador "O" */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-sky-200"></div>
            <span className="flex-shrink mx-4 text-sky-800 font-medium">o</span>
            <div className="flex-grow h-px bg-sky-200"></div>
          </div>

          {/* Botones de Acción Finales */}
          <div className="space-y-6">
            
            {/* Botón Crear Cuenta */}
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30">
              Crear cuenta
            </button>

            {/* Enlace para Iniciar Sesión */}
            <div className="text-center pt-2">
              <p className="text-sky-700 font-medium mb-4">
                ¿Ya tienes una cuenta?
              </p>
              
              {/* NOTA: Asegúrate de que la ruta '/login' o '/' coincida con la de tu router */}
              <button 
                onClick={() => navigate('/')} 
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30"
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