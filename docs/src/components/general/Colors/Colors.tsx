/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme, useTheme } from '@emotion/react';
import {
  DarkColorType,
  getColor,
  Grid,
  lightColor,
  LightColorType,
  ThemeMode,
  Typography,
  useToast,
} from 'maeng-design';
import React, { useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const { Title } = Typography;
const { Row, Col } = Grid;

const Colors: React.FC = () => {
  const toast = useToast();
  const theme = useTheme();

  const onCopy = useCallback(
    (text: string, result: boolean) => {
      result && toast.success(`${text}가 복사되었습니다.`);
    },
    [toast],
  );

  return (
    <React.Fragment>
      {[
        'red',
        'volcano',
        'orange',
        'gold',
        'yellow',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',
        'magenta',
      ].map((v) => (
        <article key={v} className="color-box" css={colorBoxStyle}>
          <Title className="color-name" level={3}>
            {v}
          </Title>
          <Grid>
            <Row>
              {Array(10)
                .fill(v)
                .map((color, i) => {
                  const colorName = `${color}${i + 1}`;
                  return (
                    <Col key={colorName} xs={2} className={colorName}>
                      <CopyToClipboard
                        text={getColor(theme, colorName as LightColorType | DarkColorType)}
                        onCopy={onCopy}
                      >
                        <div className="color-content">
                          <span className="color">{colorName}</span>
                          <span className="color-code">
                            {getColor(theme, colorName as LightColorType | DarkColorType)}
                          </span>
                        </div>
                      </CopyToClipboard>
                    </Col>
                  );
                })}
            </Row>
          </Grid>
        </article>
      ))}
      <article className="color-box" css={colorBoxStyle}>
        <Title className="color-name" level={3}>
          gray
        </Title>
        <Grid>
          <Row>
            {Array(13)
              .fill('gray')
              .map((color, i) => {
                const colorName = `${color}${i + 1}`;
                return (
                  <Col key={colorName} xs={1.6} className={colorName}>
                    <CopyToClipboard
                      text={getColor(theme, colorName as LightColorType | DarkColorType)}
                      onCopy={onCopy}
                    >
                      <div className="color-content">
                        <span className="color">{colorName}</span>
                        <span className="color-code">
                          {getColor(theme, colorName as LightColorType | DarkColorType)}
                        </span>
                      </div>
                    </CopyToClipboard>
                  </Col>
                );
              })}
          </Row>
        </Grid>
      </article>
    </React.Fragment>
  );
};

const colorBoxStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  h3.color-name {
    font-weight: 500;
    text-transform: capitalize;
  }
  ${Object.keys(lightColor).map(
    (v) => `div.${v} {
      aspect-ratio: 1 / 1;

      div.color-content {
        color: ${+v.replace(/[^0-9]/g, '') > 5 ? '#fff' : '#000'};
        font-size: 14px;
        cursor: pointer; 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: ${getColor(theme, v as LightColorType | DarkColorType)};

        span.color-code {
          display: none;
        }
        
        &:hover {
          background: ${getColor(theme, v as LightColorType | DarkColorType)}80;

          span.color {
            display: none;
          }
          span.color-code {
            display: inline;
            font-weight: 500;
          }
        }
      }
      
    }`,
  )}
`;

export default Colors;
