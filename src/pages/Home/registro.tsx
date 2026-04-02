import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../context/useUserStore';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [career, setCareer] = useState('');
  const [semester, setSemester] = useState('');
  const [password, setPassword] = useState('');

  const login = useUserStore((state) => state.login); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password && career && semester) {
      login({
        id: Date.now().toString(),
        name,
        email,
        career,
        semester: Number(semester)
      });

      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-900 text-white p-4">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-4xl font-extrabold text-sky-300 p-4 mb-6 text-center">
          Registro
        </h2>

        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Nombre"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setName(e.target.value)}
            required 
          />

          <input 
            type="email" 
            placeholder="Correo u.edu.co"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <input 
            type="text" 
            placeholder="Carrera"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setCareer(e.target.value)}
            required 
          />

          <input 
            type="number" 
            placeholder="Semestre"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setSemester(e.target.value)}
            required 
          />

          <input 
            type="password" 
            placeholder="Contraseña"
            className="w-full p-3 border rounded-lg text-black"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button className="w-full bg-sky-600 text-white py-3 rounded-lg font-bold hover:bg-sky-900 transition">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;