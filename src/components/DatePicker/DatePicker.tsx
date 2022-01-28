/** @jsxImportSource @emotion/react */
import React, {
  FocusEvent,
  MouseEvent,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { CalendarOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Calendar from './Calendar';
import datePickerStyle from './styles';

export interface DatePickerProps {
  className?: string;
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  placeholder?: string;
  size?: 'large' | 'medium' | 'small';
  value?: Date;
  onChange?: (value: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  className = '',
  color = 'blue6',
  disabled = false,
  placeholder = 'YYYY-MM-DD',
  size = 'medium',
  value,
  onChange,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [openMonthList, setOpenMonthList] = useState(false);
  const [openYearList, setOpenYearList] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

  useLayoutEffect(() => {
    if (value) {
      setMonth(value.getMonth());
      setYear(value.getFullYear());

      setSelectedDate(value);
    }
  }, [value]);

  const date = useMemo(() => {
    if (selectedDate instanceof Date)
      return `${selectedDate.getFullYear()}-${`0${selectedDate.getMonth() + 1}`.slice(
        -2,
      )}-${`0${selectedDate.getDate()}`.slice(-2)}`;
    return '';
  }, [selectedDate]);

  // 달력 활성화
  const onSetActive = useCallback(
    (value: boolean) => (e: FocusEvent | MouseEvent) => {
      e.preventDefault();
      !disabled && setActive(value);
    },
    [disabled],
  );

  const onClickDay = useCallback(
    (date: Date) => (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      setSelectedDate(date);
      onChange && onChange(date);
      setActive(false);
    },
    [onChange],
  );

  const onClickMonth = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenMonthList(true);
  }, []);

  const onChangeMonth = useCallback(
    (month: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setMonth(month);
      setOpenMonthList(false);
    },
    [],
  );

  const onClickYear = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenYearList(true);
  }, []);

  const onChangeYear = useCallback(
    (year: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setYear(year);
      setOpenYearList(false);
    },
    [],
  );

  const onClickPrevBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (month - 1 >= 0) {
        setMonth((prev) => prev - 1);
      } else {
        setYear((prev) => prev - 1);
        setMonth(11);
      }
    },
    [month],
  );

  const onClickNextBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (month + 1 <= 11) {
        setMonth((prev) => prev + 1);
      } else {
        setYear((prev) => prev + 1);
        setMonth(0);
      }
    },
    [month],
  );

  return (
    <div
      className={`date-picker ${className}`}
      css={datePickerStyle(active, color, size, disabled)}
    >
      <div
        className="input-box"
        onClick={onSetActive(!active)}
        tabIndex={0}
        onBlur={onSetActive(false)}
      >
        <input readOnly value={date} placeholder={placeholder} disabled={disabled} />
        <CalendarOutlined className="ic-calendar-outlined" />
      </div>
      {active && (
        <Calendar
          color={color}
          onClickPrevBtn={onClickPrevBtn}
          onClickMonth={onClickMonth}
          month={month}
          year={year}
          onClickYear={onClickYear}
          selectedDates={[selectedDate]}
          onClickNextBtn={onClickNextBtn}
          onClickDay={onClickDay}
          openMonthList={openMonthList}
          openYearList={openYearList}
          onChangeMonth={onChangeMonth}
          onChangeYear={onChangeYear}
        />
      )}
    </div>
  );
};

export default DatePicker;
