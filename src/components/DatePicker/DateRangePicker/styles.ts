import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../../styles';
import { DatePickerProps } from '../DatePicker';

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
        color: ${active
          ? theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray8')
            : getColor(theme, 'gray6')
          : theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray4')
          : getColor(theme, 'gray10')};
        border: 1px solid
          ${active
            ? primaryColor
            : theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray9')
            : getColor(theme, 'gray5')};
        border-radius: 2px;
        box-shadow: ${active
          ? `0 0 8px 2px ${
              theme.mode === ThemeMode.DARK ? getColor(theme, 'gray13') : 'rgb(0 0 0 / 12%)'
            }`
          : 'none'};
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};
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
            color: inherit;
            background: inherit;
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

          &.active,
          &:hover {
            border-bottom: 1px solid ${primaryColor};
            background: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray13')
              : getColor(theme, 'gray1')};

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
          background: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray13')
            : getColor(theme, 'gray1')};
          box-shadow: 0 0 8px 2px
            ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray13') : 'rgb(0 0 0 / 12%)'};
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
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')};
            background: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray11')
              : getColor(theme, 'gray3')};
            border-color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray9')
              : getColor(theme, 'gray5')};
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
                background: ${theme.mode === ThemeMode.DARK
                  ? getColor(theme, 'gray11')
                  : getColor(theme, 'gray3')};
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
              background: ${theme.mode === ThemeMode.DARK
                ? getColor(theme, 'gray11')
                : getColor(theme, 'gray3')};
              border-color: ${theme.mode === ThemeMode.DARK
                ? getColor(theme, 'gray9')
                : getColor(theme, 'gray5')};
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
  background: ${theme.mode === ThemeMode.DARK
    ? getColor(theme, 'gray13')
    : getColor(theme, 'gray1')};
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: ${theme.mode === ThemeMode.DARK
    ? `0 3px 16px -4px ${getColor(theme, 'gray13')}`
    : '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d'};
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
        color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray1')
          : getColor(theme, 'gray13')};
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};
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
            fill: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')};

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
