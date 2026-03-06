import { useUserStore } from '../../context/useUserStore';
import './Home.css';

function Home() {
  const { user, isAuthenticated, login, logout } = useUserStore();

  const handleSimulateLogin = () => {
    login({
      id: '123',
      name: 'Estudiante Prueba',
      email: 'prueba@pascualbravo.edu.co',
      career: 'Ingeniería de Sistemas',
      semester: 5,
      bio: 'Apasionado por el desarrollo web.'
    });
  };

  return (
    <div className="home-container">
      <h1 className='text-3xl font-bold text-primary font-primary'>SocialMediaPb</h1>
      
      {!isAuthenticated ? (
        <div className="auth-section">
          <p className='text-3xl font-bold text-secundario font-primary'>IniciaSesion.</p>
          <button onClick={handleSimulateLogin} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Simular Inicio de Sesión</button>
        </div>
      ) : (
        <div className="welcome-section">
          <h2>Hola, {user?.name}! 👋</h2>
          <p>Carrera: {user?.career} | Semestre: {user?.semester}</p>
          <button onClick={logout} style={{ backgroundColor: 'red' }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default Home;