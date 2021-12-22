import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SampleData from '../../assets/sample/barChartSampleData.json';
import BarChart, { BarChartProps } from './BarChart';

export default {
  title: 'Design System/Chart',
} as Meta;

const BarChartTemplate: Story = (args) => (
  <BarChart {...args} data={SampleData.data} dataKey={'user_count'} />
);

export const DefaultBarChart = BarChartTemplate.bind({});
DefaultBarChart.args = {
  // props를 넣어주세요.
  children: 'Chart',
  title: SampleData.data_name,
  xAxis: {
    label: 'App',
    dataKey: 'app_name',
  },
  yAxis: {
    label: 'User',
  },
  width: '100%',
  height: '100%',
} as BarChartProps;
