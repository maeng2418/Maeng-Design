/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const InputTextAPI: React.FC = () => {
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
          property: 'placeholder',
          description:
            '텍스트 입력 필드에 사용자가 적절한 값을 입력할 수 있도록 도와주는 안내문구를 표시합니다.',
          type: 'string',
          default: '-',
        },
        {
          property: 'size',
          description:
            '텍스트 입력 필드 타입 (text, email, password, tel)의 크기를 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">small</Tag> <Tag color="magenta">medium</Tag>{' '}
              <Tag color="magenta">large</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">medium</Tag>,
        },
        {
          property: 'prefix',
          description:
            '텍스트 입력 필드 타입 (text, email, password, tel)에 접두사를 지정할 수 있습니다.',
          type: 'ReactNode',
          default: '-',
        },
        {
          property: 'suffix',
          description:
            '텍스트 입력 필드 타입 (text, email, password, tel)에 접미사를 지정할 수 있습니다.',
          type: 'ReactNode',
          default: '-',
        },
        {
          property: 'onChange',
          description: 'change 이벤트를 처리하는 핸들러 설정',
          type: '(event) => void',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>InputText API</Title>
        <Text>텍스트 입력 필드 타입 (text, email, password, tel)의 경우</Text>
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

export default InputTextAPI;
