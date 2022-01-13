import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Tag } from '../../../components';

const TagPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Tag">
      <Tag />
    </Layout>
  );
};

export default TagPage;
