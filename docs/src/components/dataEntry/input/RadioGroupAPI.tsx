/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Text } = Typography;

const RadioGroupAPI: React.FC = () => {
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
          description: '현재 선택된 값을 설정하는데 사용합니다.',
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
          property: 'color',
          description: 'RadioGroup으로 묶인 모든 Radio 버튼의 색상을 지정할 수 있습니다.',
          type: 'ColorName',
          default: <Tag color="magenta">blue6</Tag>,
        },
        {
          property: 'disabled',
          description: 'RadioGroup으로 묶인 모든 Radio 버튼을 비활성화 시킬 수 있습니다.',
          type: 'boolean',
          default: 'false',
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
        <Title level={4}>RadioGroup API</Title>
        <Text>RadioGroup은 여러 Radio 버튼을 하나로 묶는 Wrapper 컴포넌트입니다.</Text>
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

export default RadioGroupAPI;
