import { ErrorMessage, FieldProps, getIn } from 'formik';
import { getErrorMessage, isEmpty } from '../../../../utils/validations';
import Input, { InputProps } from '../../../atoms/input';

type TextFieldProps = FieldProps &
  InputProps & {
    label: string;
  };

const TextField = ({ field, form, label, ...props }: TextFieldProps) => {
  const { touched, errors } = form;
  const isTouched = getIn(touched, field.name);

  const error = isTouched && getIn(errors, field.name);
  const hasSuccess =
    isTouched && !error && !isEmpty(typeof field.value === 'string' ? field.value.trim() : field.value);
  const errorMessage = error ? getErrorMessage(error, label) : undefined;

  return (
    <>
      <Input placeholder={label} id={field.name} hasError={!!error} hasSuccess={hasSuccess} {...props} {...field} />
      {error && <ErrorMessage name={field.name!} component={() => <div className="error">{errorMessage}</div>} />}
    </>
  );
};

export default TextField;
