/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Guide: React.FC = () => {
  return (
    <article className="guide" css={guideStyle}>
      <Typography className="usage-guide">
        <Title level={4}>Usage</Title>
        <Text className="description">
          내장된 getColor 함수를 통해 원하는 색상코드를 가져올 수 있습니다.
        </Text>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { getColor } from 'maeng-design';
import { useTheme } from '@emotion/react';

const Content = () => {
  const theme = useTheme();
  return (
    <div style={{ color: getColor(theme, 'blue6') }}>Blue Color</div>
  );
};

export default Content;`}
        </Paragraph>
        <Paragraph code={{ language: 'javascript' }}>
          {`import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from 'maeng-design';

const style = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css\`
    background: \${getColor(theme, 'gray1')};
  \`;
`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const guideStyle = css`
  div.usage-guide {
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
