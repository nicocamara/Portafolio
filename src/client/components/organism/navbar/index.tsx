import classNames from 'classnames';
import './styles.scss';
import Logo from '../../atoms/logo';
import { useContext, useState } from 'react';
import StateContext from '../../../utils/stateContext';
import BurgerButton from '../../atoms/burgerButton';
import useIsMobile from '../../../utils/useIsMobile';
import { Link } from 'react-router-dom';


type NavbarProps = {
  isSticky: boolean;
};

const Navbar = ({ isSticky }: NavbarProps) => {
  const { user, handlers } = useContext(StateContext);
  const isMobile = useIsMobile();

  return (
    <div className={classNames('navbar', { 'navbar--sticky': isSticky })}>
      <Link to="/" className="navbar__logo">
        <Logo animate={isSticky} dark />
      </Link>
      <div className="navbar__burgerButton">{isMobile && <BurgerButton />}</div>
      {!isMobile && (
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
