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
    <ItemGroup title="메인메뉴 1" href="#">
      <Item href="#">메뉴 1-1</Item>
      <Item href="#">메뉴 1-2sdfsdfefwefwefwefwef</Item>
    </ItemGroup>
    <Item href="#">메뉴 2-1</Item>
    <Item href="#">메뉴 3-1</Item>
    <ItemGroup title="메인메뉴 3" href="#">
      <Item href="#">메뉴 3-1</Item>
      <Item href="#">메뉴 3-2</Item>
    </ItemGroup>
  </Menu>
);

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  // props를 넣어주세요.
} as MenuProps;
