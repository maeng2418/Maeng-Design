import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { Column, TableProps } from './Table';

const createStyle =
  (height?: number, color?: TableProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    // const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css`
      height: ${height ? `${height}px` : 'auto'};
      overflow: auto;
      table {
        position: relative;
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;

        tbody tr {
          border-bottom: 1px solid ${getColor(theme, 'gray4')};
          td {
            background-color: ${getColor(theme, 'gray1')};
            box-sizing: border-box;
            padding: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          &:hover td {
            background: #fafafa;
          }
        }

        tfoot {
          position: sticky;
          bottom: 0;
          z-index: 2;
          tr {
            position: relative;
            background: #ffffff;
            &::after {
              content: '';
              display: flex;
              position: absolute;
              height: 1px;
              width: 100%;
              background: #eee;
              top: 0;
              left: 0;
              z-index: 3;
            }
            th {
              background-color: ${getColor(theme, 'gray2')};
              text-align: center;
            }
            &:hover td {
              background: #fafafa;
            }
          }

          &::before {
            content: '';
            position: absolute;
            top: 0;
            height: 2px;
            width: 100%;
            pointer-events: none;
            background: #eee;
            z-index: 3;
          }

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 1px;
            width: 100%;
            pointer-events: none;
            background: #eee;
            z-index: 3;
          }
        }
      }
    `;

    return [defaultStyle];
  };

export const tableDataStyle = ({
  align,
  fixed,
  left,
  right,
  width = 200,
}: Column & { left?: number; right?: number }) => {
  if (fixed === 'left')
    return css`
      text-align: ${align || 'left'};
      min-width: ${width}px;
      max-width: ${width}px;
      position: sticky;
      top: 0;
      left: ${left}px;
      z-index: 1;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        right: 0px;
        width: 2px;
        pointer-events: none;
        background: #eee;
      }
    `;
  if (fixed === 'right')
    return css`
      text-align: ${align || 'left'};
      min-width: ${width}px;
      max-width: ${width}px;
      position: sticky;
      top: 0;
      right: ${right}px;
      z-index: 1;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        left: 0px;
        width: 2px;
        pointer-events: none;
        background: #eee;
      }
    `;
  return css`
    text-align: ${align || 'left'};
    min-width: ${width}px;
  `;
};

export const tableHeadStyle = (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => css`
  position: sticky;
  top: 0;
  z-index: 2;
  tr {
    position: relative;
    background: #ffffff;
    &::after {
      content: '';
      display: flex;
      position: absolute;
      height: 1px;
      width: 100%;
      background: #eee;
      bottom: 0;
      left: 0;
      z-index: 3;
    }
    th,
    td {
      background-color: ${getColor(theme, 'gray2')};
      text-align: center;
      box-sizing: border-box;
      padding: 16px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    pointer-events: none;
    background: #eee;
    z-index: 3;
  }
`;

export default createStyle;
