import { useContext, useState } from 'react';
import Contact from '../contact';
import Gilada from '../gilada';
import NavbarProfile from '../menu';
import Projects from '../projects';
import Resume from '../resume';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { User } from '../../../server/utils/types';
import StateContext from '../../utils/stateContext';

export type Route = 'Resume' | 'Projects' | 'Contact';

const contents: Record<Route, () => JSX.Element> = {
  Resume,
  Projects,
  Contact,
};

const Profile = () => {
  const { userName } = useParams();
  const [content, setcontent] = useState<Route>('Contact');
  const [profile, setProfile] = useState<User>();

  const changeRoute = (newRoute: Route) => {
    setcontent(newRoute);
  };

  // useEffect(() => {
  //   (async () => {
  //     const response = await searchProduct(id!);
  //     setSearchDetails(response);
  //   })();
  // }, []);

  // if (!searchDeails) {
  //   return <p>Loading</p>;
  // }

  return (
    <div className="profile">
      <NavbarProfile changeRoute={changeRoute} />
      <div className="profile__profile">
        <Gilada />
        <div className="app__content">{contents[content]()}</div>
      </div>
    </div>
  );
};

export default Profile;
