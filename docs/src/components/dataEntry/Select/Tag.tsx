/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Select, Typography } from 'maeng-design';
import React, { useMemo } from 'react';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const Tag: React.FC = () => {
  const options = useMemo(
    () => ['Maeng', 'Aesop', 'Backey', 'Jin', 'Rachel', 'Solar', 'Tabber'],
    [],
  );
  return (
    <article className="tag" css={tagStyle}>
      <Typography className="select-tag">
        <Title level={4}>TagRender</Title>
        <Text className="description">선택된 옵션을 태그 형태로 변환합니다.</Text>
        <Paragraph className="example">
          <Select placeholder="Select Member" tagRender>
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
    <Select placeholder="Select Member" tagRender>
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

const tagStyle = css`
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

export default Tag;
