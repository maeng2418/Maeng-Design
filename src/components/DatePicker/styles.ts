import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { DatePickerProps } from './DatePicker';

const datePickerStyle =
  (
    active: boolean,
    color: DatePickerProps['color'],
    size: DatePickerProps['size'],
    disabled: DatePickerProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css`
      position: relative;

      &.date-picker div.input-box {
        position: relative;
        cursor: pointer;
        color: ${active ? getColor(theme, 'gray6') : getColor(theme, 'gray10')};
        border: 1px solid ${active ? primaryColor : getColor(theme, 'gray5')};
        border-radius: 2px;
        box-shadow: ${active ? '0 0 8px 2px rgb(0 0 0 / 12%)' : 'none'};
        background: ${getColor(theme, 'gray1')};
        width: 100%;
        box-sizing: border-box;
        padding: 0 calc(15px + 1em) 0 15px;
        outline: none;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        input {
          pointer-events: none;
          cursor: pointer;
          box-sizing: border-box;
          width: 100%;
          font-size: 1em;
          border: none;
          outline: none;
          margin: 0;
          padding: 0;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        svg.ic-calendar-outlined {
          position: absolute;
          top: 50%;
          right: 15px;
          fill: ${getColor(theme, 'gray7')};
          transform: translateY(-50%);
        }

        &.input-box:focus,
        &.input-box:active,
        &.input-box:hover {
          border-color: ${primaryColor};
          background: ${getColor(theme, 'gray1')};
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 12%);

          svg.ic-calendar-outlined {
            fill: ${primaryColor};
          }
        }
      }
    `;

    // size
    const getSize = () => {
      if (size === 'large')
        return css`
          div.input-box {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
          }
        `;
      if (size === 'small')
        return css`
          div.input-box {
            font-size: 14px;
            height: 24px;
            line-height: 22px;
          }
        `;
      return css`
        div.input-box {
          font-size: 14px;
          height: 32px;
          line-height: 30px;
        }
      `;
    };

    // disabled
    const getDisabled = () => {
      if (disabled)
        return css`
          &.date-picker div.input-box {
            cursor: not-allowed;
            color: ${getColor(theme, 'gray6')};
            background: ${getColor(theme, 'gray3')};
            border-color: ${getColor(theme, 'gray5')};
            text-shadow: none;
            box-shadow: none;

            input {
              pointer-events: none;
              background: none;
            }

            &.input-box:focus,
            &.input-box:active,
            &.input-box:hover {
              background: ${getColor(theme, 'gray3')};
              border-color: ${getColor(theme, 'gray5')};
              box-shadow: none !important;
              svg.ic-calendar-outlined {
                fill: ${getColor(theme, 'gray7')};
              }
            }
          }
        `;
      return css``;
    };

    return [defaultStyle, getSize, getDisabled];
  };

