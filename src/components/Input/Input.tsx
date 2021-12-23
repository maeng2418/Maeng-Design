/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useCallback, useState } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface InputProps {
  color?: LightColorType | DarkColorType;
  type?: 'text' | 'email' | 'checkbox' | 'radio' | 'file' | 'number' | 'password' | 'tel';
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: any;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  color = 'blue6',
  type = 'text',
  size = 'medium',
  prefix,
  suffix,
  disabled,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const onSetFocus = useCallback(
    (value: boolean) => () => {
      setIsFocused(value);
    },
    [],
  );

  if (
    (type === 'text' ||
      type === 'email' ||
      type === 'number' ||
      type === 'password' ||
      type === 'tel') &&
    (prefix || suffix)
  ) {
    return (
      <span
        className={`affix ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`}
        css={createStyle(color, size)}
      >
        <span className="prefix">{prefix}</span>
        <input
          {...props}
          type={type}
          disabled={disabled}
          onFocus={onSetFocus(true)}
          onBlur={onSetFocus(false)}
          value={value}
        />
        <span className="suffix">{suffix}</span>
      </span>
    );
  }
  return (
    <input
      {...props}
      type={type}
      css={createStyle(color, size)}
      disabled={disabled}
      value={value}
    />
  );
};

export default Input;
