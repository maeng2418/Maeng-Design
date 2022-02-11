/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { DatePicker, getColor, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;
const { DateRangePicker } = DatePicker;

const Size: React.FC = () => {
  return (
    <article className="dateRangePikcer" css={sizeStyle}>
      <Typography className="datePicker-dateRangePikcer">
        <Title level={4}>DateRangePicker</Title>
        <Text className="description">시작일과 종료일을 선택할 수 있습니다.</Text>
        <Paragraph className="example">
          <DateRangePicker />
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { DatePicker } from 'maeng-design';

const { DateRangePicker } = DatePicker;

const App = () => (
  <div>
    <DateRangePicker />
  </div>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const sizeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
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

export default Size;
