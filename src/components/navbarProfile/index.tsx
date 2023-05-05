import { Route } from "../profile";
import { getAssetUrl } from "../../utils";
import "./styles.scss";

type NavbarProps = {
  changeRoute: (newRoute: Route) => void;
};
const routes: Route[] = ["Resume", "Projects", "Contact"];

const NavbarProfile = (props: NavbarProps) => {
  return (
    <div className="navbar">
      {routes.map((r) => (
        <div
          className="navbar__routes"
          key={r}
          onClick={() => props.changeRoute(r)}
        >
          <img className="navbar__icons" src={getAssetUrl(`${r}.svg`)} />
          {r}
        </div>
      ))}
    </div>
  );
};

export default NavbarProfile;
