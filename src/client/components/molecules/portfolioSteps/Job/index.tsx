import { Field, Form, Formik, useFormikContext } from 'formik';
import { Job } from '../../../../utils/Type';
// import { runValidation } from '../../../utils/validations';
import Button from '../../../atoms/button';
import Input from '../../../atoms/input';
import { Route } from '../../../pages/editPage';
import './styles.scss';
import classNames from 'classnames';

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
    <div className="JobForm">
      {/* {mapear values.JobForm} */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm, values }) => (
          <Form className="jobForm__form">
            <div className="jobForm__title">Work Experencie</div>
            <hr className="jobForm__line" />
            <div className="form__field-container">
              <Field
                component={Input}
                name="employer"
                label={'employer'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Field
                component={Input}
                name="title"
                label={'title'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            {/* <div className="form__field-container">
              <Field
                component={Input}
                name="description"
                label="Current Position"
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div> */}
            <div className={classNames('form__field-container', 'jobForm__date')}>
              <div className="jobForm__date-subtitles">
                Start Date
                <Field className="jobForm__date-button" type="date" name="startDate" />
              </div>
              <div className="educationForm__date-subtitles">
                Actuality
                <Field type="checkbox" name="actuality" />
              </div>
              {!values.actuality && (
                <div className="jobForm__date-subtitles">
                  End Date
                  <Field className="jobForm__date-button" type="date" name="endDate" />
                </div>
              )}
            </div>
            <div>
              <div className="form__field-container">
                <Field
                  className="jobForm__description"
                  component={Input}
                  name="description"
                  label={'Description Job'}
                  // validate={(value: string) => runValidation(value, 'firstName')}
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
