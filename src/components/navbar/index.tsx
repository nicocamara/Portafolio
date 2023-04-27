import { Route } from "../../App";
import "./styles.scss";

type NavbarProps = {
  changeRoute: (newRoute: Route) => void;
};
const routes: Route[] = ["profile", "resume", "projects", "contact"];

const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar">
      {routes.map((r) => (
        <div key={r} onClick={() => props.changeRoute(r)}>
          {r}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
