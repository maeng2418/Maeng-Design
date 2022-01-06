/** @jsxImportSource @emotion/react */
import { css, Global, Interpolation, Theme, ThemeMode } from '@emotion/react';
import React, { MouseEvent, ReactNode, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Button, CloseOutlined } from '..';
import { DarkColorType, getColor, LightColorType } from '../../styles/colors';
import sizeTranslator from '../../utils/sizeTranslator';
import { ButtonProps } from '../Button/Button';

export interface ModalProps {
  color?: LightColorType | DarkColorType;
  width?: string | number;
  visible: boolean;
  title?: ReactNode;
  closeIcon?: ReactNode;
  onClickBackground?: (e: MouseEvent) => void;
  onConfirm?: (e: MouseEvent) => void;
  onCancel?: (e: MouseEvent) => void;
  onClose?: (e: MouseEvent) => void;
  cancelOptions?: { label: ReactNode } & Omit<ButtonProps, 'onClick'>;
  confirmOptions?: { label: ReactNode } & Omit<ButtonProps, 'onClick'>;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  width,
  visible = false,
  title,
  closeIcon,
  onClickBackground,
  onConfirm,
  onCancel,
  onClose,
  color = 'blue6',
  cancelOptions,
  confirmOptions,
  children,
}) => {
  const onClickCloseBtn: React.MouseEventHandler<SVGSVGElement> = useCallback(
    (e) => {
      e.preventDefault();
      onClose && onClose(e);
    },
    [onClose],
  );

  const onClickCancelBtn = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      onCancel && onCancel(e);
    },
    [onCancel],
  );

  const onClickConfirmBtn = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      onConfirm && onConfirm(e);
    },
    [onConfirm],
  );

  const onClickBG = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      onClickBackground && onClickBackground(e);
    },
    [onClickBackground],
  );

  return visible
    ? createPortal(
        <>
          <Global styles={globalStyle} />
          <article css={modalStyle(width, color)}>
            <section className="modal">
              {(title || closeIcon || onClose) && (
                <header className="modal-header">
                  {title && <h3>{title}</h3>}
                  {(onClose || closeIcon) &&
                    (closeIcon ? (
                      closeIcon
                    ) : (
                      <CloseOutlined className="close-icon" onClick={onClickCloseBtn} />
                    ))}
                </header>
              )}
              <div className="modal-content">{children}</div>
              {(onConfirm || confirmOptions || onCancel || cancelOptions) && (
                <footer className="modal-footer">
                  <Button {...cancelOptions} onClick={onClickCancelBtn}>
                    {cancelOptions?.label || 'Cancel'}
                  </Button>
                  <Button
                    {...confirmOptions}
                    type={cancelOptions?.type || 'primary'}
                    onClick={onClickConfirmBtn}
                  >
                    {confirmOptions?.label || 'OK'}
                  </Button>
                </footer>
              )}
            </section>
            <div className="background" onClick={onClickBG} />
          </article>
        </>,
        document.body,
      )
    : null;
};

const globalStyle = css`
  body {
    overflow: hidden !important;
  }
`;

const modalStyle =
  (width: ModalProps['width'] = '400px', color: ModalProps['color']) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    return css`
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;

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

export default Modal;
