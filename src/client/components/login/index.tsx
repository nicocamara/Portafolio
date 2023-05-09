import { useState } from 'react';
import Input from '../input';
import { Field, Form, Formik } from 'formik';
import { runValidation } from '../../utils/validations';

const Login = () => {
  const [loggerIn, setLoggerIn] = useState();

  const initialValues = {
    email: '',
    password: '',
  };

  const submitHandler = () => {
    console.log('hola mi ray');
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <>
          <Form className="form">
            <div className="sign">Sing In</div>
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
