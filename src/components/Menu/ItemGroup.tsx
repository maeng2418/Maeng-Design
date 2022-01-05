/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactElement, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DownOutlined, UpOutlined } from '../Icons';
import Item from './Item';

interface ItemGroupProps {
  mode?: 'horizontal' | 'vertical';
  key?: React.Key;
  title: string;
  href?: string;
  children?: ReactElement | readonly ReactElement[];
  onSelectKey?: (key: React.Key[]) => void;
  isSelected?: boolean;
  onClick?: (e: MouseEvent, title?: string, key?: React.Key) => void;
  selectKeys?: React.Key[];
  collapsed?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const ItemGroup: React.FC<ItemGroupProps> = ({
  mode,
  key,
  title,
  href,
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
      e.stopPropagation();
      if (disabled) {
        e.preventDefault();
        return;
      }
      onSelectKey && onSelectKey([groupKey]);
      onClick && onClick(e, title, groupKey);
    },
    [disabled, groupKey, onClick, onSelectKey, title],
  );

  return (
    <li
      key={groupKey}
      onClick={onClickItemGroup}
      className={`
        ${selectKeys?.includes(groupKey) || isSelected ? 'selected' : ''}
        ${disabled ? 'disabled' : ''}
      `}
    >
      <a href={href || '#'}>
        {mode === 'vertical' && collapsed ? (icon ? icon : title[0]) : title}
        {mode === 'vertical' &&
          (selectKeys?.includes(groupKey) || isSelected ? <UpOutlined /> : <DownOutlined />)}
      </a>
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
