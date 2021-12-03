/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactElement, useCallback, useState } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Item from './Item';
import ItemGroup from './ItemGroup';
import createStyle from './styles';

export interface MenuProps {
  children: ReactElement | readonly ReactElement[];
  color?: LightColorType | DarkColorType;
  mode?: 'horizontal' | 'vertical';
}

const Menu: React.FC<MenuProps> = ({ children, color = 'blue6', mode = 'horizontal' }) => {
  const [selectKeys, setSelectKeys] = useState<React.Key[]>([]);

  const onSelect = useCallback(
    (key: React.Key[]) => (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setSelectKeys(key);
    },
    [],
  );

  return (
    <nav css={createStyle(color, mode)}>
      <ul className="main-menu">
        {React.Children.map(children, (child: React.ReactElement) => {
          if (child.type === ItemGroup) {
            return React.cloneElement(child, { mode, onSelect, selectKeys });
          } else if (child.type === Item) {
            return React.cloneElement(child, { onSelect, selectKeys });
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
