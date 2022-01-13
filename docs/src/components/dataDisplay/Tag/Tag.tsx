/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import tagStyle from './styles';

export interface TagProps {
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <div css={tagStyle}>{children}</div>;
};

export default Tag;
