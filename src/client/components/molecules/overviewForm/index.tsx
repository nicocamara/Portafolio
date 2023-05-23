import { Field } from 'formik';
import { useContext } from 'react';
import StateContext from '../../../utils/stateContext';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { Route } from '../../pages/editPage';
import './styles.scss';

type OverViewProps = {
  changeRoute: (newRoute: Route) => void;
};

const OverView = ({ changeRoute }: OverViewProps) => {
  //   const [next, setNext] = useState();

  const { handlers } = useContext(StateContext);

  return (
    <div className="overview">
      <div className="overview__title">Register Acount</div>
      <hr className="overview__line" />
      <div className="form__field-container">
        <Field
          component={Input}
          name="firstName"
          label={'First Name'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="lastName"
          label={'last Name'}
          validate={(value: string) => runValidation(value, 'lastName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="email"
          label="Email"
          type="email"
          validate={(value: string) => runValidation(value, 'email')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="country"
          label={'Street'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="city"
          label={'City'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="city"
          label={'City'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="currentPosition"
          label={'Current Position'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Field
          component={Input}
          name="descritionJob"
          label={'Description Job'}
          validate={(value: string) => runValidation(value, 'firstName')}
        />
      </div>
      <div className="form__field-container">
        <Button className="overview__button" onClick={() => changeRoute('education')}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default OverView;
