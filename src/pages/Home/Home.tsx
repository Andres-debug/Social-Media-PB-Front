import { useUserStore } from '../../context/useUserStore';
import { Navbar } from '../../layout/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-h-screen bg-sky-100">
      
      {}
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {}
        <div className="bg-sky-200 p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            ¡Qué bueno verte, {user?.name || 'Usuario'}! 👋
          </h2>

          <p className="text-gray-500 mt-1">
            Carrera: {user?.career || 'N/A'} | Semestre: {user?.semester || 'N/A'}
          </p>

          {}
          <div className="mt-4">
            <Link 
              to="/Profile"
              className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-800 transition"
            >
              Ver mi perfil
            </Link>
          </div>
        </div>

        {}
        <div className="mt-8 p-12 border-2 border-dashed border-gray-300 rounded-3xl text-center">
          <p className="text-gray-400">
            El feed de noticias aparecerá aquí.
          </p>
        </div>

      </main>
    </div>
  );
};

export default Home;