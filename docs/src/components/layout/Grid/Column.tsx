/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Grid, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { Row, Col } = Grid;

const Column: React.FC = () => {
  return (
    <article className="col" css={colStyle}>
      <Typography className="col-props">
        <Title level={4}>Col</Title>
        <Text className="description">
          xs, sm, md, lg, xl, xxl 6가지의 옵션을 통해 반응형 디자인을 구현할 수 있습니다.
        </Text>
        <Grid className="example">
          <Row gutter={[16, 16]}>
            <Col className="col-box" xs={24} md={12} xl={6}>
              <div className="content">Col</div>
            </Col>
            <Col className="col-box" xs={24} md={12} xl={6}>
              <div className="content">Col</div>
            </Col>
            <Col className="col-box" xs={24} md={12} xl={6}>
              <div className="content">Col</div>
            </Col>
            <Col className="col-box" xs={24} md={12} xl={6}>
              <div className="content">Col</div>
            </Col>
          </Row>
        </Grid>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Col } from 'maeng-design';

const App = () => (
  <Grid className="example">
    <Row gutter={[16, 16]}>
      <Col className="col-box" xs={24} md={12} xl={6}>
        <div className="content">Col</div>
      </Col>
      <Col className="col-box" xs={24} md={12} xl={6}>
        <div className="content">Col</div>
      </Col>
      <Col className="col-box" xs={24} md={12} xl={6}>
        <div className="content">Col</div>
      </Col>
      <Col className="col-box" xs={24} md={12} xl={6}>
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

const colStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  span.description {
    line-height: 2;
  }
  div.example {
    color: ${getColor(theme, 'gray1')};
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

export default Column;
