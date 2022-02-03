/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Grid as GridBox, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Grid: React.FC = () => {
  return (
    <article className="grid" css={gridStyle}>
      <Typography className="grid-component">
        <Title level={4}>Grid</Title>
        <Text className="description">
          component를 지정해서 원하는 HTML Element로 생성할 수 있습니다.
        </Text>
        <GridBox className="example">DIV</GridBox>
        <GridBox className="example" component="section">
          SECTION
        </GridBox>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Grid } from 'maeng-design';

const App = () => (
  <div>
    <Grid className="example" />
    <Grid className="example" component="section" />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const gridStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  span.description {
    line-height: 2;
  }
  div.example,
  section.example {
    color: ${getColor(theme, 'gray1')};
    background: ${getColor(theme, 'magenta5')}B3;
    padding: 14px 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Grid;
