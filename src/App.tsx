import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './context/useUserStore';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register'; // <-- Agregamos esta línea
import Home from './pages/Home/Home';

function App() {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} /> {/* <-- Y agregamos la ruta aquí */}
        
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;