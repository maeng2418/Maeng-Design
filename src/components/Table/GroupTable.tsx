import React, { useState } from 'react';
import { DownOutlined, RightOutlined } from '..';
import { Column } from './Table';

const GroupTable: React.FC<{
  columns: (Column & {
    left?: number | undefined;
    right?: number | undefined;
  })[];
  data:
    | Record<string, string | number>[]
    | Record<
        string,
        { sub: Record<string, string | number>[]; acc?: Record<string, string | number> }
      >;
  depth?: number;
}> = ({ columns, data, depth = 0 }) => {
  return (
    <>
      {Object.entries(data).map(([key, { sub, acc }]) => {
        if (Array.isArray(sub)) {
          return (
            <Group depth={depth + 1} title={key} acc={acc} columns={columns}>
              {sub.map((d, i) => (
                <tr key={i}>
                  {columns.map((column, idx) => (
                    <td
                      key={column.dataIndex}
                      style={{ paddingLeft: idx === 0 ? (depth + 3) * 16 + 'px' : '16px' }}
                    >
                      {column.format ? column.format(d[column.dataIndex]) : d[column.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </Group>
          );
        } else {
          return (
            <Group depth={depth + 1} title={key} acc={acc} columns={columns}>
              <GroupTable data={sub} depth={depth + 1} columns={columns} />
            </Group>
          );
        }
      })}
    </>
  );
};

const Group: React.FC<{
  columns: (Column & {
    left?: number | undefined;
    right?: number | undefined;
  })[];
  depth: number;
  children: React.ReactNode;
  title: string;
  acc?: Record<string, string | number>;
}> = ({ columns, depth, children, title, acc }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <tr>
        <td
          style={{
            paddingLeft: depth * 16 + 'px',
            width: '200px',
          }}
        >
          <span
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation();
              setVisible((prev) => !prev);
            }}
          >
            {visible ? (
              <DownOutlined
                width={12}
                height={12}
                style={{ cursor: 'pointer', marginRight: '8px', marginBottom: '1px' }}
              />
            ) : (
              <RightOutlined
                width={12}
                height={12}
                style={{ cursor: 'pointer', marginRight: '8px', marginBottom: '2.5px' }}
              />
            )}
            {title}
          </span>
        </td>
        {acc &&
          columns
            .slice(1)
            .map((column) => (
              <td key={column.dataIndex}>
                {column.format ? column.format(acc[column.dataIndex]) : acc[column.dataIndex]}
              </td>
            ))}
      </tr>
      {visible && children}
    </>
  );
};

export default GroupTable;
