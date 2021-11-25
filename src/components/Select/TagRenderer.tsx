import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CloseOutlined, Tag } from '..';

interface TagRendererProps {
  selectedValue?: (string | number)[] | string | number;
  onDeselect: (value: string | number) => () => void;
  placeholder?: string;
  disabled?: boolean;
}

const TagRenderer: React.FC<TagRendererProps> = ({
  selectedValue,
  onDeselect,
  placeholder,
  disabled,
}) => {
  if (Array.isArray(selectedValue)) {
    return selectedValue.length > 0 ? (
      <div className="input">
        {selectedValue.map((v) => (
          <Tag key={uuidv4()}>
            <span>{v}</span>
            <CloseOutlined onClick={onDeselect(v)} />
          </Tag>
        ))}
      </div>
    ) : (
      <input type="text" readOnly placeholder={placeholder} disabled={disabled} />
    );
  } else if (selectedValue) {
    return (
      <div className="input">
        <Tag>{selectedValue}</Tag>
      </div>
    );
  }
  return <input type="text" readOnly placeholder={placeholder} disabled={disabled} />;
};

export default TagRenderer;
