import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Select from '.';
import { SelectProps } from './Select';
export default {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    defaultValue: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const { Option } = Select;

const Template: Story = (args) => (
  <Select {...args}>
    <Option value={'1'}>1 번</Option>
    <Option value={'2'}>2 번</Option>
    <Option value={'3'}>3 번</Option>
    <Option value={'4'}>4 번</Option>
    <Option value={'5'}>5 번</Option>
    <Option value={'6'}>6 번</Option>
    <Option value={'7'}>7 번</Option>
    <Option value={'8'}>8 번</Option>
    <Option value={'9'}>9 번</Option>
    <Option value={'10'}>10 번</Option>
    <Option value={'11'}>11 번</Option>
    <Option value={'12'}>12 번</Option>
    <Option value={'13'}>13 번</Option>
  </Select>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  // props를 넣어주세요.
  size: 'medium',
  placeholder: '선택해주세요',
  disabled: false,
  multiple: true,
  tagRender: true,
} as SelectProps;
