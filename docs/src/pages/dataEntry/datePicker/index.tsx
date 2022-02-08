import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import {
  DatePickerAPI,
  DateRangePicker,
  DateRnagePickerAPI,
  Intro,
  Size,
} from '../../../components/dataEntry/datePicker';

const DatePickerPage: React.FC<PageProps> = () => {
  return (
    <Layout title="DatePicker">
      <Intro />
      <Size />
      <DateRangePicker />
      <DatePickerAPI />
      <DateRnagePickerAPI />
    </Layout>
  );
};

export default DatePickerPage;
