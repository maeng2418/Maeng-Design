import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Input, { InputProps } from './Input';

export default {
  title: 'Design System/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  // props를 넣어주세요.
  type: 'text',
  size: 'medium',
  placeholder: 'Enter Email',
  prefix: '$',
  suffix: '원',
} as InputProps;
