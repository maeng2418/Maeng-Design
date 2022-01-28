/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Guide, Intro, Layout, Supplement } from '../components';

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
