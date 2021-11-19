/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React, {
  JSXElementConstructor,
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface SelectProps {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
  defaultValue?: string | number;
  size?: 'large' | 'medium' | 'small';
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  optionStyle?: SerializedStyles;
}

const Select: React.FC<SelectProps> = ({
  children,
  onSelect,
  placeholder = 'Select',
  defaultValue,
  size = 'medium',
  color = 'blue6',
  disabled = false,
  optionStyle,
}) => {
  const [selectedValue, setSelectedValue] = useState<SelectProps['defaultValue']>(defaultValue);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    React.Children.forEach(children, (child: React.ReactElement) => {
      const { value } = child.props;
      if (value === defaultValue) {
        setSelectedValue(defaultValue);
      }
    });
  }, [children, defaultValue]);

  const onSelectValue = useCallback(
    (value: string | number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setActive(false);
      setSelectedValue(value);
      onSelect && onSelect(value);
    },
    [],
  );

  const onSetActive = useCallback(() => {
    !disabled && setActive((prev) => !prev);
  }, [disabled]);

  return (
    <div css={createStyle(active, color, size, disabled, optionStyle)} onBlur={onSetActive}>
      <div className="selected" onClick={onSetActive}>
        <input
          type="text"
          readOnly
          value={selectedValue}
          placeholder={placeholder}
          disabled={disabled}
        />
        {active ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
      <div className="option-list">
        {React.Children.map(children, (child: React.ReactElement) => {
          const { value } = child.props;
          return (
            <div className={`option-item ${value}`} onClick={onSelectValue(value)}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
