/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect, useRef } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { CheckCircleFilled, CloseCircleFilled, InfoCircleFilled } from '../Icons';
import createStyle, { toastContainerStyle } from './styles';

export type ToastMessageType = 'success' | 'error' | 'warning';

export interface ToastMessage {
  className?: string;
  type: ToastMessageType;
  message: string;
  duration?: number;
  onClose?: () => void;
}

export interface ToastMsgProps extends ToastMessage {
  container: HTMLDivElement;
  containerRef: React.RefObject<HTMLDivElement>;
  element: HTMLDivElement;
}

export const ToastMsgContainer = forwardRef<HTMLDivElement>(({ children }, ref) => {
  return (
    <div ref={ref} css={toastContainerStyle}>
      {children}
    </div>
  );
});

export const ToastMsg: React.FC<ToastMsgProps> = ({
  className = '',
  type,
  message,
  container,
  containerRef,
  element,
  duration = 3000,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      unmountComponentAtNode(element);
      onClose && onClose();
      if (containerRef.current?.childElementCount === 0) unmountComponentAtNode(container);
    }, duration);
  }, []);

  if (type === 'success')
    return (
      <div className={className} ref={ref} css={createStyle(type)}>
        <span className="icon-wrapper">
          <CheckCircleFilled />
        </span>
        <span>{message}</span>
      </div>
    );
  if (type === 'error')
    return (
      <div className={className} ref={ref} css={createStyle(type)}>
        <span className="icon-wrapper">
          <CloseCircleFilled />
        </span>
        <span>{message}</span>
      </div>
    );
  if (type === 'warning')
    return (
      <div className={className} ref={ref} css={createStyle(type)}>
        <span className="icon-wrapper">
          <InfoCircleFilled />
        </span>
        <span>{message}</span>
      </div>
    );

  return (
    <div className={className} ref={ref} css={createStyle(type)}>
      <span>{message}</span>
    </div>
  );
};
