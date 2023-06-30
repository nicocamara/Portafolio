import classNames from 'classnames';
import { Formik } from 'formik';
import { ReactNode, useContext, useState } from 'react';
import { Asset } from '../../../utils/Type';
import StateContext from '../../../utils/stateContext';
import Icons from '../../atoms/icons';
import LoadingSpinner from '../../atoms/loadingSpinneer';
import JobStep from '../../molecules/portfolioSteps/Job';
import EducationForm from '../../molecules/portfolioSteps/education';
import HeadLineForm from '../../molecules/portfolioSteps/headLine';
import OverView from '../../molecules/portfolioSteps/overviewForm';
import SkillsForm from '../../molecules/portfolioSteps/skills';
import './styles.scss';

export type Route = 'OverView' | 'headLine' | 'skills' | 'education' | 'jobs';

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
  { name: 'OverView', label: 'Overview', description: 'Upload your data' },
  { name: 'headLine', label: 'HeadLine', description: 'Upload your data' },
  { name: 'skills', label: 'Skills', description: 'Upload your data' },
  { name: 'education', label: 'Education', description: 'Upload your data' },
  { name: 'jobs', label: 'Jobs', description: 'Upload your data' },
];

const BreadCrumb = (props: MenuProps) => (
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

const initialValues = {
  overview: {
    avatarURL: '',
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
  headLine: [],
};

type StepProps = {
  assets: Asset[];
  changeRoute: (newRoute: Route) => void;
  handleAsset: (asset: Asset) => void;
};

const getStep = (step: Route, stepProps: StepProps) => {
  const { assets, changeRoute, handleAsset } = stepProps;

  const steps: Record<Route, ReactNode> = {
    OverView: <OverView oldAssets={assets} changeRoute={changeRoute} handleAsset={handleAsset} />,
    headLine: <HeadLineForm changeRoute={changeRoute} />,
    education: <EducationForm changeRoute={changeRoute} />,
    jobs: <JobStep changeRoute={changeRoute} />,
    skills: <SkillsForm changeRoute={changeRoute} />,
  };
  return steps[step];
};

const EditPage = () => {
  const [step, setStep] = useState<Route>('OverView');
  const [assets, setAssets] = useState<Asset[]>([]);
  const { handlers } = useContext(StateContext);
  const [spinner, setSpinner] = useState(false);

  const handleAsset = (asset: Asset) => {
    setAssets([...assets, asset]);
  };

  const changeRoute = (newRoute: Route) => {
    setSpinner(true);
    setStep(newRoute);
    setSpinner(false);
  };

  const submitHandler = async (values: typeof initialValues) => {
    try {
      await handlers.createPortfolio(values);
      if (assets.length) {
        await handlers.uploadFiles(assets);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (spinner) {
    return <LoadingSpinner />;
  }

  return (
    <div className="edit">
      <div className="edit__title">New Portfolio</div>
      <div className="edit__subtitle">Follow these steps to upload your portfolio</div>
      <hr className="edit__line" />
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <div className="edit__container">
          <BreadCrumb step={step} changeRoute={changeRoute} />
          <hr className="edit__verticaLine" />
          <div className="edit__content">{getStep(step, { changeRoute, handleAsset, assets })}</div>
        </div>
      </Formik>
    </div>
  );
};

export default EditPage;
