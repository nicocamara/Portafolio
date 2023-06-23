import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';
import Logo from '../../atoms/logo';
import { useContext } from 'react';
import StateContext from '../../../utils/stateContext';

type NavbarProps = {
  isSticky: boolean;
};

const Navbar = ({ isSticky }: NavbarProps) => {
  const { user, handlers } = useContext(StateContext);
  return (
    <div className={classNames('navbar', { 'navbar--sticky': isSticky })}>
      <Link to="/" className="navbar__logo">
        <Logo animate={isSticky} dark />
      </Link>
      <div className={classNames('navbar__links', { 'navbar__links--sticky': isSticky })}>
        <Link className="navbar__link" to="/features">
          FEATURES
        </Link>
        <Link className="navbar__link" to={`/${user?.userName}`}>
          ABOUT
        </Link>
        <Link className="navbar__link" to="/edit">
          Edit Portfolio
        </Link>

        <Link className="navbar__link join" to="/auth">
          JOIN
        </Link>
        {user && (
          <Link onClick={handlers.logOut} className="navbar__link join" to="/auth">
            LOGOUT
          </Link>
        )}
        {/* <button onClick={handlers.logOut}>LOGOUT</button> */}
      </div>
    </div>
  );
};

export default Navbar;
