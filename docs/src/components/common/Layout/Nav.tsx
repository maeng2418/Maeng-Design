/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { Menu } from 'maeng-design';
import React from 'react';
import routes from '../../../assets/routes';

interface NavProps {
  open: boolean;
}

const Nav: React.FC<NavProps> = ({ open }) => {
  const { Item, ItemGroup } = Menu;
  const location = useLocation();

  return open ? (
    <Menu mode={'vertical'} collapsed={false} color="magenta6" css={navStyle}>
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
  ) : null;
};

const navStyle = css`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 999;
  }
`;

export default Nav;
