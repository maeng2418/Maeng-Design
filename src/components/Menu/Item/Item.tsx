/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ItemProps {
  className?: string;
  mode?: 'horizontal' | 'vertical';
  key?: React.Key;
  groupKey?: React.Key;
  children: React.ReactNode;
  disabled?: boolean;
  onSelectKey?: (key: React.Key[]) => (event: MouseEvent<HTMLElement>) => void;
  isSelected?: boolean;
  onClick?: (e: MouseEvent) => void;
  selectKeys?: React.Key[];
  collapsed?: boolean;
  icon?: React.ReactNode;
}
const Item: React.FC<ItemProps> = ({
  className = '',
  mode,
  key,
  children,
  disabled,
  onSelectKey,
  isSelected,
  onClick,
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

  const onClickItem = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onSelectKey && onSelectKey(mergedKey);
      onClick && onClick(e);
    },
    [disabled, mergedKey, onClick, onSelectKey],
  );

  return (
    <li
      className={`
        ${className}
        ${
          selectKeys?.includes(itemKey) || isSelected ? 'menu-item-list selected' : 'menu-item-list'
        }
        ${disabled ? 'disabled' : ''}
      `}
      key={itemKey}
      onClick={onClickItem}
    >
      <span className="item">
        {icon}
        {mode === 'vertical' && !collapsed && children}
        {mode === 'vertical' && collapsed && !icon && typeof children === 'string' && children[0]}
        {mode === 'vertical' && collapsed && !icon && typeof children !== 'string' && children}
        {mode === 'horizontal' && children}
      </span>
    </li>
  );
};

export default Item;
