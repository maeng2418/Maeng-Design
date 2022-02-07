/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Input, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Affix: React.FC = () => {
  return (
    <article className="affix" css={affixStyle}>
      <Typography className="input-affix">
        <Title level={4}>Affix</Title>
        <Text className="description">
          텍스트 필드 타입 (text, email, number, password, tel)은 접두사 및 접미사를 설정할 수
          있습니다.
        </Text>
        <Paragraph className="example">
          <Input type="text" placeholder="Affix text" prefix="$" suffix="원" />
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Input } from 'maeng-design';

const App = () => (
  <div>
    <Input type="text" placeholder="Affix text" prefix="$" suffix="원" />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const affixStyle = css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  span.description {
    line-height: 2;
  }
  div.example {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Affix;
