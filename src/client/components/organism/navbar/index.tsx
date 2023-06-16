import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';
import Logo from '../../atoms/logo';

type NavbarProps = {
  isSticky: boolean;
};

const Navbar = ({ isSticky }: NavbarProps) => (
  <div className={classNames('navbar', { 'navbar--sticky': isSticky })}>
    <Link to="/" className="navbar__logo">
      <Logo animate={isSticky} dark />
    </Link>
    <div className={classNames('navbar__links', { 'navbar__links--sticky': isSticky })}>
      <Link className="navbar__link" to="/features">
        FEATURES
      </Link>
      <Link className="navbar__link" to="/maxisiempre">
        ABOUT
      </Link>
      <Link className="navbar__link" to="/edit">
        Edit Portfolio
      </Link>
      <Link className="navbar__link join" to="/auth">
        JOIN
      </Link>
    </div>
  </div>
);

export default Navbar;
