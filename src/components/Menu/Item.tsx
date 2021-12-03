/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ItemProps {
  mode?: 'horizontal' | 'vertical';
  key?: React.Key;
  groupKey?: React.Key;
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  onSelect?: (key: React.Key[]) => (event: MouseEvent<HTMLElement>) => void;
  selectKeys?: React.Key[];
  collapsed?: boolean;
  icon?: React.ReactNode;
}
const Item: React.FC<ItemProps> = ({
  mode,
  key,
  children,
  href,
  disabled,
  onSelect,
  groupKey,
  selectKeys,
  collapsed,
  icon,
}) => {
  const itemKey = useMemo(() => key || uuidv4(), [key]);
  const mergedKey = useMemo(() => {
    const keys = [itemKey];
    if (groupKey) keys.push(groupKey);
    return keys;
  }, [groupKey, itemKey]);

  return (
    <li
      className={`
        ${selectKeys?.includes(itemKey) ? 'item selected' : 'item'}
        ${disabled ? 'disabled' : ''}
      `}
      key={itemKey}
      onClick={onSelect && onSelect(mergedKey)}
    >
      <a href={href}>
        {icon}
        {mode === 'vertical' && !collapsed && children}
        {mode === 'vertical' && collapsed && !icon && typeof children === 'string' && children[0]}
        {mode === 'horizontal' && children}
      </a>
    </li>
  );
};

export default Item;
