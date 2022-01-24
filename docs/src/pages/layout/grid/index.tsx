import { PageProps } from 'gatsby';
import React from 'react';
import { Grid, Layout } from '../../../components';

const GridPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Grid">
      <Grid />
    </Layout>
  );
};

export default GridPage;
