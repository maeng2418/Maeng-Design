import React, {
  JSXElementConstructor,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Radio from '.';
import { ChangeInputEvent, InputProps } from '../Input';

interface RadioGroupProps {
  value?: InputProps['value'];
  name?: InputProps['name'];
  onChange?: ChangeInputEvent;
  disabled?: InputProps['disabled'];
  color?: InputProps['color'];
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  name,
  onChange,
  disabled = false,
  color = 'blue6',
}) => {
  const radioName = name || uuidv4();
  const [radioGroupValue, setRadioGroupValue] = useState(value);

  useLayoutEffect(() => {
    setRadioGroupValue(value);
  }, [value]);

  const onChangeRadioGroupValue = useCallback(
    (value: InputProps['value']) => {
      setRadioGroupValue(value);
      onChange && onChange(value);
    },
    [onChange],
  );

  return (
    <div>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (child.type !== Radio) {
          console.warn(
            `RadioGroup에서는 '${child.type}'은 사용 불가능합니다. 'Radio'를 사용해주세요.`,
          );
          return <></>;
        }
        return React.cloneElement(child, {
          ...child.props,
          name: radioName,
          color: child.props.color || color,
          onChange: onChangeRadioGroupValue,
          disabled: disabled || child.props.disabled,
          checked: child.props.value === radioGroupValue,
        });
      })}
    </div>
  );
};

export default RadioGroup;
