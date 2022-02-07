/** @jsxImportSource @emotion/react */
import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { ChangeInputValueEvent, InputProps } from '../Input';
import createStyle from './styles';

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
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (ref.current) ref.current.checked = true;
  }, [checked]);

  const onChangeCheck = useCallback(() => {
    onChange && onChange(value);
  }, [onChange, value]);

  return (
    <label className={className} css={createStyle(color, disabled)}>
      <input
        {...props}
        ref={ref}
        value={value}
        type="radio"
        onChange={onChangeCheck}
        disabled={disabled}
      />
      <span className="radio"></span>
      {children && <span className="label">{children}</span>}
    </label>
  );
};

export default Radio;
