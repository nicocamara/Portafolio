import classNames from 'classnames';
import { Field } from 'formik';
import { runValidation } from '../../../../utils/validations';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';

type OverViewProps = {
  changeRoute: (newRoute: Route) => void;
};

const OverView = ({ changeRoute }: OverViewProps) => (
  <div className="overview">
    <div className="overview__title">Personal Data</div>
    <hr className="overview__line" />
    <div className="form__field-container">
      <Field
        component={TextField}
        name="overview.firstName"
        label={'First Name'}
        validate={(value: string) => runValidation(value, 'firstName')}
      />
    </div>
    <div className="form__field-container">
      <Field
        component={TextField}
        name="overview.lastName"
        label={'last Name'}
        validate={(value: string) => runValidation(value, 'lastName')}
      />
    </div>
    <div className="form__field-container">
      <Field
        component={TextField}
        name="overview.email"
        label="Email"
        type="email"
        validate={(value: string) => runValidation(value, 'email')}
      />
    </div>
    <div className="form__field-container">
      <Field
        component={TextField}
        name="overview.country"
        label={'Country'}
        validate={(value: string) => runValidation(value, 'country')}
      />
    </div>
    <div className="form__field-container">
      <Field component={TextField} name="overview.phone" label={'Phone number'} />
    </div>
    <div className="form__field-container">
      <Field
        component={TextField}
        name="overview.city"
        label={'City'}
        validate={(value: string) => runValidation(value, 'city')}
      />
    </div>
    <div className="form__field-container">
      <Field
        component={TextField}
        name="overview.street"
        label={'Street'}
        validate={(value: string) => runValidation(value, 'street')}
      />
    </div>
    <div className={classNames('form__field-container', 'overview__date')}>
      <div className="overview__date-subtitles">
        Birthdate
        <Field className="overview__date-button" type="date" name="overview.birthDate" />
      </div>
    </div>
    <div className="form__field-container">
      <Button className="overview__button" onClick={() => changeRoute('headLine')}>
        Next
      </Button>
    </div>
  </div>
);

export default OverView;
