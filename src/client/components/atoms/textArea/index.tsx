import classNames from 'classnames';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import './style.scss';

export type TextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextArea = ({ className, name, ...props }: TextAreaProps) => (
  <textarea name={name} className={classNames('text-area', className)} {...props} />
);

export default TextArea;
