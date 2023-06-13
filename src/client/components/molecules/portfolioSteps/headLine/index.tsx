import classNames from 'classnames';
import { Field, Form, Formik, useFormikContext } from 'formik';
import { HeadLine } from '../../../../utils/Type';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';

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
            <div className="skills__title">Head line</div>
            <hr className="skills__line" />
            <div className="form__field-container">
              <div className="skills__subtitles">Work Skills</div>
              <Field
                component={
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={event => {
                      // formik.setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />
                }
                name="image"
                label={'Upload your Image'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Linkedin Link</div>
              <Field
                component={TextField}
                name="linkedin"
                label={'Link of linkeding'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Facebook Link</div>
              <Field
                component={TextField}
                name="facebook"
                label={'Link of facebook'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Github Link</div>
              <Field
                component={TextField}
                name="github"
                label={'Link of github'}
                // validate={(value: string) => runValidation(value, 'firstName')}
              />
            </div>
            <div className="form__field-container">
              <div className="skills__subtitles">Instagram Link</div>
              <Field
                component={TextField}
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
              <Button className="educationForm__button" onClick={() => changeRoute('skills')}>
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
