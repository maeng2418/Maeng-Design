/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const SelectAPI: React.FC = () => {
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
          property: 'size',
          description: 'Select 박스의 크기를 지정할 수 있습니다.',
          type: (
            <React.Fragment>
              <Tag color="magenta">small</Tag> <Tag color="magenta">medium</Tag>{' '}
              <Tag color="magenta">large</Tag>
            </React.Fragment>
          ),
          default: <Tag color="magenta">medium</Tag>,
        },
        {
          property: 'defaultValue',
          description: '초기 선택된 값을 세팅합니다.',
          type: 'string | number | (string | number)[]',
          default: '-',
        },
        {
          property: 'placeholder',
          description:
            'Select 박스에 사용자가 적절한 값을 선택할 수 있도록 도와주는 안내문구를 표시합니다.',
          type: 'string',
          default: '-',
        },
        {
          property: 'color',
          description: 'Select 컴포넌트의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">blue6</Tag>,
        },
        {
          property: 'multiple',
          description: '다중 선택을 할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'tagRender',
          description: '선택된 옵션 값을 태그 형태로 나타낼 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'disabled',
          description: 'Select 박스를 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'onSelect',
          description: '선택한 옵션 값을 인자로 받아옵니다.',
          type: '(value) => void',
          default: '-',
        },
        {
          property: 'onChange',
          description: '선택된 값을 인자로 받아옵니다.',
          type: '(value) => void;',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>Select API</Title>
        <Text>Select 속성을 설정하여 다양한 Select를 생성하고 컨트롤 할 수 있습니다.</Text>
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

export default SelectAPI;
