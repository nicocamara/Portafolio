import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

type NavbarProps = {
  isSticky: boolean;
};

const Navbar = ({ isSticky }: NavbarProps) => {
  const navigate = useNavigate();
  return (
    <div className={classNames('navbar', { 'navbar--sticky': isSticky })}>
      <div className={classNames('navbar__logo', { 'navbar__logo--sticky': isSticky })} onClick={() => navigate('/')}>
        <div className="navbar__logo__c">C</div>
        <div className="navbar__logo__v">V</div>
        <div className="navbar__logo__s">S</div>
        <div className="navbar__logo__howcase">howcase</div>
      </div>
      <div className={classNames('navbar__links', { 'navbar__links--sticky': isSticky })}>
        <div className="navbar__link" onClick={() => navigate('/about')}>
          FEATURES
        </div>
        <div className="navbar__link" onClick={() => navigate('/about')}>
          ABOUT
        </div>
        <div className="navbar__link join" onClick={() => navigate('/auth')}>
          JOIN
        </div>
      </div>
    </div>
  );
};

export default Navbar;
