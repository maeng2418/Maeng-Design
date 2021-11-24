import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CloseOutlined, Tag } from '..';

interface TagRendererProps {
  selectedValue?: (string | number)[] | string | number;
  onDeselect: (value: string | number) => () => void;
}

const TagRenderer: React.FC<TagRendererProps> = ({ selectedValue, onDeselect }) => {
  if (Array.isArray(selectedValue)) {
    return (
      <div className="input">
        {selectedValue.map((v) => (
          <Tag key={uuidv4()}>
            <span>{v}</span>
            <CloseOutlined onClick={onDeselect(v)} />
          </Tag>
        ))}
      </div>
    );
  } else if (selectedValue) {
    return (
      <div className="input">
        <Tag>{selectedValue}</Tag>
      </div>
    );
  }
  return <></>;
};

export default TagRenderer;
