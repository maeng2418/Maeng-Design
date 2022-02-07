/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Input, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { InputNumber: NumberInput } = Input;

const InputNumber: React.FC = () => {
  return (
    <article className="number" css={numberStyle}>
      <Typography className="input-number">
        <Title level={4}>InputNumber</Title>
        <Text className="description">
          숫자를 입력하기 위해 사용됩니다. 마우스 hover시 우측에 증가 및 감소 버튼이 나타납니다.
        </Text>
        <Paragraph className="example">
          <Input type="number" placeholder={'Enter the number'} />
          <NumberInput value={100000} />
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Input } from 'maeng-design';

const { InputNumber } = Input;

const App = () => (
  <div>
    <Input type="number" placeholder={'Enter the number'} />
    <InputNumber value={100000} />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const numberStyle = css`
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

export default InputNumber;
