import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import InputNumber, { InputNumberProps } from './InputNumber';

export default {
  title: 'Design System/Input/InputNumber',
  component: InputNumber,
} as Meta;

const Template: Story = (args) => <InputNumber {...args} />;

export const DefaultInputNumber = Template.bind({});
DefaultInputNumber.args = {
  // props를 넣어주세요.
  children: 'InputNumber',
} as InputNumberProps;
