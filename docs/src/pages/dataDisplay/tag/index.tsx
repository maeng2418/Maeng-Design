import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { API, Color, Intro, Size } from '../../../components/dataDisplay/tag';

const TagPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Tag">
      <Intro />
      <Size />
      <Color />
      <API />
    </Layout>
  );
};

export default TagPage;
