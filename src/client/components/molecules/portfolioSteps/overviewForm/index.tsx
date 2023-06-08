import { Field } from 'formik';
import { useContext } from 'react';
import StateContext from '../../../../utils/stateContext';
import { runValidation } from '../../../../utils/validations';
import Button from '../../../atoms/button';
import Input from '../../../atoms/input';
import { Route } from '../../../pages/editPage';
import './styles.scss';
import classNames from 'classnames';

type OverViewProps = {
  changeRoute: (newRoute: Route) => void;
};

const OverView = ({ changeRoute }: OverViewProps) => {
  //   const [next, setNext] = useState();

  const { handlers } = useContext(StateContext);

  return (
    <div className="overview">
      <div className="overview__title">Personal Data</div>
      <hr className="overview__line" />
      <div className="form__field-container">
        <Field
          component={Input}
          name="overview.firstName"
          label={'First Name'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="overview.lastName"
          label={'last Name'}
          validate={(value: string) => runValidation(value, 'lastName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="overview.email"
          label="Email"
          type="email"
          validate={(value: string) => runValidation(value, 'email')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="overview.country"
          label={'Country'}
          validate={(value: string) => runValidation(value, 'country')}
        />
      </div>
      <div className="form__field-container">
        <Field component={Input} name="overview.phone" label={'Phone number'} />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="overview.city"
          label={'City'}
          validate={(value: string) => runValidation(value, 'city')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
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
        <Button className="overview__button" onClick={() => changeRoute('skills')}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default OverView;
