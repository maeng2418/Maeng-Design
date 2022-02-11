import { Meta, Story } from '@storybook/react/types-6-0';
import { MouseEvent, useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import Menu from '.';
import { ThemeMode, ThemeProvider } from '../../styles';
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
    <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
      <Menu {...args}>
        <ItemGroup
          title={'메인메뉴 1'}
          icon="A"
          disabled
          isSelected={select === '#horizontal-1'}
          onClick={onClickItem('#horizontal-1')}
        >
          <Item isSelected={select === '#horizontal-1-1'} onClick={onClickItem('#horizontal-1-1')}>
            메뉴 1-1
          </Item>
          <Item
            isSelected={select === '#horizontal-1-2'}
            onClick={onClickItem('#horizontal-1-2')}
            disabled
          >
            메뉴 1-2
          </Item>
        </ItemGroup>
        <Item isSelected={select === '#horizontal-2'} onClick={onClickItem('#horizontal-2')}>
          메인메뉴 2
        </Item>
        <Item
          isSelected={select === '#horizontal-3'}
          onClick={onClickItem('#horizontal-3')}
          disabled
        >
          메인메뉴 3
        </Item>
        <ItemGroup
          isSelected={select === '#horizontal-4'}
          onClick={onClickItem('#horizontal-4')}
          title={<a href="https://maeng-design-docs.netlify.app">메인메뉴 4</a>}
        >
          <Item
            isSelected={select === '#horizontal-4-1'}
            onClick={onClickItem('#horizontal-4-1')}
            disabled
          >
            메뉴 4-1
          </Item>
          <Item isSelected={select === '#horizontal-4-2'} onClick={onClickItem('#horizontal-4-2')}>
            메뉴 4-2
          </Item>
          <Item isSelected={select === '#horizontal-4-3'} onClick={onClickItem('#horizontal-4-3')}>
            메뉴 4-3
          </Item>
        </ItemGroup>
      </Menu>
    </ThemeProvider>
  );
};

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  // props를 넣어주세요.
  mode: 'vertical',
  collapsed: true,
} as MenuProps;
