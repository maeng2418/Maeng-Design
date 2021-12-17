import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import LineGraph, { LineGraphProps } from './Chart';

export default {
  title: 'Design System/Chart',
  component: LineGraph,
} as Meta;

const Template: Story = (args) => <LineGraph {...args} />;

export const DefaultChart = Template.bind({});
DefaultChart.args = {
  // props를 넣어주세요.
  children: 'Chart',
  width: 800,
  height: 500,
} as LineGraphProps;
