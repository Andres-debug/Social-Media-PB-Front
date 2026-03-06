import { useUserStore } from '../../context/useUserStore';
import './Home.css';

function Home() {
  // Extraemos los datos y la función de login del Store
  const { user, isAuthenticated, login, logout } = useUserStore();

  const handleSimulateLogin = () => {
    // Simulamos un usuario con los datos de tu interfaz 'User'
    login({
      id: '123',
      name: 'Estudiante Prueba',
      email: 'prueba@universidad.edu',
      career: 'Ingeniería de Sistemas',
      semester: 5,
      bio: 'Apasionado por el desarrollo web.'
    });
  };

  return (
    <div className="home-container">
      <h1>UniversidadPBSocial</h1>
      
      {!isAuthenticated ? (
        <div className="auth-section">
          <p>Bienvenido. Por favor, identifica tu perfil académico.</p>
          <button onClick={handleSimulateLogin}>Simular Inicio de Sesión</button>
        </div>
      ) : (
        <div className="welcome-section">
          <h2>Hola, {user?.name}! 👋</h2>
          <p>Carrera: {user?.career} | Semestre: {user?.semester}</p>
          <button onClick={logout} style={{ backgroundColor: 'red' }}>Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default Home;