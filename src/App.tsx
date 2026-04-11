import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './context/useUserStore';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Home/Profile';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <Router>

      <ThemeToggle />

      <Routes>

        <Route 
          path="/" 
          element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} 
        />

        <Route 
          path="/registro" 
          element={!isAuthenticated ? <Register /> : <Navigate to="/home" />} 
        />

        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
        />

        <Route 
          path="/profile" 
          element={isAuthenticated ? <Profile /> : <Navigate to="/" />} 
        />

        <Route 
          path="*" 
          element={<Navigate to={isAuthenticated ? "/home" : "/"} />} 
        />

      </Routes>
    </Router>
  );
}

export default App;