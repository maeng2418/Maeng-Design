/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import { LeftOutlined, RightOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Days from './Days';
import MonthPicker from './MonthPicker';
import createStyle from './styles';
import WeekDays from './WeekDays';
import YearPicker from './YearPicker';

export interface DatePickerProps {
  color?: LightColorType | DarkColorType;
}

const DatePicker: React.FC<DatePickerProps> = ({ color = 'blue6' }) => {
  const [openMonthList, setOpenMonthList] = useState(false);
  const [openYearList, setOpenYearList] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
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

  const onClickMonth = useCallback(() => {
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

  const onClickYear = useCallback(() => {
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

  return (
    <article className="calendar" css={createStyle(color)}>
      <header className="calendar-header">
        <span className="prev-month" onClick={onClickPrevBtn}>
          <LeftOutlined className="month-change" id="prev-month" />
        </span>
        <span className="month-picker" id="month-picker" onClick={onClickMonth}>
          {monthNames[month]}
        </span>
        <span className="year-picker" id="year-picker" onClick={onClickYear}>
          {year}
        </span>
        <span className="next-month" onClick={onClickNextBtn}>
          <RightOutlined className="month-change" id="next-month" />
        </span>
      </header>
      <section className="calendar-body">
        <WeekDays />
        <Days month={month} year={year} />
      </section>
      {openMonthList && <MonthPicker color={color} month={month} onChangeMonth={onChangeMonth} />}
      {openYearList && <YearPicker color={color} year={year} onChangeYear={onChangeYear} />}
    </article>
  );
};

export default DatePicker;
