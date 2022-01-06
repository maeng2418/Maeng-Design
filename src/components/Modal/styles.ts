import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { ModalProps } from './Modal';

const createStyle =
  (color?: ModalProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);

    // default
    const defaultStyle = css``;

    return [defaultStyle];
  };

export default createStyle;
