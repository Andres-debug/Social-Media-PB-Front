import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../context/useUserStore';
import { FiHome, FiSearch, FiBell, FiUser, FiSettings, FiMenu, FiX } from 'react-icons/fi';
import NoodLogo from '../assets/Nood_Logo.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <nav className="bg-sky-700 border-b sticky top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-12 md:h-16 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden">
          <img src={NoodLogo} alt="Nood logo" className="h-8 w-auto" />
        </div>

        <div className="relative z-10 flex items-center justify-between h-12 md:h-16">
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full p-1 text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <img src={NoodLogo} alt="Logo" className="h-10 w-10 object-contain" />

            <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-2">
              <FiHome className="h-4 w-4" />
              <span>Inicio</span>
            </button>
            <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-2">
              <FiSearch className="h-4 w-4" />
              <span>Explorar</span>
            </button>
            <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-2">
              <FiBell className="h-4 w-4" />
              <span>Notificaciones</span>
            </button>
            <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-2">
              <FiUser className="h-4 w-4" />
              <span>Perfil</span>
            </button>
            <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-2">
              <FiSettings className="h-4 w-4" />
              <span>Configuración</span>
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="hidden md:inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/30"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-sky-600 bg-sky-700 px-3 pb-3">
          <div className="flex flex-col gap-2 pt-2">
            <button className="w-full rounded-2xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-3">
              <FiHome className="h-4 w-4" />
              <span>Inicio</span>
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-3">
              <FiSearch className="h-4 w-4" />
              <span>Explorar</span>
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-3">
              <FiBell className="h-4 w-4" />
              <span>Notificaciones</span>
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-3">
              <FiUser className="h-4 w-4" />
              <span>Perfil</span>
            </button>
            <button className="w-full rounded-2xl px-3 py-2 text-left text-sm font-medium text-white hover:bg-sky-500/80 flex items-center gap-3">
              <FiSettings className="h-4 w-4" />
              <span>Configuración</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full rounded-2xl bg-white/20 px-3 py-2 text-sm font-semibold text-white hover:bg-white/30"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};