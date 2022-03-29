/** @jsxImportSource @emotion/react */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { tableDataStyle, tableHeadStyle } from './styles';
import { Column } from './Table';

export interface HeadProps {
  columns: (Column & {
    left?: number | undefined;
    right?: number | undefined;
  })[];
  topSummary?: Record<string, unknown>[];
  groupHeader?: string;
}

const Head: React.FC<HeadProps> = ({ columns, topSummary, groupHeader }) => {
  return (
    <thead css={tableHeadStyle}>
      <tr>
        {columns.map((column, idx) => (
          <th css={tableDataStyle(column)} key={column.key ?? column.dataIndex}>
            {idx === 0 ? groupHeader ?? column.title : column.title}
          </th>
        ))}
      </tr>
      {topSummary &&
        topSummary.length > 0 &&
        topSummary.map((item) => (
          <tr key={uuidv4()}>
            {columns.map((column) => (
              <td css={tableDataStyle(column)} key={column.key ?? column.dataIndex}>
                {column.render ? column.render(item) : <>{item[column.dataIndex]}</>}
              </td>
            ))}
          </tr>
        ))}
    </thead>
  );
};

export default Head;
