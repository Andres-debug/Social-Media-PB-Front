import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../context/useUserStore';

import logoPng from '../../assets/logo-nodd.png';

import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

const Register = () => {
  const navigate = useNavigate();
  const register = useUserStore((state) => state.register);
  const isLoading = useUserStore((state) => state.isLoading);
  const error = useUserStore((state) => state.error);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [gender, setGender] = useState('Masculino');
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register({
        email,
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        phone,
        role: 'user',
        birth_date: birthDate,
        receive_notifications: receiveNotifications,
        bio,
        avatar_url: avatarUrl,
        gender,
      });

      navigate('/');
    } catch {
      // El error ya queda en state.error para mostrarlo en el formulario
    }
  };

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

          {/* FORMULARIO REGISTRO */}
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                         focus:ring-2 focus:ring-sky-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />

            <input
              type="email"
              placeholder="Correo institucional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                         focus:ring-2 focus:ring-sky-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                         focus:ring-2 focus:ring-sky-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                           focus:ring-2 focus:ring-sky-400
                           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />

              <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                           focus:ring-2 focus:ring-sky-400
                           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                           focus:ring-2 focus:ring-sky-400
                           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />

              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black
                           focus:ring-2 focus:ring-sky-400
                           dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black
                         focus:ring-2 focus:ring-sky-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>

            <input
              type="url"
              placeholder="URL de avatar (opcional)"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                         focus:ring-2 focus:ring-sky-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />

            <textarea
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-xl outline-none text-black placeholder:text-slate-400
                         focus:ring-2 focus:ring-sky-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={3}
            />

            <label className="flex items-center gap-2 text-sky-700 dark:text-gray-300 text-sm">
              <input
                type="checkbox"
                checked={receiveNotifications}
                onChange={(e) => setReceiveNotifications(e.target.checked)}
                className="h-4 w-4"
              />
              Recibir notificaciones
            </label>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold 
                         transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-sky-500/30"
            >
              {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
            </button>
          </form>

          <div className="text-center pt-6">
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
  );
};

export default Register;