/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Input, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { Checkbox: CheckBox } = Input;

const Checkbox: React.FC = () => {
  return (
    <article className="checkbox" css={checkboxStyle}>
      <Typography className="input-checkbox">
        <Title level={4}>Checkbox</Title>
        <Text className="description">여러 옵션에서 여러 값을 선택하기 위해 사용됩니다.</Text>
        <Paragraph className="example">
          <Input type="checkbox">Checkbox 1</Input>
          <CheckBox checked>Checkbox 2</CheckBox>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Input } from 'maeng-design';

const { Checkbox } = Input;

const App = () => (
  <div>
    <Input type="checkbox">Checkbox 1</Input>
    <Checkbox checked>Checkbox 2</Checkbox>
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const checkboxStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
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

export default Checkbox;
