import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed bottom-14 right-6 z-50 
        w-14 h-14 rounded-full shadow-lg 
        flex items-center justify-center 
        transition-all duration-300
        ${isDarkMode 
          ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
          : 'bg-sky-500 text-white hover:bg-sky-600'}
      `}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;