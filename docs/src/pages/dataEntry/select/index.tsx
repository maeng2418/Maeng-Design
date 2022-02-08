import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import {
  Intro,
  Multiple,
  OptionAPI,
  Select,
  SelectAPI,
  Size,
  Tag,
} from '../../../components/dataEntry/select';

const SelectPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Select">
      <Select />
      <Intro />
      <Size />
      <Tag />
      <Multiple />
      <SelectAPI />
      <OptionAPI />
    </Layout>
  );
};

export default SelectPage;
