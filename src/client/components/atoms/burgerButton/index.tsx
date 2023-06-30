import classNames from 'classnames';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../../../utils/stateContext';
import ExpandMenu from '../expand';
import './styles.scss';

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(StateContext);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className={classNames(`burger ${isOpen ? 'open' : ''}`)} onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ExpandMenu isOpen={isOpen}>
        {' '}
        <div className="burger__menu">
          <ul className="burger__list">
            <li className="burger__item">
              <Link className="navbar__link" to="/features">
                FEATURES
              </Link>
            </li>
            <li className="burger__item">
              <Link className="navbar__link" to={`/${user?.userName}`}>
                ABOUT
              </Link>
            </li>
            <li className="burger__item">
              <Link className="navbar__link" to="/edit">
                Edit Portfolio
              </Link>
            </li>
            <li className="burger__item">
              <Link className="navbar__link join" to="/auth">
                JOIN
              </Link>
            </li>
          </ul>
        </div>
      </ExpandMenu>
    </div>
  );
};

export default BurgerButton;
