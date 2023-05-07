import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavbarHome from './components/navbar';
import Profile from './components/profile';

const App = () => (
  <div className="app">
    <NavbarHome />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} /> {/* <Route path="/register" element={<register />} /> */}
      {/* <Route path="/error" element={<Error />} /> */}
    </Routes>
  </div>
);

export default App;
