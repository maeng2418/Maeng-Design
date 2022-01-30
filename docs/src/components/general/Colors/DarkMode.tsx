/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Guide: React.FC = () => {
  return (
    <article className="guide" css={guideStyle}>
      <Typography className="darkmode-guide">
        <Title level={4}>Dark Mode</Title>
        <Text className="description">
          ThemeProvider 컴포넌트를 통해 다크모드를 손쉽게 설정할 수 있습니다.
        </Text>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { ThemeMode, ThemeProvider, Typography } from 'maeng-design';

ReactDOM.render(
  <ThemeProvider theme={{ mode: ThemeMode.DARK }}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
          `}
        </Paragraph>
      </Typography>
    </article>
  );
};

const guideStyle = css`
  div.darkmode-guide {
    margin-top: 32px;
  }
  span.description {
    line-height: 2;
  }
  div.code {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export default Guide;
