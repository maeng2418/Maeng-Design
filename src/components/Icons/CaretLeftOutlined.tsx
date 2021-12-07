import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCaretLeftOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="64 64 896 896"
    data-icon="caret-left"
    aria-hidden="true"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M689 165.1 308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
  </svg>
);

export default SvgCaretLeftOutlined;
