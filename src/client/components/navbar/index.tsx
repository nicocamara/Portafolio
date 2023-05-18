import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import Logo from '../atoms/logo';

type NavbarProps = {
  isSticky: boolean;
};

const Navbar = ({ isSticky }: NavbarProps) => {
  const navigate = useNavigate();
  return (
    <div className={classNames('navbar', { 'navbar--sticky': isSticky })}>
      <Logo animate={isSticky} onClick={() => navigate('/')} dark />
      <div className={classNames('navbar__links', { 'navbar__links--sticky': isSticky })}>
        <div className="navbar__link" onClick={() => navigate('/features')}>
          FEATURES
        </div>
        <div className="navbar__link" onClick={() => navigate('/about')}>
          ABOUT
        </div>
        <div className="navbar__link" onClick={() => navigate('/edit')}>
          Edit Portfolio
        </div>
        <div className="navbar__link join" onClick={() => navigate('/auth')}>
          JOIN
        </div>
      </div>
    </div>
  );
};

export default Navbar;
