/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useMemo } from 'react';
import { calendarDays } from './styles';

interface DaysProps {
  selectedDates?: (Date | undefined)[];
  month: number;
  year: number;
  minDate?: Date;
  maxDate?: Date;
  onClickDay: (date: Date) => (e: MouseEvent<HTMLDivElement>) => void;
}

const Days: React.FC<DaysProps> = ({
  selectedDates = [undefined, undefined],
  month,
  year,
  minDate,
  maxDate,
  onClickDay,
}) => {
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

  const daysOfMonth = useMemo(
    () => [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [getFebDays, year],
  );

  const firstDay = useMemo(() => new Date(year, month, 1), [month, year]);

  return (
    <div className={`calendar-days`} css={calendarDays}>
      {new Array(daysOfMonth[month] + firstDay.getDay()).fill(0).map((_, i) => {
        const day = i - firstDay.getDay() + 1;
        if (i >= firstDay.getDay()) {
          const date = new Date(year, month, day);
          const classNames = ['calendar-day-hover'];
          // selected
          if (selectedDates?.some((d) => d?.toDateString() === date.toDateString()))
            classNames.push('curr-date');
          // disabled
          if ((minDate && +date < +minDate) || (maxDate && +date > +maxDate))
            classNames.push('disabled');
          return (
            <div
              key={date.toDateString()}
              className={classNames.join(' ')}
              onClick={classNames.includes('disabled') ? () => null : onClickDay(date)}
            >
              <span>{day}</span>
            </div>
          );
        }
        return <div key={i}></div>;
      })}
    </div>
  );
};

export default Days;
