/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Level: React.FC = () => {
  return (
    <article className="level" css={levelStyle}>
      <Typography className="typography-level">
        <Title level={4}>Title</Title>
        <Text className="description">타이틀은 1부터 5까지 총 5가지의 level이 존재합니다.</Text>
        <div className="example">
          <Title level={1}>h1. Typography Title</Title>
          <Title level={2}>h2. Typography Title</Title>
          <Title level={3}>h3. Typography Title</Title>
          <Title level={4}>h4. Typography Title</Title>
          <Title level={5}>h5. Typography Title</Title>
        </div>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Typography } from 'maeng-design';

const { Title } = Typography;

const App = () => (
  <Typography>
    <Title level={1}>h1. Typography Title</Title>
    <Title level={2}>h2. Typography Title</Title>
    <Title level={3}>h3. Typography Title</Title>
    <Title level={4}>h4. Typography Title</Title>
    <Title level={5}>h5. Typography Title</Title>
  </Typography>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const levelStyle = css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  span.description {
    line-height: 2;
  }
  div.example {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Level;
