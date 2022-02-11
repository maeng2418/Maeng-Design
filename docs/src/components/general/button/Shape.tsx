/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { Button, getColor, Grid, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { Row, Col } = Grid;

const Shape: React.FC = () => {
  return (
    <article className="shape" css={shapeStyle}>
      <Typography className="button-shape">
        <Title level={4}>Shape</Title>
        <Text className="description">default, circle, round 3가지의 shape가 존재합니다.</Text>
        <Grid className="example">
          <Row gutter={16}>
            <Col xs={2} className="button-box">
              <Button shape={'default'}>Default</Button>
            </Col>
            <Col xs={2} className="button-box">
              <Button shape={'circle'}>C</Button>
            </Col>
            <Col xs={2} className="button-box">
              <Button shape={'round'}>Round</Button>
            </Col>
          </Row>
        </Grid>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Button } from 'maeng-design';
const App = () => (
  <div>
    <Button shape="default">Default</Button>
    <Button shape="circle">C</Button>
    <Button shape="round">Round</Button>
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const shapeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
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
    }
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Shape;
