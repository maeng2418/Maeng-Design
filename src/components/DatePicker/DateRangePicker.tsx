/** @jsxImportSource @emotion/react */
import React, {
  FocusEvent,
  MouseEvent,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { CalendarOutlined, Divider, RightOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import Calendar from './Calendar';
import { dateRangePickerStyle, rangeCalendarContainerStyle } from './styles';

export interface DateRangePickerProps {
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  value?: Date[];
  min?: Date;
  max?: Date;
  onChange?: (value: (Date | undefined)[]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  color = 'blue6',
  disabled = false,
  placeholder = 'YYYY-MM-DD',
  size = 'medium',
  value = [undefined, undefined],
  onChange,
  min,
  max,
}) => {
  //start date
  const [startActive, setStartActive] = useState<boolean>(false);
  const [openLeftMonthList, setOpenLeftMonthList] = useState(false);
  const [openLeftYearList, setOpenLeftYearList] = useState(false);
  const [minDate, setMinDate] = useState<Date | undefined>(min);

  // end date
  const [endActive, setEndActive] = useState<boolean>(false);
  const [openRightMonthList, setOpenRightMonthList] = useState(false);
  const [openRightYearList, setOpenRightYearList] = useState(false);
  const [maxDate, setMaxDate] = useState<Date | undefined>(max);

  const [months, setMonths] = useState([new Date().getMonth(), new Date().getMonth() + 1]);
  const [years, setYears] = useState([new Date().getFullYear(), new Date().getFullYear()]);
  const [selectedDates, setSelectedDates] = useState<(Date | undefined)[]>(value);

  useLayoutEffect(() => {
    if (value[0] && value[1]) {
      setSelectedDates(value);
      setMonths([value[0].getMonth(), value[0].getMonth() + 1]);
      setYears([value[0].getFullYear(), value[0].getFullYear()]);
    }
  }, [value]);

  useLayoutEffect(() => {
    if (min instanceof Date) setMinDate(min);
  }, [min]);

  useLayoutEffect(() => {
    if (max instanceof Date) setMaxDate(max);
  }, [max]);

  const startDate = useMemo(() => {
    if (selectedDates[0] instanceof Date)
      return `${selectedDates[0].getFullYear()}-${`0${selectedDates[0].getMonth() + 1}`.slice(
        -2,
      )}-${`0${selectedDates[0].getDate()}`.slice(-2)}`;
    return '';
  }, [selectedDates]);

  const endDate = useMemo(() => {
    if (selectedDates[1] instanceof Date)
      return `${selectedDates[1].getFullYear()}-${`0${selectedDates[1].getMonth() + 1}`.slice(
        -2,
      )}-${`0${selectedDates[1].getDate()}`.slice(-2)}`;
    return '';
  }, [selectedDates]);

  //  시작 달력 활성화
  const onSetStartActive = useCallback(
    (value: boolean) => (e: FocusEvent | MouseEvent) => {
      e.preventDefault();
      !disabled && setStartActive(value);
    },
    [disabled],
  );

  //  종료 달력 활성화
  const onSetEndActive = useCallback(
    (value: boolean) => (e: FocusEvent | MouseEvent) => {
      e.preventDefault();
      !disabled && setEndActive(value);
    },
    [disabled],
  );

  const onClickDay = useCallback(
    (date: Date) => (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (startActive) {
        setSelectedDates([date, selectedDates[1]]);
        onChange && onChange([date, selectedDates[1]]);
        setStartActive(false);
        return;
      }
      if (endActive) {
        setSelectedDates([selectedDates[0], date]);
        onChange && onChange([selectedDates[0], date]);
        setEndActive(false);
        return;
      }
    },
    [endActive, onChange, selectedDates, startActive],
  );

  const onClickLeftMonth = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenLeftMonthList(true);
  }, []);

  const onChangeLeftMonth = useCallback(
    (month: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (month === 11) {
        setMonths([month, 0]);
        setYears([years[0], years[0] + 1]);
      } else {
        setMonths([month, month + 1]);
      }
      setOpenLeftMonthList(false);
    },
    [years],
  );

  const onClickLeftYear = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenLeftYearList(true);
  }, []);

  const onChangeLeftYear = useCallback(
    (year: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setYears([year, year]);
      setOpenLeftYearList(false);
    },
    [],
  );

  const onClickPrevBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (months[0] === 11) {
        setMonths([months[0] - 1, 11]);
        setYears([years[0], years[1] - 1]);
        return;
      }
      if (months[0] === 0) {
        setMonths([11, months[1] - 1]);
        setYears([years[0] - 1, years[1]]);
        return;
      }
      setMonths([months[0] - 1, months[1] - 1]);
    },
    [months, years],
  );

  const onClickNextBtn = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (months[1] === 11) {
        setMonths([months[0] + 1, 0]);
        setYears([years[0], years[1] + 1]);
        return;
      }
      if (months[1] === 0) {
        setMonths([0, months[1] + 1]);
        setYears([years[0] + 1, years[1]]);
        return;
      }
      setMonths([months[0] + 1, months[1] + 1]);
    },
    [months, years],
  );

  const onClickRightMonth = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenRightMonthList(true);
  }, []);

  const onChangeRightMonth = useCallback(
    (month: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (month === 0) {
        setMonths([11, month]);
        setYears([years[0] - 1, years[1]]);
      } else {
        setMonths([month - 1, month]);
      }
      setOpenRightMonthList(false);
    },
    [years],
  );

  const onClickRightYear = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setOpenRightYearList(true);
  }, []);

  const onChangeRightYear = useCallback(
    (year: number) => (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setYears([year, year]);
      setOpenRightYearList(false);
    },
    [],
  );

  const onPreventMouseDownEvent = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div
      className="date-range-picker"
      css={dateRangePickerStyle(startActive || endActive, color, size, disabled)}
    >
      <div className="input-box">
        <span
          className="start-date"
          onClick={onSetStartActive(!startActive)}
          tabIndex={0}
          onBlur={onSetStartActive(false)}
        >
          <input readOnly value={startDate} placeholder={placeholder} disabled={disabled} />
          <CalendarOutlined className="ic-calendar-outlined" />
        </span>
        <span className="separator">
          <RightOutlined className="ic-right-outlined" />
        </span>
        <span
          className="end-date"
          onClick={onSetEndActive(!endActive)}
          tabIndex={0}
          onBlur={onSetEndActive(false)}
        >
          <input readOnly value={endDate} placeholder={placeholder} disabled={disabled} />
          <CalendarOutlined className="ic-calendar-outlined" />
        </span>
      </div>
      {(startActive || endActive) && (
        <div
          className="range-calendar-container"
          css={rangeCalendarContainerStyle}
          onMouseDown={onPreventMouseDownEvent}
        >
          <Calendar
            className="range-calendar"
            color={color}
            onClickPrevBtn={onClickPrevBtn}
            onClickMonth={onClickLeftMonth}
            month={months[0]}
            year={years[0]}
            onClickYear={onClickLeftYear}
            selectedDates={selectedDates}
            onClickNextBtn={onClickNextBtn}
            onClickDay={onClickDay}
            openMonthList={openLeftMonthList}
            openYearList={openLeftYearList}
            onChangeMonth={onChangeLeftMonth}
            onChangeYear={onChangeLeftYear}
            minDate={endActive && selectedDates[0] ? selectedDates[0] : minDate}
            maxDate={startActive && selectedDates[1] ? selectedDates[1] : maxDate}
          />
          <Divider type="vertical" />
          <Calendar
            className="range-calendar"
            color={color}
            onClickPrevBtn={onClickPrevBtn}
            onClickMonth={onClickRightMonth}
            month={months[1]}
            year={years[1]}
            onClickYear={onClickRightYear}
            selectedDates={selectedDates}
            onClickNextBtn={onClickNextBtn}
            onClickDay={onClickDay}
            openMonthList={openRightMonthList}
            openYearList={openRightYearList}
            onChangeMonth={onChangeRightMonth}
            onChangeYear={onChangeRightYear}
            minDate={endActive && selectedDates[0] ? selectedDates[0] : minDate}
            maxDate={startActive && selectedDates[1] ? selectedDates[1] : maxDate}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
