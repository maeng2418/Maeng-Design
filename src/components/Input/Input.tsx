/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useCallback, useState } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Checkbox from './Checkbox';
import InputNumber from './InputNumber';
import inputStyle from './styles';

export type ChangeInputEvent = (e?: ChangeEvent<HTMLInputElement>) => void;
export type ChangeInputValueEvent = (value?: string | number) => void;

export interface InputProps {
  color?: LightColorType | DarkColorType;
  type?: 'text' | 'email' | 'checkbox' | 'radio' | 'file' | 'number' | 'password' | 'tel';
  onChange?: ChangeInputEvent | ChangeInputValueEvent;
  placeholder?: string;
  value?: any;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  step?: number;
  children?: React.ReactNode;
  checked?: boolean;
}

const Input: React.FC<InputProps> = ({
  color = 'blue6',
  type = 'text',
  size = 'medium',
  prefix,
  suffix,
  disabled,
  onChange,
  children,
  checked,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const onSetFocus = useCallback(
    (value: boolean) => () => {
      setIsFocused(value);
    },
    [],
  );

  if (type === 'checkbox') {
    return (
      <Checkbox
        {...props}
        disabled={disabled}
        color={color}
        onChange={onChange as ChangeInputEvent}
        checked={checked}
      >
        {children}
      </Checkbox>
    );
  }

  if (type === 'number') {
    return (
      <InputNumber
        {...props}
        disabled={disabled}
        isFocused={isFocused}
        onFocus={onSetFocus(true)}
        onBlur={onSetFocus(false)}
        value={props.value}
        color={color}
        onChange={onChange as ChangeInputValueEvent}
        size={size}
      />
    );
  }

  if (
    (type === 'text' || type === 'email' || type === 'password' || type === 'tel') &&
    (prefix || suffix)
  ) {
    return (
      <span
        className={`affix ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`}
        css={inputStyle(color, size)}
      >
        <span className="prefix">{prefix}</span>
        <input
          {...props}
          type={type}
          disabled={disabled}
          onFocus={onSetFocus(true)}
          onBlur={onSetFocus(false)}
          onChange={onChange as ChangeInputEvent}
        />
        <span className="suffix">{suffix}</span>
      </span>
    );
  }
  return (
    <input
      {...props}
      type={type}
      css={inputStyle(color, size)}
      disabled={disabled}
      onChange={onChange as ChangeInputEvent}
    />
  );
};

export default Input;
