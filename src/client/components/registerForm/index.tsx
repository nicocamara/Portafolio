import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
// import { User } from '../../utils/Type';
import { runValidation } from '../../utils/validations';
// import Button from '../../atoms/button';
import Input from '../input/index';
import { useContext } from 'react';
import StateContext from '../../utils/stateContext';
import { User } from '../../utils/Type';
// import './style.scss';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { handlers } = useContext(StateContext);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const submitHandler = async (values: Omit<User, 'uid'> & { password: string }) => {
    try {
      await handlers.register(values);
    } catch (error) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        console.log(error.message);
        window.alert('Email Already in Use');
      }
      if (error instanceof Error && error.message.includes('weak-password')) {
        console.log(error.message);
        window.alert('Password should be at least 6 characters');
      }
    }
  };

  return (
    <div className="register">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ errors }) => (
          <>
            <Form className="form">
              <div className="sign">Register Acount</div>
              {/* <div className="genre">
                <Field name="Genre" as="select">
                  <option value="Mrs" id="Mrs">
                    Mrs
                  </option>
                  <option value="Mr" id="Mr">
                    Mr
                  </option>
                </Field>
              </div> */}
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
                name="password"
                label={'Password'}
                type="password"
                validate={(value: string) => runValidation(value, 'password')}
              />

              <button type="submit"> Register</button>
              <div className="form-message">Terms Acepted</div>
            </Form>
          </>
        )}
      </Formik>
      <div className="bottom-form">
        <div className="separator-line">Register Answer</div>
        <button onClick={() => navigate('/login')}>Log In</button>
      </div>
    </div>
  );
};
export default RegisterForm;
