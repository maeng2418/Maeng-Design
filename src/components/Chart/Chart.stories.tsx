import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SampleData from '../../assets/sample/barChartSampleData.json';
import BarChart, { BarChartProps } from './BarChart';

interface Data {
  app_name: string;
  icon_url: string;
  package_name: string;
  user_count: string;
  biz_rate: string;
}

export default {
  title: 'Design System/Chart',
} as Meta;

const BarChartTemplate: Story = (args) => (
  <BarChart {...args} data={SampleData.data.slice(0, 5) as Data[]} dataKey={'user_count'} />
);

export const DefaultBarChart = BarChartTemplate.bind({});
DefaultBarChart.args = {
  // props를 넣어주세요.
  children: 'Chart',
  title: SampleData.data_name,
  width: 800,
  height: 500,
  padding: {
    top: 25,
    left: 70,
    right: 0,
    bottom: 25,
  },
  xAxis: {
    label: 'App',
    dataKey: 'app_name',
  },
  yAxis: {
    label: 'User',
  },
} as BarChartProps;
