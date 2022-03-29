import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Table, { TableProps } from './Table';

export default {
  title: 'Design System/Table',
  component: Table,
} as Meta;

const Template: Story = (args) => <Table {...args} columns={columns} data={data} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  // props를 넣어주세요.
  height: 300,
  groupOptions: {
    aggFunc: (acc: any, cur: any) => {
      if (acc === undefined) {
        const result = {} as any;
        for (const key in cur) {
          if (typeof cur[key] === 'number') {
            result[key] = cur[key];
          } else {
            result[key] = '-';
          }
        }
        return result;
      }
      for (const key in cur) {
        if (typeof cur[key] === 'number') acc[key] -= cur[key];
      }
      return acc;
    },
    groupHeader: '',
  },
} as TableProps;
const columns = [
  { title: '미디어', dataIndex: 'media', key: 'media', group: true },
  { title: '날짜', dataIndex: 'date', key: 'date', group: true },
  { title: '플레이스먼트', dataIndex: 'placement', key: 'placement' },
  {
    title: '요청 수',
    dataIndex: 'request',
    key: 'request',
    align: 'right',
    format: (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: '응답 수',
    dataIndex: 'response',
    key: 'response',
    align: 'right',
    format: (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: '노출 수',
    dataIndex: 'impression',
    key: 'impression',
    align: 'right',
    format: (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
] as const;

const data = [
  {
    media: '네이버 웹툰',
    placement: '대시보드 띠배너',
    date: '2022-03-01',
    request: 3000,
    response: 200,
    impression: 50000,
  },
  {
    media: '네이버 웹툰',
    placement: '동영상 배너',
    date: '2022-03-01',
    request: 1000,
    response: 300,
    impression: 10000,
  },
  {
    media: '네이버 웹툰',
    placement: '동영상 배너',
    date: '2022-03-02',
    request: 1000,
    response: 300,
    impression: 10000,
  },
  {
    media: '네이버 웹툰',
    placement: '동영상 배너',
    date: '2022-03-01',
    request: 3333,
    response: 322,
    impression: 11111,
  },
  {
    media: '네이버 웹툰',
    placement: '메인 팝업 배너',
    date: '2022-03-01',
    request: 2100,
    response: 140,
    impression: 4300,
  },
  {
    media: '네이트판',
    placement: '장소별 날씨 배너',
    date: '2022-03-01',
    request: 2400,
    response: 100,
    impression: 23500,
  },
  {
    media: '네이트 판',
    placement: '전면 비디오',
    date: '2022-03-01',
    request: 200,
    response: 100,
    impression: 2000,
  },
  {
    media: '카카오페이지',
    placement: '메인 팝업 띠배너',
    date: '2022-03-01',
    request: 8900,
    response: 2800,
    impression: 24500,
  },
  {
    media: '카카오페이지',
    placement: '대시보드 띠배너',
    date: '2022-03-01',
    request: 1000,
    response: 4200,
    impression: 24000,
  },
  {
    media: '카카오페이지',
    placement: '리워드 전면',
    date: '2022-03-01',
    request: 1300,
    response: 2200,
    impression: 1000,
  },
  {
    media: '네이버 웹툰',
    placement: '리워드 띠배너',
    date: '2022-03-01',
    request: 200,
    response: 104,
    impression: 25323,
  },
];
