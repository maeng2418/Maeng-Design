/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useLayoutEffect, useState } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface SwitchProps {
  className?: string;
  color?: LightColorType | DarkColorType;
  checked?: boolean;
  onChange?: (checked: boolean, event: MouseEvent) => void;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  className = '',
  color = 'blue6',
  checked = false,
  onChange,
  size = 'medium',
  disabled = false,
}) => {
  const [on, setOn] = useState(checked);

  useLayoutEffect(() => {
    setOn(checked);
  }, [checked]);

  const onClickSwitch = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setOn((prev) => !prev);
      onChange && onChange(on, e);
    },
    [on, onChange],
  );

  return (
    <button
      className={className}
      css={createStyle(color, size, on)}
      disabled={disabled}
      onClick={onClickSwitch}
    >
      <div className="handle" />
    </button>
  );
};

export default Switch;
