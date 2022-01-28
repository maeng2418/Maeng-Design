/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactNode } from 'react';
import { DarkColorType, LightColorType } from '../../../styles';
import createStyle, { markStyle } from './styles';

export interface EllipsisOptions {
  rows: number;
}

export interface TitleProps {
  className?: string;
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  ellipsis?: boolean | EllipsisOptions;
  mark?: boolean;
  italic?: boolean;
  underline?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Title: React.FC<TitleProps> = ({
  className = '',
  children,
  level = 5,
  color = 'gray13',
  disabled = false,
  ellipsis = false,
  mark = false,
  italic = false,
  underline = false,
  onClick,
}) => {
  if (underline) children = <u>{children}</u>;
  if (mark) children = <mark css={markStyle}>{children}</mark>;
  if (italic) children = <i>{children}</i>;

  if (level === 1)
    return (
      <h1
        className={className}
        css={createStyle(level, color, ellipsis, disabled)}
        onClick={onClick}
      >
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2
        className={className}
        css={createStyle(level, color, ellipsis, disabled)}
        onClick={onClick}
      >
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3
        className={className}
        css={createStyle(level, color, ellipsis, disabled)}
        onClick={onClick}
      >
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4
        className={className}
        css={createStyle(level, color, ellipsis, disabled)}
        onClick={onClick}
      >
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5
        className={className}
        css={createStyle(level, color, ellipsis, disabled)}
        onClick={onClick}
      >
        {children}
      </h5>
    );
  return <>{children}</>;
};

export default Title;
