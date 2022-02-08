/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const API: React.FC = () => {
  const theme = useTheme();

  const columns = useMemo(
    () =>
      [
        {
          title: 'Property',
          dataIndex: 'property',
          align: 'center',
          xs: 4,
          css: css`
            font-weight: 500;
          `,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          xs: 10,
        },
        {
          title: 'Type',
          dataIndex: 'type',
          xs: 6,
          css: css`
            line-height: 1.5em;
            color: ${getColor(theme, 'magenta6')};
          `,
        },
        {
          title: 'default',
          dataIndex: 'default',
          align: 'center',
          xs: 4,
          css: css`
            color: ${getColor(theme, 'magenta6')};
          `,
        },
      ] as const,
    [theme],
  );

  const data = useMemo(
    () =>
      [
        {
          property: 'mode',
          description: '메뉴의 스타일을 수평 혹은 수직으로 설정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">horizontal</Tag> <Tag color="magenta">vertical</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">horizontal</Tag>,
        },
        {
          property: 'collapsed',
          description: (
            <React.Fragment>
              mode가 <Tag color="magenta">vertical</Tag> 인 경우, 메뉴를 축소할 수 있습니다.
            </React.Fragment>
          ),
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'color',
          description: '메뉴의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">blue6</Tag>,
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>Menu API</Title>
        <Text className="description"></Text>
        <Table columns={columns} data={data} />
      </Typography>
    </article>
  );
};

const apiStyle = css`
  div.api-guide {
    margin-top: 32px;
  }
  span.description {
    line-height: 2;
  }
  table {
    margin-top: 1em;
  }
`;

export default API;
