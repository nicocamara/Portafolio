import classNames from 'classnames';
import { Field, Form, Formik, useFormikContext } from 'formik';
import { Skills } from '../../../../utils/Type';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';

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
                component={TextField}
                name="workSkills"
                label={'Describe yours works Skills'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Soft Skills</div>
              <Field
                component={TextField}
                name="softSkills"
                label={'Describe Yours Soft Skills'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Teach Skills</div>
              <Field
                component={TextField}
                name="teachSkills"
                label={'Describe Yours Teach Skills'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Cover Letter</div>
              <Field
                component={TextField}
                name="coverLetter"
                label={'Cover Letter'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Button type="button" className="educationForm__button" onClick={submitForm}>
                Save
              </Button>
            </div>
            <div className={classNames('form__field-container', 'educationForm__date')}>
              <Button className="educationForm__button" isTertiary onClick={() => changeRoute('headLine')}>
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
