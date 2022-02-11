/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Input, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { RadioGroup, Radio: RadioBtn } = Input;

const Radio: React.FC = () => {
  return (
    <article className="radio" css={radioStyle}>
      <Typography className="input-radio">
        <Title level={4}>Radio</Title>
        <Paragraph className="description">
          여러 옵션에서 하나의 값만 선택하는 경우 사용됩니다. <br />
          옵션을 묶기 위해서는 name을 동일하게 설정하거나 RadioGroup을 이용합니다.
        </Paragraph>
        <div className="example1">
          <RadioGroup value={3}>
            <RadioBtn value={1}>Radio 1</RadioBtn>
            <RadioBtn value={2}>Radio 2</RadioBtn>
            <RadioBtn value={3}>Radio 3</RadioBtn>
          </RadioGroup>
        </div>
        <div className="example2">
          <Input name="radio" type="radio" value={1}>
            Radio 1
          </Input>
          <Input name="radio" type="radio" value={2}>
            Radio 2
          </Input>
          <Input name="radio" type="radio" value={3}>
            Radio 3
          </Input>
        </div>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Input } from 'maeng-design';

const { RadioGroup, Radio } = Input;

const App = () => (
  <div>
    <RadioGroup value={3}>
      <Radio value={1} >Radio 1</Radio>
      <Radio value={2} >Radio 2</Radio>
      <Radio value={3}>Radio 3</Radio>
    </RadioGroup>

    <Input name="radio" type="radio" value={1}>Radio 1</Input>
    <Input name="radio" type="radio" value={2}>Radio 2</Input>
    <Input name="radio" type="radio" value={3}>Radio 3</Input>
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const radioStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
  div.description {
    line-height: 2;
  }
  div.example1,
  div.example2 {
    display: flex;
    row-gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Radio;
