import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Portfolio } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import Contact from '../../atoms/contact';
import Menu from '../../atoms/menu';
import Gilada from '../../molecules/gilada';
import Projects from '../../molecules/projects';
import Resume from '../../molecules/resume';
import './styles.scss';

export type Route = 'Resume' | 'Projects' | 'Contact';

const contents: Record<Route, () => JSX.Element> = {
  Resume,
  Projects,
  // Contact,
};

const PublicPortfolio = () => {
  const { handlers } = useContext(StateContext);
  const { userName } = useParams();
  const [content, setcontent] = useState<Route>('Contact');
  const [portfolio, setPortfolio] = useState<Portfolio>();

  const changeRoute = (newRoute: Route) => {
    setcontent(newRoute);
  };

  useEffect(() => {
    (async () => {
      const response = await handlers.getPortfolio(userName!);

      setPortfolio(response);
    })();
  }, []);

  if (!portfolio) {
    return <p>Loading</p>;
  }

  return (
    <div className="portfolio">
      <Menu changeRoute={changeRoute} />
      <div className="portfolio__change">
        <Gilada />
        {/* <div className="app__content">{contents[content]()}</div> */}
      </div>
    </div>
  );
};

export default PublicPortfolio;
