import { Meta, Story } from '@storybook/react/types-6-0';
import React, { MouseEvent, useState } from 'react';
import Menu from '.';
import { MenuProps } from './Menu';

const ItemGroup = Menu.ItemGroup;
const Item = Menu.Item;

export default {
  title: 'Design System/Menu',
  component: Menu,
} as Meta;

const Template: Story = (args) => {
  const [select, setSelect] = useState<string>('');

  const onClickItem = (value: string) => (e: MouseEvent) => {
    e.preventDefault();
    setSelect(value);
  };
  return (
    <Menu {...args}>
      <ItemGroup
        title="메인메뉴 1"
        icon="A"
        disabled
        isSelected={select === '#1'}
        onClick={onClickItem('#1')}
      >
        <Item isSelected={select === '#1-1'} onClick={onClickItem('#1-1')}>
          메뉴 1-1
        </Item>
        <Item isSelected={select === '#1-2'} onClick={onClickItem('#1-2')} disabled>
          메뉴 1-2sdfsdfefwefwefwefwef
        </Item>
      </ItemGroup>
      <Item isSelected={select === '#2'} onClick={onClickItem('#2')}>
        메뉴 2-1
      </Item>
      <Item isSelected={select === '#3-1'} onClick={onClickItem('#3-1')} disabled>
        메뉴 3-1
      </Item>
      <ItemGroup isSelected={select === '#3'} onClick={onClickItem('#3')} title="메인메뉴 3">
        <Item isSelected={select === '#3-1'} onClick={onClickItem('#3-1')} disabled>
          메뉴 3-1
        </Item>
        <Item isSelected={select === '#3-2'} onClick={onClickItem('#3-2')}>
          메뉴 3-2
        </Item>
      </ItemGroup>
    </Menu>
  );
};

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  // props를 넣어주세요.
  mode: 'vertical',
  collapsed: true,
} as MenuProps;
