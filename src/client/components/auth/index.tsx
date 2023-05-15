import { useContext, useState, useEffect, useCallback } from 'react';
import StateContext from '../../utils/stateContext';
import { Field, Form, Formik } from 'formik';
import Input from '../input';
import { runValidation, validateCheckBox } from '../../utils/validations';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/Type';
import debounce from '../../utils/debounce';

const Auth = () => {
  const { handlers, user } = useContext(StateContext);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const initialValues = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validateUserName = useCallback(
    debounce(async (value: unknown, setFieldError: any) => {
      const error = await validate(value as string);
      if (error && !!error.length) {
        setFieldError('userName', error);
        console.log('error', error);
      }
    }, 800),
    []
  );

  const validate = async (value: string) => {
    const error: string[] = [];
    console.log('chamu', value);
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
    } catch (err: any) {
      console.log('user name exist', err);
    }
    return error.length ? error : undefined;
  };

  const registerHandler = async (values: Omit<User, 'uid'> & { password: string }) => {
    try {
      await handlers.register(values);
      navigate('/');
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

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const submitHandler = isLogin ? loginHandler : registerHandler;

  return (
    <div className="auth">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ errors, setFieldError }) => (
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
                  <Field
                    component={Input}
                    name="userName"
                    label={'User Name'}
                    validate={(value: string) => validateUserName(value, setFieldError)}
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
