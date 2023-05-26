import { Field, Form, Formik, useFormikContext } from 'formik';
import { Job } from '../../../utils/Type';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { Route } from '../../pages/editPage';
import './styles.scss';
import classNames from 'classnames';

const initialValues: Job = {
  title: '',
  employer: '',
  startDate: '',
  endDate: '',
  description: '',
};

type JobProps = {
  changeRoute: (newRoute: Route) => void;
};

const JobStep = (props: JobProps) => {
  const { setFieldValue, values, submitForm: submitMainForm } = useFormikContext<any>();

  const submitHandler = async (newEducation: typeof initialValues) => {
    setFieldValue('education', [...values.education, newEducation]);
  };

  return (
    <div className="JobForm">
      {/* {mapear values.JobForm} */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm }) => (
          <Form className="jobForm__form">
            <div className="jobForm__title">Work Experencie</div>
            <hr className="jobForm__line" />
            <div className="form__field-container">
              <Field
                component={Input}
                name="institution"
                label={'institution'}
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Field
                component={Input}
                name="title"
                label={'title'}
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Field
                component={Input}
                name="description"
                label="Current Position"
                type="email"
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className={classNames('form__field-container', 'jobForm__date')}>
              <div className="jobForm__date-subtitles">
                Start Date
                <Field className="jobForm__date-button" type="date" name="startDate" />
              </div>
              <div className="jobForm__date-subtitles">
                Start Date
                <Field className="jobForm__date-button" type="date" name="endDate" />
              </div>
            </div>
            <div>
              <div className="form__field-container">
                <Field
                  className="jobForm__description"
                  component={Input}
                  name="descritionJob"
                  label={'Description Job'}
                  validate={(value: string) => runValidation(value, 'firstName')}
                />
              </div>
            </div>
            <div className="form__field-container">
              <Button className="educationForm__button" onClick={submitForm}>
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
