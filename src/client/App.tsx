import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar';
import Profile from './components/profile';
import './main.scss';
import useIntersector from './utils/useIntersector';

const App = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const isIntersected = useIntersector(bodyRef);

  return (
    <div className="app">
      <Navbar isSticky={isIntersected} />
      <div className="app__body">
        <div ref={bodyRef}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="app__footer">
        <p>Footer </p>
      </div>
    </div>
  );
};

export default App;
