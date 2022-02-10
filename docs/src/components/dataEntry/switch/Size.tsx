/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Switch, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Size: React.FC = () => {
  return (
    <article className="size" css={sizeStyle}>
      <Typography className="switch-size">
        <Title level={4}>Size</Title>
        <Text className="description">small, medium, large 3가지의 size가 존재합니다.</Text>
        <Paragraph className="example">
          <span>
            <Switch size="small" />
          </span>
          <span>
            <Switch size="medium" checked />
          </span>
          <span>
            <Switch size="large" />
          </span>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Switch } from 'maeng-design';

const App = () => (
  <div>
    <Switch size="small" />
    <Switch size="medium" checked />     
    <Switch size="large" />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const sizeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
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
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Size;
