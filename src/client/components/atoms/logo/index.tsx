import classNames from 'classnames';
import './styles.scss';

type LogoProps = {
  animate?: boolean;
  dark?: boolean;
};

const Logo = ({ animate, dark }: LogoProps) => (
  <div className={classNames('logo', { 'logo--animate': animate, 'logo--dark': dark })}>
    <span>C</span>
    <span>V</span>
    <span>S</span>
    <span>howcase</span>
  </div>
);

export default Logo;
