import { Field, Form, Formik, useFormikContext } from 'formik';
import { Job } from '../../../utils/Type';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { Route } from '../../pages/editPage';
import './styles.scss';

const initialValues: Job = {
  skills: [''],
  title: '',
  description: '',
  startDate: '',
  endDate: '',
};

type SkillsProps = {
  changeRoute: (newRoute: Route) => void;
};

const SkillsForm = (props: SkillsProps) => {
  const { setFieldValue, values, submitForm: submitMainForm } = useFormikContext<any>();

  const submitHandler = async (newEducation: typeof initialValues) => {
    setFieldValue('education', [...values.education, newEducation]);
  };

  return (
    <div className="skills">
      {/* {mapear values.JobForm} */}
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm }) => (
          <Form className="skills__form">
            <div className="skills__title">Skills</div>
            <hr className="skills__line" />
            <div className="form__field-container">
              <div className="skills__subtitles">Work Skills</div>
              <Field
                component={Input}
                name="institution"
                label={'Describe yours works Skills'}
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Soft Skills</div>
              <Field
                component={Input}
                name="title"
                label={'Describe Yours Soft Skills'}
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Teach Skills</div>
              <Field
                component={Input}
                name="description"
                label={'Describe Yours Teach Skills'}
                type="email"
                validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Cover Letter</div>
              <Field
                component={Input}
                name="startDate"
                label={'Cover Letter'}
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

export default SkillsForm;
