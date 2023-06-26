import './styles.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, useContext } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../../../utils/stateContext';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  isOpen?: boolean;
  onClick?: () => void;
};

const BurgerButton = ({ isOpen, onClick }: ButtonProps) => {
  const { user, handlers } = useContext(StateContext);

  return (
    <div>
      <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {isOpen && (
        <nav className="nav" id="nav">
          <ul>
            <li>
              <Link to="/features">FEATURES</Link>
            </li>
            <li>
              <Link to={`/${user?.userName}`}>ABOUT</Link>
            </li>
            <li>
              <Link to="/edit">Edit Portfolio</Link>
            </li>
            <li>
              <Link to="/auth">JOIN</Link>
            </li>
            {user && (
              <li>
                <Link onClick={handlers.logOut} to="/auth">
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerButton;
