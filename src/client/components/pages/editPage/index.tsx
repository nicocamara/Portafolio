import { useState } from 'react';
import getAssetUrl from '../../../utils/getAssetUrl';
import EducationForm from '../../atoms/educationForm';
import ExperiencesForm from '../../atoms/experiencesForm';
import OverView from '../../molecules/overview';
import './styles.scss';

export type Route = 'OverView' | 'ExperiencesForm' | 'EducationForm';

type MenuProps = {
  changeRoute: (newRoute: Route) => void;
};
const routes: Route[] = ['OverView', 'ExperiencesForm', 'EducationForm'];

const MenuEdit = (props: MenuProps) => (
  <div className="menuEdit">
    {routes.map(r => (
      <div className="menuEdit__routes" key={r} onClick={() => props.changeRoute(r)}>
        <img className="menuEdit__icons" src={getAssetUrl(`${r}.svg`)} />
        {r}
      </div>
    ))}
  </div>
);

const contents: Record<Route, () => JSX.Element> = {
  OverView,
  EducationForm,
  ExperiencesForm,
};

const EditPage = () => {
  const [content, setcontent] = useState<Route>('OverView');

  const changeRoute = (newRoute: Route) => {
    setcontent(newRoute);
  };

  return (
    <div className="edit">
      <MenuEdit changeRoute={changeRoute} />
      <div className="edit__changes">
        <div className="app__content">{contents[content]()}</div>
      </div>
    </div>
  );
};

export default EditPage;
