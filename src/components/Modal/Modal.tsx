/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import React, { MouseEvent, ReactNode, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Button, CloseOutlined } from '..';
import { DarkColorType, LightColorType } from '../../styles/colors';
import { ButtonProps } from '../Button/Button';
import createStyle, { globalStyle } from './styles';

export interface ModalProps {
  className?: string;
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
  className = '',
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
          <div className={className} css={createStyle(width, color)}>
            <div className="modal">
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
            </div>
            <div className="background" onClick={onClickBG} />
          </div>
        </>,
        document.body,
      )
    : null;
};

export default Modal;
