/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Theme as MaengTheme, ThemeMode } from 'maeng-design';
import React from 'react';

export interface TableProps {
  className?: string;
  columns: readonly {
    className?: string;
    css?: Interpolation<Theme>;
    title?: string;
    dataIndex: string;
    align?: 'left' | 'center' | 'right';
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    render?: (v: any) => React.ReactNode;
  }[];
  data: readonly Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data, className = '' }) => {
  return (
    <table className={className} css={tableStyle}>
      <thead className="header">
        <tr>
          {columns.map(({ title, dataIndex, xs, sm, md, lg, xl, xxl }) => (
            <th key={dataIndex} className={dataIndex} css={colStyle({ xs, sm, md, lg, xl, xxl })}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="body">
        {data.map((v, idx) => (
          <tr key={idx}>
            {columns.map(
              ({ className = '', css, render, dataIndex, align, xs, sm, md, lg, xl, xxl }) => (
                <td
                  key={dataIndex}
                  className={className}
                  css={[colStyle({ align, xs, sm, md, lg, xl, xxl }), css]}
                >
                  {render ? render(v[dataIndex]) : v[dataIndex]}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid
    ${(theme as MaengTheme).mode === ThemeMode.DARK
      ? getColor(theme, 'gray10')
      : getColor(theme, 'gray4')};
  thead.header {
    color: ${(theme as MaengTheme).mode === ThemeMode.DARK
      ? getColor(theme, 'gray6')
      : getColor(theme, 'gray8')};
    background: ${(theme as MaengTheme).mode === ThemeMode.DARK
      ? getColor(theme, 'gray11')
      : getColor(theme, 'gray3')};

    tr th {
      text-align: center;
      font-weight: 500;
    }
  }
  tbody.body tr {
    border-bottom: 1px solid
      ${(theme as MaengTheme).mode === ThemeMode.DARK
        ? getColor(theme, 'gray10')
        : getColor(theme, 'gray4')};
  }
`;

const colStyle = ({
  align = 'left',
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: {
  align?: 'left' | 'center' | 'right';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}) =>
  css`
    text-align: ${align};
    padding: 14px 12px;
    ${xs &&
    css`
      width: ${(100 / 24) * xs}%;
    `}
    ${sm &&
    css`
      @media screen and (min-width: 576px) {
        width: ${(100 / 24) * sm}%;
      }
    `}
    ${md &&
    css`
      @media screen and (min-width: 768px) {
        width: ${(100 / 24) * md}%;
      }
    `}
    ${lg &&
    css`
      @media screen and (min-width: 992px) {
        width: ${(100 / 24) * lg}%;
      }
    `}
    ${xl &&
    css`
      @media screen and (min-width: 1200px) {
        width: ${(100 / 24) * xl}%;
      }
    `}
    ${xxl &&
    css`
      @media screen and (min-width: 1600px) {
        width: ${(100 / 24) * xxl}%;
      }
    `};
  `;

export default Table;
