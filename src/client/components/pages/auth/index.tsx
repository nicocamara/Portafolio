import { Field, Form, Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StateContext from '../../../utils/stateContext';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Logo from '../../atoms/logo';
import TextField from '../../molecules/formik/TextField';
import UserNameField, { validate } from '../../molecules/formik/UserNameField';
import './styles.scss';

const Auth = () => {
  const { handlers, user } = useContext(StateContext);
  const [isLoading, setLoading] = useState(false);

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    termsAndConditions: false,
  };

  const onSubmit = async ({ termsAndConditions, ...values }: typeof initialValues) => {
    console.log(values);
    setLoading(true);
    try {
      if (isLogin) {
        await handlers.login(values.email, values.password);
      } else {
        await handlers.register(values);
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        console.error(error.message);
        window.alert('Email Already in Use');
      }
      if (error instanceof Error && error.message.includes('weak-password')) {
        console.error(error.message);
        window.alert('Password should be at least 6 characters');
      }
    }
    navigate('/');
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="auth">
      <div className="auth__logo">
        <Logo dark />
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ setFieldError, setFieldValue, errors }) => (
          <Form className="auth__form">
            <h2 className="form__headline">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
            {!isLogin && (
              <>
                <div className="form__field-container">
                  <Field
                    component={TextField}
                    name="firstName"
                    label="First Name"
                    validate={(value: string) => runValidation(value, 'firstName')}
                  />
                </div>
                <div className="form__field-container">
                  <Field
                    component={TextField}
                    name="lastName"
                    label={'last Name'}
                    validate={(value: string) => runValidation(value, 'lastName')}
                  />
                </div>
                <div className="form__field-container">
                  <UserNameField setUserNameError={setFieldError} setUserNameField={setFieldValue} />
                </div>
              </>
            )}
            <div className="form__field-container">
              <Field
                component={TextField}
                name="email"
                label="Email"
                type="email"
                validate={(value: string) => runValidation(value, 'email')}
              />
            </div>
            <div className="form__field-container">
              <Field
                component={TextField}
                name="password"
                label={'Password'}
                type="password"
                validate={(value: string) => runValidation(value, 'password')}
              />
            </div>
            <div className="form__field-container">
              <Field
                name="termsAndConditions"
                label="Terms and conditions"
                type="checkbox"
                // validate={(value: boolean) => validateCheckBox(value)}
              />
              <span className="text-sm">Accept Terms</span>
            </div>
            <div className="form__field-container auth__button">
              <Button type="submit" isLoading={isLoading}>
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="form__field-container auth__button-center">
        <Button isTertiary onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Not a member? - Join Us' : 'Already registered? Go to Login'}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
