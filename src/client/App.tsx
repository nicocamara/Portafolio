/* eslint-disable react/no-children-prop */
import { ReactNode, useContext, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/organism/navbar';
import Home from './components/pages/Home';
import Auth from './components/pages/auth';
import EditPage from './components/pages/editPage';
import PublicPortfolio from './components/pages/profile/Index';
import './main.scss';
import { User } from './utils/Type';
import StateContext from './utils/stateContext';
import useIntersector from './utils/useIntersector';

type ProtectRoutePorps = { route: ReactNode; user?: User };

const ProtectRoute = ({ route: RouteToProtect, user }: ProtectRoutePorps) => {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return RouteToProtect;
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
            <Route path="/:userName" element={<PublicPortfolio />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/edit" element={<ProtectRoute user={user} route={<EditPage />} />} />
          </Routes>
        </div>
      </div>
      <div className="app__footer">
        <p></p>
      </div>
    </div>
  );
};

export default App;
