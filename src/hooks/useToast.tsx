/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useRef } from 'react';
import { createPortal, render } from 'react-dom';
import { ToastMsg, ToastMsgContainer } from '../components';
import { ToastMessage } from '../components/Toast';
import { ThemeProvider } from '../styles';

const useToast = () => {
  const toastContainerRef = useRef<HTMLDivElement>(null);
  const containerDiv = useRef(
    typeof window !== 'undefined' && document.createElement('div'),
  ).current;
  const theme = useTheme();

  const message = (
    type: ToastMessage['type'],
    message: ToastMessage['message'],
    duration: ToastMessage['duration'],
    onClose: ToastMessage['onClose'],
    className: ToastMessage['className'] = '',
  ): void | Element | React.Component => {
    const messageDiv = document.createElement('div');

    if (!toastContainerRef.current)
      containerDiv &&
        render(
          createPortal(
            <ThemeProvider theme={theme}>
              <ToastMsgContainer ref={toastContainerRef} />
            </ThemeProvider>,
            document.body,
          ),
          containerDiv,
        );
    if (toastContainerRef.current)
      containerDiv &&
        render(
          createPortal(
            <ThemeProvider theme={theme}>
              <ToastMsg
                className={className}
                type={type}
                message={message}
                container={containerDiv}
                containerRef={toastContainerRef}
                element={messageDiv}
                duration={duration}
                onClose={onClose}
              />
            </ThemeProvider>,
            toastContainerRef.current,
          ),
          messageDiv,
        );
  };

  const toast = {
    success: (
      msg: ToastMessage['message'],
      duration?: ToastMessage['duration'],
      onClose?: ToastMessage['onClose'],
      className?: ToastMessage['className'],
    ) => message('success', msg, duration, onClose, className),
    error: (
      msg: ToastMessage['message'],
      duration?: ToastMessage['duration'],
      onClose?: ToastMessage['onClose'],
      className?: ToastMessage['className'],
    ) => message('error', msg, duration, onClose, className),
    warning: (
      msg: ToastMessage['message'],
      duration?: ToastMessage['duration'],
      onClose?: ToastMessage['onClose'],
      className?: ToastMessage['className'],
    ) => message('warning', msg, duration, onClose, className),
  };

  return toast;
};

export default useToast;
