/** @jsxImportSource @emotion/react */
import React, {
  FocusEvent,
  MouseEvent,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CaretDownOutlined, CaretUpOutlined, CloseOutlined, Tag } from '..';
import SelectOption from './Option';
import { SelectProps } from './Select';
import selectStyle, { multiSelectedValueStyle, optionListStyle } from './styles';

type MultiSelectProps = Omit<SelectProps, 'multiple'>;

const MultiSelect: React.FC<MultiSelectProps> = ({
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
  const [selectedOption, setSelectedOption] = useState<ReactElement[] | undefined>();
  const [active, setActive] = useState<boolean>(false);

  // Default Value
  useLayoutEffect(() => {
    const selectedList: ReactElement[] = [];
    children &&
      React.Children.forEach(children, (child: React.ReactElement) => {
        if (!Array.isArray(defaultValue) && child.props.value === defaultValue)
          selectedList.push(child);
        if (Array.isArray(defaultValue) && defaultValue.includes(child.props.value))
          selectedList.push(child);
      });
    if (selectedList.length > 0) setSelectedOption(selectedList);
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
  const onSelectValue = useCallback(
    (child: ReactElement): React.MouseEventHandler =>
      (e) => {
        e.preventDefault();
        selectedOption ? setSelectedOption([...selectedOption, child]) : setSelectedOption([child]);

        onSelect && onSelect(child.props.value);
        onChange && onChange(child.props.value);
      },
    [onChange, onSelect, selectedOption],
  );

  // Deselect
  const onDeselectOption = useCallback(
    (child: ReactElement): React.MouseEventHandler =>
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        const filteredOptions = selectedOption?.filter(
          (selectedItem) => selectedItem.props.value !== child.props.value,
        );
        if (filteredOptions && filteredOptions.length > 0) {
          setSelectedOption(filteredOptions);
        } else {
          setSelectedOption(undefined);
        }

        onChange && onChange(filteredOptions?.map((child) => child.props.value));
      },
    [onChange, selectedOption],
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
        {selectedOption?.map((option) =>
          tagRender ? (
            <Tag key={uuidv4()} size={size}>
              <span>{option}</span>
              <CloseOutlined onClick={onDeselectOption(option)} />
            </Tag>
          ) : (
            <span css={multiSelectedValueStyle} key={option.key}>
              {option}
            </span>
          ),
        )}

        <input
          className="hidden-input"
          hidden={!!selectedOption}
          type="text"
          readOnly
          value={selectedOption?.map((option) => option.props.value).join(',') || ''}
          placeholder={placeholder}
          disabled={disabled}
        />
        {active ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
      {active && children && !disabled && (
        <ul className="option-list" onMouseDown={onPreventMouseDownEvent}>
          {React.Children.map(children, (child: React.ReactElement) => {
            if (child.type !== SelectOption) {
              console.warn(
                `Select에서는 '${child.type}'은 사용 불가능합니다. 'Option'을 사용해주세요.`,
              );
              return <></>;
            }
            const { color: optionColor, disabled: optionDisabled } = child.props;
            const isSelected = selectedOption?.some(
              (option) => option.props.value === child.props.value,
            )
              ? 'selected'
              : '';
            return (
              <li
                className={`option ${isSelected}`}
                css={optionListStyle(optionColor || color, optionDisabled)}
                onClick={isSelected ? onDeselectOption(child) : onSelectValue(child)}
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

export default MultiSelect;
