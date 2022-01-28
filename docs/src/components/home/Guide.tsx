/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Typography } from 'maeng-design';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const Guide: React.FC = () => {
  return (
    <article className="guide" css={guideStyle}>
      <Title className="guide-title" level={3}>
        Quick Start
      </Title>
      <Typography className="install-guide">
        <Title level={4}>📦 Install</Title>
        <Paragraph>
          <Text code={{ language: 'shell' }}>npm install maeng-design --save</Text>
          <Text code={{ language: 'shell' }}>yarn add maeng-design</Text>
        </Paragraph>
      </Typography>
      <Typography className="usage-guide">
        <Title level={4}>🔨 Usage</Title>
        <Paragraph code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Typography } from 'maeng-design';

const Content = () => {
  return (
    <Typography>
      <Typography.Title level={3}>타이포그래피</Typography.Title>
      <Typography.Paragraph>
        Maeng Design은 누구나 쉽고 간편하게 사용할 수 있도록 개발되었습니다.
      </Typography.Paragraph>
    </Typography>
  );
};

export default Content;`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const guideStyle = css`
  div.install-guide,
  div.usage-guide {
    margin-top: 32px;
  }
`;

export default Guide;
