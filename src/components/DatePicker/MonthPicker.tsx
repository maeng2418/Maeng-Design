/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DatePickerProps } from './DatePicker';
import { monthYearListStyle } from './styles';

interface MonthPickerProps {
  color?: DatePickerProps['color'];
  month: number;
  onChangeMonth: (month: number) => (e: MouseEvent<HTMLDivElement>) => void;
}

const MonthPicker: React.FC<MonthPickerProps> = ({ color, month: m, onChangeMonth }) => {
  return (
    <div className="month-list" css={monthYearListStyle(color)}>
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
    </div>
  );
};

export default MonthPicker;
