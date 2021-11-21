/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React, {
  JSXElementConstructor,
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createSelectStyle, { createOptionStyle } from './styles';

export interface SelectProps {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
  onSelect?: (value: string | number) => void;
  onChange?: (value: (string | number)[]) => void;
  multiple?: boolean;
  placeholder?: string;
  defaultValue?: string | number | (string | number)[];
  size?: 'large' | 'medium' | 'small';
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  optionStyle?: SerializedStyles;
}

const Select: React.FC<SelectProps> = ({
  children,
  onSelect,
  onChange,
  multiple = false,
  placeholder = 'Select',
  defaultValue,
  size = 'medium',
  color = 'blue6',
  disabled = false,
  optionStyle,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>();
  const [multiSelectedValue, setMultiSelectedValue] = useState<(string | number)[]>([]);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (multiple) {
      setSelectedValue(defaultValue as string | number);
    } else {
      setMultiSelectedValue((defaultValue as (string | number)[]) || []);
    }
  }, [multiple, defaultValue]);

  const onSelectValue = useCallback(
    (value: string | number, disabled: boolean) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      if (multiple) {
        setMultiSelectedValue([...multiSelectedValue, value]);
      } else {
        setSelectedValue(value);
        setActive(false);
      }
      onSelect && onSelect(value);
    },
    [multiple, multiSelectedValue],
  );

  const onSetActive = useCallback(() => {
    !disabled && setActive((prev) => !prev);
  }, [disabled]);

  const values = useMemo(() => {
    if (multiple && multiSelectedValue.length > 0) return multiSelectedValue.join(', ');
    if (multiple) return undefined;
    return selectedValue;
  }, [multiple, selectedValue, multiSelectedValue]);

  useEffect(() => {
    console.log(selectedValue);
    console.log(multiSelectedValue);
  }, [selectedValue, multiSelectedValue]);

  return (
    <div css={createSelectStyle(active, color, size, disabled)} onBlur={onSetActive}>
      <div className="input-box" onClick={onSetActive}>
        {multiple ? (
          <input
            type="text"
            readOnly
            value={values}
            placeholder={placeholder}
            disabled={disabled}
          />
        ) : (
          <input
            type="text"
            readOnly
            value={values}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
        {active ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
      <div className="option-list">
        {React.Children.map(children, (child: React.ReactElement) => {
          const { value, disabled: optionDisabled } = child.props;
          return (
            <div
              className={`option-item ${selectedValue === value ? 'selected' : ''}`}
              onClick={onSelectValue(value, optionDisabled)}
              css={createOptionStyle(color, size, optionDisabled, optionStyle)}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
