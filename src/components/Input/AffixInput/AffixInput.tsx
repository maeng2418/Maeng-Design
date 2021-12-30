/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react';
import { DarkColorType, LightColorType } from '../../../styles/colors';
import { ChangeInputEvent, InputProps } from '../Input';
import createStyle from './styles';

export interface AffixInputProps {
  type?: 'text' | 'email' | 'password' | 'tel';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: InputProps['size'];
  disabled?: InputProps['disabled'];
  color?: LightColorType | DarkColorType;
  value?: InputProps['value'];
  placeholder?: InputProps['placeholder'];
  name?: InputProps['name'];
  onChange?: ChangeInputEvent;
}

const AffixInput: React.FC<AffixInputProps> = ({
  type = 'text',
  prefix,
  suffix,
  size = 'medium',
  disabled,
  color = 'blue6',
  onChange,
  children,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onSetFocus = useCallback(
    (value: boolean) => () => {
      setIsFocused(value);
    },
    [],
  );

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
        onChange={onChange as ChangeInputEvent}
      />
      <span className="suffix">{suffix}</span>
    </span>
  );
};

export default AffixInput;
