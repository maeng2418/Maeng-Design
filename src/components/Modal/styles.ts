import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import sizeTranslator from '../../utils/sizeTranslator';
import { ModalProps } from './Modal';

const createStyle =
  (width: ModalProps['width'] = '400px', color: ModalProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    return css`
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;

      .modal {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        background: ${getColor(theme, 'gray1')};
        border-radius: 2px;
        width: ${sizeTranslator(width)};
        max-width: calc(100vw - 32px);
        z-index: 1;
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid ${getColor(theme, 'gray4')};
          h3 {
            padding: 0;
            margin: 0;
          }
          .close-icon {
            cursor: pointer;
            fill: ${getColor(theme, 'gray7')};
          }
        }
        .modal-content {
          padding: 24px;
        }
        .modal-footer {
          padding: 10px 16px;
          text-align: right;
          background: 0 0;
          border-top: 1px solid ${getColor(theme, 'gray4')};
          border-radius: 0 0 2px 2px;

          & button {
            margin-left: 8px;
          }
        }
      }
      .background {
        cursor: pointer;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${getColor(theme, 'gray13')};
        opacity: 0.3;
        z-index: -1;
      }
    `;
  };

export const globalStyle = css`
  body {
    overflow: hidden !important;
  }
`;
export default createStyle;
