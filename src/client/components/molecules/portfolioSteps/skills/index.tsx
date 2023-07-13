import classNames from 'classnames';
import { Field } from 'formik';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';

const SkillsForm = ({ changeRoute }: { changeRoute: (newRoute: Route) => void }) => (
  <div className="skills">
    <div className="skills__title">Skills</div>
    <hr className="skills__line" />
    <div className="form__field-container">
      <div className="skills__subtitles">Work Skills</div>
      <Field component={TextField} name="skills.workSkills" label={'Describe yours works Skills'} />
    </div>
    <div className="form__field-container">
      <div className="skills__subtitles">Soft Skills</div>
      <Field component={TextField} name="skills.softSkills" label={'Describe Yours Soft Skills'} />
    </div>
    <div className="form__field-container">
      <div className="skills__subtitles">Teach Skills</div>
      <Field component={TextField} name="skills.teachSkills" label={'Describe Yours Teach Skills'} />
    </div>
    <div className="form__field-container">
      <div className="skills__subtitles">Cover Letter</div>
      <Field component={TextField} name="skills.coverLetter" label={'Cover Letter'} />
    </div>
    <div className={classNames('form__field-container', 'educationForm__date')}>
      <Button className="educationForm__button" isTertiary onClick={() => changeRoute('headLine')}>
        Back
      </Button>
      <Button className="educationForm__button" onClick={() => changeRoute('education')}>
        Next
      </Button>
    </div>
  </div>
);

export default SkillsForm;
