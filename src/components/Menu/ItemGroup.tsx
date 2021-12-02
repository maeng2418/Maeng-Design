/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactElement, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

interface ItemGroupProps {
  key?: React.Key;
  title: string;
  href?: string;
  children: ReactElement | readonly ReactElement[];
  onSelect: (key: React.Key[]) => (event: MouseEvent<HTMLElement>) => void;
  selectKeys: React.Key[];
}

const ItemGroup: React.FC<ItemGroupProps> = ({
  key,
  title,
  href,
  children,
  onSelect,
  selectKeys,
}) => {
  const groupKey = useMemo(() => key || uuidv4(), [key]);

  return (
    <li
      key={groupKey}
      onClick={onSelect([groupKey])}
      className={selectKeys.includes(groupKey) ? 'selected' : ''}
    >
      {href ? <a href={href}>{title}</a> : <span>{title}</span>}
      <ul className="sub-menu">
        {React.Children.map(children, (child: React.ReactElement) => {
          if (child.type !== Item) {
            console.warn(
              `ItemGroup에서는 '${child.type}'은 사용 불가능합니다. 'Item'을 사용해주세요.`,
            );
          }
          return React.cloneElement(child, {
            onSelect: onSelect,
            selectKeys: selectKeys,
            groupKey: groupKey,
          });
        })}
      </ul>
    </li>
  );
};

export default ItemGroup;
