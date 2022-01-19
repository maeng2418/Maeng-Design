import { PageProps } from 'gatsby';
import React from 'react';
import { DatePicker, Layout } from '../../../components';

const DatePickerPage: React.FC<PageProps> = () => {
  return (
    <Layout title="DatePicker">
      <DatePicker />
    </Layout>
  );
};

export default DatePickerPage;
