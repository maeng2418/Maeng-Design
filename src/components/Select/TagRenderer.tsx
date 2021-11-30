import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CloseOutlined, Tag } from '..';
import Ellipsis from './Ellipsis';

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
        (child: HTMLSpanElement, idx: number) => {
          // 태그이면서 컨테이너 안에 여유 공간이 있을 경우
          if (
            !child.classList.contains('ellipsis') &&
            tagListWidth + child.clientWidth <=
              containerWidth - CONTAINER_PADDING_SIZE * 2 - GAP_SIZE * maxIndex - CARET_ICON_SIZE
          ) {
            tagListWidth += child.clientWidth;
            maxIndex = idx;
          }
          // Ellipssis가 포함되어 여유 공간이 없을 경우, 여유 공간에서 태그 하나를 제거한다.
          if (
            child.classList.contains('ellipsis') &&
            tagListWidth + child.clientWidth >
              containerWidth - CONTAINER_PADDING_SIZE * 2 - GAP_SIZE * maxIndex - CARET_ICON_SIZE
          ) {
            maxIndex -= 1;
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

  const ellipsis = useMemo(() => {
    if (Array.isArray(selectedValue) && selectedValue.length > 0)
      return `+ ${selectedValue.length - (max + 1)}`;
  }, [max, selectedValue]);

  if (Array.isArray(selectedValue)) {
    return selectedValue.length > 0 ? (
      <div className="input" ref={containerRef}>
        {selectedValue.map((v, i) => (
          <Tag key={uuidv4()} style={setTagStyle(i)}>
            <span>{v}</span>
            <CloseOutlined onClick={onDeselect(v)} />
          </Tag>
        ))}
        {selectedValue.length > max + 1 && <Ellipsis content={ellipsis} />}
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
