import classNames from 'classnames';
import { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import './style.scss';

type CheckBoxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  isSecondary?: boolean;
  isTertiary?: boolean;
  className?: string;
};

const CheckBox = ({ className, isSecondary, isTertiary }: CheckBoxProps) => {
  const dynamicClasses = {
    'checkBox--isSecondary': isSecondary,
    'checkBox--isTertiary': isTertiary,
  };

  return <input type="checkbox" className={classNames('checkBox', dynamicClasses, className)}></input>;
};

export default CheckBox;
