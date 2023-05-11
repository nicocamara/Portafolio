import { useContext, useState } from 'react';
import Input from '../input';
import { Field, Form, Formik } from 'formik';
import { runValidation } from '../../utils/validations';
import { useNavigate } from 'react-router';
import StateContext from '../../utils/stateContext';
import './styles.scss';

const Login = () => {
  const { handlers } = useContext(StateContext);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const submitHandler = async (values: { email: string; password: string }) => {
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

  return (
    <div className="login">
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <>
          <Form className="form">
            <div className="sign">Sing Inn</div>
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
              label="Pasword"
              type="password"
              validate={(value: string) => runValidation(value, 'password')}
            />
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
            <div className="form-message">Continuing</div>
          </Form>
        </>
      </Formik>
    </div>
  );
};

export default Login;
