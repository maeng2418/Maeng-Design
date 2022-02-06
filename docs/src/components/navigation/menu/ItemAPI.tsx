/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Typography } from 'maeng-design';
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
          property: 'icon',
          description: '메뉴를 축소할 때 나타나는 메뉴 항목 아이콘을 지정할 수 있습니다.',
          type: 'ReactNode',
          default: '-',
        },
        {
          property: 'isSelected',
          description: 'selected 스타일이 적용되는 조건을 명시할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'disabled',
          description: '메뉴 항목을 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'onClick',
          description: 'click 이벤트를 처리하는 핸들러 설정',
          type: '(event) => void',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>Item API</Title>
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
