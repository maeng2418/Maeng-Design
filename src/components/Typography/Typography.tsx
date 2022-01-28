/** @jsxImportSource @emotion/react */
import React from 'react';
import { typographyStyles } from './styles';

interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ className = '', children }) => {
  return (
    <div className={className} css={typographyStyles}>
      {children}
    </div>
  );
};

export default Typography;
