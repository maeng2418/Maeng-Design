/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useLayoutEffect, useState } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface SwitchProps {
  color?: LightColorType | DarkColorType;
  checked?: boolean;
  onChange?: (checked: boolean, event: MouseEvent) => void;
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  color = 'blue6',
  checked = false,
  onChange,
  size = 'middle',
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
    <button css={createStyle(color, size, on)} disabled={disabled} onClick={onClickSwitch}>
      <div className="handle" />
    </button>
  );
};

export default Switch;
