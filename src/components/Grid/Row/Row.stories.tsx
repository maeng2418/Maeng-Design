import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../../styles';
import Col from '../Col';
import Row, { RowProps } from './Row';

export default {
  title: 'Design System/Grid/Row',
  component: Row,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Row {...args}>
      <Col>
        <div style={{ border: '1px solid black' }}>Hello 1</div>
      </Col>
      <Col>
        <div style={{ border: '1px solid black' }}>Hello 2</div>
      </Col>
    </Row>
  </ThemeProvider>
);

export const DefaultRow = Template.bind({});
DefaultRow.args = {
  // props를 넣어주세요.
  gutter: 16,
} as RowProps;
