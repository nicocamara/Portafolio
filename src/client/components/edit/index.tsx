import { Field, Formik, Form } from 'formik';
import Button from '../button';
import { useContext, useState } from 'react';
import Input from '../input';
import './styles.scss';
import { runValidation } from '../../utils/validations';
import StateContext from '../../utils/stateContext';
import { Portfolio } from '../../utils/Type';

const initialValues: Omit<Portfolio, 'id'> = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  currentPosition: '',
  city: '',
  descritionJob: '',
  skills: '',
};

const EditPage = () => {
  //   const [next, setNext] = useState();

  const { handlers } = useContext(StateContext);

  const submitHandler = async (values: typeof initialValues) => {
    try {
      await handlers.createPortfolio(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ errors }) => (
          <Form className="edit__form">
            <div className="sign">Register Acount</div>
            <Field
              component={Input}
              name="firstName"
              label={'First Name'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="lastName"
              label={'last Name'}
              validate={(value: string) => runValidation(value, 'lastName')}
            />

            <Field
              component={Input}
              name="email"
              label="Email"
              type="email"
              validate={(value: string) => runValidation(value, 'email')}
            />
            <Field
              component={Input}
              name="country"
              label={'Street'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="city"
              label={'City'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="currentPosition"
              label={'Current Position'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="descritionJob"
              label={'Description Job'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <Field
              component={Input}
              name="skills"
              label={'Skills'}
              validate={(value: string) => runValidation(value, 'firstName')}
            />
            <div className="form-message">
              <input type="checkbox" />
              By registering on this website, I accept the terms and conditions of use
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPage;
