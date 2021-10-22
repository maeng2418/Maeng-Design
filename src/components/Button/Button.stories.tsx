import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  // props를 넣어주세요.
  children: 'Button',
  color: 'blue6',
  size: 'medium',
  shape: 'default',
  type: 'default',
  htmlType: 'button',
  disabled: false,
} as ButtonProps;
