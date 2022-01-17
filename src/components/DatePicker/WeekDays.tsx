/** @jsxImportSource @emotion/react */
import React from 'react';
import { calendarWeekDayStyle } from './styles';

const WeekDays: React.FC = () => {
  return (
    <div className="calendar-week-day" css={calendarWeekDayStyle}>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

export default WeekDays;
