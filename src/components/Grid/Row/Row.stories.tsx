import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Col from '../Col';
import Row, { RowProps } from './Row';

export default {
  title: 'Design System/Grid/Row',
  component: Row,
} as Meta;

const Template: Story = (args) => (
  <Row {...args}>
    <Col>
      <div style={{ border: '1px solid black' }}>Hello 1</div>
    </Col>
    <Col>
      <div style={{ border: '1px solid black' }}>Hello 2</div>
    </Col>
  </Row>
);

export const DefaultRow = Template.bind({});
DefaultRow.args = {
  // props를 넣어주세요.
  gutter: 16,
} as RowProps;
