/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { Divider, getColor, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Dashed: React.FC = () => {
  return (
    <article className="dashed" css={dashedStyle}>
      <Typography className="divider-dashed">
        <Title level={4}>Dashed</Title>
        <Text className="description">구분선을 점선 스타일로 나타낼 수 있습니다.</Text>
        <div className="example">
          <Divider dashed />
        </div>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Divider } from 'maeng-design';

const App = () => (
  <div>
    <Divider dashed />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const dashedStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
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

export default Dashed;
