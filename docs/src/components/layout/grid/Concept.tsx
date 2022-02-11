/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Grid, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title } = Typography;
const { Row, Col } = Grid;

const Concept: React.FC = () => {
  return (
    <article className="concept" css={conceptStyle}>
      <Title level={3}>Design Concept</Title>
      <Grid className="example">
        <Row className="row-box-1">
          <Col xs={24} className="col-box filled">
            100%
          </Col>
        </Row>
        <Row className="row-box-2">
          <Col xs={6} className="col-box filled">
            25%
          </Col>
          <Col xs={6} className="col-box">
            25%
          </Col>
          <Col xs={6} className="col-box filled">
            25%
          </Col>
          <Col xs={6} className="col-box">
            25%
          </Col>
        </Row>
        <Row className="row-box-3">
          <Col xs={8} className="col-box filled">
            33.33%
          </Col>
          <Col xs={8} className="col-box">
            33.33%
          </Col>
          <Col xs={8} className="col-box filled">
            33.33%
          </Col>
        </Row>
        <Row className="row-box-4">
          <Col xs={12} className="col-box filled">
            50%
          </Col>
          <Col xs={12} className="col-box">
            50%
          </Col>
        </Row>
        <Row className="row-box-5">
          <Col xs={16} className="col-box filled">
            66.66%
          </Col>
          <Col xs={8} className="col-box">
            33.33%
          </Col>
        </Row>
      </Grid>
    </article>
  );
};

const conceptStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  div.example {
    margin-top: 24px;
    margin-bottom: 24px;
    div[class*='row-box'] {
      display: flex;
      justify-content: center;
      background: ${(theme as MaengTheme).mode === ThemeMode.DARK
        ? getColor(theme, 'gray11')
        : getColor(theme, 'gray3')};

      margin-bottom: 16px;
      div.col-box {
        text-align: center;
        padding: 14px 16px;
        color: ${(theme as MaengTheme).mode === ThemeMode.DARK
          ? getColor(theme, 'gray8')
          : getColor(theme, 'gray6')};
      }
      div.col-box.filled {
        background: ${getColor(theme, 'magenta5')}B3;
        color: ${(theme as MaengTheme).mode === ThemeMode.DARK
          ? getColor(theme, 'gray13')
          : getColor(theme, 'gray1')};
      }
    }
  }
`;

export default Concept;
