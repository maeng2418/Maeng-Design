import { PageProps } from 'gatsby';
import React from 'react';
import { Divider, Layout } from '../../../components';

const DividerPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Divider">
      <Divider />
    </Layout>
  );
};

export default DividerPage;
