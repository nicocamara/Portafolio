import classNames from 'classnames';
import { Field } from 'formik';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';

const HeadLineForm = ({ changeRoute }: { changeRoute: (newRoute: Route) => void }) => (
  <div className="headLine">
    <div className="skills__title">Head line</div>
    <hr className="skills__line" />
    <div className="form__field-container">
      <div className="skills__subtitles">Linkedin Link</div>
      <Field component={TextField} name="headLine.linkedin" label={'Link of linkeding'} />
    </div>
    <div className="form__field-container">
      <div className="skills__subtitles">Facebook Link</div>
      <Field component={TextField} name="headLine.facebook" label={'Link of facebook'} />
    </div>
    <div className="form__field-container">
      <div className="skills__subtitles">Github Link</div>
      <Field component={TextField} name="headLine.github" label={'Link of github'} />
    </div>
    <div className="form__field-container">
      <div className="skills__subtitles">Instagram Link</div>
      <Field component={TextField} name="headLine.instagram" label={'Link of instagram'} />
    </div>
    <div className={classNames('form__field-container', 'educationForm__date')}>
      <Button className="educationForm__button" isTertiary onClick={() => changeRoute('OverView')}>
        Back
      </Button>
      <Button className="educationForm__button" onClick={() => changeRoute('skills')}>
        Next
      </Button>
    </div>
  </div>
);

export default HeadLineForm;
