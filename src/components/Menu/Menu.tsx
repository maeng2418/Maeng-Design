/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Item from './Item';
import ItemGroup from './ItemGroup';
import createStyle from './styles';

export interface MenuProps {
  children: ReactElement | readonly ReactElement[];
  color?: LightColorType | DarkColorType;
}

const Menu: React.FC<MenuProps> = ({ children, color = 'blue6' }) => {
  return (
    <nav css={createStyle(color)}>
      <ul className="main-menu">
        {React.Children.map(children, (child: React.ReactElement) => {
          if (child.type !== ItemGroup && child.type !== Item) {
            console.warn(
              `Menu에서는 '${child.type}'은 사용 불가능합니다. 'ItemGroup' 혹은 'Item'을 사용해주세요.`,
            );
            return <></>;
          } else {
            return child;
          }
        })}
      </ul>
    </nav>
  );
};

export default Menu;
