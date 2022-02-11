import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { NOT_STRING_REGEX } from '../../utils/regex';
import { SelectProps } from './Select';

const selectStyle =
  (
    active: boolean,
    color?: SelectProps['color'],
    size?: SelectProps['size'],
    tagRender?: SelectProps['tagRender'],
    disabled?: SelectProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css`
      position: relative;

      & > div.input-box {
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
              theme.mode === ThemeMode.DARK
                ? getColor(theme, 'gray13')
                : `${getColor(theme, 'gray13')}1F`
            }`
          : 'none'};
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};

        width: 100%;
        box-sizing: border-box;
        padding: 0 calc(15px + 1em) 0 15px;
        outline: none;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        & > input.hidden-input {
          color: inherit;
          background: inherit;
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

        & > svg {
          position: absolute;
          top: 50%;
          right: 15px;
          fill: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray7')
            : getColor(theme, 'gray7')};
          transform: translateY(-50%);
        }

        &:focus,
        &:active,
        &:hover {
          border-color: ${primaryColor};
          background: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray13')
            : getColor(theme, 'gray1')};
          box-shadow: 0 0 8px 2px
            ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray13')
              : `${getColor(theme, 'gray13')}1f`};
        }
      }

      // Options
      & ul.option-list {
        color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray1')
          : getColor(theme, 'gray13')};
        max-height: 50vh;
        overflow: scroll;
        margin: 0;
        padding: 0;
        border-radius: 4px;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        opacity: 1;
        background-color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform: translateY(10px);
        box-shadow: ${theme.mode === ThemeMode.DARK
          ? `0 3px 16px -4px ${getColor(theme, 'gray13')}`
          : `0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
          0 9px 28px 8px rgb(0 0 0 / 5%)`};

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
      }
    `;

    // size
    const getSize = () => {
      if (size === 'large')
        return css`
          & > div.input-box {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
          }
        `;
      if (size === 'small')
        return css`
          & > div.input-box {
            font-size: 14px;
            height: 24px;
            line-height: 22px;
          }
        `;
      return css`
        & > div.input-box {
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
          & > div.input-box {
            cursor: not-allowed;
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray8')
              : getColor(theme, 'gray6')} !important;
            background: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray11')
              : getColor(theme, 'gray3')} !important;
            border-color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray9')
              : getColor(theme, 'gray5')} !important;
            text-shadow: none !important;
            box-shadow: none !important;

            input {
              pointer-events: none;
              background: none;
            }
          }
        `;
      return css``;
    };

    // tag
    const getTag = () => {
      if (tagRender)
        return css`
          & > div.input-box span.tag {
            margin-right: 5px;
          }
        `;
      return css``;
    };

    return [defaultStyle, getSize, getTag, getDisabled];
  };

export const optionListStyle =
  (color?: SelectProps['color'], disabled?: SelectProps['disabled']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const subColor = (function () {
      const SUB_COLOR_IDX = 1;
      const sub = `${color?.replace(NOT_STRING_REGEX, '')}${SUB_COLOR_IDX}` as SelectProps['color'];
      return getColor(theme, sub, disabled, 'gray5');
    })();

    // default
    const defaultStyle = css`
      cursor: pointer;
      display: flex;
      align-items: center;
      min-height: 32px;
      line-height: 22px;
      font-size: 14px;
      padding: 4px 15px;

      &:hover {
        background-color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray11')
          : getColor(theme, 'gray3')};
      }
      &.selected {
        font-weight: 600;
        background-color: ${subColor};
      }
    `;
    return [defaultStyle];
  };

// multi selected value
export const multiSelectedValueStyle = css`
  margin-right: 5px;
  &::after {
    content: ',';
  }
  &:last-of-type {
    margin: 0;
    &::after {
      content: none;
    }
  }
`;

export default selectStyle;
