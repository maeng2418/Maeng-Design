import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Select } from '../../../components';

const SelectPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Select">
      <Select />
    </Layout>
  );
};

export default SelectPage;
