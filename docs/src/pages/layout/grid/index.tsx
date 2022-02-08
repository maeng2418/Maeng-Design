import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import {
  ColAPI,
  Column,
  Concept,
  Grid,
  GridAPI,
  Intro,
  Row,
  RowAPI,
} from '../../../components/layout/grid';

const GridPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Grid">
      <Intro />
      <Concept />
      <Grid />
      <Row />
      <Column />
      <GridAPI />
      <RowAPI />
      <ColAPI />
    </Layout>
  );
};

export default GridPage;
