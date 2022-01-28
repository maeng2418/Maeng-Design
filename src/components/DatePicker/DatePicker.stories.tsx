import { Meta, Story } from '@storybook/react/types-6-0';
import DatePicker from '.';
import { DatePickerProps } from './DatePicker';
import { DateRangePickerProps } from './DateRangePicker';

const { DateRangePicker } = DatePicker;

export default {
  title: 'Design System/DatePicker',
} as Meta;

export const DefaultDatePicker: Story = (args) => <DatePicker {...args} />;

export const DefaultDateRangePicker: Story = (args) => <DateRangePicker {...args} />;

DefaultDatePicker.args = {
  // props를 넣어주세요.
  children: 'DatePicker',
  size: 'medium',
  placeholder: 'YYYY-MM-DD',
  value: new Date('2022-01-20'),
  disabled: false,
} as DatePickerProps;

DefaultDateRangePicker.args = {
  // props를 넣어주세요.
  children: 'DatePicker',
  size: 'medium',
  placeholder: 'YYYY-MM-DD',
  min: new Date(2022, 0, 10),
  max: new Date(2022, 1, 20),
  disabled: false,
} as DateRangePickerProps;
