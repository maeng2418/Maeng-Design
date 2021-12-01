import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { MenuProps } from './Menu';

const createStyle = (color?: MenuProps['color']) => (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color);

  // default
  const defaultStyle = css`
    list-style: none;
    height: 40px;
    padding: 5px 1px;
    margin: 0;
    background: ${primaryColor};

    & ul.main-menu {
      margin: 0;
      list-style: none;

      & > li {
        float: left; // 메뉴를 왼쪽부터 표시
        position: relative;
        margin: 5px 30px;
        padding: 0;

        & > a {
          display: flex;
          font-weight: bold;
          font-size: 18px;
          padding: 7px 8px;
          margin: 0;
          color: ${getColor(theme, 'gray1')};
          text-decoration: none;
          justify-content: center;

          &:hover {
            background: ${getColor(theme, 'gray1')};
            color: ${primaryColor};
          }
        }

        &:hover ul {
          opacity: 1;

          & li {
            height: 35px;
            overflow: visible;
            padding: 0;
          }
        }
      }
    }
  `;

  return [defaultStyle];
};

export const createSubMenuStyle = (color?: MenuProps['color']) => (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color);

  // default
  const defaultStyle = css`
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: -30px;
    top: 40px;
    width: 200px;
    background: ${primaryColor};
    opacity: 0;

    & li {
      float: none;
      padding: 0;
      font-size: 10px;

      & a {
        display: flex;
        font-size: 18px;
        padding: 7px 8px;
        margin: 0;
        color: ${getColor(theme, 'gray1')};
        text-decoration: none;
        justify-content: center;

        &:hover {
          color: ${primaryColor};
          background: ${getColor(theme, 'gray1')};
          border: 1px solid ${primaryColor};
        }
      }
    }
  `;

  return [defaultStyle];
};

export default createStyle;
