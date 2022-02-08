/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const OptionAPI: React.FC = () => {
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
          property: 'checked',
          description: '스위치의 On 여부를 지정합니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'size',
          description: '스위치의 크기를 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">small</Tag> <Tag color="magenta">medium</Tag>{' '}
              <Tag color="magenta">large</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">medium</Tag>,
        },
        {
          property: 'disabled',
          description: '스위치를 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'color',
          description: '스위치의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">blue6</Tag>,
        },
        {
          property: 'onChange',
          description: '스위치 상태가 변경될 때 트리거되는 핸들러 설정',
          type: '(checked, event) => void',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>API</Title>
        <Text>Switch 속성을 설정하여 다양한 Switch를 생성하고 컨트롤 할 수 있습니다.</Text>
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

export default OptionAPI;
