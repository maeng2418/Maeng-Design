/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const Supplement: React.FC = () => {
  return (
    <article className="supplement" css={supplementStyle}>
      <Typography className="storybook">
        <Title level={4}>📕 Storybook</Title>
        <Paragraph>
          <Text className="link">
            👉
            <a
              href="https://storybook-maeng-design.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Storybook Link
            </a>
          </Text>
        </Paragraph>
      </Typography>
      <Typography className="figma">
        <Title level={4}>🎨 Figma</Title>
        <Paragraph>
          <Text className="link">
            👉
            <a
              href="https://www.figma.com/file/HO5MJalfgtxxURpt66KCes/Maeng-Design"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma Link
            </a>
          </Text>
        </Paragraph>
      </Typography>
    </article>
  );
};

const supplementStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  div.storybook,
  div.figma {
    margin-top: 32px;

    .link {
      font-weight: bold;
      margin-left: 16px;
      color: ${getColor(theme, 'blue6')};
    }
  }
`;

export default Supplement;
