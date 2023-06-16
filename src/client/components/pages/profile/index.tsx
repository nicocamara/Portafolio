import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Portfolio } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import Menu from '../../atoms/menu';
import About from '../../molecules/profileSteps/about';
import Overview from '../../molecules/profileSteps/Identity';
import Projects from '../../molecules/profileSteps/skills';
import Experiences from '../../molecules/profileSteps/exprences';
import Resume from '../../molecules/profileSteps/studies';
import './styles.scss';

export type Route = 'about' | 'skills' | 'education' | 'experience';

const contents: Record<Route, (props: { date: Portfolio }) => JSX.Element> = {
  about: props => <About {...props} />,
  skills: props => <Projects {...props} />,
  education: props => <Resume {...props} />,
  experience: props => <Experiences {...props} />,
};

const PublicPortfolio = () => {
  const { handlers } = useContext(StateContext);
  const { userName } = useParams();
  const [content, setcontent] = useState<Route>('about');
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
      <div className="portfolio__overview">
        <Overview date={portfolio} />
      </div>
      <div className="portfolio__content">{contents[content]({ date: portfolio })}</div>
    </div>
  );
};

export default PublicPortfolio;
