/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Select, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React, { useMemo } from 'react';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const Multiple: React.FC = () => {
  const options = useMemo(
    () => ['Maeng', 'Aesop', 'Backey', 'Jin', 'Rachel', 'Solar', 'Tabber'],
    [],
  );
  return (
    <article className="multiple" css={multipleStyle}>
      <Typography className="select-multiple">
        <Title level={4}>Multiple</Title>
        <Text className="description">하나 이상의 옵션들을 선택을 할 수 있습니다.</Text>
        <Paragraph className="example">
          <Select placeholder="Select Member" multiple defaultValue={['Maeng', 'Aesop']}>
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <Select
            placeholder="Select Member"
            multiple
            tagRender
            defaultValue={['Maeng', 'Aesop', 'Rachel', 'Solar']}
          >
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
    <Select placeholder="Select Member"
      multiple
      defaultValue={['maeng', 'aesop']}
    >
      <Option value="maeng">Maeng</Option>
      <Option value="aesop">Aesop</Option>
      <Option value="backey">Backey</Option>
      <Option value="rachel">Rachel</Option>
      <Option value="solar">Solar</Option>
      <Option value="tabber">Tabber</Option>
    </Select>
    <Select placeholder="Select Member"
      multiple
      tagRender
      defaultValue={['maeng', 'aesop', 'rachel', 'solar']}
    >
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

const multipleStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
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

    pre {
      max-height: 500px;
      overflow: auto;
    }
  }
`;

export default Multiple;
