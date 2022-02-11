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
        Switch
      </Title>
      <Paragraph className="intro-content">
        <Text strong>Maeng Design</Text>의 Switch 컴포넌트는 두 상태 또는 On-Off 상태 간의 전환을
        나타내야 하는 경우에 사용합니다.
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
