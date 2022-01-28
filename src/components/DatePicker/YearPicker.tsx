/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { LeftOutlined, RightOutlined } from '..';
import { DatePickerProps } from './DatePicker';
import { yearListStyle } from './styles';

interface YearPickerProps {
  color?: DatePickerProps['color'];
  year: number;
  onChangeYear: (month: number) => (e: MouseEvent<HTMLDivElement>) => void;
}
const YearPicker: React.FC<YearPickerProps> = ({ color, year: y, onChangeYear }) => {
  const [startYear, setStartYear] = useState(Math.floor(y / 10) * 10);
  const endYear = useMemo(() => startYear + 9, [startYear]);

  useEffect(() => {
    setStartYear(Math.floor(y / 10) * 10);
  }, [y]);

  const onClickPrevBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (startYear > 0) setStartYear(startYear - 10);
      return;
    },
    [startYear],
  );

  const onClickNextBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (startYear >= 0) setStartYear(startYear + 10);
      return;
    },
    [startYear],
  );

  return (
    <div className="year-picker" css={yearListStyle(color)}>
      <div className="year-header">
        <span className="prev-year" onClick={onClickPrevBtn}>
          <LeftOutlined className="year-change" id="prev-year" />
        </span>
        <span className="year-range" id="year-range">
          {`${startYear} - ${endYear}`}
        </span>
        <span className="next-year" onClick={onClickNextBtn}>
          <RightOutlined className="year-change" id="next-year" />
        </span>
      </div>
      <div className="year-list">
        {new Array(10).fill(startYear).map((initYear, idx) => {
          const year = initYear + idx;
          return (
            <div key={year} data-year={year} onClick={onChangeYear(year)}>
              <span className={y === year ? 'cur-year' : ''}>{year}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearPicker;
