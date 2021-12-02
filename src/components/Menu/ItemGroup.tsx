/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import Item from './Item';

interface ItemGroupProps {
  title: string;
  href?: string;
  children: ReactElement | readonly ReactElement[];
}

const ItemGroup: React.FC<ItemGroupProps> = ({ title, href, children }) => {
  return (
    <li>
      {href ? <a href={href}>{title}</a> : <span>{title}</span>}
      <ul className="sub-menu">
        {React.Children.map(children, (child: React.ReactElement) => {
          if (child.type !== Item) {
            console.warn(
              `ItemGroup에서는 '${child.type}'은 사용 불가능합니다. 'Item'을 사용해주세요.`,
            );
          }
          return child;
        })}
      </ul>
    </li>
  );
};

export default ItemGroup;
