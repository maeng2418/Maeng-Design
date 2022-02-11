import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { ButtonProps } from './Button';

const createStyle =
  (
    color?: ButtonProps['color'],
    size?: ButtonProps['size'],
    shape?: ButtonProps['shape'],
    type?: ButtonProps['type'],
    disabled?: ButtonProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color, disabled, 'gray5');

    // default
    const defaultStyle = css`
      line-height: 1.5715;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      border: 1px solid
        ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray9') : getColor(theme, 'gray5')};
      box-sizing: border-box;
      box-shadow: 0 2px 0
        ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray9') : getColor(theme, 'gray5')}05;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      border-radius: 2px;
      color: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray4')
        : getColor(theme, 'gray10')};
      background: ${theme.mode === ThemeMode.DARK
        ? getColor(theme, 'gray13')
        : getColor(theme, 'gray1')};

      &:focus,
      &:active,
      &:hover {
        color: ${primaryColor};
        border-color: ${primaryColor};
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};
        box-shadow: 0 0 8px 2px
          ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray1') : getColor(theme, 'gray13')}1F;
      }

      &[disabled] {
        cursor: not-allowed !important;
        color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray8')
          : getColor(theme, 'gray6')} !important;
        border-color: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray9')
          : getColor(theme, 'gray5')} !important;
        background: ${theme.mode === ThemeMode.DARK
          ? getColor(theme, 'gray11')
          : getColor(theme, 'gray3')} !important;
        text-shadow: none !important;
        box-shadow: none !important;
      }
    `;

    // size
    const getSize = () => {
      if (size === 'large')
        return css`
          height: 40px;
          padding: 6.4px 15px;
          font-size: 16px;
          border-radius: 2px;
        `;
      if (size === 'small')
        return css`
          height: 24px;
          padding: 0px 7px;
          font-size: 14px;
          border-radius: 2px;
        `;
      return css``;
    };

    // shape
    const getShape = () => {
      if (shape === 'circle') {
        if (size === 'large') {
          return css`
            min-width: 40px;
            border-radius: 50%;
            padding-right: 0;
            padding-left: 0;
            text-align: center;
          `;
        }
        if (size === 'small') {
          return css`
            min-width: 24px;
            border-radius: 50%;
            padding-right: 0;
            padding-left: 0;
            text-align: center;
          `;
        }
        return css`
          min-width: 32px;
          border-radius: 50%;
          padding-right: 0;
          padding-left: 0;
          text-align: center;
        `;
      }
      if (shape === 'round') {
        if (size === 'large')
          return css`
            padding: 6.4px 20px;
            border-radius: 40px;
          `;
        if (size === 'small')
          return css`
            padding: 0px 12px;
            border-radius: 24px;
          `;
        return css`
          padding: 4px 16px;
          border-radius: 32px;
        `;
      }
      return css``;
    };

    // type
    const getType = () => {
      if (type === 'primary')
        return css`
          color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray13')
            : getColor(theme, 'gray1')};
          border-color: ${primaryColor};
          background: ${primaryColor};
          text-shadow: 0 -1px 0 ${theme.mode === ThemeMode.DARK ? getColor(theme, 'gray1') : getColor(theme, 'gray13')}1F;
          box-shadow: 0 2px
            ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray1')
              : getColor(theme, 'gray13')}0b;

          &:focus,
          &:hover,
          &:active {
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray13')
              : getColor(theme, 'gray1')};
            border-color: ${primaryColor};
            background: ${primaryColor};
            opacity: 0.8;
          }
        `;
      if (type === 'dashed')
        return css`
          border-color: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray9')
            : getColor(theme, 'gray5')};
          background: ${theme.mode === ThemeMode.DARK
            ? getColor(theme, 'gray13')
            : getColor(theme, 'gray1')};
          border-style: dashed;
        `;
      if (type === 'text')
        return css`
          border-color: transparent;
          background: 0 0;
          box-shadow: none;

          &:focus,
          &:hover,
          &:active {
            color: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray4')
              : getColor(theme, 'gray10')};
            background: ${theme.mode === ThemeMode.DARK
              ? getColor(theme, 'gray1')
              : getColor(theme, 'gray13')}05;
            border-color: transparent;
          }

          &[disabled] {
            border-color: transparent !important;
            background: transparent !important;
          }
        `;
      if (type === 'link')
        return css`
          &,
          &:focus,
          &:hover,
          &:active {
            color: ${primaryColor};
            border-color: transparent;
            background: 0 0;
            box-shadow: none;
            text-decoration: none;
          }

          &[disabled] {
            border-color: transparent !important;
            background: transparent !important;
          }
        `;
      if (type === 'outline')
        return css`
          color: ${primaryColor};
          border-color: ${primaryColor};
        `;
      return css``;
    };

    return [defaultStyle, getType(), getSize(), getShape()];
  };

export default createStyle;
