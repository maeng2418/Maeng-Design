/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Tag, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Color: React.FC = () => {
  return (
    <article className="color" css={colorStyle}>
      <Typography className="tag-color">
        <Title level={4}>Color</Title>
        <Text className="description">
          Maeng Design의 프리셋 색상(133가지)외의 red, volcano, orange, gold, yellow, lime, green,
          cyan, blue, geekblue, purple, magenta, gray 13가지의 추가 색상으로 변경 가능합니다.
        </Text>
        <Paragraph className="example">
          <Tag color="magenta">Magenta</Tag>
          <Tag color="magenta6">Magenta6</Tag>
          <Tag color="blue">Blue</Tag>
          <Tag color="blue6">Blue6</Tag>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Tag } from 'maeng-design';

const App = () => (
  <div>
    <Tag color="magenta">Magenta</Tag>
    <Tag color="magenta6">Magenta6</Tag>
    <Tag color="blue">Blue</Tag>
    <Tag color="blue6">Blue6</Tag>
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const colorStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
  span.description {
    line-height: 2;
  }
  div.example {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Color;
