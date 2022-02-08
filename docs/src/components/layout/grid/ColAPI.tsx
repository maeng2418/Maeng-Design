/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const ColAPI: React.FC = () => {
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
          align: 'center',
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
          property: 'xs',
          description: (
            <React.Fragment>
              <Tag>{`screen < 576px`}</Tag> 일 경우의 너비를 지정합니다.
            </React.Fragment>
          ),
          type: 'number',
          default: `-`,
        },
        {
          property: 'sm',
          description: (
            <React.Fragment>
              <Tag>{`screen >= 576px`}</Tag> 일 경우의 너비를 지정합니다.
            </React.Fragment>
          ),
          type: 'number',
          default: `-`,
        },
        {
          property: 'md',
          description: (
            <React.Fragment>
              <Tag>{`screen >= 768px`}</Tag> 일 경우의 너비를 지정합니다.
            </React.Fragment>
          ),
          type: 'number',
          default: `-`,
        },
        {
          property: 'lg',
          description: (
            <React.Fragment>
              <Tag>{`screen >= 992px`}</Tag> 일 경우의 너비를 지정합니다.
            </React.Fragment>
          ),
          type: 'number',
          default: `-`,
        },
        {
          property: 'xl',
          description: (
            <React.Fragment>
              <Tag>{`screen >= 1200px`}</Tag> 일 경우의 너비를 지정합니다.
            </React.Fragment>
          ),
          type: 'number',
          default: `-`,
        },
        {
          property: 'xxl',
          description: (
            <React.Fragment>
              <Tag>{`screen >= 1600px`}</Tag> 일 경우의 너비를 지정합니다.
            </React.Fragment>
          ),
          type: 'number',
          default: `-`,
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>Col API</Title>
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

export default ColAPI;
