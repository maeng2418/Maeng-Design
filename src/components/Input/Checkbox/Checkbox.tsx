/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useCallback, useLayoutEffect, useState } from 'react';
import { ChangeInputEvent, InputProps } from '../Input';
import createStyle from './styles';

export interface CheckboxProps {
  children?: React.ReactNode;
  checked?: InputProps['checked'];
  disabled?: InputProps['disabled'];
  color?: InputProps['color'];
  onChange?: ChangeInputEvent;
  name?: InputProps['name'];
}

const Checkbox: React.FC<CheckboxProps> = ({
  children,
  checked = false,
  disabled = false,
  color = 'blue6',
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useLayoutEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const onChangeCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => !prev);
      onChange && onChange(e);
    },
    [onChange],
  );
  return (
    <label css={createStyle(color, isChecked, disabled)}>
      <input
        {...props}
        type="checkbox"
        onChange={onChangeCheck}
        checked={isChecked}
        disabled={disabled}
      />
      <span className="checkbox"></span>
      {children && <span className="label">{children}</span>}
    </label>
  );
};

export default Checkbox;
