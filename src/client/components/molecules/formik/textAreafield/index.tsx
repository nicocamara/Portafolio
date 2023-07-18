import { FieldProps } from 'formik';
import TextArea, { TextAreaProps } from '../../../atoms/textArea';

type TextFieldProps = FieldProps &
  TextAreaProps & {
    label: string;
  };

const TextAreaField = ({ field, form, label, ...props }: TextFieldProps) => (
  <TextArea placeholder={label} id={field.name} {...props} {...field} />
);

export default TextAreaField;
