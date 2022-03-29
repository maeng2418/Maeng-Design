/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DarkColorType, LightColorType } from '../../styles/colors';
import GroupTable from './GroupTable';
import Head from './Head';
import createStyle, { tableDataStyle } from './styles';
import { makeGroup } from './utils';

export interface Column {
  title: React.ReactNode;
  key?: React.Key;
  dataIndex: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
  group?: boolean;
  format?: (value: any) => string;
  render?: (v: Record<string, unknown>) => React.ReactNode;
}

export interface TableProps {
  rowKey?: React.Key;
  columns: readonly Column[];
  data?: Record<string, unknown>[];
  height?: number;
  onClickRow?: (v: Record<string, unknown>) => void;
  topSummary?: Record<string, unknown>[];
  bottomSummary?: Record<string, unknown>[];
  color?: LightColorType | DarkColorType;
  groupOptions?: {
    aggFunc: (acc: any, cur: any) => any;
    groupHeader: string;
  };
}

const Table: React.FC<TableProps> = ({
  rowKey,
  columns,
  data,
  height,
  onClickRow,
  topSummary,
  bottomSummary,
  color,
  groupOptions,
}) => {
  const isGrouping = columns.some((column) => column.group);

  const redefinedColumns = columns
    .reduce(
      (acc, cur, idx) => {
        if (cur.fixed === 'left') {
          if (acc.left === 0) {
            acc.group.push({ ...cur, left: 0 });
            acc.left += parseFloat(`${cur.width ?? 200}`);
            return acc;
          } else {
            const left = parseFloat(`${acc.group[idx - 1].width ?? 200}`);
            acc.group.push({ ...cur, left: left });
            acc.left += left;
            return acc;
          }
        }
        acc.group.push(cur);
        return acc;
      },
      { group: [] as (Column & { left?: number })[], left: 0 },
    )
    .group.reverse()
    .reduce(
      (acc, cur, idx) => {
        if (cur.fixed === 'right') {
          if (acc.right === 0) {
            acc.group.push({ ...cur, right: 0 });
            acc.right += parseFloat(`${cur.width ?? 200}`);
            return acc;
          } else {
            const right = parseFloat(`${acc.group[idx - 1].width ?? 200}`);
            acc.group.push({ ...cur, right: right });
            acc.right += right;
            return acc;
          }
        }
        acc.group.push(cur);
        return acc;
      },
      { group: [] as (Column & { left?: number; right?: number })[], right: 0 },
    )
    .group.reverse();

  const onRowClick = (v: Record<string, unknown>) => (e: MouseEvent) => {
    e.preventDefault();
    onClickRow && onClickRow(v);
  };

  return isGrouping ? (
    <div css={createStyle(height, color)}>
      <table>
        <Head
          columns={redefinedColumns.filter((column) => !column.group)}
          groupHeader={groupOptions?.groupHeader}
        />
        <tbody>
          <GroupTable
            columns={redefinedColumns.filter((column) => !column.group)}
            data={makeGroup(
              data as Record<string, string | number>[],
              redefinedColumns.filter((column) => column.group).map((column) => column.dataIndex),
              groupOptions?.aggFunc,
            )}
          />
        </tbody>
      </table>
    </div>
  ) : (
    <div css={createStyle(height, color)}>
      <table>
        <Head columns={redefinedColumns} topSummary={topSummary} />
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr
                css={css`
                  cursor: ${onClickRow ? 'pointer' : 'initial'};
                `}
                key={rowKey ? (item[rowKey] as React.Key) : uuidv4()}
                onClick={onRowClick(item)}
              >
                {redefinedColumns.map((column) => (
                  <td
                    css={tableDataStyle(column)}
                    style={{ textAlign: column.align || 'left' }}
                    key={column.key ?? column.dataIndex}
                  >
                    {column.render ? column.render(item) : <>{item[column.dataIndex]}</>}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>No Data</tr>
          )}
        </tbody>
        {bottomSummary && bottomSummary.length > 0 && (
          <tfoot>
            {bottomSummary.map((item) => (
              <tr
                css={css`
                  cursor: ${onClickRow ? 'pointer' : 'initial'};
                `}
                key={rowKey ? (item[rowKey] as React.Key) : uuidv4()}
                onClick={onRowClick(item)}
              >
                {redefinedColumns.map((column) => (
                  <td
                    css={tableDataStyle(column)}
                    style={{ textAlign: column.align || 'left' }}
                    key={column.key ?? column.dataIndex}
                  >
                    {column.render ? column.render(item) : <>{item[column.dataIndex]}</>}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Table;

export const groupBy = function (data: Record<string, unknown>[], key: string | number) {
  return data.reduce((acc, cur) => {
    const group = cur[key] as string | number;

    if (acc[group] === undefined) {
      acc[group] = [];
    }

    (acc[group] as Record<string, unknown>[]).push(cur);
    return acc;
  }, {});
};
