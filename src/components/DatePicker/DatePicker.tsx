/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LeftOutlined, RightOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface DatePickerProps {
  color?: LightColorType | DarkColorType;
}

const WeekDays: React.FC = () => {
  return (
    <div className="calendar-week-day">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

const Days: React.FC<{
  month: number;
  year: number;
}> = ({ month, year }) => {
  const isLeapYear = useCallback((year: number) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  }, []);

  const getFebDays = useCallback(
    (year: number) => {
      return isLeapYear(year) ? 29 : 28;
    },
    [isLeapYear],
  );
  const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const firstDay = new Date(year, month, 1);

  return (
    <div className={`calendar-days`}>
      {new Array(daysOfMonth[month] + firstDay.getDay()).fill(0).map((_, i) => {
        if (i >= firstDay.getDay()) {
          if (
            i - firstDay.getDay() + 1 === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
          ) {
            return (
              <div key={uuidv4()} className="calendar-day-hover curr-date">
                <span>{i - firstDay.getDay() + 1}</span>
              </div>
            );
          }

          return (
            <div key={uuidv4()} className="calendar-day-hover">
              <span>{i - firstDay.getDay() + 1}</span>
            </div>
          );
        }
        return <div key={uuidv4()}></div>;
      })}
    </div>
  );
};

const MonthPicker: React.FC<{
  month: number;
  onChangeMonth: (month: number) => (e: MouseEvent<HTMLDivElement>) => void;
}> = ({ month: m, onChangeMonth }) => {
  return (
    <>
      {[
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
      ].map((month, idx) => (
        <div key={month} data-month={idx} onClick={onChangeMonth(idx)}>
          <span className={m === idx ? 'cur-month' : ''}>{month}</span>
        </div>
      ))}
    </>
  );
};

const YearPicker: React.FC<{
  year: number;
  onChangeYear: (year: number) => (e: MouseEvent<HTMLDivElement>) => void;
}> = ({ year: y, onChangeYear }) => {
  return (
    <>
      {new Array(12).fill(y - 6).map((initYear, idx) => {
        const year = initYear + idx;
        return (
          <div key={year} data-year={year} onClick={onChangeYear(year)}>
            <span className={y === year ? 'cur-year' : ''}>{year}</span>
          </div>
        );
      })}
    </>
  );
};

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

  const onClickPrevBtn = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (month - 1 > 0) {
      setMonth((prev) => prev - 1);
    } else {
      setYear(year - 1);
      setMonth(11);
    }
  };

  const onClickNextBtn = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (month < 11) {
      setMonth((prev) => prev + 1);
    } else {
      setYear(year + 1);
      setMonth(0);
    }
  };

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
      {openMonthList && (
        <div className="month-list">
          {<MonthPicker month={month} onChangeMonth={onChangeMonth} />}
        </div>
      )}
      {openYearList && (
        <div className="year-list">{<YearPicker year={year} onChangeYear={onChangeYear} />}</div>
      )}
    </article>
  );
};

export default DatePicker;
