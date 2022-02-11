/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const Intro: React.FC = () => {
  return (
    <article className="intro" css={introStyle}>
      <Title className="intro-title" level={2} mark>
        Input
      </Title>
      <Paragraph className="intro-content">
        <Text strong>Maeng Design</Text>의 Input 컴포넌트는 키보드 또는 마우스를 이용하여 사용자
        입력을 받아 데이터를 제공하거나 변경할 수 있습니다.
      </Paragraph>
    </article>
  );
};

const introStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  h2.intro-title mark {
    color: inherit;
    position: relative;
    background: none;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30%;
      background: ${(theme as MaengTheme).mode === ThemeMode.DARK
        ? getColor(theme, 'magenta5')
        : getColor(theme, 'magenta2')};
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
