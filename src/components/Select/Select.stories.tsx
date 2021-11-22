import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Option from './Option';
import Select, { SelectProps } from './Select';

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

const Template: Story = (args) => (
  <Select {...args}>
    <Option value={'1'}>1 번</Option>
    <Option value={'2'}>2 번</Option>
    <Option value={'3'} disabled>
      3 번
    </Option>
    <Option value={'4'}>4 번</Option>
    <Option value={'5'}>5 번</Option>
  </Select>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  // props를 넣어주세요.
  size: 'medium',
  placeholder: '선택해주세요',
  disabled: false,
  multiple: false,
} as SelectProps;