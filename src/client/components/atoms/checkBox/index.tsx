import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './style.scss';

export type CheckboxProps = { text: string } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Checkbox = ({ className, text, ...props }: CheckboxProps) => (
  <div className="checkbox">
    <input type="checkbox" className="checkbox__input" {...props} />
    <span className="checkbox__text">{text}</span>
  </div>
);

export default Checkbox;
