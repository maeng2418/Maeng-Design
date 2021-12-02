/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ItemProps {
  key?: React.Key;
  groupKey?: React.Key;
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  onSelect: (key: React.Key[]) => (event: MouseEvent<HTMLElement>) => void;
  selectKeys: React.Key[];
}
const Item: React.FC<ItemProps> = ({
  key,
  children,
  href,
  disabled,
  onSelect,
  groupKey,
  selectKeys,
}) => {
  const itemKey = useMemo(() => key || uuidv4(), [key]);
  const mergedKey = useMemo(() => {
    const keys = [itemKey];
    if (groupKey) keys.push(groupKey);
    return keys;
  }, [groupKey, itemKey]);

  return (
    <li
      className={selectKeys.includes(itemKey) ? 'selected' : ''}
      key={itemKey}
      onClick={onSelect(mergedKey)}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default Item;
