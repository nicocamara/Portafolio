import { Link } from 'react-router-dom';
import './styles.scss';
const NavbarHome = () => (
  <div className="navHome">
    <div>Poner el logo o la marca</div>
    <div className="navHome__links">
      <Link to="/" className="navHome__links-a">
        Home
      </Link>
      <Link to="/profile" className="navHome__links-a">
        Profile
      </Link>
      <Link to="/register" className="navHome__links-a">
        Register
      </Link>
      <Link to="/login" className="navHome__links-a">
        login
      </Link>
    </div>
  </div>
);

export default NavbarHome;
