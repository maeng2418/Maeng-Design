/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactElement, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DownOutlined, UpOutlined } from '../../Icons';
import Item from '../Item';

interface ItemGroupProps {
  className?: string;
  mode?: 'horizontal' | 'vertical';
  key?: React.Key;
  title: string | ReactElement | readonly ReactElement[];
  children?: ReactElement | readonly ReactElement[];
  onSelectKey?: (key: React.Key[]) => void;
  isSelected?: boolean;
  onClick?: (e: MouseEvent) => void;
  selectKeys?: React.Key[];
  collapsed?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const ItemGroup: React.FC<ItemGroupProps> = ({
  className = '',
  mode,
  key,
  title,
  children,
  onSelectKey,
  isSelected,
  onClick,
  selectKeys,
  collapsed,
  icon,
  disabled,
}) => {
  const groupKey = useMemo(() => key || uuidv4(), [key]);

  const onClickItemGroup = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onSelectKey && onSelectKey([groupKey]);
      onClick && onClick(e);
    },
    [disabled, groupKey, onClick, onSelectKey],
  );

  return (
    <li
      key={groupKey}
      onClick={onClickItemGroup}
      className={`
        ${className}
        ${
          selectKeys?.includes(groupKey) || isSelected
            ? 'item-group-list selected'
            : 'item-group-list'
        }
        ${disabled ? 'disabled' : ''}
      `}
    >
      <span className="group-item">
        {mode === 'horizontal' && title}
        {mode === 'vertical' && !collapsed && title}
        {mode === 'vertical' && collapsed && icon && icon}
        {mode === 'vertical' && collapsed && !icon && typeof title === 'string' && title[0]}
        {mode === 'vertical' && collapsed && !icon && typeof title !== 'string' && title}
        {mode === 'vertical' &&
          (selectKeys?.includes(groupKey) || isSelected ? (
            <UpOutlined className="item-group-icon" />
          ) : (
            <DownOutlined className="item-group-icon" />
          ))}
      </span>

      <ul className="sub-menu">
        {children &&
          React.Children.map(children, (child: React.ReactElement) => {
            if (child.type !== Item) {
              console.warn(
                `ItemGroup에서는 '${child.type}'은 사용 불가능합니다. 'Item'을 사용해주세요.`,
              );
            }
            return React.cloneElement(child, {
              onSelectKey: onSelectKey,
              selectKeys: selectKeys,
              groupKey: groupKey,
              collapsed: false,
              mode: mode,
            });
          })}
      </ul>
    </li>
  );
};

export default ItemGroup;
