/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { Button, getColor, Grid, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { Row, Col } = Grid;

const Type: React.FC = () => {
  return (
    <article className="type" css={typeStyle}>
      <Typography className="button-type">
        <Title level={4}>Type</Title>
        <Text className="description">
          default, primary, dashed, text, link, outline 6가지의 type이 존재합니다.
        </Text>
        <Grid className="example">
          <Row gutter={16}>
            <Col className="button-box">
              <Button type={'default'}>Default</Button>
            </Col>
            <Col className="button-box">
              <Button type={'primary'}>Primary</Button>
            </Col>
            <Col className="button-box">
              <Button type={'dashed'}>Dashed</Button>
            </Col>
            <Col className="button-box">
              <Button type={'text'}>Text</Button>
            </Col>
            <Col className="button-box">
              <Button type={'link'}>Link</Button>
            </Col>
            <Col className="button-box">
              <Button type={'outline'}>Outline</Button>
            </Col>
          </Row>
        </Grid>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Button } from 'maeng-design';
const App = () => (
  <div>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
    <Button type="outline">Outline</Button>
  </div>
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
  div.example {
    margin-top: 24px;
    margin-bottom: 24px;
    div.button-box {
      display: flex;
      justify-content: center;

      button {
        flex: 1;
      }
    }
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Type;
