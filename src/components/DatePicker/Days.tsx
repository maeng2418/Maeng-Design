/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calendarDays } from './styles';

interface DaysProps {
  month: number;
  year: number;
}

const Days: React.FC<DaysProps> = ({ month, year }) => {
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
    <div className={`calendar-days`} css={calendarDays}>
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

export default Days;
