import classNames from 'classnames';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StateContext from '../../../utils/stateContext';
import useIsMobile from '../../../utils/useIsMobile';
import BurgerButton from '../../atoms/burgerButton';
import Logo from '../../atoms/logo';
import './styles.scss';

type NavbarProps = {
  isSticky: boolean;
};

const Navbar = ({ isSticky }: NavbarProps) => {
  const { user, handlers } = useContext(StateContext);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isPortfolioPage = location.pathname === `/${user?.userName}`;

  return (
    <div className={classNames('navbar', { 'navbar--sticky': isSticky })}>
      <Link to="/" className="navbar__logo">
        <Logo animate={isSticky} dark />
      </Link>
      <div className="navbar__burgerButton">{isMobile && <BurgerButton />}</div>
      {!isMobile && (
        <div className={classNames('navbar__links', { 'navbar__links--sticky': isSticky })}>
          {!isPortfolioPage && user && (
            <Link className="navbar__link" to={`/${user?.userName}`}>
              My Portfolio
            </Link>
          )}
          {user && (
            <Link className="navbar__link" to="/edit">
              Edit Portfolio
            </Link>
          )}
          {!user && (
            <Link className="navbar__link join" to="/auth">
              JOIN
            </Link>
          )}
          {user && (
            <Link onClick={handlers.logOut} className="navbar__link join" to="/auth">
              LOGOUT
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
