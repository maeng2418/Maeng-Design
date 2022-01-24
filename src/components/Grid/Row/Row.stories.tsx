import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Row, { RowProps } from './Row';

export default {
  title: 'Design System/Grid/Row',
  component: Row,
} as Meta;

const Template: Story = (args) => <Row {...args} />;

export const DefaultRow = Template.bind({});
DefaultRow.args = {
  // props를 넣어주세요.
} as RowProps;
