import { Field, Form, Formik, useFormikContext } from 'formik';
import { Job } from '../../../../utils/Type';
import classNames from 'classnames';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';

type JobProps = {
  changeRoute: (newRoute: Route) => void;
};

const JobStep = ({ changeRoute }: JobProps) => {
  const { setFieldValue, values: mainValues, submitForm: submitMainForm } = useFormikContext<any>();

  const initialValues: Job = {
    title: '',
    employer: '',
    startDate: '',
    endDate: '',
    description: '',
    actuality: false,
  };

  const submitHandler = async (newJob: typeof initialValues) => {
    setFieldValue('job', [...mainValues.job, newJob]);
  };

  return (
    <div className="Job-form">
      {/* {mapear values.Job-form} */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm, values }) => (
          <Form className="job-form__form">
            <div className="job-form__title">Work Experencie</div>
            <hr className="job-form__line" />
            <div className="form__field-container">
              <Field component={TextField} name="employer" label={'employer'} />
            </div>
            <div className="form__field-container">
              <Field component={TextField} name="title" label={'title'} />
            </div>
            <div className={classNames('form__field-container', 'job-form__date')}>
              <div className="job-form__date-subtitles">
                Start Date
                <Field className="job-form__date-button" type="date" name="startDate" />
              </div>
              <div className="educationForm__date-subtitles">
                Actuality
                <Field type="checkbox" name="actuality" />
              </div>
              {!values.actuality && (
                <div className="job-form__date-subtitles">
                  End Date
                  <Field className="job-form__date-button" type="date" name="endDate" />
                </div>
              )}
            </div>
            <div>
              <div className="form__field-container">
                <Field
                  className="job-form__description"
                  component={TextField}
                  name="description"
                  label={'Description Job'}
                />
              </div>
            </div>
            <div className={classNames('form__field-container', 'educationForm__date')}>
              <Button className="overview__button" isTertiary onClick={() => changeRoute('education')}>
                Back
              </Button>
              <Button type="button" className="overview__button" onClick={submitForm}>
                Save
              </Button>
            </div>
            <div className="form__field-container">
              <Button className="educationForm__button" onClick={submitMainForm}>
                Upload Portfolio
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobStep;
