import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { MenuProps } from './Menu';
const createStyle =
  (color?: MenuProps['color'], mode?: MenuProps['mode']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css`
      border-bottom: 1px solid ${getColor(theme, 'gray4')};
      box-shadow: none;

      & ul.main-menu {
        list-style: none;
        height: 46px;
        line-height: 46px;
        margin: 0;
      }
    `;

    // itemGroupStyle
    const itemGroupStyle = css`
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

        & li {
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
        }
      }
    `;

    // itemStyle
    const itemStyle = css`
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
            a {
              color: ${primaryColor};
              background: ${getColor(theme, 'gray1')};
            }
          }

          & ul.sub-menu {
            & li {
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
            }
          }
        }
      }
    `;

    const verticalStyle = css`
      border-right: 1px solid ${getColor(theme, 'gray4')};
      width: 256px;

      & ul.main-menu {
        margin: 0;
        padding: 0;
        list-style: none;

        & li {
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
          &:hover a {
            color: ${primaryColor};

            & svg {
              fill: ${primaryColor};
            }
          }

          &.selected {
            &.item {
              border-right: 3px solid ${primaryColor};
              background: ${getColor(theme, 'blue1')};
            }
            & a {
              color: ${primaryColor};
            }
            & ul.sub-menu {
              display: block;
            }
          }

          & ul.sub-menu {
            margin: 0;
            padding: 0;
            list-style: none;
            background: ${getColor(theme, 'gray2')};
            display: none;

            & li {
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
            }
          }
        }
      }
    `;

    if (mode === 'vertical') return [verticalStyle];
    return [defaultStyle, itemGroupStyle, itemStyle];
  };

export default createStyle;
