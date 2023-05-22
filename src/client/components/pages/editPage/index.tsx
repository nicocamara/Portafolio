import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { Portfolio } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import Icons from '../../atoms/icons';
import EducationForm from '../../molecules/educationForm';
import JobForm from '../../molecules/experiencesForm';
import OverView from '../../molecules/overviewForm';
import './styles.scss';

export type Route = 'overview' | 'education' | 'jobs' | 'skills';

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
  { name: 'overview', label: 'overview', description: 'Upload your data' },
  { name: 'education', label: 'education', description: 'Upload your data' },
  { name: 'jobs', label: 'jobs', description: 'Upload your data' },
  { name: 'skills', label: 'skills', description: 'Upload your data' },
];

const BreadCrumb = (props: MenuProps) => (
  <div className="breadCrumb">
    {routes.map(({ name, label, description }) => (
      <div
        className={classNames('breadCrumb__item', { 'breadCrumb__item--selected': props.step === name })}
        key={name}
        onClick={() => props.changeRoute(name)}
      >
        <Icons className="breadCrumb__icons" path={name} alt={name} />
        <h4>{label}</h4>
        <span>{description}</span>
      </div>
    ))}
  </div>
);

const initialValues: Omit<Portfolio, 'id'> = {
  overview: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  address: {
    street: '',
    houseNumber: '',
    zipCode: '',
    country: '',
    city: '',
  },
  job: [],
  education: [],
};

const getStep = (step: Route, changeRoute: (newRoute: Route) => void) => {
  const steps: Record<Route, JSX.Element> = {
    overview: <OverView changeRoute={changeRoute} />,
    education: <EducationForm changeRoute={changeRoute} />,
    jobs: <JobForm changeRoute={changeRoute} />,
    skills: <div>hola</div>,
  };

  return steps[step];
};

const EditPage = () => {
  const [step, setStep] = useState<Route>('overview');
  const { handlers } = useContext(StateContext);

  const changeRoute = (newRoute: Route) => {
    setStep(newRoute);
  };

  const submitHandler = async (values: typeof initialValues) => {
    console.log('nico', values);
    try {
      await handlers.createPortfolio(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit">
      <div className="edit__title">Hola Petrone</div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form className="edit__form">
          <>
            <BreadCrumb step={step} changeRoute={changeRoute} />
            <div className="app__content">{getStep(step, changeRoute)}</div>
          </>
        </Form>
      </Formik>
    </div>
  );
};

export default EditPage;
