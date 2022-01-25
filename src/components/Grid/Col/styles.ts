import { css } from '@emotion/react';
import { ColProps } from './Col';

const colStyle = ({ xs, sm, md, lg, xl, xxl, space = 0 }: Partial<ColProps>) => css`
  position: relative;
  max-width: 100%;
  display: block;
  padding: 0 ${space / 2}px;

  ${xs &&
  css`
    flex: 0 0 ${(100 / 24) * xs}%;
    max-width: ${(100 / 24) * xs}%;
  `}

  ${sm &&
  css`
    @media screen and (min-width: 576px) {
      flex: 0 0 ${(100 / 24) * sm}%;
      max-width: ${(100 / 24) * sm}%;
    }
  `}

  ${md &&
  css`
    @media screen and (min-width: 768px) {
      flex: 0 0 ${(100 / 24) * md}%;
      max-width: ${(100 / 24) * md}%;
    }
  `}

  ${lg &&
  css`
    @media screen and (min-width: 992px) {
      flex: 0 0 ${(100 / 24) * lg}%;
      max-width: ${(100 / 24) * lg}%;
    }
  `}

  ${xl &&
  css`
    @media screen and (min-width: 1200px) {
      flex: 0 0 ${(100 / 24) * xl}%;
      max-width: ${(100 / 24) * xl}%;
    }
  `}

  ${xxl &&
  css`
    @media screen and (min-width: 1600px) {
      flex: 0 0 ${(100 / 24) * xxl}%;
      max-width: ${(100 / 24) * xxl}%;
    }
  `}
`;

export default colStyle;
