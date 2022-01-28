import { Meta, Story } from '@storybook/react/types-6-0';
import { ChangeEvent } from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Design System/Input/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };
  return <Checkbox {...args} onChange={onChange} />;
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  // props를 넣어주세요.
  children: 'Checkbox',
} as CheckboxProps;
