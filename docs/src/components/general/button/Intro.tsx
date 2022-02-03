/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const Intro: React.FC = () => {
  return (
    <article className="intro" css={introStyle}>
      <Title className="intro-title" level={2} mark>
        Button
      </Title>
      <Paragraph className="intro-content">
        <Text strong>Maeng Design</Text>의 Button 컴포넌트는 6종류의 타입과 3종류의 모양 그리고
        3종류의 사이즈로 구성되어있습니다.
      </Paragraph>
    </article>
  );
};

const introStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  h2.intro-title mark {
    position: relative;
    background: none;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30%;
      background: ${getColor(theme, 'magenta2')};
      z-index: -1;
    }
  }
  div.intro-content {
    line-height: 2;
    strong {
      color: ${getColor(theme, 'magenta6')};
    }
  }
`;

export default Intro;
