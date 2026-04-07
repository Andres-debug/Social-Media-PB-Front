/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 🔥 CLAVE PARA dark:
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      
      // 🌈 PALETA SKY PERSONALIZADA
      colors: {
        sky: {
          50:  '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0284c7',
          800: '#0369a1',
          900: '#075985',
          950: '#082f49',
        },

        // 🔥 COLORES DARK MÁS PRO (opcional pero recomendado)
        dark: {
          bg: '#0f172a',     // fondo principal
          card: '#1e293b',   // cards
          border: '#334155', // bordes
          text: '#e2e8f0',   // texto
        }
      },

      // 🔤 TIPOGRAFÍA
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      // 🌟 SOMBRAS MÁS PRO
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.05)',
      },

      // 🎬 TRANSICIONES SUAVES
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
      }

    },
  },

  plugins: [],
}