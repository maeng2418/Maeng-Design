import { Global } from '@emotion/react';
import React, { ReactNode } from 'react';
import normalize from '../../styles/normalize';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Global styles={normalize} />
      {children}
    </>
  );
};

export default Layout;
