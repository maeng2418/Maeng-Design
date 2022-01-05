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
        type: 'object',
      },
    },
  },
} as Meta;

const { Option } = Select;

const Template: Story = (args) => (
  <Select {...args}>
    {Array(999)
      .fill(1)
      .map((_i, i) => (
        <Option key={i + 1} value={i + 1}>
          {i + 1} 번
        </Option>
      ))}
  </Select>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  // props를 넣어주세요.
  size: 'medium',
  placeholder: '선택해주세요',
  disabled: false,
  multiple: false,
  tagRender: true,
} as SelectProps;
