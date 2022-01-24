import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Col, { ColProps } from './Col';

export default {
  title: 'Design System/Grid/Col',
  component: Col,
} as Meta;

const Template: Story = (args) => <Col {...args} />;

export const DefaultCol = Template.bind({});
DefaultCol.args = {
  // props를 넣어주세요.
} as ColProps;
