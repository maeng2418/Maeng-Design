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
          description: '버튼의 타입을 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">default</Tag> <Tag color="magenta">primary</Tag>{' '}
              <Tag color="magenta">dashed</Tag> <Tag color="magenta">text</Tag>{' '}
              <Tag color="magenta">link</Tag> <Tag color="magenta">outline</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">default</Tag>,
        },
        {
          property: 'shape',
          description: '버튼의 모양을 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">default</Tag> <Tag color="magenta">circle</Tag>{' '}
              <Tag color="magenta">round</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">default</Tag>,
        },
        {
          property: 'size',
          description: '버튼의 크기를 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">small</Tag> <Tag color="magenta">medium</Tag>{' '}
              <Tag color="magenta">large</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">default</Tag>,
        },
        {
          property: 'htmlType',
          description: '버튼의 오리지널 html 타입을 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">button</Tag> <Tag color="magenta">submit</Tag>{' '}
              <Tag color="magenta">reset</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">button</Tag>,
        },
        {
          property: 'color',
          description: '버튼의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">blue6</Tag>,
        },
        {
          property: 'disabled',
          description: '버튼을 비활성화 시킬 수 있습니다.',
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
        <Title level={4}>API</Title>
        <Text className="description">
          Button 속성을 설정하여 다양한 버튼 스타일을 생성할 수 있습니다.
        </Text>
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
