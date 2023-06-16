import { useState } from 'react';
import getAssetUrl from '../../../utils/getAssetUrl';
import { Route } from '../../pages/profile';
import Collapse from '../collapse';
import './styles.scss';

type MenuProps = {
  changeRoute: (newRoute: Route) => void;
};
const buttons: Route[] = ['about', 'skills', 'education', 'experience'];
const Menu = (props: MenuProps) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="menu">
      <div className="menu__toggle" onClick={() => setOpen(!isOpen)}>
        <img className="menu__icons" src={getAssetUrl('menu.svg')} />
      </div>
      <Collapse isOpen={isOpen}>
        <ul className="menu__buttons">
          {buttons.map(b => (
            <li className="menu__button" key={b} onClick={() => props.changeRoute(b)}>
              <img className="menu__icon" src={getAssetUrl(`${b}.svg`)} />
              <div className="menu__icon-text">{b}</div>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};
export default Menu;
