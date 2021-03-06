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
        <Title level={4}>π¦ Install</Title>
        <Paragraph>
          <Text code={{ language: 'shell' }}>npm install maeng-design --save</Text>
          <Text code={{ language: 'shell' }}>yarn add maeng-design</Text>
        </Paragraph>
      </Typography>
      <Typography className="usage-guide">
        <Title level={4}>π¨ Usage</Title>
        <Paragraph code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Typography } from 'maeng-design';

const Content = () => {
  return (
    <Typography>
      <Typography.Title level={3}>νμ΄ν¬κ·ΈλνΌ</Typography.Title>
      <Typography.Paragraph>
        Maeng Designμ λκ΅¬λ μ½κ³  κ°νΈνκ² μ¬μ©ν  μ μλλ‘ κ°λ°λμμ΅λλ€.
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
