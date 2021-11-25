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
import TagRenderer from './TagRenderer';

export interface SelectProps {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
  onSelect?: (value: string | number) => void;
  onChange?: (value: (string | number)[] | string | number) => void;
  multiple?: boolean;
  placeholder?: string;
  defaultValue?: string | number | (string | number)[];
  size?: 'large' | 'medium' | 'small';
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  optionStyle?: SerializedStyles;
  tagRender?: boolean;
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
  tagRender = false,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const [multiSelectedValue, setMultiSelectedValue] = useState<(string | number)[]>([]);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (multiple) {
      setMultiSelectedValue((defaultValue as (string | number)[]) || []);
    } else {
      setSelectedValue(defaultValue as string | number);
    }
  }, [multiple, defaultValue]);

  const onSelectValue = useCallback(
    (value: string | number, disabled: boolean) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      if (multiple && !multiSelectedValue.includes(value)) {
        setMultiSelectedValue([...multiSelectedValue, value]);
        setActive(true);
      }
      if (multiple && multiSelectedValue.includes(value)) {
        setMultiSelectedValue(multiSelectedValue.filter((v) => v !== value));
        setActive(true);
      }
      if (!multiple) {
        setSelectedValue(value);
        setActive(false);
      }
      onSelect && onSelect(value);
      onChange && onChange(multiple ? multiSelectedValue : selectedValue);
    },
    [multiSelectedValue, multiple, onChange, onSelect, selectedValue],
  );

  const values = useMemo(() => {
    if (multiple && multiSelectedValue.length > 0) return multiSelectedValue.join(', ');
    if (multiple) return '';
    return selectedValue || '';
  }, [multiple, selectedValue, multiSelectedValue]);

  const onDeselect = useCallback(
    (value: string | number) => () => {
      !disabled && setMultiSelectedValue(multiSelectedValue.filter((v) => v !== value));
    },
    [disabled, multiSelectedValue],
  );

  const onSetActive = useCallback(
    (value: boolean) => () => {
      !disabled && setActive(value);
    },
    [disabled],
  );

  return (
    <div
      className="select"
      css={createSelectStyle(active, color, size, disabled)}
      tabIndex={0}
      onBlur={onSetActive(false)}
    >
      <div className="input-box" onClick={onSetActive(true)}>
        {tagRender ? (
          <TagRenderer
            onDeselect={onDeselect}
            selectedValue={multiple ? multiSelectedValue : selectedValue}
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
          const selectedTag = (function () {
            if (
              (multiple && multiSelectedValue.includes(value)) ||
              (!multiple && selectedValue === value)
            ) {
              return 'selected';
            }
            return '';
          })();
          return (
            <div
              className={`option-item ${selectedTag}`}
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
