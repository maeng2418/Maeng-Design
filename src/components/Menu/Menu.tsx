/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Item from './Item';
import ItemGroup from './ItemGroup';
import createStyle, { createSubMenuStyle } from './styles';

export interface MenuProps {
  children: ReactElement | readonly ReactElement[];
  color?: LightColorType | DarkColorType;
}

const Menu: React.FC<MenuProps> = ({ children, color = 'blue6' }) => {
  return (
    <nav css={createStyle(color)}>
      <ul className="main-menu">
        {React.Children.map(children, (child: React.ReactElement) => {
          if (child.type === ItemGroup) {
            const { title, href, children: groupChildren } = child.props;
            return (
              <li>
                {href ? <a href={href}>{title}</a> : <span>{title}</span>}
                <ul
                  className="sub-menu"
                  css={createSubMenuStyle(color)}
                  // onClick={onSelectValue(value, optionDisabled)}
                  // css={createOptionStyle(color, size, optionDisabled, optionStyle)}
                >
                  {React.Children.map(groupChildren, (groupChild: React.ReactElement) => {
                    if (groupChild.type !== Item) {
                      console.warn(
                        `ItemGroup에서는 '${groupChild.type}'은 사용 불가능합니다. 'Item'을 사용해주세요.`,
                      );
                    }
                    return groupChild;
                  })}
                </ul>
              </li>
            );
          } else if (child.type === Item) {
            return child;
          } else {
            console.warn(
              `Menu에서는 '${child.type}'은 사용 불가능합니다. 'ItemGroup' 혹은 'Item'을 사용해주세요.`,
            );
            return <></>;
          }
        })}
      </ul>
    </nav>
  );
};

export default Menu;
