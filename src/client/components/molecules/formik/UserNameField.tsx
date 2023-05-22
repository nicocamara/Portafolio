import { ChangeEvent, useCallback, useContext, useRef, useState } from 'react';
import debounce from '../../../utils/debounce';
import StateContext from '../../../utils/stateContext';
import { ErrorKey, getErrorMessage, isEmpty } from '../../../utils/validations';
import Input from '../../atoms/input';
import LoadingDots from '../../atoms/loadingDots';
import './style.scss';

export const validate = async (value: string, searchHandler?: (userName: string) => Promise<void>) => {
  const errors: ErrorKey[] = [];

  if (!value) {
    errors.push('isRequired');
    return errors;
  }

  if (value.length < 5) {
    errors.push('minLength');
    return errors;
  }

  if (value.length > 25) {
    errors.push('maxLength');
    return errors;
  }

  if (/\s/.test(value)) {
    errors.push('whitespaces');
    return errors;
  }

  if (!/^[a-zA-Z\d\-\\.]*$/.test(value)) {
    errors.push('invalid');
    return errors;
  }

  try {
    await searchHandler?.(value);
  } catch (err: any) {
    if (err.statusCode === 422) {
      errors.push('unAvailable');
    }
  }
  return errors;
};

type UserNameFieldProps = {
  setUserNameField: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  setUserNameError: (field: string, message: string | undefined) => void;
};
const UserNameField = ({ setUserNameField, setUserNameError }: UserNameFieldProps) => {
  const previousValue = useRef('');
  const touchedRed = useRef(false);
  const [isLoading, setLoading] = useState(false);
  const { handlers } = useContext(StateContext);
  const [userName, setUserName] = useState('');
  const [userNameErrors, setUserNameErros] = useState<ErrorKey[]>([]);

  const debouncedValidate = useCallback(
    debounce(async (value: unknown) => {
      setLoading(true);
      const incomingUserName = value as string;
      const finalErrors = await validate(incomingUserName, handlers.checkUserName);
      setUserNameErros(finalErrors);
      if (!finalErrors.length) {
        setUserNameField('userName', incomingUserName);
        previousValue.current = incomingUserName;
      } else {
        setUserNameError('userName', finalErrors[0]);
      }
      setLoading(false);
    }, 800),
    []
  );

  const hasError = touchedRed.current && !!userNameErrors.length;
  const hasSuccess =
    touchedRed.current && !hasError && !isEmpty(typeof userName === 'string' ? userName.trim() : userName);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    debouncedValidate(e.target.value);
  };

  const onFocus = () => {
    touchedRed.current = true;
  };

  return (
    <div className="userName">
      <Input
        id="userName"
        placeholder="User Name"
        hasError={hasError}
        hasSuccess={hasSuccess}
        onFocus={onFocus}
        onChange={onChange}
        value={userName}
      />
      <div className="userName__leyend">
        <span>This will be your portfolio&apos;s url:</span>
        {isLoading && (
          <div className="userName__loading">
            <LoadingDots />
          </div>
        )}
      </div>
      <div className="userName__url">
        www.cvshowcase.com/
        <span className="userName__url-value">{userName ? userName : '<your-username>'}</span>
      </div>

      {hasError && <div className="error">{getErrorMessage(userNameErrors[0], 'User Name')}</div>}
    </div>
  );
};

export default UserNameField;
