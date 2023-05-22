import { Field, Form, Formik, useFormikContext } from 'formik';
import { Job } from '../../../utils/Type';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { Route } from '../../pages/editPage';
// import './styles.scss';

const initialValues: Job = {
  skills: [''],
  title: '',
  description: '',
  startDate: '',
  endDate: '',
};

type JobProps = {
  changeRoute: (newRoute: Route) => void;
};

const JobForm = (props: JobProps) => {
  const { setFieldValue, values, submitForm: submitMainForm } = useFormikContext<any>();

  const submitHandler = async (newEducation: typeof initialValues) => {
    setFieldValue('education', [...values.education, newEducation]);
  };

  return (
    <div className="JobForm">
      {/* {mapear values.JobForm} */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm }) => (
          <Form className="JobForm__form">
            <div className="sign">Register Acount</div>
            <Field
              component={Input}
              name="skills"
              label={'skills'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="title"
              label={'title'}
              validate={(value: string) => runValidation(value, 'lastName')}
            />

            <Field
              component={Input}
              name="description"
              label="description"
              type="email"
              validate={(value: string) => runValidation(value, 'email')}
            />
            <Field
              component={Input}
              name="startDate"
              label={'startDate'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="endDate"
              label={'endDate'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Button onClick={submitMainForm}>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobForm;
