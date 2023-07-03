import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Portfolio } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import LoadingSpinner from '../../atoms/loadingSpinneer';
import Menu from '../../atoms/menu';
import Experiences from '../../molecules/profileSteps/Experiences';
import Identity from '../../molecules/profileSteps/Identity';
import Contact from '../../molecules/profileSteps/Resume';
import Projects from '../../molecules/profileSteps/Skills';
import Resume from '../../molecules/profileSteps/Resume';
import './styles.scss';

export type Route = 'Resume' | 'Skilfulness' | 'Studies' | 'Experiences';

const contents: Record<Route, (props: { date: Portfolio }) => JSX.Element> = {
  Resume: props => <Contact {...props} />,
  Studies: props => <Resume {...props} />,
  Skilfulness: props => <Projects {...props} />,
  Experiences: props => <Experiences {...props} />,
};

const PublicPortfolio = () => {
  const { handlers } = useContext(StateContext);
  const { userName } = useParams();
  const [content, setcontent] = useState<Route>('Resume');
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
    return <LoadingSpinner />;
  }

  return (
    <div className="portfolio">
      <div className="portfolio__menu">
        <Menu changeRoute={changeRoute} />
      </div>
      <div className="portfolio__gilada">
        <Identity date={portfolio} />
      </div>
      <div className="porfolio__contents">{contents[content]({ date: portfolio })}</div>
    </div>
  );
};

export default PublicPortfolio;
