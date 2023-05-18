import { Field, Form, Formik } from 'formik';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/Type';
import debounce from '../../utils/debounce';
import StateContext from '../../utils/stateContext';
import { runValidation } from '../../utils/validations';
import Button from '../atoms/button';
import Logo from '../atoms/logo';
import Input from '../input';
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
  };

  const validateUserName = useCallback(
    debounce(async (value: unknown, setFieldError: any) => {
      const error = await validate(value as string);
      if (error && !!error.length) {
        setFieldError('userName', error);
      }
    }, 800),
    []
  );

  const validate = async (value: string) => {
    const error: string[] = [];
    if (!value) {
      error.push('isRequired');
      return error;
    }

    if (value.length < 5) {
      error.push('minLength');
      return error;
    }

    if (value.length > 25) {
      error.push('maxLength');
      return error;
    }

    try {
      await handlers.checkUserName(value);
    } catch (err: any) {}
    return error.length ? error : undefined;
  };

  const onSubmit = async (values: Omit<User, 'uid'> & { password: string }) => {
    try {
      if (isLogin) {
        await handlers.login(values.email, values.password);
      } else {
        await handlers.register(values);
      }
      navigate('/');
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
        {({ errors, setFieldError }) => (
          <Form className="auth__form">
            <h2 className="form__headline">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
            {!isLogin && (
              <>
                <div className="form__field-container">
                  <Field
                    component={Input}
                    name="firstName"
                    label="First Name"
                    type="text"
                    validate={(value: string) => runValidation(value, 'firstName')}
                  />
                </div>
                <div className="form__field-container">
                  <Field
                    component={Input}
                    name="lastName"
                    label={'last Name'}
                    type="text"
                    validate={(value: string) => runValidation(value, 'lastName')}
                  />
                </div>
                <div className="form__field-container">
                  <Field
                    component={Input}
                    name="userName"
                    label={'User Name'}
                    type="text"
                    validate={(value: string) => validateUserName(value, setFieldError)}
                  />
                </div>
              </>
            )}
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
              <Button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</Button>
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
