import classNames from 'classnames';
import { Formik } from 'formik';
import { ReactNode, useContext, useState } from 'react';
import { Portfolio } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import Icons from '../../atoms/icons';
import JobStep from '../../molecules/portfolioSteps/Job';
import EducationForm from '../../molecules/portfolioSteps/education';
import OverView from '../../molecules/portfolioSteps/overviewForm';
import SkillsForm from '../../molecules/portfolioSteps/skills';
import './styles.scss';

export type Route = 'overview' | 'skills' | 'education' | 'jobs';

export type Step = {
  name: Route;
  label: string;
  description: string;
};

type MenuProps = {
  changeRoute: (newRoute: Route) => void;
  step: Route;
};
const routes: Step[] = [
  { name: 'overview', label: 'Overview', description: 'Upload your data' },
  { name: 'skills', label: 'Skills', description: 'Upload your data' },
  { name: 'education', label: 'Education', description: 'Upload your data' },
  { name: 'jobs', label: 'Jobs', description: 'Upload your data' },
];

const BreadCrumb = (props: MenuProps) => {
  console.log('raro', props.step);
  return (
    <div className="breadCrumb">
      {routes.map(({ name, label, description }) => (
        <div className="breadCrumb__item" key={name} onClick={() => props.changeRoute(name)}>
          <Icons
            className={classNames('breadCrumb__icons', { 'breadCrumb__icons--selected': props.step === name })}
            path={name}
            alt={name}
          />
          <div className="breadCrumb__text">
            <div className="breadCrumb__text-label">{label}</div>
            <span className="breadCrumb__description">{description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const initialValues: Omit<Portfolio, 'id'> = {
  overview: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    street: '',
    city: '',
    birthDate: '',
  },
  skills: [],
  job: [],
  education: [],
};

const getStep = (step: Route, changeRoute: (newRoute: Route) => void) => {
  const steps: Record<Route, ReactNode> = {
    overview: <OverView changeRoute={changeRoute} />,
    education: <EducationForm changeRoute={changeRoute} />,
    jobs: <JobStep changeRoute={changeRoute} />,
    skills: <SkillsForm changeRoute={changeRoute} />,
  };

  return steps[step];
};

const EditPage = () => {
  const [step, setStep] = useState<Route>('overview');
  const { handlers } = useContext(StateContext);
  // const Vevo = useCallback(() => getStep(step, changeRoute), [step]);

  const changeRoute = (newRoute: Route) => {
    setStep(newRoute);
  };

  const submitHandler = async (values: typeof initialValues) => {
    try {
      await handlers.createPortfolio(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit">
      <div className="edit__title">New Portfolio</div>
      <div className="edit__subtitle">Follow these steps to upload your portfolio</div>
      <hr className="edit__line" />
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {/* estamos leyendo los values para saber porque nos manda 3 veces el mismo array de cada formulario */}
        {({ values }) => {
          console.log('valuees', values);
          return (
            <div className="edit__form">
              <>
                <BreadCrumb step={step} changeRoute={changeRoute} />
                <hr className="edit__verticaLine" />
                <div className="edit__content">{getStep(step, changeRoute)}</div>
              </>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditPage;
