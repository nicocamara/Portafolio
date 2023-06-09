import { Field, Form, Formik, useFormikContext } from 'formik';
import Button from '../../../atoms/button';
import Input from '../../../atoms/input';
import { Route } from '../../../pages/editPage';
import { HeadLine } from '../../../../utils/Type';
import './styles.scss';
import classNames from 'classnames';

const initialValues: HeadLine = {
  image: '',
  linkedin: '',
  facebook: '',
  github: '',
  instagram: '',
};

type headLineProps = {
  changeRoute: (newRoute: Route) => void;
};
const HeadLineForm = ({ changeRoute }: headLineProps) => {
  const { setFieldValue, values } = useFormikContext<any>();

  const submitHandler = async (newSkills: typeof initialValues) => {
    setFieldValue('headLine', [...values.headLine, newSkills]);
  };

  return (
    <div className="headLine">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm }) => (
          <Form className="skills__form">
            <div className="skills__title">Skills</div>
            <hr className="skills__line" />
            <div className="form__field-container">
              <div className="skills__subtitles">Work Skills</div>
              <Field
                component={Input}
                name="image"
                label={'Upload your Image'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Soft Skills</div>
              <Field
                component={Input}
                name="linkedin"
                label={'Link of linkeding'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Teach Skills</div>
              <Field
                component={Input}
                name="facebook"
                label={'Link of facebook'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Cover Letter</div>
              <Field
                component={Input}
                name="github"
                label={'Link of github'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Teach Skills</div>
              <Field
                component={Input}
                name="instagram"
                label={'Link of instagram'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <Button type="button" className="educationForm__button" onClick={submitForm}>
                Save
              </Button>
            </div>
            <div className={classNames('form__field-container', 'educationForm__date')}>
              <Button className="educationForm__button" isTertiary onClick={() => changeRoute('OverView')}>
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

export default HeadLineForm;
