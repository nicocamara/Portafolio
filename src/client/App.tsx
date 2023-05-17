/* eslint-disable react/no-children-prop */
import { useContext, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/auth';
import Navbar from './components/navbar';
import Portfolio from './components/profile';
import './main.scss';
import { User } from './utils/Type';
import StateContext from './utils/stateContext';
import useIntersector from './utils/useIntersector';
import EditPage from './components/edit';

type ProtectRoutePorps = { route: () => JSX.Element; user?: User };

const ProtectRoute = ({ route: RouteToProtect, user }: ProtectRoutePorps) => {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <RouteToProtect />;
};

const App = () => {
  const { user } = useContext(StateContext);
  const bodyRef = useRef<HTMLDivElement>(null);
  const isIntersected = useIntersector(bodyRef);

  return (
    <div className="app">
      <Navbar isSticky={isIntersected} />
      <div className="app__container">
        <div className="app__body">
          <div ref={bodyRef}></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:userName" element={<Portfolio />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/edit" element={<ProtectRoute user={user} route={() => <EditPage />} />} />
          </Routes>
        </div>
      </div>
      <div className="app__footer">
        <p>Footer </p>
      </div>
    </div>
  );
};

export default App;

// MOBILE

// NO LOGUEADO
// - home-logo
// - my portfolio
// - edit -> redirect to /auth
// - profile -> redirect to /auth

// LOGUEADO
// - home-logo
// - my portfolio
// - edit
// - profile
