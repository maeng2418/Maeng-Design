import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Option from './Option';
import Select, { SelectProps } from './Select';

export default {
  title: 'Design System/Select',
  component: Select,
} as Meta;

const Template: Story = (args) => (
  <Select {...args}>
    <Option value={1}>1 번</Option>
    <Option value={3}>3 번</Option>
  </Select>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  // props를 넣어주세요.
} as SelectProps;
