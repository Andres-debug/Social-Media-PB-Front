import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12
                       dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
 
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-sky-700 dark:text-sky-400">
              Institución Universitaria Pascual Bravo
            </h3>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              Acreditados en Alta Calidad
            </p>
          </div>
  
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a 
              href="https://www.pascualbravo.edu.co/" 
              target="_blank"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              Página Web
            </a>
            <a 
              href="https://campus.pascualbravovirtual.edu.co/logincampus/login.html?errorcode=4" 
              target="_blank"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              Campus Virtual
            </a>
            <a 
              href="https://sicau.pascualbravo.edu.co/SICAU/Account/Login?returnUrl=%2FSICAU%2FEstudiante%2FGeneral" 
              target="_blank"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              SICAU
            </a>
          </div>
 
          <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-300">
            <a 
              href="https://www.facebook.com/iupascualbravo" 
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/iupascualbravo" 
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://twitter.com/iupascualbravo" 
              target="_blank"
              className="hover:text-sky-500 transition"
            >
              <FaTwitter />
            </a>
          </div>

        </div>
  
        <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} NODD
        </div>

      </div>
    </footer>
  );
};