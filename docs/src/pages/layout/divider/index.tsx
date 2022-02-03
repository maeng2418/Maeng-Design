import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { API, Dashed, Intro, Position, Type } from '../../../components/layout/divider';

const DividerPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Divider">
      <Intro />
      <Type />
      <Position />
      <Dashed />
      <API />
    </Layout>
  );
};

export default DividerPage;
