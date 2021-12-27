/** @jsxImportSource @emotion/react */
import React, {
  ChangeEvent,
  FocusEventHandler,
  MouseEventHandler,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import add, { num2str, trimNumber } from '../../utils/numbers';
import { ChangeInputValueEvent, InputProps } from './Input';
import inputStyle from './styles';

interface InputNumberProps {
  disabled?: InputProps['disabled'];
  onFocus: FocusEventHandler<HTMLInputElement>;
  isFocused: boolean;
  onBlur: FocusEventHandler<HTMLInputElement>;
  value?: InputProps['value'];
  onChange?: ChangeInputValueEvent;
  color?: InputProps['color'];
  size?: InputProps['size'];
  step?: InputProps['step'];
}

const InputNumber: React.FC<InputNumberProps> = ({
  disabled,
  onFocus,
  isFocused,
  onBlur,
  value,
  onChange,
  color,
  size,
  step = 1,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string | number>(value);

  useLayoutEffect(() => {
    const initValue = Number(value);
    if (Number.isNaN(initValue)) {
      setInputValue('');
      return;
    }
    if (initValue > Number.MAX_SAFE_INTEGER || initValue < Number.MIN_SAFE_INTEGER) {
      setInputValue(num2str(initValue));
      return;
    }
    setInputValue(value);
  }, [value]);

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = trimNumber(e.target.value).fullStr;
      setInputValue(value);
      onChange && onChange(value);
    },
    [onChange],
  );

  const onClickButton = useCallback(
    (step: number): MouseEventHandler<HTMLButtonElement> =>
      () => {
        const value = add(inputValue || 0, step);
        setInputValue(value);
        onChange && onChange(value);
      },
    [inputValue, onChange],
  );

  return (
    <span
      className={`number ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`}
      css={inputStyle(color, size)}
    >
      <input
        {...props}
        type={'number'}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        value={inputValue}
        onChange={onChangeInput}
      />
      <span className="input-number-handler">
        <button onClick={onClickButton(+step)}>+</button>
        <button onClick={onClickButton(-step)}>-</button>
      </span>
    </span>
  );
};

export default InputNumber;
