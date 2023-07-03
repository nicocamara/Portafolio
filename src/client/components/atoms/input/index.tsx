import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import getAssetUrl from '../../../utils/getAssetUrl';
import './style.scss';

type CustomInputProps = {
  hasError?: boolean;
  hasSuccess?: boolean;
};

export type InputProps = CustomInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ className, name, hasError, hasSuccess, ...props }: InputProps) => {
  const statusIcon = hasError ? 'error.svg' : hasSuccess ? 'success.svg' : undefined;

  return (
    <label className="label" htmlFor={name}>
      <input
        className={classNames('input', { input__error: hasError }, className)}
        style={statusIcon && { backgroundImage: `url('${getAssetUrl(statusIcon)}')` }}
        {...props}
      />
      <span className="span">{props.placeholder}</span>
    </label>
  );
};

export default Input;
