import classNames from 'classnames';
import './styles.scss';

type LogoProps = {
  animate?: boolean;
  onClick?: () => void;
  dark?: boolean;
};

const Logo = ({ animate, dark, onClick }: LogoProps) => (
  <div
    className={classNames('logo', { 'logo--animate': animate, 'logo--dark': dark, 'logo--clickable': !!onClick })}
    onClick={() => (onClick ? onClick() : null)}
  >
    <span>C</span>
    <span>V</span>
    <span>S</span>
    <span>howcase</span>
  </div>
);

export default Logo;
