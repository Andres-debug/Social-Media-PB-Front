import { useUserStore } from '../../context/useUserStore';
import { Navbar } from '../../layout/Navbar';
import { FiSmile } from 'react-icons/fi';

const Home = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-h-screen bg-sky-100 pb-24 md:pb-0">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            ¡Qué bueno verte, {user?.name}!
            <FiSmile className="h-5 w-5 text-sky-400" />
          </h2>
          <p className="text-gray-500 mt-1">
            Carrera: {user?.career} | Semestre: {user?.semester}
          </p>
        </div>
        <div className="mt-8 p-12 border-2 border-dashed border-gray-300 rounded-3xl text-center bg-white">
          <p className="text-gray-400">El feed de noticias aparecerá aquí.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;