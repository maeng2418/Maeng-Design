/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { getColor, Theme, Typography } from 'maeng-design';
import React from 'react';
import { Layout } from '../components/common';

const { Title, Paragraph, Text } = Typography;

const IndexPage: React.FC = () => {
  return (
    <Layout title={'HOME'}>
      <article className="intro" css={introStyles}>
        <Title level={1}>Maeng Design of React</Title>
        <Paragraph>
          디자인 시스템 <Text strong>Maeng Design</Text>은 React 프로젝트를 위한 사용자 인터페이스
          사양을 통일하고, 설계 차이와 구현에 필요한 불필요한 비용을 낮추며, 설계 및 프론트엔드 개발
          자원을 지원하기 위해 만들어졌습니다. 많은 이용 부탁드립니다. 🥰
        </Paragraph>
      </article>
      <article className="guide" css={guideStyles}>
        <Title level={3}>Quick Start</Title>
        <Typography>
          <Title level={4}>📦 Install</Title>
          <Paragraph>
            <Text code={{ language: 'shell' }}>npm install maeng-design --save</Text>
            <Text code={{ language: 'shell' }}>yarn add maeng-design</Text>
          </Paragraph>
        </Typography>
        <Typography>
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
  )
}
export default Content;`}
          </Paragraph>
        </Typography>
      </article>
      <article className="supplement" css={supplementStyles}>
        <Typography>
          <Title level={4}>📕 Storybook</Title>
          <Paragraph>
            <Text>
              👉
              <a href="https://storybook-maeng-design.netlify.app/" rel="noopener noreferrer">
                Storybook Link
              </a>
            </Text>
          </Paragraph>
        </Typography>
        <Typography>
          <Title level={4}>🎨 Figma</Title>
          <Paragraph>
            <Text>
              👉
              <a
                href="https://www.figma.com/file/HO5MJalfgtxxURpt66KCes/Maeng-Design"
                rel="noopener noreferrer"
              >
                Figma Link
              </a>
            </Text>
          </Paragraph>
        </Typography>
      </article>
    </Layout>
  );
};

const introStyles = css`
  h1 {
    font-weight: 500;
  }
  div {
    line-height: 2;
    strong {
      color: ${getColor(Theme, 'magenta6')};
    }
  }
`;

const guideStyles = css`
  & > div {
    margin-top: 32px;
  }
`;

const supplementStyles = css`
  & > div {
    margin-top: 32px;

    a {
      font-weight: bold;
      margin-left: 16px;
      color: ${getColor(Theme, 'blue6')};
    }
  }
`;
export default IndexPage;
