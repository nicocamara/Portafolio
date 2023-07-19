import { ErrorMessage, FieldProps, getIn } from 'formik';
import { getErrorMessage } from '../../../../utils/validations';
import Checkbox from '../../../atoms/checkBox';
import { InputProps } from '../../../atoms/input';

type CheckboxFieldProps = FieldProps &
  InputProps & {
    label: string;
    text: string;
  };

const CheckboxField = ({ field, form, label, ...props }: CheckboxFieldProps) => {
  const { touched, errors } = form;
  const isTouched = getIn(touched, field.name);

  const error = isTouched && getIn(errors, field.name);
  const errorMessage = error ? getErrorMessage(error, label) : undefined;

  return (
    <>
      <Checkbox {...props} {...field} />
      {error && <ErrorMessage name={field.name!} component={() => <div className="error">{errorMessage}</div>} />}
    </>
  );
};

export default CheckboxField;
