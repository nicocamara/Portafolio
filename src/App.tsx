import { useState } from "react";
import "./App.scss";
import Profile from "./components/profile";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Gilada from "./components/gilada";

export type Route = "Profile" | "Resume" | "Projects" | "Contact";

const routes: Record<Route, () => JSX.Element> = {
  Profile: Profile,
  Resume: Resume,
  Projects: Projects,
  Contact: Contact,
};

const App = () => {
  const [route, setRoute] = useState<Route>("Profile");

  const changeRoute = (newRoute: Route) => {
    setRoute(newRoute);
  };

  return (
    <div className="app">
      <Navbar changeRoute={changeRoute} />
      <div className="app__profile">
        <Gilada />
      </div>
      <div className="app__content">{routes[route]()}</div>
    </div>
  );
};

export default App;
