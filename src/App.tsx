import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './context/useUserStore';

import Login from './pages/Home/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Home/Profile';

function App() {
  const user = useUserStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {}
        <Route 
          path="/home" 
          element={user ? <Home /> : <Navigate to="/" />} 
        />

        {}
        <Route 
          path="/profile" 
          element={user ? <Profile /> : <Navigate to="/" />} 
        />

        {}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;