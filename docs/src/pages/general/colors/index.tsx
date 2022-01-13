import { PageProps } from 'gatsby';
import React from 'react';
import { Colors, Layout } from '../../../components';

const ColorsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Colors">
      <Colors />
    </Layout>
  );
};

export default ColorsPage;
