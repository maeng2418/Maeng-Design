/** @jsxImportSource @emotion/react */
import React, { MouseEvent } from 'react';
import { DarkColorType, LightColorType } from '../../../styles';
import { paragraphStyles } from './styles';

export interface ParagraphProps {
  children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <div css={paragraphStyles}>{children}</div>;
};

export default Paragraph;
