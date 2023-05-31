import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Portfolio } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import Contact from '../../molecules/profileSteps/contact';
import Menu from '../../atoms/menu';
import Gilada from '../../molecules/profileSteps/gilada';
import Projects from '../../molecules/profileSteps/projects';
import Resume from '../../molecules/profileSteps/resume';
import './styles.scss';

export type Route = 'Resume' | 'Projects' | 'Contact';

const contents: Record<Route, (props: { date: Portfolio }) => JSX.Element> = {
  Resume: props => <Resume {...props} />,
  Projects: props => <Projects {...props} />,
  Contact: props => <Contact {...props} />,
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
      <div className="portfolio__menu">
        <Menu changeRoute={changeRoute} />
      </div>
      <div className="portfolio__gilada">
        <Gilada />
      </div>
      <div className="porfolio__contents">{contents[content]({ date: portfolio })}</div>
    </div>
  );
};

export default PublicPortfolio;
