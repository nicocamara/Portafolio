import { Field, Form, Formik, useFormikContext } from 'formik';
import { Education } from '../../../../utils/Type';
import classNames from 'classnames';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';
import TextAreaField from '../../formik/textAreafield';

type EducationProps = {
  changeRoute: (newRoute: Route) => void;
};

const EducationForm = ({ changeRoute }: EducationProps) => {
  const { setFieldValue, values: mainValues } = useFormikContext<any>();

  const initialValues: Education = {
    institution: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    actuality: false,
  };

  const submitHandler = async (newEducation: typeof initialValues) => {
    setFieldValue('education', [...mainValues.education, newEducation]);
  };

  return (
    <div className="education-form">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ submitForm, values }) => (
          <Form className="education-form__form">
            <div className="education-form__title">Education</div>
            <hr className="education-form__line" />
            <div className="form__field-container">
              <Field component={TextField} name="institution" label={'institution'} />
            </div>
            <div className="form__field-container">
              <Field component={TextField} name="title" label={'title'} />
            </div>
            <div className={classNames('form__field-container', 'education-form__date')}>
              <div className="education-form__date-subtitles">
                Start Date
                <Field className="education-form__date-button" type="date" name="startDate" />
              </div>
              <div className="education-form__date-subtitles">
                Actuality
                <Field type="checkbox" name="actuality" />
              </div>
              {!values.actuality && (
                <div className="education-form__date-subtitles">
                  End Date
                  <Field className="education-form__date-button" type="date" name="endDate" />
                </div>
              )}
            </div>
            <div className="form__field-container">
              <Field component={TextAreaField} name="description" label={'description'} />
            </div>
            <div className="form__field-container">
              <Button type="button" className="education-form__button" onClick={submitForm}>
                Submit ↑
              </Button>
            </div>
            <div className={classNames('form__field-container', 'education-form__date')}>
              <Button className="education-form__button" isTertiary onClick={() => changeRoute('skills')}>
                Back
              </Button>
              <Button className="education-form__button" onClick={() => changeRoute('jobs')}>
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
