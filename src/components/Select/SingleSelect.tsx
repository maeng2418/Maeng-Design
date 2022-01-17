/** @jsxImportSource @emotion/react */
import React, {
  FocusEvent,
  MouseEvent,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { CaretDownOutlined, CaretUpOutlined, Tag } from '..';
import SelectOption from './Option';
import { SelectProps } from './Select';
import selectStyle, { optionListStyle } from './styles';

type SingleSelectProps = Omit<SelectProps, 'multiple'>;

const SingleSelect: React.FC<SingleSelectProps> = ({
  children,
  onSelect,
  onChange,
  placeholder = 'Select',
  defaultValue,
  size = 'medium',
  color = 'blue6',
  disabled = false,
  tagRender = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<ReactElement | undefined>();
  const [active, setActive] = useState<boolean>(false);

  // Default Value
  useLayoutEffect(() => {
    children &&
      React.Children.forEach(children, (child: React.ReactElement) => {
        if (child.props.value === defaultValue) setSelectedOption(child);
      });
  }, [children, defaultValue]);

  // Select 옵션 리스트 활성화
  const onSetActive = useCallback(
    (value: boolean) => (e: FocusEvent | MouseEvent) => {
      e.preventDefault();
      !disabled && setActive(value);
    },
    [disabled],
  );

  // Select
  const onSelectOption = useCallback(
    (child: ReactElement) => (e: MouseEvent<HTMLLIElement>) => {
      e.preventDefault();
      setSelectedOption(child);
      setActive(false);

      onSelect && onSelect(child.props.value);
      onChange && onChange(child.props.value);
    },
    [onChange, onSelect],
  );

  // Deselect
  const onDeselectOption = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      e.preventDefault();
      setSelectedOption(undefined);

      onChange && onChange();
    },
    [onChange],
  );

  const onPreventMouseDownEvent = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="select" css={selectStyle(active, color, size, tagRender, disabled)}>
      <div
        className="input-box"
        tabIndex={0}
        onBlur={onSetActive(false)}
        onClick={onSetActive(!active)}
      >
        {selectedOption && (tagRender ? <Tag size={size}>{selectedOption}</Tag> : selectedOption)}
        <input
          className="hidden-input"
          hidden={!!selectedOption}
          type="text"
          readOnly
          value={selectedOption?.props.value || ''}
          placeholder={placeholder}
          disabled={disabled}
        />
        {active ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
      {active && children && !disabled && (
        <ul className="option-list">
          {React.Children.map(children, (child: React.ReactElement) => {
            if (child.type !== SelectOption) {
              console.warn(
                `Select에서는 '${child.type}'은 사용 불가능합니다. 'Option'을 사용해주세요.`,
              );
              return <></>;
            }
            const { color: optionColor, disabled: optionDisabled } = child.props;
            const isSelected = selectedOption?.props.value === child.props.value ? 'selected' : '';
            return (
              <li
                className={`option ${isSelected}`}
                css={optionListStyle(optionColor || color, optionDisabled)}
                onClick={isSelected ? onDeselectOption : onSelectOption(child)}
                onMouseDown={onPreventMouseDownEvent}
              >
                {child}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SingleSelect;
