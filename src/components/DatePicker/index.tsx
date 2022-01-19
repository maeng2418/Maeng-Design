import OriginalDatePicker from './DatePicker';
import DateRangePicker from './DateRangePicker';

export type DatePickerType = typeof OriginalDatePicker & {
  DateRangePicker: typeof DateRangePicker;
};

const DatePicker = OriginalDatePicker as DatePickerType;
DatePicker.DateRangePicker = DateRangePicker;

export default DatePicker;
