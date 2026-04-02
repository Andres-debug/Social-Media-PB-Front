import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../context/useUserStore';
import { FiHome, FiSearch, FiBell, FiUser, FiSettings } from 'react-icons/fi';
import NoodLogo from '../assets/logo-nodd.png';

export const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleSettings = () => setIsSettingsOpen((current) => !current);

  return (
    <nav className="bg-sky-700 border-b sticky top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-12 md:h-16 relative">
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none md:hidden">
          <span className="text-lg font-bold uppercase tracking-widest text-white">NOOD</span>
          <img src={NoodLogo} alt="Nood logo" className="h-10 w-auto" />
        </div>

        <div className="relative z-10 flex items-center justify-between h-12 md:h-16 w-full">
          <div className="hidden md:flex items-center gap-6 flex-1">
            <img src={NoodLogo} alt="Logo" className="h-16 w-16 object-contain" />

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
            className="hidden md:inline-flex ml-auto rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/30"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-sky-600 bg-sky-700">
        <div className="mx-auto flex max-w-lg items-center justify-between px-2 py-1">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white"
            aria-label="Inicio"
          >
            <FiHome className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white"
            aria-label="Explorar"
          >
            <FiSearch className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white"
            aria-label="Notificaciones"
          >
            <FiBell className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white"
            aria-label="Perfil"
          >
            <FiUser className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={toggleSettings}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white"
            aria-label="Configuración"
            aria-expanded={isSettingsOpen}
          >
            <FiSettings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {isSettingsOpen && (
        <div className="fixed bottom-14 left-0 right-0 z-40 md:hidden px-4 pb-2">
          <div className="mx-auto max-w-md rounded-2xl border border-sky-600 bg-sky-700/95 p-3 shadow-xl">
            <button
              onClick={handleLogout}
              className="w-full rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/30"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};