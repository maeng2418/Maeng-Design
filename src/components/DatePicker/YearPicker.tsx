/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DatePickerProps } from './DatePicker';
import { monthYearListStyle } from './styles';

interface YearPickerProps {
  color?: DatePickerProps['color'];
  year: number;
  onChangeYear: (month: number) => (e: MouseEvent<HTMLDivElement>) => void;
  onPreventMouseDownEvent: (e: MouseEvent) => void;
}
const YearPicker: React.FC<YearPickerProps> = ({
  color,
  year: y,
  onChangeYear,
  onPreventMouseDownEvent,
}) => {
  return (
    <div className="year-list" css={monthYearListStyle(color)}>
      {new Array(12).fill(y - 6).map((initYear, idx) => {
        const year = initYear + idx;
        return (
          <div
            key={year}
            data-year={year}
            onClick={onChangeYear(year)}
            onMouseDown={onPreventMouseDownEvent}
          >
            <span className={y === year ? 'cur-year' : ''}>{year}</span>
          </div>
        );
      })}
    </div>
  );
};

export default YearPicker;
