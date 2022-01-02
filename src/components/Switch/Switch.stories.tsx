import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Switch, { SwitchProps } from './Switch';

export default {
  title: 'Design System/Switch',
  component: Switch,
} as Meta;

const Template: Story = (args) => <Switch {...args} />;

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
  // props를 넣어주세요.
} as SwitchProps;
