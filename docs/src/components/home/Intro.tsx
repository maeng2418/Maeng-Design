/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const Intro: React.FC = () => {
  return (
    <article className="intro" css={introStyle}>
      <Title className="intro-title" level={1}>
        Maeng Design of React
      </Title>
      <Paragraph className="intro-content">
        디자인 시스템 <Text strong>Maeng Design</Text>은 React 프로젝트를 위한 사용자 인터페이스
        사양을 통일하고, 설계 차이와 구현에 필요한 불필요한 비용을 낮추며, 설계 및 프론트엔드 개발
        자원을 지원하기 위해 만들어졌습니다. 많은 이용 부탁드립니다. 🥰
      </Paragraph>
    </article>
  );
};

const introStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  h1.intro-title {
    font-weight: 500;
  }
  div.intro-content {
    line-height: 2;
    strong {
      color: ${getColor(theme, 'magenta6')};
    }
  }
`;

export default Intro;
