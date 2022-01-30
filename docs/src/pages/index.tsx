/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Layout } from '../components/common';
import { Guide, Intro, Supplement } from '../components/home';

const IndexPage: React.FC = () => {
  return (
    <Layout title={'HOME'}>
      <Intro />
      <Guide />
      <Supplement />
    </Layout>
  );
};

export default IndexPage;
