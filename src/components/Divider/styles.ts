import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { DividerProps } from './Divider';

const createStyle = (
  children?: DividerProps['children'],
  dashed?: DividerProps['dashed'],
  position?: DividerProps['position'],
  type?: DividerProps['type'],
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, 'gray5');

  // dashed
  const borderStyle = `1px ${dashed ? 'dashed' : 'solid'} ${primaryColor}`;

  // default
  const defaultStyle = css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-top: ${borderStyle};
  `;

  // type
  const getType = () => {
    if (type === 'vertical')
      return css`
        position: relative;
        top: -0.06em;
        display: inline-block;
        height: 0.9em;
        margin: 0 8px;
        vertical-align: middle;
        border-top: 0;
        border-left: ${borderStyle};
      `;

    return css`
      display: flex;
      clear: both;
      width: 100%;
      min-width: 100%;
      margin: 24px 0;
    `;
  };

  // children
  const getChildrenStyle = () => {
    if (children && type === 'horizontal')
      return css`
        display: flex;
        margin: 16px 0;
        color: ${getColor(theme, 'gray13')};
        font-size: 16px;
        white-space: nowrap;
        text-align: center;
        border-top: none;

        &::before {
          position: relative;
          border-top: ${borderStyle};
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }

        &::after {
          position: relative;
          border-top: ${borderStyle};
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }
      `;
    return css``;
  };

  // position
  const getPosition = () => {
    if (type === 'horizontal' && children && position === 'left')
      return css`
        &::before {
          top: 50%;
          width: 5%;
        }
        &::after {
          top: 50%;
          width: 95%;
        }
      `;
    if (type === 'horizontal' && children && position === 'right')
      return css`
        &::before {
          top: 50%;
          width: 95%;
        }
        &::after {
          top: 50%;
          width: 5%;
        }
      `;
    if (type === 'horizontal' && children && position === 'center')
      return css`
        &::before {
          top: 50%;
          width: 50%;
        }
        &::after {
          top: 50%;
          width: 50%;
        }
      `;
    return css``;
  };

  return [defaultStyle, getType(), getChildrenStyle(), getPosition()];
};

export const getChildrenStyle = css`
  display: inline-block;
  padding: 0 1em;
`;

export default createStyle;
