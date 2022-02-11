/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { Divider, getColor, Grid, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Type: React.FC = () => {
  return (
    <article className="type" css={typeStyle}>
      <Typography className="divider-type">
        <Title level={4}>Type</Title>
        <Text className="description">horizontal, vertical 2가지의 type이 존재합니다.</Text>
        <Grid.Row>
          <Grid.Col xs={10}>
            <div className="example">
              <Paragraph>안녕하세요. Maeng Design 개발자 Maeng입니다.</Paragraph>
              <Divider />
              <Paragraph>앞으로 많은 사용 부탁드립니다. 😘</Paragraph>
            </div>
          </Grid.Col>
          <Grid.Col xs={8}>
            <div className="example">
              <Text className="link-1">Maeng</Text>
              <Divider type="vertical" />
              <Text className="link-2">Design</Text>
              <Divider type="vertical" />
              <Text className="link-3">Link</Text>
            </div>
          </Grid.Col>
        </Grid.Row>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Typography, Divider } from 'maeng-design';

const { Paragraph, Text } = Typography;

const App = () => (
  <>
    <div className="example1">
      <Paragraph className="example">
        안녕하세요. Maeng Design 개발자 김명성입니다. 만나서 반갑습니다. 앞으로 많은 사용
        부탁드립니다.
      </Paragraph>
      <Divider />
      <Paragraph className="example">
        안녕하세요. Maeng Design 개발자 김명성입니다. 만나서 반갑습니다. 앞으로 많은 사용
        부탁드립니다.
      </Paragraph>
    </div>
    <div className="example2">
        <Text>Maeng</Text>
        <Divider type="vertical" />
        <Text>Design</Text>
        <Divider type="vertical" />
        <Text>Link</Text>
    </div>
  </>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const typeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
  span.description {
    line-height: 2;
  }
  div.col {
    display: flex;
    align-items: center;
    div.example {
      margin-top: 24px;
      margin-bottom: 24px;
      padding: 20px;
      border: 1px solid ${getColor(theme, 'gray5')};
      border-radius: 10px;
      text-align: center;
      width: fit-content;

      span.link-1 {
        color: ${getColor(theme, 'blue6')};
      }
      span.link-2 {
        color: ${getColor(theme, 'cyan6')};
      }
      span.link-3 {
        color: ${getColor(theme, 'magenta6')};
      }
    }
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Type;
