/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const InputAPI: React.FC = () => {
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
          description: 'Input 컴포넌트의 타입을 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">text</Tag> <Tag color="magenta">email</Tag>{' '}
              <Tag color="magenta">checkbox</Tag> <Tag color="magenta">radio</Tag>{' '}
              <Tag color="magenta">file</Tag> <Tag color="magenta">number</Tag>{' '}
              <Tag color="magenta">password</Tag> <Tag color="magenta">tel</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">text</Tag>,
        },
        {
          property: 'color',
          description: 'Input 컴포넌트의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">blue6</Tag>,
        },
        {
          property: 'disabled',
          description: '입력 필드를 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'value',
          description: '입력 값',
          type: 'any',
          default: '-',
        },
        {
          property: 'onChange',
          description: 'change 이벤트를 처리하는 핸들러 설정',
          type: '(event | value) => void',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>Input API</Title>
        <Text>Input 컴포넌트 공통 속성</Text>
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

export default InputAPI;
