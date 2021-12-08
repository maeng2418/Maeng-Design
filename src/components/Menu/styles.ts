import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { STRING_REGEX } from '../../utils/regex';
import { MenuProps } from './Menu';
const createStyle =
  (color?: MenuProps['color'], mode?: MenuProps['mode'], collapsed?: MenuProps['collapsed']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const subColor = (function () {
      const SUB_COLOR_IDX = 1;
      const sub = `${color?.replace(STRING_REGEX, '')}${SUB_COLOR_IDX}` as MenuProps['color'];
      return getColor(theme, sub);
    })();

    const navStyle = css`
      border-bottom: 1px solid ${getColor(theme, 'gray4')};
      box-shadow: none;
    `;

    const mainMenuStyle = css`
      & ul.main-menu {
        list-style: none;
        height: 46px;
        line-height: 46px;
        margin: 0;
      }
    `;

    const mainMenuItemStyle = css`
      & ul.main-menu {
        & > li {
          float: left; // 메뉴를 왼쪽부터 표시
          position: relative;

          & > a {
            display: flex;
            font-size: 14px;
            padding: 0 20px;
            color: ${getColor(theme, 'gray13')};
            text-decoration: none;
            align-items: center;
          }

          &:hover {
            border-bottom: 2px solid ${primaryColor};

            & > a {
              color: ${primaryColor};
            }

            // 서브 메뉴 노출
            ul {
              opacity: 1;
            }
          }

          &.selected {
            border-bottom: 2px solid ${primaryColor};
            & > a {
              color: ${primaryColor};
              background: ${getColor(theme, 'gray1')};
            }
          }

          &.disabled {
            border: none !important;
            ul {
              opacity: 0;
            }
            a {
              cursor: not-allowed !important;
              color: ${getColor(theme, 'gray6')} !important;
            }
          }
        }
      }
    `;

    const subMenuStyle = css`
      & ul.sub-menu {
        min-width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        border-radius: 4px;
        position: absolute;
        top: 50px;
        background-color: ${getColor(theme, 'gray1')};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
          0 9px 28px 8px rgb(0 0 0 / 5%);
        opacity: 0;
      }
    `;

    const subMenuItemStyle = css`
      & ul.sub-menu li {
        float: none;
        padding: 0;
        margin: 0;

        & a {
          display: flex;
          font-size: 14px;
          padding: 4px 15px;
          color: ${getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          white-space: nowrap;

          &:hover {
            color: ${primaryColor};
            background: ${getColor(theme, 'gray1')};
          }
        }

        &.selected a {
          color: ${primaryColor};
          background: ${getColor(theme, 'gray1')};
        }

        &.disabled > a {
          cursor: not-allowed !important;
          color: ${getColor(theme, 'gray6')} !important;
        }
      }
    `;

    const verticalNavStyle = css`
      border-right: 1px solid ${getColor(theme, 'gray4')};
      width: 256px;
    `;

    const verticalMainMenuStyle = css`
      & ul.main-menu {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `;

    const verticalMainMenuItemStyle = css`
      & ul.main-menu li {
        padding: 0;
        margin: 0;

        a {
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px;
          color: ${getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          white-space: nowrap;
          justify-content: space-between;

          & svg {
            margin-right: 8px;
          }
        }
        &:hover > a {
          color: ${primaryColor};

          & svg {
            fill: ${primaryColor};
          }
        }

        &.selected {
          &.item {
            border-right: 3px solid ${primaryColor};
            background: ${subColor};
          }
          & > a {
            color: ${primaryColor};
          }
          & ul.sub-menu {
            display: block;
          }
        }
        &.disabled {
          border: 0 !important;
          background-color: ${getColor(theme, 'gray2')} !important;
          & > a {
            cursor: not-allowed !important;
            color: ${getColor(theme, 'gray6')} !important;

            svg {
              fill: ${getColor(theme, 'gray6')} !important;
            }
          }
        }
      }
    `;

    const verticalSubMenuStyle = css`
      & ul.sub-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${getColor(theme, 'gray2')};
        display: none;
      }
    `;

    const verticalSubMenuItemStyle = css`
      & ul.sub-menu li {
        padding: 0;
        margin: 0;

        a {
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px 4px 48px;
          color: ${getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          white-space: nowrap;
        }

        &:hover a {
          color: ${primaryColor};
        }

        &.selected a {
          color: ${primaryColor};
        }
        &.disabled > a {
          cursor: not-allowed !important;
          color: ${getColor(theme, 'gray6')} !important;
        }
      }
    `;

    const collapsedNavStyle = css`
      border-right: 1px solid ${getColor(theme, 'gray4')};
      width: 80px;
    `;

    const collapsedMainMenuStyle = css`
      & ul.main-menu {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `;

    const collapsedMainMenuItemStyle = css`
      & ul.main-menu > li {
        position: relative;
        padding: 0;
        margin: 0;

        a {
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px;
          color: ${getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          justify-content: center;
          white-space: nowrap;

          & svg {
            display: none;
          }
        }

        &:hover,
        &.selected {
          background: ${subColor};
          & > a {
            color: ${primaryColor};
          }
        }

        &:hover {
          border-right: 3px solid ${primaryColor};
          &.item {
            border: 0;
          }
        }
        &.disabled {
          background: ${getColor(theme, 'gray1')};
          border: none;
          a {
            cursor: not-allowed !important;
            color: ${getColor(theme, 'gray6')} !important;
          }
        }
      }
    `;

    const collapsedSubMenuStyle = css`
      & ul.sub-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${getColor(theme, 'gray2')};
        display: none;
      }

      & ul.main-menu li {
        &:hover {
          ul {
            display: block;
            position: absolute;
            top: 0;
            padding-left: 90px;
            background: transparent;
          }
        }
        &.disabled ul {
          display: none;
        }
      }
    `;

    const collapsedSubMenuItemStyle = css`
      & ul.sub-menu li {
        padding: 0;
        margin: 0;
        background: ${getColor(theme, 'gray2')};

        a {
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px;
          color: ${getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          justify-content: left;
          white-space: nowrap;
        }

        &:hover,
        &.selected {
          a {
            color: ${primaryColor};
          }
        }
        &.disabled > a {
          cursor: not-allowed !important;
          color: ${getColor(theme, 'gray6')} !important;
        }
      }
    `;

    if (mode === 'vertical' && collapsed === false)
      return [
        verticalNavStyle,
        verticalMainMenuStyle,
        verticalMainMenuItemStyle,
        verticalSubMenuStyle,
        verticalSubMenuItemStyle,
      ];
    if (mode === 'vertical' && collapsed === true)
      return [
        collapsedNavStyle,
        collapsedMainMenuStyle,
        collapsedMainMenuItemStyle,
        collapsedSubMenuStyle,
        collapsedSubMenuItemStyle,
      ];
    return [navStyle, mainMenuStyle, mainMenuItemStyle, subMenuStyle, subMenuItemStyle];
  };

export default createStyle;
