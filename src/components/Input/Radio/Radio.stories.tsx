import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { InputProps } from '../Input';
import Radio, { RadioProps } from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Design System/Input/Radio',
  component: Radio,
} as Meta;

const Template: Story = (args) => {
  const onChange = (value: InputProps['value']) => {
    console.log(value);
  };
  return (
    <RadioGroup {...args} value={1} onChange={onChange}>
      <Radio value={1}>1 번</Radio>
      <Radio value={2} color="red5">
        2 번
      </Radio>
      <Radio value={3}>3 번</Radio>
    </RadioGroup>
  );
};

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  // props를 넣어주세요.
} as RadioProps;
