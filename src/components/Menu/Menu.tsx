/** @jsxImportSource @emotion/react */
import React, { ReactElement, useCallback, useState } from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Item from './Item';
import ItemGroup from './ItemGroup';
import createStyle from './styles';

export interface MenuProps {
  className?: string;
  children?: ReactElement | readonly ReactElement[];
  color?: LightColorType | DarkColorType;
  mode?: 'horizontal' | 'vertical';
  collapsed?: boolean;
}

const Menu: React.FC<MenuProps> = ({
  className = '',
  children,
  color = 'blue6',
  mode = 'horizontal',
  collapsed = false,
}) => {
  const [selectKeys, setSelectKeys] = useState<React.Key[]>([]);

  const onSelectKey = useCallback((key: React.Key[]) => {
    setSelectKeys(key);
  }, []);

  return (
    <nav className={className} css={createStyle(color, mode, collapsed)}>
      <ul className="main-menu">
        {children &&
          React.Children.map(children, (child: React.ReactElement) => {
            if (child.type === ItemGroup) {
              return React.cloneElement(child, { mode, onSelectKey, selectKeys, collapsed });
            } else if (child.type === Item) {
              return React.cloneElement(child, { mode, onSelectKey, selectKeys, collapsed });
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
