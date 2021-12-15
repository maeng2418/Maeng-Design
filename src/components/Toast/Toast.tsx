/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect, useRef } from 'react';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface ToastProps {
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
}

const ToastMsg: React.FC<{ message: string; parentEle: HTMLDivElement }> = ({
  message,
  parentEle,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current && ref.current.remove();
      if (parentEle.childElementCount === 0) {
        unmountComponentAtNode(parentEle);
      }
    }, 3000);
  }, []);

  return <div ref={ref}>{message}</div>;
};

const ToastMsgContainer = forwardRef<HTMLDivElement>(({ children }, ref) => {
  return (
    <div ref={ref} css={createStyle('gray13')}>
      {children}
    </div>
  );
});

const useToast = () => {
  const toastContainer = useRef<HTMLDivElement>(null);

  const message = (message: string): void | Element | React.Component<any, any, any> => {
    const div = document.createElement('div');

    if (!toastContainer.current)
      return render(createPortal(<ToastMsgContainer ref={toastContainer} />, document.body), div);
    render(
      createPortal(<ToastMsg message={message} parentEle={div} />, toastContainer.current),
      div,
    );
  };

  return { message };
};

export default useToast;
