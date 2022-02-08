/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { getColor, Typography } from 'maeng-design';
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
          property: 'width',
          description: '모달 창의 너비를 지정할 수 있습니다.',
          type: 'String | Number',
          default: '400px',
        },
        {
          property: 'visible',
          description: '모달 창이 오픈되는지 여부를 설정합니다.',
          type: 'ColorName',
          default: '-',
        },
        {
          property: 'title',
          description: '모달 창 헤더의 타이틀 내용을 지정합니다.',
          type: 'ReactNode',
          default: '-',
        },
        {
          property: 'closeIcon',
          description: '모달 창 헤더 우측에 닫기 아이콘을 지정합니다.',
          type: 'ReactNode',
          default: '<CloseOutlined />',
        },
        {
          property: 'confirmOptions',
          description: '모달 창 푸더의 "확인" 버튼의 옵션을 설정할 수 있습니다.',
          type: '{ label: ReactNode } & Omit<ButtonProps, "onClick">',
          default: '{ label: "OK", type: "primary" }',
        },
        {
          property: 'cancelOptions',
          description: '모달 창 푸더의 "취소" 버튼의 옵션을 설정할 수 있습니다.',
          type: '{ label: ReactNode } & Omit<ButtonProps, "onClick">',
          default: '{ label: "Cancel" }',
        },
        {
          property: 'onClickBackground',
          description: 'Background의 click 이벤트를 처리하는 핸들러 설정',
          type: '(event) => void',
          default: '-',
        },
        {
          property: 'onConfirm',
          description: '확인 버튼의 click 이벤트를 처리하는 핸들러 설정',
          type: '(event) => void',
          default: '-',
        },
        {
          property: 'onCancel',
          description: '취소 버튼의 click 이벤트를 처리하는 핸들러 설정',
          type: '(event) => void',
          default: '-',
        },
        {
          property: 'onClose',
          description: '닫기 버튼의 click 이벤트를 처리하는 핸들러 설정',
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
        <Text>Modal 속성을 설정하여 다양한 Modal을 생성하고 컨트롤 할 수 있습니다.</Text>
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
