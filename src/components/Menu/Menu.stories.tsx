import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Item from './Item';
import ItemGroup from './ItemGroup';
import Menu, { MenuProps } from './Menu';

export default {
  title: 'Design System/Menu',
  component: Menu,
} as Meta;

const Template: Story = (args) => (
  <Menu {...args}>
    <ItemGroup title="메인메뉴 1" href="#1" icon="A" disabled>
      <Item href="#2">메뉴 1-1</Item>
      <Item href="#3" disabled>
        메뉴 1-2sdfsdfefwefwefwefwef
      </Item>
    </ItemGroup>
    <Item href="#4">메뉴 2-1</Item>
    <Item href="#5" disabled>
      메뉴 3-1
    </Item>
    <ItemGroup title="메인메뉴 3" href="#6">
      <Item href="#7" disabled>
        메뉴 3-1
      </Item>
      <Item href="#8">메뉴 3-2</Item>
    </ItemGroup>
  </Menu>
);

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  // props를 넣어주세요.
  mode: 'vertical',
  collapsed: true,
} as MenuProps;
