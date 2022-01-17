/** @jsxImportSource @emotion/react */
import React, { FocusEvent, MouseEvent, useCallback, useMemo, useState } from 'react';
import { CalendarOutlined, LeftOutlined, RightOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Days from './Days';
import MonthPicker from './MonthPicker';
import createStyle, { calendarStyle } from './styles';
import WeekDays from './WeekDays';
import YearPicker from './YearPicker';

export interface DatePickerProps {
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
}

const DatePicker: React.FC<DatePickerProps> = ({
  color = 'blue6',
  disabled = false,
  placeholder = 'yyyy.mm.dd',
  size = 'medium',
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [openMonthList, setOpenMonthList] = useState(false);
  const [openYearList, setOpenYearList] = useState(false);
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const date = useMemo(
    () => `${year}-${`0${month + 1}`.slice(-2)}-${`0${day}`.slice(-2)}`,
    [day, month, year],
  );

  const monthNames = useMemo(
    () => [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    [],
  );

  // 달력 활성화
  const onSetActive = useCallback(
    (value: boolean) => (e: FocusEvent | MouseEvent) => {
      e.preventDefault();
      !disabled && setActive(value);
    },
    [disabled],
  );

  const onClickMonth = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenMonthList(true);
  }, []);

  const onChangeDay = useCallback(
    (day: number) => (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      setDay(day);
      setActive(false);
    },
    [],
  );

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
      if (month - 1 > 0) {
        setMonth((prev) => prev - 1);
      } else {
        setYear(year - 1);
        setMonth(11);
      }
    },
    [month, year],
  );

  const onClickNextBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (month < 11) {
        setMonth((prev) => prev + 1);
      } else {
        setYear(year + 1);
        setMonth(0);
      }
    },
    [month, year],
  );

  const onPreventMouseDownEvent = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <article className="date-picker" css={createStyle(active, color, size, disabled)}>
      <section
        className="input-box"
        onClick={onSetActive(!active)}
        tabIndex={0}
        onBlur={onSetActive(false)}
      >
        <input readOnly value={date} placeholder={placeholder} disabled={disabled} />
        <CalendarOutlined />
      </section>
      {active && (
        <section
          className="calendar"
          css={calendarStyle(color)}
          onMouseDown={onPreventMouseDownEvent}
        >
          <header className="calendar-header">
            <span
              className="prev-month"
              onClick={onClickPrevBtn}
              onMouseDown={onPreventMouseDownEvent}
            >
              <LeftOutlined className="month-change" id="prev-month" />
            </span>
            <span
              className="month-picker"
              id="month-picker"
              onClick={onClickMonth}
              onMouseDown={onPreventMouseDownEvent}
            >
              {monthNames[month]}
            </span>
            <span
              className="year-picker"
              id="year-picker"
              onClick={onClickYear}
              onMouseDown={onPreventMouseDownEvent}
            >
              {year}
            </span>
            <span
              className="next-month"
              onClick={onClickNextBtn}
              onMouseDown={onPreventMouseDownEvent}
            >
              <RightOutlined className="month-change" id="next-month" />
            </span>
          </header>
          <section className="calendar-body">
            <WeekDays />
            <Days
              day={day}
              month={month}
              year={year}
              onChangeDay={onChangeDay}
              onPreventMouseDownEvent={onPreventMouseDownEvent}
            />
          </section>
          {openMonthList && (
            <MonthPicker
              color={color}
              month={month}
              onChangeMonth={onChangeMonth}
              onPreventMouseDownEvent={onPreventMouseDownEvent}
            />
          )}
          {openYearList && (
            <YearPicker
              color={color}
              year={year}
              onChangeYear={onChangeYear}
              onPreventMouseDownEvent={onPreventMouseDownEvent}
            />
          )}
        </section>
      )}
    </article>
  );
};

export default DatePicker;
