import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { Menu } from 'maeng-design';
import React, { useCallback } from 'react';
import routes from '../../../assets/routes';

const Nav: React.FC = (props) => {
  const { Item, ItemGroup } = Menu;
  const location = useLocation();

  const onClick = useCallback(
    (href: string) => (e: React.MouseEvent<Element, MouseEvent>) => {
      e.preventDefault();
      navigate(href);
    },
    [],
  );

  return (
    <Menu mode={'vertical'} collapsed={false} color="magenta6">
      {Object.entries(routes).map(([menu, menuInfo]) => {
        return (
          <ItemGroup
            key={menu}
            href={menuInfo.href}
            title={menuInfo.label}
            isSelected={menuInfo.href.includes(location.pathname.split('/')[1] || null)}
            onClick={onClick(menuInfo.href)}
          >
            {menuInfo.subMenu &&
              Object.entries(menuInfo.subMenu).map(([subMenu, subMenuInfo]) => {
                return (
                  <Item
                    key={subMenu}
                    href={subMenuInfo.href}
                    isSelected={location.pathname.includes(subMenuInfo.href || null)}
                    onClick={onClick(subMenuInfo.href)}
                  >
                    {subMenuInfo.label}
                  </Item>
                );
              })}
          </ItemGroup>
        );
      })}
    </Menu>
  );
};

export default Nav;
