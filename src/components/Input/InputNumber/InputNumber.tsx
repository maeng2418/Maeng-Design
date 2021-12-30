/** @jsxImportSource @emotion/react */
import React, {
  ChangeEvent,
  MouseEventHandler,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import add, { num2str, trimNumber } from '../../../utils/numbers';
import { ChangeInputValueEvent, InputProps } from '../Input';
import createStyle from './styles';

export interface InputNumberProps {
  disabled?: InputProps['disabled'];
  value?: InputProps['value'];
  name?: InputProps['name'];
  placeholder?: InputProps['placeholder'];
  onChange?: ChangeInputValueEvent;
  color?: InputProps['color'];
  size?: InputProps['size'];
  step?: InputProps['step'];
}

const InputNumber: React.FC<InputNumberProps> = ({
  disabled = false,
  value,
  onChange,
  color = 'blue6',
  size = 'medium',
  step = 1,
  children,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string | number | undefined>(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const onSetFocus = useCallback(
    (value: boolean) => () => {
      setIsFocused(value);
    },
    [],
  );

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
      css={createStyle(color, size)}
    >
      <input
        {...props}
        type={'number'}
        disabled={disabled}
        onFocus={onSetFocus(true)}
        onBlur={onSetFocus(false)}
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
