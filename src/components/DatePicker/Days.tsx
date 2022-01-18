/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calendarDays } from './styles';

interface DaysProps {
  day: number;
  month: number;
  year: number;
  onChangeDay: (day: number) => (e: MouseEvent<HTMLDivElement>) => void;
}

const Days: React.FC<DaysProps> = ({ day: d, month, year, onChangeDay }) => {
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
          if (d === day) {
            return (
              <div
                key={uuidv4()}
                className="calendar-day-hover curr-date"
                onClick={onChangeDay(day)}
              >
                <span>{day}</span>
              </div>
            );
          }

          return (
            <div key={uuidv4()} className="calendar-day-hover" onClick={onChangeDay(day)}>
              <span>{day}</span>
            </div>
          );
        }
        return <div key={uuidv4()}></div>;
      })}
    </div>
  );
};

export default Days;