export const calendarStyle =
  (color?: DatePickerProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    return css`
      &.calendar {
        width: 280px;
        margin: 0;
        padding: 0;
        border-radius: 2px;
        overflow: hidden;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: ${getColor(theme, 'gray1')};
        border-radius: 2px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
        transform: translateY(10px);
        z-index: 1;

        &::before {
          content: '';
          width: 100%;
          height: 10px;
          background-color: transparent;
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(-100%);
        }

        div.calendar-header {
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

        div.calendar-body {
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

        &.curr-date span {
          color: ${getColor(theme, 'gray1')};
          background: ${getColor(theme, 'blue6')};
        }
      }

      &.disabled {
        cursor: not-allowed;
        color: ${getColor(theme, 'gray6')};
        background-color: ${getColor(theme, 'gray3')};
        border-color: ${getColor(theme, 'gray5')};
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

      div {
        display: grid;
        place-items: center;

        span {
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

// Date Range Picker
export const dateRangePickerStyle =
  (
    active: boolean,
    color: DatePickerProps['color'],
    size: DatePickerProps['size'],
    disabled: DatePickerProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    const defaultStyle = css`
      &.date-range-picker div.input-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        position: relative;
        cursor: pointer;
        color: ${active ? getColor(theme, 'gray6') : getColor(theme, 'gray10')};
        border: 1px solid ${active ? primaryColor : getColor(theme, 'gray5')};
        border-radius: 2px;
        box-shadow: ${active ? '0 0 8px 2px rgb(0 0 0 / 12%)' : 'none'};
        background: ${getColor(theme, 'gray1')};
        width: 100%;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        span.start-date,
        span.end-date {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          flex: 1;
          position: relative;
          height: 100%;
          padding: 0 15px;
          input {
            width: 100%;
            pointer-events: none;
            cursor: pointer;
            box-sizing: border-box;
            font-size: 1em;
            border: none;
            outline: none;
            margin: 0;
            padding: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          svg.ic-calendar-outlined {
            position: absolute;
            top: 50%;
            right: 15px;
            fill: ${getColor(theme, 'gray7')};
            transform: translateY(-50%);
          }

          &:focus,
          &:active,
          &:hover {
            border-bottom: 1px solid ${primaryColor};
            background: ${getColor(theme, 'gray1')};

            svg.ic-calendar-outlined {
              fill: ${primaryColor};
            }
          }
        }

        span.separator {
          display: flex;
          align-items: center;
          svg.ic-right-outlined {
            fill: ${getColor(theme, 'gray7')};
          }
        }

        &.input-box:focus,
        &.input-box:active,
        &.input-box:hover {
          border-color: ${primaryColor};
          background: ${getColor(theme, 'gray1')};
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 12%);
        }
      }
    `;

    // size
    const getSize = () => {
      if (size === 'large')
        return css`
          div.input-box {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
          }
        `;
      if (size === 'small')
        return css`
          div.input-box {
            font-size: 14px;
            height: 24px;
            line-height: 22px;
          }
        `;
      return css`
        div.input-box {
          font-size: 14px;
          height: 32px;
          line-height: 30px;
        }
      `;
    };

    // disabled
    const getDisabled = () => {
      if (disabled)
        return css`
          &.date-range-picker div.input-box {
            cursor: not-allowed;
            color: ${getColor(theme, 'gray6')};
            background: ${getColor(theme, 'gray3')};
            border-color: ${getColor(theme, 'gray5')};
            text-shadow: none;
            box-shadow: none;

            input {
              pointer-events: none;
              background: none;
            }
            span.start-date,
            span.end-date {
              &:focus,
              &:active,
              &:hover {
                background: ${getColor(theme, 'gray3')};
                border: none;
                box-shadow: none !important;
                svg.ic-calendar-outlined {
                  fill: ${getColor(theme, 'gray7')};
                }
              }
            }

            &.input-box:focus,
            &.input-box:active,
            &.input-box:hover {
              background: ${getColor(theme, 'gray3')};
              border-color: ${getColor(theme, 'gray5')};
              box-shadow: none !important;
            }
          }
        `;
      return css``;
    };
    return [defaultStyle, getSize, getDisabled];
  };

export const rangeCalendarContainerStyle = (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => css`
  display: flex;
  width: 560px;
  overflow: hidden;
  position: absolute;
  background: ${getColor(theme, 'gray1')};
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  transform: translateY(10px);
  z-index: 1;
`;

export const rangeCalendarStyle =
  (color?: DatePickerProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    return css`
      &.range-calendar {
        position: relative;
        width: 280px;
        margin: 0;
        padding: 0;
        border-radius: 2px;
        overflow: hidden;
        background: ${getColor(theme, 'gray1')};
        border-radius: 2px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        z-index: 1;

        &::before {
          content: '';
          width: 100%;
          height: 10px;
          background-color: transparent;
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(-100%);
        }

        div.calendar-header {
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

        div.calendar-body {
          padding: 10px 12px 20px;
        }
      }

      &:first-of-type {
        .calendar-header .next-month {
          visibility: hidden;
        }
      }
      &:last-of-type {
        .calendar-header .prev-month {
          visibility: hidden;
        }
      }

      div.month-list,
      div.year-list {
        width: 280px;
      }
    `;
  };

export default datePickerStyle;
