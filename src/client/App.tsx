import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavbarHome from './components/navbar';
import Profile from './components/profile';
import { useEffect } from 'react';

const App = () => {
  const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
  const API_HOST = IS_DEVELOPMENT ? 'http://localhost:4420' : 'https://my-portfolio-server-fzmo.onrender.com';

  useEffect(() => {
    (async () => {
      const responseFromServer = await fetch(API_HOST + '/');
      console.log(responseFromServer);
      console.log('IS_DEVELOPMENT', IS_DEVELOPMENT);
    })();
  }, []);

  return (
    <div className="app">
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} /> {/* <Route path="/register" element={<register />} /> */}
        {/* <Route path="/error" element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
