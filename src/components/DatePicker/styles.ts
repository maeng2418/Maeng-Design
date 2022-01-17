import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { DatePickerProps } from './DatePicker';

const createStyle =
  (color?: DatePickerProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    return css`
      &.calendar {
        width: 280px;
        border-radius: 2px;
        position: relative;
        overflow: hidden;
        background: ${getColor(theme, 'gray1')};
        border-radius: 2px;
        box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
          font-size: 18px;
          padding: 20px 22px 10px;

          span.month-picker,
          span.year-picker {
            cursor: pointer;

            &:hover {
              color: ${primaryColor};
            }
          }

          svg.month-change {
            cursor: pointer;
            width: 16px;
            height: 16px;

            fill: ${getColor(theme, 'gray6')};

            &:hover {
              fill: ${primaryColor};
            }
          }
        }

        .calendar-body {
          padding: 10px 12px 20px;
        }
      }
    `;
  };

export const calendarWeekDayStyle = (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => css`
  &.calendar-week-day {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: 600;

    div {
      width: 36px;
      min-width: 24px;
      height: 30px;
      line-height: 30px;
      display: grid;
      place-items: center;
      color: ${getColor(theme, 'gray6')};
    }
  }
`;

export const calendarDays = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  &.calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;

    div {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      animation: to-top 1s forwards;

      &.calendar-day-hover {
        cursor: pointer;
        span {
          box-sizing: border-box;
          display: inline-block;
          padding: 3px 0;
          width: 24px;
          height: 24px;
          line-height: 24px;
          border-radius: 2px;
          text-align: center;
          transition: background 0.3s;
        }

        &:hover span {
          background: ${getColor(theme, 'gray3')};
        }
      }

      &.calendar-day-hover.curr-date {
        span,
        &:hover span {
          color: ${getColor(theme, 'gray1')};
          background: ${getColor(theme, 'blue6')};
        }
      }
    }

    @keyframes to-top {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

export const monthYearListStyle =
  (color?: DatePickerProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    return css`
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 10px;
      background-color: ${getColor(theme, 'gray1')};
      grid-template-columns: repeat(3, auto);
      gap: 5px;
      display: grid;
      animation: to-show 0.2s ease-in-out;

      & > div {
        display: grid;
        place-items: center;

        & > span {
          width: 100%;
          text-align: center;
          cursor: pointer;

          &.cur-month,
          &.cur-year,
          &:hover {
            color: ${primaryColor};
          }
        }
      }

      @keyframes to-show {
        0% {
          transform: scale(1.5);
          visibility: hidden;
          pointer-events: none;
        }
        100% {
          transform: scale(1);
          visibility: visible;
          pointer-events: visible;
        }
      }
    `;
  };

export default createStyle;
