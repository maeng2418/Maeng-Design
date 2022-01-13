import { PageProps } from 'gatsby';
import React from 'react';
import { Input, Layout } from '../../../components';

const InputPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Input">
      <Input />
    </Layout>
  );
};

export default InputPage;
