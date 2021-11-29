import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CloseOutlined, Tag } from '..';

interface TagRendererProps {
  selectedValue?: (string | number)[] | string | number;
  onDeselect: (value: string | number) => React.MouseEventHandler<SVGSVGElement>;
  placeholder?: string;
  disabled?: boolean;
}

const TagRenderer: React.FC<TagRendererProps> = ({
  selectedValue,
  onDeselect,
  placeholder,
  disabled,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState(0);

  useLayoutEffect(() => {
    if (Array.isArray(selectedValue)) {
      const CONTAINER_PADDING_SIZE = 15;
      const GAP_SIZE = 5;
      const CARET_ICON_SIZE = 36;

      const containerWidth = containerRef.current?.clientWidth || 0;
      let tagListWidth = 0;
      let maxIndex = 0;
      (containerRef.current?.childNodes as NodeListOf<HTMLSpanElement>)?.forEach(
        (tag: HTMLSpanElement, idx: number) => {
          if (
            tagListWidth + tag.clientWidth <=
            containerWidth - CONTAINER_PADDING_SIZE * 2 - GAP_SIZE * maxIndex - CARET_ICON_SIZE
          ) {
            tagListWidth += tag.clientWidth;
            maxIndex = idx;
          }
        },
      );
      setMax(maxIndex);
    }
  }, [selectedValue]);

  const setTagStyle = useCallback(
    (index: number) => {
      if (index > max)
        return {
          position: 'absolute',
          opacity: 0,
        } as React.CSSProperties;
    },
    [max],
  );

  if (Array.isArray(selectedValue)) {
    return selectedValue.length > 0 ? (
      <div className="input" ref={containerRef}>
        {selectedValue.map((v, i) => (
          <Tag key={uuidv4()} style={setTagStyle(i)}>
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
