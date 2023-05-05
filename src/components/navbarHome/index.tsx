import { Link } from "react-router-dom";
import "./styles.scss";
const NavbarHome = () => {
  return (
    <div className="navHome">
      <div>Poner el logo o la marca</div>
      <div className="navHome__links">
        <Link to="/" className="navHome__links-a">
          Home
        </Link>
        <Link to="/profile" className="navHome__links-a">
          Profile
        </Link>
        <Link to="/profile" className="navHome__links-a">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavbarHome;
