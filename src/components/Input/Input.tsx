/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import AffixInput from './AffixInput';
import Checkbox from './Checkbox';
import InputNumber from './InputNumber';
import Radio from './Radio';
import inputStyle from './styles';

export type ChangeInputEvent = (e?: ChangeEvent<HTMLInputElement>) => void;
export type ChangeInputValueEvent = (value?: any) => void;

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
  name?: string;
}

const Input: React.FC<InputProps> = ({
  color = 'blue6',
  type = 'text',
  size = 'medium',
  prefix,
  suffix,
  disabled = false,
  onChange,
  children,
  checked,
  value,
  ...props
}) => {
  if (type === 'radio') {
    return (
      <Radio
        {...props}
        value={value}
        disabled={disabled}
        color={color}
        onChange={onChange as ChangeInputValueEvent}
        checked={checked}
      />
    );
  }

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
        value={value}
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
      <AffixInput
        {...props}
        value={value}
        type={type}
        prefix={prefix}
        suffix={suffix}
        disabled={disabled}
        color={color}
        size={size}
        onChange={onChange as ChangeInputEvent}
      />
    );
  }
  return (
    <input
      {...props}
      value={value}
      type={type}
      css={inputStyle(color, size)}
      disabled={disabled}
      onChange={onChange as ChangeInputEvent}
    />
  );
};

export default Input;
