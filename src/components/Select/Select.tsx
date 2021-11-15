import React, { JSXElementConstructor, MouseEvent, ReactElement } from 'react';

export interface SelectProps {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
  onSelect?: (value: string | number) => void;
}

const Select: React.FC<SelectProps> = ({ children, onSelect }) => {
  const onSelectValue = (value: string | number) => (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSelect && onSelect(value);
  };
  return (
    <div>
      {React.Children.map(children, (child: React.ReactElement) => {
        const { value } = child.props;
        return (
          <div className={value} onClick={onSelectValue(value)}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default Select;
