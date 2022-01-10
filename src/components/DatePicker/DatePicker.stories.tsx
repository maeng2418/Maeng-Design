import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  title: 'Design System/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story = (args) => <DatePicker {...args} />;

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
  // props를 넣어주세요.
  children: 'DatePicker',
} as DatePickerProps;
