import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import AffixInput, { AffixInputProps } from './AffixInput';

export default {
  title: 'Design System/Input/AffixInput',
  component: AffixInput,
} as Meta;

const Template: Story = (args) => <AffixInput {...args} />;

export const DefaultAffixInput = Template.bind({});
DefaultAffixInput.args = {
  // props를 넣어주세요.
  children: 'AffixInput',
} as AffixInputProps;
