import { Field, Form, Formik, useFormikContext } from 'formik';
import { Skills } from '../../../utils/Type';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { Route } from '../../pages/editPage';
import './styles.scss';
import classNames from 'classnames';

const initialValues: Skills = {
  workSkills: '',
  softSkills: '',
  teachSkills: '',
  coverLetter: '',
};

type SkillsProps = {
  changeRoute: (newRoute: Route) => void;
};

const SkillsForm = ({ changeRoute }: SkillsProps) => {
  const { setFieldValue, values } = useFormikContext<any>();

  const submitHandler = async (newSkills: typeof initialValues) => {
    setFieldValue('skills', [...values.skills, newSkills]);
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
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Soft Skills</div>
              <Field
                component={Input}
                name="title"
                label={'Describe Yours Soft Skills'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Teach Skills</div>
              <Field
                component={Input}
                name="description"
                label={'Describe Yours Teach Skills'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Cover Letter</div>
              <Field
                component={Input}
                name="startDate"
                label={'Cover Letter'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Button className="educationForm__button" onClick={submitForm}>
                Save
              </Button>
            </div>
            <div className={classNames('form__field-container', 'educationForm__date')}>
              <Button className="educationForm__button" isTertiary onClick={() => changeRoute('overview')}>
                Back
              </Button>
              <Button className="educationForm__button" onClick={() => changeRoute('education')}>
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
