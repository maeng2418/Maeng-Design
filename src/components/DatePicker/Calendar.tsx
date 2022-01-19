/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react';
import { LeftOutlined, RightOutlined } from '..';
import Days from './Days';
import MonthPicker from './MonthPicker';
import { calendarStyle, rangeCalendarStyle } from './styles';
import WeekDays from './WeekDays';
import YearPicker from './YearPicker';

const Calendar: React.FC<any> = ({
  color,
  onClickPrevBtn,
  onClickMonth,
  className = 'calendar',
  month,
  year,
  onClickYear,
  selectedDates,
  onClickNextBtn,
  onClickDay,
  openMonthList,
  openYearList,
  onChangeMonth,
  onChangeYear,
  onPreventMouseDownEvent,
  minDate,
  maxDate,
}) => {
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
  return (
    <div
      className={className}
      css={className === 'calendar' ? calendarStyle(color) : rangeCalendarStyle(color)}
      onMouseDown={onPreventMouseDownEvent}
    >
      <div className="calendar-header">
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
      </div>
      <div className="calendar-body">
        <WeekDays />
        <Days
          selectedDates={selectedDates}
          month={month}
          year={year}
          onClickDay={onClickDay}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
      {openMonthList && <MonthPicker color={color} month={month} onChangeMonth={onChangeMonth} />}
      {openYearList && <YearPicker color={color} year={year} onChangeYear={onChangeYear} />}
    </div>
  );
};

export default Calendar;
