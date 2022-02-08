/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Divider, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Position: React.FC = () => {
  return (
    <article className="position" css={positionStyle}>
      <Typography className="divider-position">
        <Title level={4}>Position</Title>
        <Text className="description">구분선 내의 컨텐츠의 위치를 지정할 수 있습니다.</Text>
        <Paragraph className="example">
          <Divider position="left">Left Divider</Divider>
          <Divider position="center">Center Divider</Divider>
          <Divider position="right">Right Divider</Divider>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Divider } from 'maeng-design';

const App = () => (
  <div>
    <Divider position="left">Left Divider</Divider>
    <Divider position="center">Center Divider</Divider>
    <Divider position="right">Right Divider</Divider>
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const positionStyle = css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  span.description {
    line-height: 2;
  }
  div.example {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
    span.ellipsis {
      width: 150px;
      line-height: 1.5em;
    }
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Position;
