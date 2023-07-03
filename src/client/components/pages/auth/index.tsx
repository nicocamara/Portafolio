import { Field, Form, Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../utils/Type';
import showNotification from '../../../utils/notifications';
import StateContext from '../../../utils/stateContext';
import { runValidation } from '../../../utils/validations';
import Button from '../../atoms/button';
import Logo from '../../atoms/logo';
import TextField from '../../molecules/formik/TextField';
import './styles.scss';
import LoadingSpinner from '../../atoms/loadingSpinneer';

const Auth = () => {
  const { handlers, user } = useContext(StateContext);
  const [isLogin, setIsLogin] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  };

  const onSubmit = async (values: Omit<User, 'uid'> & { password: string }) => {
    try {
      if (isLogin) {
        setSpinner(true);

        await handlers.login(values.email, values.password);
      } else {
        await handlers.register(values);
      }
      setSpinner(false);
      navigate('/');
    } catch (error: any) {
      if (error.statusCode === 423) {
        showNotification(error.message);
      }

      if (error.statusCode === 422) {
        showNotification('Email Already in Use');
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  if (spinner) {
    return <LoadingSpinner />;
  }

  return (
    <div className="auth">
      <div className="auth__logo">
        <Logo dark />
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="auth__form">
          <h2 className="form__headline">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          {!isLogin && (
            <>
              <div className="form__field-container">
                <Field
                  component={TextField}
                  name="firstName"
                  label="First Name"
                  type="text"
                  validate={(value: string) => runValidation(value, 'firstName')}
                />
              </div>
              <div className="form__field-container">
                <Field
                  component={TextField}
                  name="lastName"
                  label={'last Name'}
                  type="text"
                  validate={(value: string) => runValidation(value, 'lastName')}
                />
              </div>
              <div className="form__field-container">
                <Field
                  component={TextField}
                  name="userName"
                  label={'User Name'}
                  type="text"
                  validate={(value: string) => runValidation(value, 'userName')}
                />
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
            <Field name="termsAndConditions" label="Terms and conditions" type="checkbox" />
            <span className="text-sm">Accept Terms</span>
          </div>
          <div className="form__field-container auth__button">
            <Button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</Button>
          </div>
        </Form>
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
