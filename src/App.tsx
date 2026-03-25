import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './context/useUserStore';
import Login from './pages/Home/Login';
import Home from './pages/Home/Home';
import Register from './pages/Home/registro'; 

function App() {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Login />} />

        {}
        <Route path="/register" element={<Register />} />

        {}
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;