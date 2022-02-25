/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const ParagraphAPI: React.FC = () => {
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
          property: 'ellipsis',
          description: '텍스트가 넘칠 때 줄임표 표시할 수 있습니다.',
          type: 'boolean | { rows: number }',
          default: 'false',
        },
        {
          property: 'mark',
          description: '중요한 텍스트를 하이라이팅 할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'italic',
          description: '기울임꼴 텍스트를 지정할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'underline',
          description: '텍스트에 밑줄을 표시할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'delete',
          description: '텍스트에 제거된 선을 표시할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'strong',
          description: '텍스트를 굵게 강조할 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'code',
          description: '텍스트를 코드 스타일로 나타낼 수 있습니다.',
          type: '{ language: LanguageName }',
          default: '-',
        },
        {
          property: 'disabled',
          description: '텍스트를 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'color',
          description: '텍스트의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">gray13</Tag>,
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
        <Title level={4}>Paragraph API</Title>
        <Text className="description">
          Paragraph 속성을 설정하여 다양한 단락을 생성할 수 있습니다.
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

export default ParagraphAPI;
