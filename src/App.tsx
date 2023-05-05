import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import NavbarHome from "./components/navbar";
import Home from "./components/Home";

const App = () => {
  console.log("aca rey");

  return (
    <div className="app">
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />{" "}
        {/* <Route path="/register" element={<register />} /> */}
        {/* <Route path="/error" element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
