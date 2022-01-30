import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { Colors, DarkMode, Guide, Intro } from '../../../components/general/colors';

const ColorsPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Colors">
      <Intro />
      <Colors />
      <Guide />
      <DarkMode />
    </Layout>
  );
};

export default ColorsPage;
