import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavbarHome from './components/navbar';
import Profile from './components/profile';
import RegisterForm from './components/registerForm';
import Auth from './components/auth';
import { useContext } from 'react';
import StateContext from './utils/stateContext';

type ProtectRoutePorps = { isAuthenticated: boolean; children: JSX.Element };

const ProtectRoute = ({ isAuthenticated, children }: ProtectRoutePorps) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

const App = () => {
  const { user } = useContext(StateContext);
  return (
    <div className="app">
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userName" element={<Profile />} />

        <Route path="/auth" element={<Auth />} />

        <Route
          path="/edit"
          element={
            <ProtectRoute isAuthenticated={!!user}>
              <RegisterForm />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
