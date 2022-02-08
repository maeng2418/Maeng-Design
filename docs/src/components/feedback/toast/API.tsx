/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Tag, Typography } from 'maeng-design';
import React, { useMemo } from 'react';
import { Table } from '../../common';

const { Title, Paragraph, Text } = Typography;

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
          property: 'message',
          description: '토스트 메시지 내용을 지정할 수 있습니다.',
          type: 'String',
          default: '-',
        },
        {
          property: 'duration',
          description: '토스트 메시지가 사라질 때까지의 지속 시간을 지정합니다.',
          type: 'Number',
          default: '3000',
        },
        {
          property: 'onClose',
          description: '토스트 메시지가 닫힐 때 호출될 함수 지정합니다.',
          type: '() => void',
          default: '-',
        },
        {
          property: 'className',
          description: '토스트 메시지 컴포넌트에 class 속성을 부여할 수 있습니다.',
          type: 'String',
          default: '-',
        },
      ] as const,
    [],
  );

  return (
    <article className="api" css={apiStyle}>
      <Typography className="api-guide">
        <Title level={4}>API</Title>
        <Paragraph className="description">
          <Text>
            toast 메서드의 인자 값으로 다양한 토스트 메시지를 생성하고 컨트롤 할 수 있습니다.
          </Text>
          <ul>
            <li>
              <Tag
                color="green"
                size="large"
              >{`toast.success(message, duration, onClose, className)`}</Tag>
            </li>
            <li>
              <Tag
                color="red"
                size="large"
              >{`toast.error(message, duration, onClose, className)`}</Tag>
            </li>
            <li>
              <Tag
                color="yellow"
                size="large"
              >{`toast.warning(message, duration, onClose, className)`}</Tag>
            </li>
          </ul>
        </Paragraph>
        <Table columns={columns} data={data} />
      </Typography>
    </article>
  );
};

const apiStyle = css`
  div.api-guide {
    margin-top: 32px;
  }
  div.description {
    display: flex;
    flex-direction: column;
    line-height: 2;
    ul {
      margin-top: 10px;
      padding-left: 24px;
      li {
        margin-bottom: 10px;
      }
    }
  }
  table {
    margin-top: 1em;
  }
`;

export default OptionAPI;
