/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Input, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Type: React.FC = () => {
  return (
    <article className="type" css={typeStyle}>
      <Typography className="input-type">
        <Title level={4}>Type</Title>
        <Text className="description">
          text, email, checkbox, radio, file, number, password, tel 8가지 type이 존재합니다.
        </Text>
        <Paragraph className="example">
          <Input type="text" placeholder="Enter text" />
          <Input type="email" placeholder="Example@maeng.design" />
          <Input type="checkbox">Checkbox</Input>
          <Input type="radio">Radio</Input>
          <Input type="file">파일 첨부</Input>
          <Input type="number" placeholder="1234" />
          <Input type="password" placeholder="Enter password" />
          <Input type="tel" placeholder="02-123-4567" />
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Input } from 'maeng-design';

const App = () => (
  <div>
    <Input type="text" placeholder="Enter text" />
    <Input type="email" placeholder="Example@maeng.design" />
    <Input type="checkbox">Checkbox</Input>
    <Input type="radio">Radio</Input>
    <Input type="file">파일 첨부</Input>
    <Input type="password" placeholder="Enter password" />
    <Input type="tel" placeholder="02-123-4567" />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const typeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
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

export default Type;
