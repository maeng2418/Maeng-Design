import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { NOT_STRING_REGEX } from '../../utils/regex';
import { MenuProps } from './Menu';

const createStyle =
  (color?: MenuProps['color'], mode?: MenuProps['mode'], collapsed?: MenuProps['collapsed']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const subColor = (function () {
      const SUB_COLOR_IDX = 1;
      const sub = `${color?.replace(NOT_STRING_REGEX, '')}${SUB_COLOR_IDX}` as MenuProps['color'];
      return getColor(theme, sub);
    })();

    const navStyle = css`
      border-bottom: 1px solid
        ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray10') : getColor(theme, 'gray4')};
      box-shadow: none;
      background: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray12')
        : getColor(theme, 'gray1')};
    `;

    const mainMenuStyle = css`
      ul.main-menu {
        list-style: none;
        height: 46px;
        line-height: 46px;
        margin: 0;
      }
    `;

    const mainMenuItemStyle = css`
      ul.main-menu > li.item-group-list,
      ul.main-menu > li.menu-item-list {
        cursor: pointer;
        float: left; // 메뉴를 왼쪽부터 표시
        position: relative;

        span.group-item,
        & > span.item {
          position: relative;
          display: flex;
          font-size: 14px;
          padding: 0 20px;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray1')
            : getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;

          a {
            color: inherit;
            text-decoration: none;

            &::before {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: transparent;
              content: '';
            }
          }
        }

        &:hover {
          border-bottom: 2px solid ${primaryColor};

          span.group-item,
          & > span.item {
            color: ${primaryColor};
          }

          // 서브 메뉴 노출
          ul.sub-menu {
            opacity: 1;
          }
        }

        &.selected {
          border-bottom: 2px solid ${primaryColor};
          span.group-item,
          & > span.item {
            color: ${primaryColor};
            background: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray12')
              : getColor(theme, 'gray1')};
          }
        }

        &.disabled {
          border: none !important;
          span.group-item,
          & > span.item {
            cursor: not-allowed !important;
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')} !important;
          }
          ul.sub-menu {
            opacity: 0;
          }
        }
      }
    `;

    const subMenuStyle = css`
      ul.sub-menu {
        min-width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        border-radius: 4px;
        position: absolute;
        top: 50px;
        background-color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray12')
          : getColor(theme, 'gray1')};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
          0 9px 28px 8px rgb(0 0 0 / 5%);
        opacity: 0;
      }
    `;

    const subMenuItemStyle = css`
      ul.sub-menu > li.menu-item-list {
        cursor: pointer;
        float: left; // 메뉴를 왼쪽부터 표시
        position: relative;

        & > span.item {
          position: relative;
          display: flex;
          font-size: 14px;
          padding: 4px 15px;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray1')
            : getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          white-space: nowrap;

          a {
            color: inherit;
            text-decoration: none;

            &::before {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: transparent;
              content: '';
            }
          }
        }

        &:hover > span.item {
          color: ${primaryColor};
        }

        &.selected > span.item {
          color: ${primaryColor};
        }

        &.disabled > span.item {
          cursor: not-allowed !important;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray8')
            : getColor(theme, 'gray6')} !important;
        }
      }
    `;

    const verticalNavStyle = css`
      border-right: 1px solid
        ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray10') : getColor(theme, 'gray4')};
      background: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray12')
        : getColor(theme, 'gray1')};
      width: 256px;
    `;

    const verticalMainMenuStyle = css`
      ul.main-menu {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `;

    const verticalMainMenuItemStyle = css`
      ul.main-menu > li.item-group-list,
      ul.main-menu > li.menu-item-list {
        cursor: pointer;
        padding: 0;
        margin: 0;

        span.group-item,
        & > span.item {
          position: relative;
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray1')
            : getColor(theme, 'gray13')};

          text-decoration: none;
          align-items: center;
          white-space: nowrap;
          justify-content: space-between;

          a {
            color: inherit;
            text-decoration: none;

            &::before {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: transparent;
              content: '';
            }
          }

          & svg.item-group-icon {
            margin-right: 8px;
          }
        }

        &:hover {
          span.group-item,
          & > span.item {
            color: ${primaryColor};

            svg.item-group-icon {
              fill: ${primaryColor};
            }
          }
        }

        &.selected {
          &.menu-item-list {
            border-right: 3px solid ${primaryColor};
            background: ${subColor};
          }
          span.group-item,
          & > span.item {
            color: ${primaryColor};
          }

          ul.sub-menu {
            display: block;
          }
        }

        &.disabled {
          border: 0 !important;
          background-color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray11')
            : getColor(theme, 'gray2')} !important;

          span.group-item,
          & > span.item {
            cursor: not-allowed !important;
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')} !important;

            svg.item-group-icon {
              fill: ${theme.mode === ThemeMode.DARK
                ? getColor(theme, 'gray8')
                : getColor(theme, 'gray6')} !important;
            }
          }
        }
      }
    `;

    const verticalSubMenuStyle = css`
      ul.sub-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray11')
          : getColor(theme, 'gray2')};
        display: none;
      }
    `;

    const verticalSubMenuItemStyle = css`
      ul.sub-menu > li.menu-item-list {
        cursor: pointer;
        padding: 0;
        margin: 0;

        & > span.item {
          position: relative;
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px 4px 48px;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray1')
            : getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          white-space: nowrap;

          a {
            color: inherit;
            text-decoration: none;

            &::before {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: transparent;
              content: '';
            }
          }
        }

        &:hover > span.item {
          color: ${primaryColor};
        }

        &.selected {
          border-right: 3px solid ${primaryColor};
          background: ${subColor};

          & > span.item {
            color: ${primaryColor};
          }
        }
        &.disabled > span.item {
          cursor: not-allowed !important;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray8')
            : getColor(theme, 'gray6')} !important;
        }
      }
    `;

    const collapsedNavStyle = css`
      border-right: 1px solid
        ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray10') : getColor(theme, 'gray4')};
      background: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray12')
        : getColor(theme, 'gray1')};
      width: 80px;
    `;

    const collapsedMainMenuStyle = css`
      ul.main-menu {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `;

    const collapsedMainMenuItemStyle = css`
      ul.main-menu > li.item-group-list,
      ul.main-menu > li.menu-item-list {
        cursor: pointer;
        position: relative;
        padding: 0;
        margin: 0;

        span.group-item,
        & > span.item {
          position: relative;
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray1')
            : getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          justify-content: center;
          white-space: nowrap;

          a {
            color: inherit;
            text-decoration: none;

            &::before {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: transparent;
              content: '';
            }
          }

          & svg.item-group-icon {
            display: none;
          }
        }

        &:hover {
          background: ${subColor};

          &.item-group-list {
            border-right: 3px solid ${primaryColor};

            ul.sub-menu {
              display: block;
              position: absolute;
              top: 0;
              padding-left: 90px;
              background: transparent;
            }
          }
          span.group-item,
          & > span.item {
            color: ${primaryColor};
          }
        }

        &.selected {
          background: ${subColor};

          span.group-item,
          & > span.item {
            color: ${primaryColor};
          }
        }

        &.disabled,
        &.disabled:hover {
          background: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray12')
            : getColor(theme, 'gray1')};
          border: none;

          span.group-item,
          & > span.item {
            cursor: not-allowed !important;
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')} !important;
          }

          ul.sub-menu {
            display: none;
          }
        }
      }
    `;

    const collapsedSubMenuStyle = css`
      ul.sub-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray11')
          : getColor(theme, 'gray2')};
        display: none;
      }
    `;

    const collapsedSubMenuItemStyle = css`
      & ul.sub-menu li {
        cursor: pointer;
        padding: 0;
        margin: 0;
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray11')
          : getColor(theme, 'gray2')};
        span {
          position: relative;
          display: flex;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 4px 16px;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray1')
            : getColor(theme, 'gray13')};
          text-decoration: none;
          align-items: center;
          justify-content: left;
          white-space: nowrap;

          & a::before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: transparent;
            content: '';
          }
        }

        &:hover,
        &.selected {
          span {
            color: ${primaryColor};
          }
        }
        &.disabled > span {
          cursor: not-allowed !important;
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray8')
            : getColor(theme, 'gray6')} !important;
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
