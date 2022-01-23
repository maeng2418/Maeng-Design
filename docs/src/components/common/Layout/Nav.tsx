import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { Menu } from 'maeng-design';
import React from 'react';
import routes from '../../../assets/routes';

const Nav: React.FC = () => {
  const { Item, ItemGroup } = Menu;
  const location = useLocation();

  return (
    <Menu mode={'vertical'} collapsed={false} color="magenta6">
      {Object.entries(routes).map(([menu, menuInfo]) => {
        const isMenuSelected =
          !!location.pathname.split('/')[1] &&
          menuInfo.href.includes(location.pathname.split('/')[1]);
        return (
          <ItemGroup
            key={menu}
            title={<Link to={menuInfo.href}>{menuInfo.label}</Link>}
            isSelected={isMenuSelected}
          >
            {menuInfo.subMenu &&
              Object.entries(menuInfo.subMenu).map(([subMenu, subMenuInfo]) => {
                const isSubMenuSelected =
                  !!subMenuInfo.href && location.pathname.includes(subMenuInfo.href);
                return (
                  <Item key={subMenu} isSelected={isSubMenuSelected}>
                    <Link to={subMenuInfo.href}>{subMenuInfo.label}</Link>
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
