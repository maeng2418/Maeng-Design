/** @jsxImportSource @emotion/react */
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ChangeInputValueEvent, InputProps } from '../Input';
import createStyle from './styles';

// url(
//   "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><linearGradient id='gradient'><stop offset='10%' stop-color='%23F00'/><stop offset='90%' stop-color='%23fcc'/> </linearGradient><rect fill='url(%23gradient)' x='0' y='0' width='100%' height='100%'/></svg>",
// );

export interface RadioProps {
  className?: string;
  children?: React.ReactNode;
  checked?: InputProps['checked'];
  disabled?: InputProps['disabled'];
  color?: InputProps['color'];
  onChange?: ChangeInputValueEvent;
  value?: InputProps['value'];
  name?: InputProps['name'];
}

const Radio: React.FC<RadioProps> = ({
  className = '',
  children,
  checked = false,
  disabled = false,
  color = 'blue6',
  onChange,
  value,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useLayoutEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const onChangeCheck = useCallback(() => {
    setIsChecked(true);
    onChange && onChange(value);
  }, [onChange, value]);

  return (
    <label className={className} css={createStyle(color, isChecked, disabled)}>
      <input
        {...props}
        type="radio"
        onChange={onChangeCheck}
        checked={isChecked}
        disabled={disabled}
      />
      <span className="radio"></span>
      {children && <span className="label">{children}</span>}
    </label>
  );
};

export default Radio;
