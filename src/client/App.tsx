import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavbarHome from './components/navbar';
import Profile from './components/profile';
import { useEffect } from 'react';
import RegisterForm from './components/registerForm';

const App = () => {
  const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
  const API_HOST = IS_DEVELOPMENT ? 'http://localhost:4420' : 'https://my-portfolio-server-fzmo.onrender.com';

  useEffect(() => {
    (async () => {
      const responseFromServer = await fetch(API_HOST + '/');
      console.log(responseFromServer);
    })();
  }, []);

  return (
    <div className="app">
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/error" element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
