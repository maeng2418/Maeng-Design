import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import Grid from '.';
import { ThemeMode, ThemeProvider } from '../../styles';
import { GridProps } from './Grid';

const { Row, Col } = Grid;

export default {
  title: 'Design System/Grid',
  component: Grid,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Grid {...args}>
      <Row gutter={16}>
        <Col xs={24}>
          <div style={{ border: '1px solid black' }}>Hello1</div>
        </Col>
        <Col md={12}>
          <div style={{ border: '1px solid black' }}>Hello2</div>
        </Col>
        <Col xl={6}>
          <div style={{ border: '1px solid black' }}>Hello3</div>
        </Col>
      </Row>
    </Grid>
  </ThemeProvider>
);

export const DefaultGrid = Template.bind({});

DefaultGrid.args = {
  // props를 넣어주세요.
  component: 'section',
} as GridProps;
