/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import React from 'react';
import globalStyle from '../../../styles/globals';
import SEO from './SEO';

const sectionStyles = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface EmptyLayoutProps {
  title: string;
  children: React.ReactNode;
}

const EmptyLayout: React.FC<EmptyLayoutProps> = ({ title, children }) => {
  return (
    <React.Fragment>
      <SEO title={title} />
      <Global styles={globalStyle} />
      <section css={sectionStyles}>{children}</section>
    </React.Fragment>
  );
};

export default EmptyLayout;
