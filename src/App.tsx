import { useState } from "react";
import "./App.scss";
import Profile from "./components/profile";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

export type Route = "profile" | "resume" | "projects" | "contact";

const routes: Record<Route, () => JSX.Element> = {
  profile: Profile,
  resume: Resume,
  projects: Projects,
  contact: Contact,
};

const App = () => {
  const [route, setRoute] = useState<Route>("profile");

  const changeRoute = (newRoute: Route) => {
    setRoute(newRoute);
  };

  return (
    <div className="app">
      <Navbar changeRoute={changeRoute} />
      <div className="app__profile">gilada del medio</div>
      <div className="app__content">{routes[route]()}</div>
    </div>
  );
};

export default App;
