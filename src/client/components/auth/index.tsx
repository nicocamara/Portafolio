import { useContext, useState } from 'react';
import StateContext from '../../utils/stateContext';
import { Field, Form, Formik } from 'formik';
import Input from '../input';
import { runValidation, validateCheckBox } from '../../utils/validations';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/Type';

const Auth = () => {
  const { handlers } = useContext(StateContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const registerHandler = async (values: Omit<User, 'uid'> & { password: string }) => {
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

  const loginHandler = async (values: { email: string; password: string }) => {
    try {
      await handlers.login(values.email, values.password);
      navigate('/');
    } catch (error) {
      if (error instanceof Error && error.message.includes('auth/wrong-password')) {
        console.log(error.message);
        window.alert('wrong password');
      }
      if (error instanceof Error && error.message.includes('auth/user-not-found')) {
        console.log(error.message);
        window.alert('user not found');
      }
    }
  };

  const submitHandler = isLogin ? loginHandler : registerHandler;

  const label = {};

  return (
    <div className="auth">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ errors }) => (
          <>
            <Form className="form">
              <div className="sign">Register Acount</div>
              {!isLogin && (
                <>
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
                </>
              )}

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
              <div className="form-message">
                <input type="checkbox" />
                By registering on this website, I accept the terms and conditions of use
              </div>
              <Button type="submit"> {isLogin ? 'Login' : 'Register'}</Button>
              <Button onClick={() => setIsLogin(!isLogin)}> {isLogin ? 'Go to Register' : ' Go to Login'}</Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
