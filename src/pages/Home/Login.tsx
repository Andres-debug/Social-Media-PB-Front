import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../context/useUserStore';

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
    <div className="min-h-screen flex items-center justify-center bg-sky-900 text-white p-4">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-4xl font-extrabold text-sky-300 p-4 mb-6 text-center">NODD</h2>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Correo u.edu.co"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none text-black"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none text-black"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button className="w-full bg-sky-600 text-white py-3 rounded-lg font-bold hover:bg-sky-900 transition">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;