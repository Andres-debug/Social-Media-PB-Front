import { useUserStore } from '../context/useUserStore';
import { useNavigate } from 'react-router-dom';
import { Button } from '../layout/iu/Button';

export const Navbar = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-sky-900 border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-2xl font-black text-sky-300 p-4">NOOD</span>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-sky-50 hidden sm:block">
            Estudiante: {user?.name}
          </span>
          <Button onClick={handleLogout} className="text-black bg-sky-200">
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </nav>
  );
};