import getAssetUrl from '../../utils/getAssetUrl';
import { Route } from '../profile';
import './styles.scss';

type MenuProps = {
  changeRoute: (newRoute: Route) => void;
};
const routes: Route[] = ['Resume', 'Projects', 'Contact'];

const Menu = (props: MenuProps) => (
  <div className="menu">
    {routes.map(r => (
      <div className="menu__routes" key={r} onClick={() => props.changeRoute(r)}>
        <img className="menu__icons" src={getAssetUrl(`${r}.svg`)} />
        {r}
      </div>
    ))}
  </div>
);

export default Menu;
