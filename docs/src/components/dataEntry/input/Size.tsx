/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Input, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Size: React.FC = () => {
  return (
    <article className="size" css={sizeStyle}>
      <Typography className="input-size">
        <Title level={4}>Size</Title>
        <Text className="description">
          텍스트 필드 타입 (text, email, number, password, tel)은 small, medium, large 3가지의
          size가 존재합니다.
        </Text>
        <Paragraph className="example">
          <Input type="text" placeholder="Small text" size="small" />
          <Input type="text" placeholder="Medium text" size="medium" />
          <Input type="text" placeholder="Large text" size="large" />
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Input } from 'maeng-design';

const App = () => (
  <div>
    <Input type="text" placeholder="Enter small text" size="small" />
    <Input type="text" placeholder="Enter medium text" size="medium" />
    <Input type="text" placeholder="Enter large text" size="large" />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const sizeStyle = css`
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
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Size;
