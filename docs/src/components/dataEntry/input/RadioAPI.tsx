/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const RadioAPI: React.FC = () => {
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
          property: 'value',
          description: '입력 값',
          type: 'any',
          default: '-',
        },
        {
          property: 'name',
          description: 'Radio 버튼을 하나로 묶을 name 속성을 지정합니다.',
          type: 'string',
          default: '-',
        },
        {
          property: 'checked',
          description: 'Radio의 선택 여부를 지정합니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'disabled',
          description: 'Radio 버튼을 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'onChange',
          description: 'change 이벤트를 처리하는 핸들러 설정',
          type: '(value) => void',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>Radio API</Title>
        <Text>라디오 버튼 타입 (radio)의 경우</Text>
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

export default RadioAPI;
