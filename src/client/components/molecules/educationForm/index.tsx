import { Field, Form, Formik, useFormikContext } from 'formik';
import { Education } from '../../../utils/Type';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { Route } from '../../pages/editPage';
import './styles.scss';

const initialValues: Education = {
  institution: '',
  title: '',
  description: '',
  startDate: '',
  endDate: '',
};

type EducationProps = {
  changeRoute: (newRoute: Route) => void;
};

const EducationForm = (props: EducationProps) => {
  const { setFieldValue, values } = useFormikContext<any>();

  const submitHandler = async (newEducation: typeof initialValues) => {
    setFieldValue('education', [...values.education, newEducation]);
  };

  return (
    <div className="educationForm">
      {/* {mapear values.education} */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm }) => (
          <Form className="educationForm__form">
            <div className="educationForm__title">Education</div>
            <hr className="educationForm__line" />
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
                label="description"
                type="email"
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Field
                component={Input}
                name="startDate"
                label={'xx/xx/xx'}
                validate={(value: string) => runValidation(value, 'firstName')}
              />
              <Field
                component={Input}
                name="endDate"
                label={'xx/xx/xx'}
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>

            <div className="form__field-container">
              <Button className="educationForm__button" onClick={submitForm}>
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EducationForm;
