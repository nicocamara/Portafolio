import classNames from 'classnames';
import { Field } from 'formik';
import { runValidation } from '../../../../utils/validations';
import Button from '../../../atoms/button';
import { Route } from '../../../pages/editPage';
import TextField from '../../formik/TextField';
import './styles.scss';
import { useContext, useState } from 'react';
import StateContext from '../../../../utils/stateContext';

type OverViewProps = {
  changeRoute: (newRoute: Route) => void;
};

const OverView = ({ changeRoute }: OverViewProps) => {
  const { handlers } = useContext(StateContext);
  const [image, setImage] = useState();

  const imagenhandler = async () => {
    if (!image) {
      return;
    }
    await handlers.uploadFile(image);
  };

  console.log('images', image);
  return (
    <div className="overview">
      <div className="overview__title">Personal Data</div>
      <hr className="overview__line" />
      <div className="form__field-container">
        <div className="skills__subtitles">Avatar</div>
        <input
          name="image"
          type="file"
          onChange={(e: any) => setImage(e.target.files[0])}
          // validate={(value: string) => runValidation(value, 'firstName')}
        />
        <button onClick={imagenhandler}>submit image</button>
      </div>
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
};

export default OverView;
