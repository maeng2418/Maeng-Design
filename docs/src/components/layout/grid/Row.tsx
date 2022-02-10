/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Grid, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { Row: RowBox, Col } = Grid;

const Row: React.FC = () => {
  return (
    <article className="row" css={rowStyle}>
      <Typography className="row-gutter">
        <Title level={4}>Row</Title>
        <Text className="description">
          gutter을 이용하여 Column 사이의 수평 및 수직 간격을 조절할 수 있습니다.
        </Text>
        <Grid className="example">
          <RowBox gutter={[16, 16]}>
            <Col className="col-box" xs={6}>
              <div className="content">Col</div>
            </Col>
            <Col className="col-box" xs={6}>
              <div className="content">Col</div>
            </Col>
            <Col className="col-box" xs={6}>
              <div className="content">Col</div>
            </Col>
            <Col className="col-box" xs={6}>
              <div className="content">Col</div>
            </Col>
          </RowBox>
        </Grid>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Grid } from 'maeng-design';

const { Row, Col } = Grid;

const App = () => (
  <Grid className="example">
    <Row gutter={[16, 16]}>
      <Col xs={6}>
        <div className="content">Col</div>
      </Col>
      <Col xs={6}>
        <div className="content">Col</div>
      </Col>
      <Col xs={6}>
        <div className="content">Col</div>
      </Col>
      <Col xs={6}>
        <div className="content">Col</div>
      </Col>
    </Row>
  </Grid>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const rowStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
  span.description {
    line-height: 2;
  }
  div.example {
    color: ${(theme as MaengTheme).mode === ThemeMode.DARK
      ? getColor(theme, 'gray13')
      : getColor(theme, 'gray1')};

    margin-top: 24px;
    margin-bottom: 24px;

    div.col-box div.content {
      background: ${getColor(theme, 'magenta5')}B3;
      padding: 14px 16px;
      text-align: center;
    }
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Row;
