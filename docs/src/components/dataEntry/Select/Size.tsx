/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Select, Typography } from 'maeng-design';
import React, { useMemo } from 'react';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const Size: React.FC = () => {
  const options = useMemo(
    () => ['Maeng', 'Aesop', 'Backey', 'Jin', 'Rachel', 'Solar', 'Tabber'],
    [],
  );
  return (
    <article className="size" css={sizeStyle}>
      <Typography className="select-size">
        <Title level={4}>Size</Title>
        <Text className="description">small, medium, large 3가지의 size가 존재합니다.</Text>
        <Paragraph className="example">
          <Select placeholder="Small select" size="small">
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <Select placeholder="Medium select" size="medium">
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <Select placeholder="Large select" size="large">
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Select } from 'maeng-design';

const { Option } = Select;

const App = () => (
  <div>
    <Select placeholder="Select Member" size="medium">
      <Option value="maeng">Maeng</Option>
      <Option value="aesop">Aesop</Option>
      <Option value="backey">Backey</Option>
      <Option value="rachel">Rachel</Option>
      <Option value="solar">Solar</Option>
      <Option value="tabber">Tabber</Option>
    </Select>
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const sizeStyle = css`
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

export default Size;
