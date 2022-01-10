import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { DatePickerProps } from './DatePicker';

const createStyle =
  (color?: DatePickerProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css``;

    return [defaultStyle];
  };

export default createStyle;
