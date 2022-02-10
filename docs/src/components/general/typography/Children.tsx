/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Children: React.FC = () => {
  return (
    <article className="children" css={childrenStyle}>
      <Typography className="typography-children">
        <Title level={4}>Paragraph & Text </Title>
        <Text className="description">
          Paragraph와 Text는 다양한 스타일과 Code 스타일로 텍스트를 작성할 수 있습니다.
        </Text>
        <Paragraph className="example">
          <Text mark>mark. Typography Text</Text>
          <Text code={{ language: 'javascript' }}>code. Typography Text</Text>
          <Text italic>italic. Typography Text</Text>
          <Text underline>underline. Typography Text</Text>
          <Text delete>delete. Typography Text</Text>
          <Text strong>strong. Typography Text</Text>
          <Text className="ellipsis" ellipsis>
            ellipsis. Typography Text
          </Text>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Typography } from 'maeng-design';

const { Paragraph, Text } = Typography;

const App = () => (
  <Paragraph>
    <Text mark>mark. Typography Text</Text>
    <Text code={{ language: 'javascript' }}>code. Typography Text</Text>
    <Text italic>italic. Typography Text</Text>
    <Text underline>underline. Typography Text</Text>
    <Text delete>delete. Typography Text</Text>
    <Text strong>strong. Typography Text</Text>
    <Text className="ellipsis" ellipsis>ellipsis. Typography Text</Text>
  </Paragraph>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const childrenStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
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

export default Children;
