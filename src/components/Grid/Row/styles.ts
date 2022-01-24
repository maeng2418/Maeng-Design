import { css } from '@emotion/react';

const rowStyle = (horizontalSpace = 0, verticalSpace = 0) => css`
  display: flex;
  flex-flow: row wrap;
  row-gap: ${verticalSpace}px;
  margin-left: -${horizontalSpace / 2}px;
  margin-right: -${horizontalSpace / 2}px;
`;
export default rowStyle;
