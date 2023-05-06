import { useState } from "react";
import Contact from "../contact";
import Gilada from "../gilada";
import NavbarProfile from "../menu";
import Projects from "../projects";
import Resume from "../resume";
import "./styles.scss";

export type Route = "Resume" | "Projects" | "Contact";

const contents: Record<Route, () => JSX.Element> = {
  Resume: Resume,
  Projects: Projects,
  Contact: Contact,
};

const Profile = () => {
  const [content, setcontent] = useState<Route>("Contact");

  const changeRoute = (newRoute: Route) => {
    setcontent(newRoute);
  };

  return (
    <div className="profile">
      <NavbarProfile changeRoute={changeRoute} />
      <div className="profile__profile">
        <Gilada />
        <div className="app__content">{contents[content]()}</div>
      </div>
    </div>
  );
};

export default Profile;
