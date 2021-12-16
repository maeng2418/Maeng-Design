/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { createPortal, render } from 'react-dom';
import { ToastMsg, ToastMsgContainer } from '../components';
import { ToastMessage } from '../components/Toast';

const useToast = () => {
  const toastContainerRef = useRef<HTMLDivElement>(null);
  const containerDiv = useRef(document.createElement('div')).current;

  const message = (
    type: ToastMessage['type'],
    message: ToastMessage['message'],
    duration: ToastMessage['duration'],
    onClose: ToastMessage['onClose'],
  ): void | Element | React.Component => {
    const messageDiv = document.createElement('div');

    if (!toastContainerRef.current)
      render(
        createPortal(<ToastMsgContainer ref={toastContainerRef} />, document.body),
        containerDiv,
      );
    if (toastContainerRef.current)
      render(
        createPortal(
          <ToastMsg
            type={type}
            message={message}
            container={containerDiv}
            containerRef={toastContainerRef}
            element={messageDiv}
            duration={duration}
            onClose={onClose}
          />,
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
    ) => message('success', msg, duration, onClose),
    error: (
      msg: ToastMessage['message'],
      duration?: ToastMessage['duration'],
      onClose?: ToastMessage['onClose'],
    ) => message('error', msg, duration, onClose),
    warning: (
      msg: ToastMessage['message'],
      duration?: ToastMessage['duration'],
      onClose?: ToastMessage['onClose'],
    ) => message('warning', msg, duration, onClose),
  };

  return toast;
};

export default useToast;
