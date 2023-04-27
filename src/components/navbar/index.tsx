import { Route } from "../../App";
import "./styles.scss";

type NavbarProps = {
  changeRoute: (newRoute: Route) => void;
};
const routes: Route[] = ["Profile", "Resume", "Projects", "Contact"];

const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar">
      {routes.map((r) => (
        <div
          className="navbar__routes"
          key={r}
          onClick={() => props.changeRoute(r)}
        >
          {r}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
