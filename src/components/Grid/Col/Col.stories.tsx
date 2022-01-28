import { Meta, Story } from '@storybook/react/types-6-0';
import Col, { ColProps } from './Col';

export default {
  title: 'Design System/Grid/Col',
  component: Col,
} as Meta;

const Template: Story = (args) => (
  <Col {...args}>
    <div style={{ border: '1px solid black' }}>Hello</div>
  </Col>
);

export const DefaultCol = Template.bind({});
DefaultCol.args = {
  // props를 넣어주세요.
  xs: 24,
  md: 12,
  xl: 6,
} as ColProps;
