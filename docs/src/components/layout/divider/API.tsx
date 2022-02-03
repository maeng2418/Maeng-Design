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
          property: 'type',
          description: '구분선의 타입을 수평선 혹은 수직선으로 설정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">horizontal</Tag> <Tag color="magenta">vertical</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">horizontal</Tag>,
        },
        {
          property: 'position',
          description: '구분선 안의 컨텐츠의 위치를 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">left</Tag> <Tag color="magenta">center</Tag>{' '}
              <Tag color="magenta">right</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">center</Tag>,
        },
        {
          property: 'dashed',
          description: '구분선을 점선 스타일로 나타낼 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>API</Title>
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
