import { Field, Form, Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../utils/Type';
import showNotification from '../../../utils/notifications';
import StateContext from '../../../utils/stateContext';
import { runValidation, validateCheckbox } from '../../../utils/validations';
import Button from '../../atoms/button';
import Logo from '../../atoms/logo';
import CheckboxField from '../../molecules/formik/CheckboxField';
import TextField from '../../molecules/formik/TextField';
import './styles.scss';

const Auth = () => {
  const { handlers, user } = useContext(StateContext);
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

  const onSubmit = async (values: Omit<User, 'uid'> & { password: string }) => {
    try {
      if (isLogin) {
        await handlers.login(values.email, values.password);
      } else {
        await handlers.register(values);
      }

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
            <Field
              component={CheckboxField}
              name="termsAndConditions"
              label="Terms and conditions"
              text="I am aware of the conditions and accept the terms"
              type="checkbox"
              validate={(isChecked: boolean) => validateCheckbox(isChecked)}
            />
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
