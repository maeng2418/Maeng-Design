/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactElement, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DownOutlined, UpOutlined } from '../Icons';
import Item from './Item';

interface ItemGroupProps {
  mode?: 'horizontal' | 'vertical';
  key?: React.Key;
  title: string;
  href?: string;
  children: ReactElement | readonly ReactElement[];
  onSelect?: (key: React.Key[]) => (event: MouseEvent<HTMLElement>) => void;
  selectKeys?: React.Key[];
  collapsed?: boolean;
  icon?: React.ReactNode;
}

const ItemGroup: React.FC<ItemGroupProps> = ({
  mode,
  key,
  title,
  href,
  children,
  onSelect,
  selectKeys,
  collapsed,
  icon,
}) => {
  const groupKey = useMemo(() => key || uuidv4(), [key]);

  return (
    <li
      key={groupKey}
      onClick={onSelect && onSelect([groupKey])}
      className={selectKeys?.includes(groupKey) ? 'selected' : ''}
    >
      <a href={href || '#'}>
        {mode === 'vertical' && collapsed ? (icon ? icon : title[0]) : title}
        {mode === 'vertical' &&
          (selectKeys?.includes(groupKey) ? <UpOutlined /> : <DownOutlined />)}
      </a>
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
            collapsed: false,
            mode: mode,
          });
        })}
      </ul>
    </li>
  );
};

export default ItemGroup;
