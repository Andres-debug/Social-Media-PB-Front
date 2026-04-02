import { useUserStore } from '../../context/useUserStore';
import { Navbar } from '../../layout/Navbar';
import NoddCard from "../../components/NoodCard";
import { mockData } from "../../utils/mockData";
import { FiSmile } from 'react-icons/fi';

const Home = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-h-screen bg-sky-100 pb-24 md:pb-0">
      
      {/* Navbar */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Bienvenida */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            ¡Qué bueno verte, {user?.name}!
            <FiSmile className="h-5 w-5 text-sky-400" />
          </h2>
          <p className="text-gray-500 mt-1">
            Carrera: {user?.career} | Semestre: {user?.semester}
          </p>
        </div>

        {/* Input tipo X */}
        <div className="mt-8 bg-white p-4 rounded-2xl shadow-md">
          <div className="flex gap-3">
            
            {/* Avatar */}
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />

            {/* Input + botón */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="¿Qué está pasando?"
                className="w-full p-2 outline-none text-gray-700 placeholder-gray-400"
              />

              <div className="flex justify-between items-center mt-3">
                <span className="text-sky-500 text-sm">
                  🌐 Público
                </span>

                <button className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-sky-700 transition">
                  Publicar
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Feed */}
        <div className="mt-8 space-y-4">
          {mockData.map((item) => (
            <NoddCard
              key={item.id}
              username={item.username}
              text={item.text}
              avatar={item.avatar}
            />
          ))}
        </div>

      </main>
    </div>
  );
};

export default Home;